import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParentLayoutComponent } from '../layouts/parent-layout';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';
import { Task } from '../models/interfaces';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-parent-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule, ParentLayoutComponent],
  template: `
    <app-parent-layout>
      <div class="animate-fade-in">
        <div class="page-header-block">
          <div>
            <h1 class="page-title" data-testid="tasks-heading">Tasks</h1>
            <p class="page-subtitle">Manage tasks for {{ auth.selectedKid()?.name || 'your child' }}</p>
          </div>
          <button (click)="showCreate.set(true)" class="btn-primary" data-testid="create-task-btn">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/></svg>
            New Task
          </button>
        </div>

        @if (!auth.selectedKid()) {
          <div class="empty-state">
            <div class="empty-icon">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-width="2"/></svg>
            </div>
            <p class="page-subtitle">Please add a child first from the Dashboard.</p>
          </div>
        } @else {
          <!-- Filter tabs -->
          <div class="filter-tabs">
            @for (f of filters; track f.value) {
              <button (click)="filter.set(f.value)"
                      class="filter-tab"
                      [class.active]="filter() === f.value"
                      [attr.data-testid]="'filter-' + f.value">
                {{ f.label }}
              </button>
            }
          </div>

          @if (filteredTasks().length === 0) {
            <div class="empty-state" style="margin-top:0">
              <p class="page-subtitle">No tasks yet. Create one to get started!</p>
            </div>
          }

          <div class="space-y-3">
            @for (task of filteredTasks(); track task.id) {
              <div class="task-card" [attr.data-testid]="'task-' + task.id">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style="background-color:rgba(13,148,136,0.10)">
                  <svg class="w-4 h-4" style="color:#0D9488" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-sm font-semibold font-heading">{{ task.title }}</span>
                  </div>
                  <p class="text-xs" style="color: var(--fg-muted)">{{ task.reward_amount }} coins &middot; {{ task.frequency }}</p>
                </div>
                <span class="badge flex-shrink-0"
                      [style.background-color]="statusColor(task.status) + '18'" [style.color]="statusColor(task.status)">{{ task.status }}</span>
                <div class="flex gap-2 flex-shrink-0">
                  @if (task.status === 'completed') {
                    <button (click)="approve(task.id)" class="text-xs px-3 py-1.5 rounded-xl bg-emerald-500 text-white font-semibold" [attr.data-testid]="'approve-' + task.id">Approve</button>
                    <button (click)="reject(task.id)" class="text-xs px-3 py-1.5 rounded-xl text-white font-semibold" style="background:#EF4444" [attr.data-testid]="'reject-' + task.id">Reject</button>
                  }
                </div>
              </div>
            }
          </div>
        }

        <!-- Create Task Modal -->
        @if (showCreate()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4" (click)="showCreate.set(false)">
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="card p-6 w-full max-w-md relative z-10 animate-scale-in" (click)="$event.stopPropagation()">
              <div class="flex items-center justify-between mb-5">
                <div>
                  <h2 class="section-title">Create Task</h2>
                  <p class="text-xs mt-0.5" style="color:var(--fg-muted)">Set up a task and reward</p>
                </div>
              </div>
              <form (ngSubmit)="createTask()" class="space-y-4">
                <div>
                  <label class="label">Title</label>
                  <input class="input" placeholder="e.g., Clean your room" [(ngModel)]="taskForm.title" name="title" data-testid="task-title-input">
                </div>
                <div>
                  <label class="label">Description</label>
                  <textarea class="input" rows="2" placeholder="Optional details" [(ngModel)]="taskForm.description" name="description"></textarea>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="label">Reward (coins)</label>
                    <input class="input" type="number" min="1" [(ngModel)]="taskForm.reward_amount" name="reward" data-testid="task-reward-input">
                  </div>
                  <div>
                    <label class="label">Penalty (coins)</label>
                    <input class="input" type="number" min="0" [(ngModel)]="taskForm.penalty_amount" name="penalty">
                  </div>
                </div>
                <div>
                  <label class="label">Frequency</label>
                  <select class="input" [(ngModel)]="taskForm.frequency" name="frequency">
                    <option value="one-time">One Time</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
                <div class="flex items-center gap-2">
                  <input type="checkbox" id="approval" [(ngModel)]="taskForm.approval_required" name="approval" class="rounded">
                  <label for="approval" class="text-sm">Requires parent approval</label>
                </div>
                <button type="submit" class="btn-primary w-full py-3" [disabled]="creating()" data-testid="submit-task-btn">
                  {{ creating() ? 'Creating...' : 'Create Task' }}
                </button>
              </form>
            </div>
          </div>
        }
      </div>
    </app-parent-layout>
  `
})
export class ParentTasksPage implements OnInit {
  auth = inject(AuthService);
  private fs = inject(FirestoreService);
  private seo = inject(SeoService);

  tasks = signal<Task[]>([]);
  filter = signal('all');
  showCreate = signal(false);
  creating = signal(false);

  filters = [
    { value: 'all', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'completed', label: 'Needs Review' },
    { value: 'approved', label: 'Approved' },
  ];

  taskForm = { title: '', description: '', reward_amount: 10, penalty_amount: 0, frequency: 'one-time', approval_required: true };

  filteredTasks = signal<Task[]>([]);

  async ngOnInit() {
    this.seo.setPage({ title: 'Tasks', noIndex: true });
    await this.loadTasks();
  }

  async loadTasks() {
    const kid = this.auth.selectedKid();
    if (!kid) return;
    const all = await this.fs.getTasks(kid.id);
    this.tasks.set(all);
    this.updateFiltered();
  }

  updateFiltered() {
    const f = this.filter();
    const all = this.tasks();
    this.filteredTasks.set(f === 'all' ? all : all.filter(t => t.status === f));
  }

  statusColor(status: string) {
    return { pending: '#FCD34D', completed: '#4F7DF3', approved: '#34D399', rejected: '#F87171' }[status] || '#71717A';
  }

  async createTask() {
    if (!this.taskForm.title) return;
    this.creating.set(true);
    try {
      const kid = this.auth.selectedKid();
      const user = this.auth.firebaseUser();
      if (!kid || !user) return;
      await this.fs.createTask(user.uid, kid.id, this.taskForm);
      await this.loadTasks();
      this.showCreate.set(false);
      this.taskForm = { title: '', description: '', reward_amount: 10, penalty_amount: 0, frequency: 'one-time', approval_required: true };
    } finally { this.creating.set(false); }
  }

  async approve(id: string) {
    await this.fs.approveTask(id);
    await this.loadTasks();
  }

  async reject(id: string) {
    await this.fs.rejectTask(id);
    await this.loadTasks();
  }
}
