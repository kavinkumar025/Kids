import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KidLayoutComponent } from '../layouts/kid-layout';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';
import { Goal } from '../models/interfaces';
import { KID_THEMES } from '../constants/app-data';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-kid-goals',
  standalone: true,
  imports: [CommonModule, FormsModule, KidLayoutComponent],
  template: `
    <app-kid-layout>
      <div class="animate-fade-in">
        <div class="page-header-block">
          <div>
            <h1 class="page-title" data-testid="kid-goals-heading">My Goals</h1>
            <p class="page-subtitle">Save towards your dreams!</p>
          </div>
        </div>

        @if (goals().length === 0) {
          <div class="empty-state">
            <div class="empty-icon" [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><circle cx="12" cy="12" r="6" stroke-width="2"/><circle cx="12" cy="12" r="2" stroke-width="2"/></svg>
            </div>
            <p class="page-subtitle">No goals yet. Ask your parent to set one up!</p>
          </div>
        }

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          @for (goal of goals(); track goal.id) {
            <div class="card p-5" [attr.data-testid]="'kid-goal-' + goal.id">
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-bold font-heading" style="font-size:1rem">{{ goal.title }}</h3>
                <span class="badge" [class.badge-success]="goal.status === 'completed'" [class.badge-warning]="goal.status !== 'completed'">{{ goal.status }}</span>
              </div>
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span style="color:var(--fg-muted)">{{ goal.saved_amount }} / {{ goal.target_amount }}</span>
                <span class="font-bold" [style.color]="theme().primary">{{ ((goal.saved_amount / goal.target_amount) * 100).toFixed(0) }}%</span>
              </div>
              <div class="w-full rounded-full h-2.5 mb-4" style="background-color: var(--muted)">
                <div class="h-2.5 rounded-full transition-all" [style.width.%]="(goal.saved_amount / goal.target_amount) * 100" [style.background-color]="theme().primary"></div>
              </div>
              @if (goal.status === 'active') {
                <div class="flex gap-2">
                  <input class="input flex-1" type="number" min="1" placeholder="Amount" [(ngModel)]="amounts[goal.id]" [attr.data-testid]="'kid-contribute-input-' + goal.id">
                  <button (click)="contribute(goal.id)" class="text-xs px-4 py-2 rounded-full text-white font-medium" [style.background-color]="theme().primary" [attr.data-testid]="'kid-contribute-btn-' + goal.id">Save</button>
                </div>
              } @else {
                <span class="badge text-[10px]" style="background-color: #34D39920; color: #34D399">Completed!</span>
              }
            </div>
          }
        </div>
      </div>
    </app-kid-layout>
  `
})
export class KidGoalsPage implements OnInit {
  auth = inject(AuthService);
  private fs = inject(FirestoreService);
  private seo = inject(SeoService);
  goals = signal<Goal[]>([]);
  amounts: Record<string, number> = {};
  theme = computed(() => KID_THEMES[this.auth.kidSession()?.kid?.ui_theme || 'neutral'] || KID_THEMES['neutral']);

  async ngOnInit() {
    this.seo.setPage({ title: 'My Goals', noIndex: true });
    const kid = this.auth.kidSession()?.kid;
    if (kid) this.goals.set(await this.fs.getGoals(kid.id));
  }

  async contribute(goalId: string) {
    const amount = this.amounts[goalId];
    if (!amount || amount <= 0) return;
    const kid = this.auth.kidSession()?.kid;
    if (!kid) return;
    try { await this.fs.contributeToGoal(goalId, kid.id, amount); this.amounts[goalId] = 0; this.goals.set(await this.fs.getGoals(kid.id)); } catch (e: any) { alert(e.message); }
  }
}
