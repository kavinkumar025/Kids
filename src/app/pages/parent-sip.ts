import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParentLayoutComponent } from '../layouts/parent-layout';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';
import { SIP } from '../models/interfaces';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-parent-sip',
  standalone: true,
  imports: [CommonModule, FormsModule, ParentLayoutComponent],
  template: `
    <app-parent-layout>
      <div class="animate-fade-in">
        <div class="page-header-block">
          <div>
            <h1 class="page-title" data-testid="sip-heading">Savings Plans</h1>
            <p class="page-subtitle">Systematic Investment Plans for {{ auth.selectedKid()?.name }}</p>
          </div>
          <button (click)="showCreate.set(true)" class="btn-primary" data-testid="create-sip-btn">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/></svg>
            New SIP
          </button>
        </div>

        @if (sips().length === 0) {
          <div class="empty-state">
            <div class="empty-icon" style="background:linear-gradient(135deg,#10B981,#059669)">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <p class="page-subtitle">No savings plans yet. Create one to start growing coins!</p>
          </div>
        }

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          @for (sip of sips(); track sip.id) {
            <div class="card p-6" [attr.data-testid]="'sip-' + sip.id">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="text-sm font-semibold font-heading">{{ sip.amount }} coins / {{ sip.frequency }}</p>
                  <p class="text-xs" style="color: var(--fg-muted)">{{ sip.interest_rate }}% annual interest</p>
                </div>
                <span class="badge text-[10px]" [style.background-color]="sip.status === 'active' ? '#34D39920' : '#FCD34D20'" [style.color]="sip.status === 'active' ? '#34D399' : '#FCD34D'">{{ sip.status }}</span>
              </div>
              <div class="grid grid-cols-3 gap-2 text-center mb-3">
                <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Invested</p><p class="text-sm font-bold">{{ sip.total_invested }}</p></div>
                <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Value</p><p class="text-sm font-bold text-secondary">{{ sip.current_value.toFixed(0) }}</p></div>
                <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Payments</p><p class="text-sm font-bold">{{ sip.payments_made }}</p></div>
              </div>
              <div class="flex gap-2">
                @if (sip.status === 'active') {
                  <button (click)="paySIP(sip)" class="btn-primary text-xs flex-1" [attr.data-testid]="'pay-sip-' + sip.id">Pay Installment</button>
                }
                <button (click)="toggleSIP(sip.id)" class="text-xs px-4 py-2 rounded-full border" style="border-color: var(--border)" [attr.data-testid]="'toggle-sip-' + sip.id">{{ sip.status === 'active' ? 'Pause' : 'Resume' }}</button>
              </div>
            </div>
          }
        </div>

        @if (showCreate()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4" (click)="showCreate.set(false)">
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="card p-6 w-full max-w-md relative z-10 animate-scale-in" (click)="$event.stopPropagation()">
              <div class="flex items-center justify-between mb-5">
                <div><h2 class="section-title">Create Savings Plan</h2><p class="text-xs mt-0.5" style="color:var(--fg-muted)">Set amount and frequency</p></div>
              </div>
              <form (ngSubmit)="createSIP()" class="space-y-4">
                <div><label class="label">Amount per installment</label><input class="input" type="number" min="1" [(ngModel)]="sipForm.amount" name="amount" data-testid="sip-amount-input"></div>
                <div><label class="label">Interest Rate (%)</label><input class="input" type="number" min="0" max="20" [(ngModel)]="sipForm.interest_rate" name="rate" data-testid="sip-rate-input"></div>
                <div>
                  <label class="label">Frequency</label>
                  <select class="input" [(ngModel)]="sipForm.frequency" name="frequency">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <button type="submit" class="btn-primary w-full py-3" [disabled]="creating()" data-testid="submit-sip-btn">{{ creating() ? 'Creating...' : 'Create SIP' }}</button>
              </form>
            </div>
          </div>
        }
      </div>
    </app-parent-layout>
  `
})
export class ParentSIPPage implements OnInit {
  auth = inject(AuthService);
  private fs = inject(FirestoreService);
  private seo = inject(SeoService);
  sips = signal<SIP[]>([]);
  showCreate = signal(false);
  creating = signal(false);
  sipForm = { amount: 10, interest_rate: 8, frequency: 'monthly' };

  async ngOnInit() { this.seo.setPage({ title: 'Savings Plans (SIP)', noIndex: true }); await this.load(); }
  async load() { const kid = this.auth.selectedKid(); if (kid) this.sips.set(await this.fs.getSIPs(kid.id)); }

  async createSIP() {
    this.creating.set(true);
    try {
      const kid = this.auth.selectedKid(); const user = this.auth.firebaseUser();
      if (!kid || !user) return;
      await this.fs.createSIP(user.uid, kid.id, this.sipForm);
      await this.load(); this.showCreate.set(false);
    } finally { this.creating.set(false); }
  }

  async paySIP(sip: SIP) {
    const kid = this.auth.selectedKid(); if (!kid) return;
    try { await this.fs.paySIP(sip.id, kid.id); await this.load(); } catch (e: any) { alert(e.message); }
  }

  async toggleSIP(id: string) { await this.fs.toggleSIP(id); await this.load(); }
}
