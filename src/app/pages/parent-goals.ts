import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParentLayoutComponent } from '../layouts/parent-layout';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';
import { Goal } from '../models/interfaces';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-parent-goals',
  standalone: true,
  imports: [CommonModule, FormsModule, ParentLayoutComponent],
  template: `
    <app-parent-layout>
      <div class="animate-fade-in">
        <div class="page-header-block">
          <div>
            <h1 class="page-title" data-testid="goals-heading">Goals</h1>
            <p class="page-subtitle">Savings goals for {{ auth.selectedKid()?.name }}</p>
          </div>
          <button (click)="showCreate.set(true)" class="btn-primary" data-testid="create-goal-btn">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/></svg>
            New Goal
          </button>
        </div>

        @if (goals().length === 0) {
          <div class="empty-state">
            <div class="empty-icon" style="background:linear-gradient(135deg,#3B82F6,#6366F1)">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><circle cx="12" cy="12" r="6" stroke-width="2"/><circle cx="12" cy="12" r="2" stroke-width="2"/></svg>
            </div>
            <p class="page-subtitle">No goals yet. Create one to start saving!</p>
          </div>
        }

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          @for (goal of goals(); track goal.id) {
            <div class="card p-5" [attr.data-testid]="'goal-' + goal.id">
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-bold font-heading" style="font-size:1rem">{{ goal.title }}</h3>
                <span class="badge" [class.badge-success]="goal.status === 'completed'" [class.badge-warning]="goal.status !== 'completed'">{{ goal.status }}</span>
              </div>
              <!-- Progress -->
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span style="color:var(--fg-muted)">{{ goal.saved_amount }} saved</span>
                <span class="font-semibold">{{ ((goal.saved_amount / goal.target_amount) * 100).toFixed(0) }}%</span>
              </div>
              <div class="w-full rounded-full h-2 mb-3" style="background-color: var(--muted)">
                <div class="h-2 rounded-full transition-all" style="background:linear-gradient(90deg,#0D9488,#14B8A6)" [style.width.%]="(goal.saved_amount / goal.target_amount) * 100"></div>
              </div>
              <p class="text-xs mb-3" style="color: var(--fg-muted)">Target: {{ goal.target_amount }} coins</p>
              @if (goal.status === 'active') {
                <div class="flex gap-2 mt-3">
                  <input class="input flex-1" type="number" min="1" [placeholder]="'Amount'" [(ngModel)]="contributeAmounts[goal.id]" [attr.data-testid]="'contribute-input-' + goal.id">
                  <button (click)="contribute(goal.id)" class="btn-primary text-xs" [attr.data-testid]="'contribute-btn-' + goal.id">Save</button>
                </div>
              }
            </div>
          }
        </div>

        @if (showCreate()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4" (click)="showCreate.set(false)">
            <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div class="card p-6 w-full max-w-md relative z-10 animate-scale-in" (click)="$event.stopPropagation()">
              <div class="flex items-center justify-between mb-5">
                <h2 class="section-title">Create Goal</h2>
                <button (click)="showCreate.set(false)" class="p-2 rounded-xl hover\:bg-muted" style="color:var(--fg-muted)"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round"/></svg></button>
              </div>
              <form (ngSubmit)="createGoal()" class="space-y-4">
                <div><label class="label">Goal Title</label><input class="input" placeholder="e.g., New bicycle" [(ngModel)]="goalForm.title" name="title" data-testid="goal-title-input"></div>
                <div><label class="label">Target Amount (coins)</label><input class="input" type="number" min="1" [(ngModel)]="goalForm.target_amount" name="target" data-testid="goal-target-input"></div>
                <button type="submit" class="btn-primary w-full py-3" [disabled]="creating()" data-testid="submit-goal-btn">{{ creating() ? 'Creating...' : 'Create Goal' }}</button>
              </form>
            </div>
          </div>
        }
      </div>
    </app-parent-layout>
  `
})
export class ParentGoalsPage implements OnInit {
  auth = inject(AuthService);
  private fs = inject(FirestoreService);
  private seo = inject(SeoService);
  goals = signal<Goal[]>([]);
  showCreate = signal(false);
  creating = signal(false);
  goalForm = { title: '', target_amount: 100 };
  contributeAmounts: Record<string, number> = {};

  async ngOnInit() { this.seo.setPage({ title: 'Savings Goals', noIndex: true }); await this.load(); }

  async load() {
    const kid = this.auth.selectedKid();
    if (!kid) return;
    this.goals.set(await this.fs.getGoals(kid.id));
  }

  async createGoal() {
    if (!this.goalForm.title) return;
    this.creating.set(true);
    try {
      const kid = this.auth.selectedKid();
      const user = this.auth.firebaseUser();
      if (!kid || !user) return;
      await this.fs.createGoal(user.uid, kid.id, this.goalForm);
      await this.load();
      this.showCreate.set(false);
      this.goalForm = { title: '', target_amount: 100 };
    } finally { this.creating.set(false); }
  }

  async contribute(goalId: string) {
    const amount = this.contributeAmounts[goalId];
    if (!amount || amount <= 0) return;
    const kid = this.auth.selectedKid();
    if (!kid) return;
    try {
      await this.fs.contributeToGoal(goalId, kid.id, amount);
      this.contributeAmounts[goalId] = 0;
      await this.load();
    } catch (err: any) { alert(err.message); }
  }
}
