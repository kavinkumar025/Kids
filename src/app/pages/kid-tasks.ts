import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidLayoutComponent } from '../layouts/kid-layout';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';
import { Task } from '../models/interfaces';
import { KID_THEMES } from '../constants/app-data';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-kid-tasks',
  standalone: true,
  imports: [CommonModule, KidLayoutComponent],
  template: `
    <app-kid-layout>
      <div class="animate-fade-in">
        <div class="page-header-block">
          <div>
            <h1 class="page-title" data-testid="kid-tasks-heading">My Tasks</h1>
            <p class="page-subtitle">Complete tasks to earn coins!</p>
          </div>
        </div>

        @if (tasks().length === 0) {
          <div class="empty-state">
            <div class="empty-icon" [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-width="2"/></svg>
            </div>
            <p class="page-subtitle">No tasks yet. Ask your parent to create some!</p>
          </div>
        }

        <div class="space-y-3">
          @for (task of tasks(); track task.id) {
            <div class="task-card" [attr.data-testid]="'kid-task-' + task.id">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" [style.background-color]="theme().primary + '18'">
                <svg class="w-4 h-4" [style.color]="theme().primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round"/></svg>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-sm font-semibold font-heading">{{ task.title }}</p>
                <p class="text-xs mt-0.5" style="color: var(--fg-muted)">{{ task.description || 'Complete this task' }}</p>
                <p class="text-xs font-bold mt-0.5" [style.color]="theme().primary">+{{ task.reward_amount }} coins</p>
              </div>
              <div class="flex-shrink-0">
                @if (task.status === 'pending') {
                  <button (click)="completeTask(task.id)" class="text-xs px-4 py-2 rounded-xl text-white font-semibold" [style.background-color]="theme().primary" [attr.data-testid]="'complete-task-' + task.id">Done!</button>
                } @else if (task.status === 'completed') {
                  <span class="badge badge-info">Waiting</span>
                } @else if (task.status === 'approved') {
                  <span class="badge badge-success">Approved</span>
                } @else {
                  <span class="badge badge-danger">Rejected</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </app-kid-layout>
  `
})
export class KidTasksPage implements OnInit {
  auth = inject(AuthService);
  private fs = inject(FirestoreService);
  private seo = inject(SeoService);
  tasks = signal<Task[]>([]);
  theme = computed(() => KID_THEMES[this.auth.kidSession()?.kid?.ui_theme || 'neutral'] || KID_THEMES['neutral']);

  async ngOnInit() {
    this.seo.setPage({ title: 'My Tasks', noIndex: true });
    const kid = this.auth.kidSession()?.kid;
    if (kid) this.tasks.set(await this.fs.getTasks(kid.id));
  }

  async completeTask(id: string) {
    const kid = this.auth.kidSession()?.kid;
    if (!kid) return;
    await this.fs.completeTask(id, kid.id);
    this.tasks.set(await this.fs.getTasks(kid.id));
  }
}
