import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParentLayoutComponent } from '../layouts/parent-layout';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';
import { Kid } from '../models/interfaces';
import { AVATARS, getLevelForXp, getAvatarColor } from '../constants/app-data';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-parent-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, ParentLayoutComponent],
  template: `
    <app-parent-layout>
      <div class="animate-fade-in">
        <!-- Page Header -->
        <div class="page-header-block">
          <div>
            <h1 class="page-title" data-testid="dashboard-heading">Dashboard</h1>
            <p class="page-subtitle">Overview of your children's finances</p>
          </div>
          <button (click)="showAddKid.set(true)" class="btn-primary" data-testid="add-kid-btn">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/></svg>
            Add Child
          </button>
        </div>

        <!-- Empty State -->
        @if (auth.kids().length === 0 && !loading()) {
          <div class="empty-state">
            <div class="empty-icon">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke-width="2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke-width="2"/></svg>
            </div>
            <h2 class="page-title mb-2" style="font-size:1.25rem">Add Your First Child</h2>
            <p class="page-subtitle mb-6 max-w-md">Get started by adding a child profile. They'll get their own space to earn coins, save, and learn about money.</p>
            <button (click)="showAddKid.set(true)" class="btn-teal px-8">Get Started</button>
          </div>
        }

        @if (auth.kids().length > 0) {
          <!-- Kid Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            @for (kid of auth.kids(); track kid.id) {
              <div class="card p-5 cursor-pointer transition-all hover:-translate-y-1"
                   (click)="auth.selectedKid.set(kid)"
                   [style.border-color]="auth.selectedKid()?.id === kid.id ? getAvatarColor(kid.avatar) : ''"
                   [style.box-shadow]="auth.selectedKid()?.id === kid.id ? '0 0 0 2px ' + getAvatarColor(kid.avatar) + '35, var(--shadow-md)' : ''"
                   [attr.data-testid]="'kid-card-' + kid.name">
                <!-- Kid Header -->
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-sm"
                       [style.background]="'linear-gradient(135deg,' + getAvatarColor(kid.avatar) + ',' + getAvatarColor(kid.avatar) + 'cc)'">
                    {{ kid.name[0] }}
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3 class="font-bold font-heading truncate" style="font-size:1rem">{{ kid.name }}</h3>
                    <p class="text-xs font-medium" style="color:var(--fg-muted)">Lv.{{ kid.level }} &middot; {{ getLevelName(kid.xp) }}</p>
                  </div>
                  @if (auth.selectedKid()?.id === kid.id) {
                    <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm" [style.background-color]="getAvatarColor(kid.avatar)">
                      <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke-width="2.5" stroke-linecap="round"/></svg>
                    </div>
                  }
                </div>
                <!-- XP Progress -->
                <div class="h-1.5 rounded-full mb-3" style="background-color:var(--muted)">
                  <div class="h-full rounded-full transition-all duration-500" [style.width]="((kid.xp % 100) / 100 * 100) + '%'" [style.background-color]="getAvatarColor(kid.avatar)"></div>
                </div>
                <!-- Stats Row -->
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style="color:var(--fg-muted)">Balance</p>
                    <p class="text-lg font-bold font-heading leading-tight">{{ wallets()[kid.id]?.balance || 0 }} <span class="text-xs font-medium" style="color:var(--fg-muted)">coins</span></p>
                  </div>
                  <div class="text-right">
                    <p class="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style="color:var(--fg-muted)">Credit</p>
                    <p class="text-lg font-bold font-heading leading-tight"
                       [style.color]="kid.credit_score >= 700 ? '#10B981' : kid.credit_score >= 400 ? '#F59E0B' : '#EF4444'">
                      {{ kid.credit_score }}
                    </p>
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- Selected Kid Stats -->
          @if (selectedDashboard(); as dash) {
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              <div class="stat-card">
                <div class="stat-icon" style="background-color:rgba(13,148,136,0.12)">
                  <svg class="w-5 h-5" style="color:#0D9488" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/><path d="M2 10h20" stroke-width="2"/></svg>
                </div>
                <p class="stat-label">Balance</p>
                <p class="stat-value">{{ dash.wallet.balance }}</p>
              </div>
              <div class="stat-card">
                <div class="stat-icon" style="background-color:rgba(16,185,129,0.12)">
                  <svg class="w-5 h-5" style="color:#10B981" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
                <p class="stat-label">Total Earned</p>
                <p class="stat-value" style="color:#10B981">{{ dash.wallet.total_earned }}</p>
              </div>
              <div class="stat-card">
                <div class="stat-icon" style="background-color:rgba(59,130,246,0.12)">
                  <svg class="w-5 h-5" style="color:#3B82F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke-width="2"/><polyline points="17 21 17 13 7 13 7 21" stroke-width="2"/></svg>
                </div>
                <p class="stat-label">Total Saved</p>
                <p class="stat-value" style="color:#3B82F6">{{ dash.wallet.total_saved }}</p>
              </div>
              <div class="stat-card">
                <div class="stat-icon" style="background-color:rgba(245,158,11,0.12)">
                  <svg class="w-5 h-5" style="color:#F59E0B" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><circle cx="12" cy="12" r="6" stroke-width="2"/><circle cx="12" cy="12" r="2" stroke-width="2"/></svg>
                </div>
                <p class="stat-label">Credit Score</p>
                <p class="stat-value"
                   [style.color]="(dash.kid?.credit_score || 500) >= 700 ? '#10B981' : (dash.kid?.credit_score || 500) >= 400 ? '#F59E0B' : '#EF4444'">
                  {{ dash.kid?.credit_score || 500 }}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <!-- Pending Tasks -->
              @if (dash.active_tasks.length > 0) {
                <div class="card p-5">
                  <div class="section-header">
                    <h3 class="section-title">Pending Tasks</h3>
                    <span class="badge badge-warning">{{ dash.active_tasks.length }}</span>
                  </div>
                  <div class="space-y-2">
                    @for (task of dash.active_tasks.slice(0, 5); track task.id) {
                      <div class="list-row">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style="background-color:rgba(245,158,11,0.12)">
                          <svg class="w-4 h-4" style="color:#F59E0B" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round"/></svg>
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="text-sm font-semibold truncate">{{ task.title }}</p>
                          <p class="text-[11px]" style="color:var(--fg-muted)">{{ task.reward_amount }} coins reward</p>
                        </div>
                        @if (task.status === 'completed') {
                          <div class="flex gap-1.5 flex-shrink-0">
                            <button (click)="approveTask(task.id)" class="text-xs px-3 py-1.5 rounded-xl bg-emerald-500 text-white font-semibold" [attr.data-testid]="'approve-task-' + task.id">Approve</button>
                            <button (click)="rejectTask(task.id)" class="text-xs px-3 py-1.5 rounded-xl text-white font-semibold" style="background-color:#EF444480" [attr.data-testid]="'reject-task-' + task.id">Reject</button>
                          </div>
                        } @else {
                          <span class="badge badge-warning flex-shrink-0">{{ task.status }}</span>
                        }
                      </div>
                    }
                  </div>
                </div>
              }

              <!-- Recent Transactions -->
              @if (dash.recent_transactions.length > 0) {
                <div class="card p-5">
                  <div class="section-header">
                    <h3 class="section-title">Recent Transactions</h3>
                  </div>
                  <div class="space-y-2">
                    @for (txn of dash.recent_transactions.slice(0, 6); track txn.id) {
                      <div class="flex items-center gap-3 py-1">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                             [style.background-color]="txn.type === 'credit' ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.10)'">
                          <svg class="w-4 h-4" [style.color]="txn.type === 'credit' ? '#10B981' : '#EF4444'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            @if (txn.type === 'credit') {
                              <path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/>
                            } @else {
                              <path d="M19 12H5M12 5l-7 7 7 7" stroke-width="2" stroke-linecap="round"/>
                            }
                          </svg>
                        </div>
                        <p class="text-sm flex-1 truncate font-medium">{{ txn.description }}</p>
                        <span class="text-sm font-bold flex-shrink-0"
                              [style.color]="txn.type === 'credit' ? '#10B981' : '#EF4444'">
                          {{ txn.type === 'credit' ? '+' : 'âˆ’' }}{{ txn.amount }}
                        </span>
                      </div>
                    }
                  </div>
                </div>
              }
            </div>
          }
        }

        <div class="card p-5 mb-6 max-w-2xl">
          <h3 class="section-title mb-1">Share your experience</h3>
          <p class="text-sm mb-4" style="color:var(--fg-muted)">Your review helps other families discover Minyfin.</p>

          @if (reviewSubmitted()) {
            <div class="rounded-xl p-4" style="background:rgba(13,148,136,0.08)">
              <p class="text-sm font-semibold" style="color:#0D9488">Thank you for your review.</p>
              <p class="text-xs" style="color:var(--fg-muted)">Your review is submitted and will be visible after admin approval.</p>
            </div>
          } @else {
            <form (ngSubmit)="submitParentReview()" class="space-y-3">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="label">Your name *</label>
                  <input class="input" placeholder="e.g. Priya Sharma" [(ngModel)]="parentReview.name" name="parentReviewName" required>
                </div>
                <div>
                  <label class="label">Role *</label>
                  <input class="input" placeholder="e.g. Parent of 2" [(ngModel)]="parentReview.role" name="parentReviewRole" required>
                </div>
              </div>
              <div>
                <label class="label">Your review *</label>
                <textarea class="input" rows="4" placeholder="Tell us how Minyfin has helped your family…" [(ngModel)]="parentReview.text" name="parentReviewText" required></textarea>
              </div>
              @if (reviewError()) {
                <p class="text-xs" style="color:#EF4444">{{ reviewError() }}</p>
              }
              <button type="submit" class="btn-teal" [disabled]="reviewSubmitting()">{{ reviewSubmitting() ? 'Submitting...' : 'Submit Review' }}</button>
            </form>
          }
        </div>

        <!-- Add Kid Modal -->
        @if (showAddKid()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4" (click)="showAddKid.set(false)">
            <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div class="card p-6 w-full max-w-md relative z-10 max-h-[90vh] overflow-y-auto animate-scale-in" (click)="$event.stopPropagation()">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h2 class="section-title text-lg" data-testid="add-kid-modal-title">Add Child</h2>
                  <p class="text-xs mt-0.5" style="color:var(--fg-muted)">Set up your child's account</p>
                </div>
                <button (click)="showAddKid.set(false)" class="p-2 rounded-xl transition-colors hover:bg-muted" style="color:var(--fg-muted)">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round"/></svg>
                </button>
              </div>
              <form (ngSubmit)="handleAddKid()" class="space-y-4">
                <div>
                  <label class="label">Name</label>
                  <input class="input" placeholder="Child's name" [(ngModel)]="kidForm.name" name="name" data-testid="kid-name-input">
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="label">Age</label>
                    <input class="input" type="number" min="3" max="18" placeholder="Age" [(ngModel)]="kidForm.age" name="age" data-testid="kid-age-input">
                  </div>
                  <div>
                    <label class="label">Grade</label>
                    <input class="input" placeholder="Optional" [(ngModel)]="kidForm.grade" name="grade" data-testid="kid-grade-input">
                  </div>
                </div>
                <div>
                  <label class="label">Avatar</label>
                  <div class="grid grid-cols-4 gap-2">
                    @for (av of avatars; track av.id) {
                      <button type="button" (click)="kidForm.avatar = av.id"
                              [class.ring-2]="kidForm.avatar === av.id"
                              [class.ring-offset-1]="kidForm.avatar === av.id"
                              [class.scale-105]="kidForm.avatar === av.id"
                              class="aspect-square rounded-xl flex items-center justify-center transition-all"
                              [style.background-color]="kidForm.avatar === av.id ? av.color + '20' : 'var(--muted)'"
                              [attr.data-testid]="'avatar-' + av.id">
                        <span class="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm" [style.background-color]="av.color">{{ av.id[0].toUpperCase() }}</span>
                      </button>
                    }
                  </div>
                </div>
                <div>
                  <label class="label">Theme</label>
                  <div class="grid grid-cols-3 gap-2">
                    @for (th of themeOptions; track th.value) {
                      <button type="button" (click)="kidForm.ui_theme = th.value"
                              class="rounded-xl p-3 text-center transition-all border-2"
                              [style.border-color]="kidForm.ui_theme === th.value ? th.color : 'transparent'"
                              [style.background-color]="kidForm.ui_theme === th.value ? th.color + '12' : 'var(--muted)'"
                              [attr.data-testid]="'theme-' + th.value">
                        <div class="w-5 h-5 rounded-full mx-auto mb-1" [style.background-color]="th.color"></div>
                        <p class="text-[11px] font-semibold">{{ th.label }}</p>
                      </button>
                    }
                  </div>
                </div>
                <div>
                  <label class="label">Kid Login PIN</label>
                  <input class="input text-center tracking-[0.3em]" type="text" maxlength="6" placeholder="4â€“6 digit PIN" [(ngModel)]="kidForm.pin" name="pin" data-testid="kid-pin-input">
                  <p class="text-[11px] mt-1" style="color:var(--fg-muted)">Your child uses this PIN to log in</p>
                </div>
                <div>
                  <label class="label">Starting Balance (coins)</label>
                  <input class="input" type="number" min="0" placeholder="0" [(ngModel)]="kidForm.starting_balance" name="starting_balance" data-testid="kid-balance-input">
                </div>
                <button type="submit" class="btn-teal w-full py-3 mt-2" [disabled]="addingKid()" data-testid="submit-add-kid-btn">
                  {{ addingKid() ? 'Adding...' : 'Add Child' }}
                </button>
              </form>
            </div>
          </div>
        }
      </div>
    </app-parent-layout>
  `
})
export class ParentDashboardPage implements OnInit {
  auth = inject(AuthService);
  private fs = inject(FirestoreService);
  private seo = inject(SeoService);

  loading = signal(false);
  showAddKid = signal(false);
  addingKid = signal(false);
  wallets = signal<Record<string, any>>({});
  selectedDashboard = signal<any>(null);
  reviewSubmitting = signal(false);
  reviewSubmitted = signal(false);
  reviewError = signal('');
  avatars = AVATARS;
  getAvatarColor = getAvatarColor;

  themeOptions = [
    { value: 'boy', label: 'Adventure', color: '#0EA5E9', desc: 'Blue & Teal' },
    { value: 'girl', label: 'Fantasy', color: '#A78BFA', desc: 'Purple & Pink' },
    { value: 'neutral', label: 'Nature', color: '#34D399', desc: 'Green & Blue' },
  ];

  kidForm = { name: '', age: 8, grade: '', avatar: 'panda', ui_theme: 'neutral', pin: '', starting_balance: 0 };
  parentReview = { name: '', role: '', text: '' };

  async ngOnInit() {
    this.seo.setPage({ title: 'Parent Dashboard', noIndex: true });
    this.loading.set(true);
    await this.loadData();
    this.loading.set(false);
  }

  async loadData() {
    const kids = this.auth.kids();
    const w: Record<string, any> = {};
    for (const kid of kids) {
      w[kid.id] = await this.fs.getWallet(kid.id);
    }
    this.wallets.set(w);
    const selected = this.auth.selectedKid();
    if (selected) {
      this.selectedDashboard.set(await this.fs.getKidDashboard(selected.id));
    }
  }

  getLevelName(xp: number) {
    return getLevelForXp(xp).name;
  }

  async handleAddKid() {
    if (!this.kidForm.name || !this.kidForm.age) return;
    this.addingKid.set(true);
    try {
      const user = this.auth.firebaseUser();
      if (!user) return;
      await this.fs.addKid(user.uid, {
        name: this.kidForm.name, age: this.kidForm.age, grade: this.kidForm.grade,
        avatar: this.kidForm.avatar, ui_theme: this.kidForm.ui_theme, pin: this.kidForm.pin,
        starting_balance: this.kidForm.starting_balance
      } as any);
      await this.auth.loadKids();
      await this.loadData();
      this.showAddKid.set(false);
      this.kidForm = { name: '', age: 8, grade: '', avatar: 'panda', ui_theme: 'neutral', pin: '', starting_balance: 0 };
    } catch (err: any) {
      console.error('Failed to add kid:', err);
    } finally { this.addingKid.set(false); }
  }

  async approveTask(taskId: string) {
    await this.fs.approveTask(taskId);
    await this.loadData();
  }

  async rejectTask(taskId: string) {
    await this.fs.rejectTask(taskId);
    await this.loadData();
  }

  async submitParentReview() {
    if (!this.parentReview.name.trim() || !this.parentReview.role.trim() || !this.parentReview.text.trim()) return;
    this.reviewSubmitting.set(true);
    this.reviewError.set('');
    try {
      await this.fs.submitUserReview({
        name: this.parentReview.name.trim(),
        role: this.parentReview.role.trim(),
        text: this.parentReview.text.trim(),
      });
      this.parentReview = { name: '', role: '', text: '' };
      this.reviewSubmitted.set(true);
    } catch {
      this.reviewError.set('Failed to submit review. Please try again.');
    } finally {
      this.reviewSubmitting.set(false);
    }
  }
}
