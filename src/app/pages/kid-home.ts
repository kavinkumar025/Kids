import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { KidLayoutComponent } from '../layouts/kid-layout';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';
import { KID_THEMES, getLevelForXp, getNextLevel } from '../constants/app-data';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-kid-home',
  standalone: true,
  imports: [CommonModule, RouterLink, KidLayoutComponent],
  template: `
    <app-kid-layout>
      <div class="animate-fade-in">
        @if (dashboard(); as d) {
          <!-- Hero: Level + Wallet -->
          <div class="rounded-2xl p-5 mb-5 relative overflow-hidden"
               [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'">
            <div class="absolute inset-0 opacity-10" style="background-image:radial-gradient(circle at 80% 20%, white 0%, transparent 60%)"></div>
            <div class="relative flex items-start justify-between">
              <div>
                <p class="text-white/70 text-xs font-medium mb-0.5">Level {{ d.level_info.level }}</p>
                <h2 class="text-2xl font-bold text-white font-heading leading-tight">{{ d.level_info.name }}</h2>
                @if (d.next_level) {
                  <p class="text-white/60 text-[11px] mt-1">{{ d.kid?.xp || 0 }} / {{ d.next_level.xp_required }} XP</p>
                }
              </div>
              <div class="text-right">
                <p class="text-4xl font-bold text-white font-heading leading-tight">{{ d.wallet?.balance || 0 }}</p>
                <p class="text-white/60 text-xs font-medium">coins</p>
              </div>
            </div>
            @if (d.next_level) {
              <div class="mt-4 h-2 rounded-full" style="background-color:rgba(255,255,255,0.25)">
                <div class="h-2 rounded-full transition-all duration-700" [style.width.%]="xpProgress()" style="background-color:rgba(255,255,255,0.85)"></div>
              </div>
              <p class="text-white/50 text-[10px] mt-1">{{ 100 - xpProgress() | number:'1.0-0' }}% to Level {{ d.next_level.level }}</p>
            }
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            <div class="stat-card">
              <div class="stat-icon" [style.background-color]="theme().primary + '18'">
                <svg class="w-5 h-5" [style.color]="theme().primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-width="2"/></svg>
              </div>
              <p class="stat-label">Tasks Done</p>
              <p class="stat-value" [style.color]="theme().primary">{{ d.stats.total_tasks_completed }}</p>
            </div>
            <div class="stat-card">
              <div class="stat-icon" [style.background-color]="theme().secondary + '18'">
                <svg class="w-5 h-5" [style.color]="theme().secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/></svg>
              </div>
              <p class="stat-label">Total Earned</p>
              <p class="stat-value" [style.color]="theme().secondary">{{ d.wallet?.total_earned || 0 }}</p>
            </div>
            <div class="stat-card">
              <div class="stat-icon" style="background-color:rgba(59,130,246,0.12)">
                <svg class="w-5 h-5" style="color:#3B82F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke-width="2"/><polyline points="17 21 17 13 7 13 7 21" stroke-width="2"/></svg>
              </div>
              <p class="stat-label">Total Saved</p>
              <p class="stat-value" style="color:#3B82F6">{{ d.wallet?.total_saved || 0 }}</p>
            </div>
            <div class="stat-card">
              <div class="stat-icon" [style.background-color]="creditColor() + '20'">
                <svg class="w-5 h-5" [style.color]="creditColor()" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><circle cx="12" cy="12" r="6" stroke-width="2"/><circle cx="12" cy="12" r="2" stroke-width="2"/></svg>
              </div>
              <p class="stat-label">Credit Score</p>
              <p class="stat-value" [style.color]="creditColor()">{{ d.kid?.credit_score || 500 }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- Active Tasks -->
            @if (d.active_tasks.length > 0) {
              <div class="card p-5">
                <div class="section-header">
                  <h3 class="section-title">My Tasks</h3>
                  <a routerLink="/kid/tasks" class="text-xs font-semibold" [style.color]="theme().primary">View All →</a>
                </div>
                <div class="space-y-2">
                  @for (task of d.active_tasks.slice(0, 3); track task.id) {
                    <div class="flex items-center gap-3 p-3 rounded-xl" style="background-color:var(--muted)">
                      <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" [style.background-color]="theme().primary + '18'">
                        <svg class="w-3.5 h-3.5" [style.color]="theme().primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round"/></svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium truncate">{{ task.title }}</p>
                        <p class="text-[11px]" [style.color]="theme().primary">+{{ task.reward_amount }} coins</p>
                      </div>
                      <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                            [style.background-color]="theme().primary + '15'" [style.color]="theme().primary">
                        {{ task.status }}
                      </span>
                    </div>
                  }
                </div>
              </div>
            }

            <!-- Recent Activity -->
            @if (d.recent_transactions.length > 0) {
              <div class="card p-5">
                <div class="section-header">
                  <h3 class="section-title">Recent Activity</h3>
                  <a routerLink="/kid/wallet" class="text-xs font-semibold" [style.color]="theme().primary">View All →</a>
                </div>
                <div class="space-y-2">
                  @for (txn of d.recent_transactions.slice(0, 5); track txn.id) {
                    <div class="flex items-center gap-3">
                      <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                           [style.background-color]="txn.type === 'credit' ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.10)'">
                        <svg class="w-3.5 h-3.5" [style.color]="txn.type === 'credit' ? '#10B981' : '#EF4444'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          @if (txn.type === 'credit') {
                            <path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/>
                          } @else {
                            <path d="M5 12h14" stroke-width="2" stroke-linecap="round"/>
                          }
                        </svg>
                      </div>
                      <p class="text-xs flex-1 truncate">{{ txn.description }}</p>
                      <span class="text-xs font-semibold flex-shrink-0"
                            [style.color]="txn.type === 'credit' ? '#10B981' : '#EF4444'">
                        {{ txn.type === 'credit' ? '+' : '-' }}{{ txn.amount }}
                      </span>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        } @else {
          <div class="flex items-center justify-center h-64">
            <div class="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" [style.border-color]="theme().primary"></div>
          </div>
        }
      </div>
    </app-kid-layout>
  `
})
export class KidHomePage implements OnInit {
  auth = inject(AuthService);
  private fs = inject(FirestoreService);
  private seo = inject(SeoService);
  dashboard = signal<any>(null);

  theme = computed(() => {
    const t = this.auth.kidSession()?.kid?.ui_theme || 'neutral';
    return KID_THEMES[t] || KID_THEMES['neutral'];
  });

  xpProgress = computed(() => {
    const d = this.dashboard();
    if (!d?.next_level || !d?.kid) return 100;
    const currentLevelXp = d.level_info.xp_required;
    const nextLevelXp = d.next_level.xp_required;
    return ((d.kid.xp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100;
  });

  creditColor = computed(() => {
    const score = this.dashboard()?.kid?.credit_score || 500;
    return score >= 700 ? '#34D399' : score >= 400 ? '#FCD34D' : '#F87171';
  });

  async ngOnInit() {
    const kid = this.auth.kidSession()?.kid;
    if (kid) {
      this.seo.setPage({ title: `${kid.name}'s Dashboard`, noIndex: true });
      this.dashboard.set(await this.fs.getKidDashboard(kid.id));
    }
  }
}
