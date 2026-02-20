import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentLayoutComponent } from '../layouts/parent-layout';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';
import { Wallet, Transaction } from '../models/interfaces';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-parent-wallet',
  standalone: true,
  imports: [CommonModule, ParentLayoutComponent],
  template: `
    <app-parent-layout>
      <div class="animate-fade-in">
        <div class="page-header-block">
          <div>
            <h1 class="page-title" data-testid="wallet-heading">Wallet</h1>
            <p class="page-subtitle">{{ auth.selectedKid()?.name }}'s financial overview</p>
          </div>
        </div>

        @if (wallet()) {
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <div class="stat-card">
              <div class="stat-icon" style="background-color:rgba(13,148,136,0.12)">
                <svg class="w-5 h-5" style="color:#0D9488" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/><path d="M2 10h20" stroke-width="2"/></svg>
              </div>
              <p class="stat-label">Balance</p>
              <p class="stat-value">{{ wallet()!.balance }}</p>
            </div>
            <div class="stat-card">
              <div class="stat-icon" style="background-color:rgba(16,185,129,0.12)">
                <svg class="w-5 h-5" style="color:#10B981" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke-width="2" stroke-linecap="round"/></svg>
              </div>
              <p class="stat-label">Earned</p>
              <p class="stat-value" style="color:#10B981">{{ wallet()!.total_earned }}</p>
            </div>
            <div class="stat-card">
              <div class="stat-icon" style="background-color:rgba(239,68,68,0.10)">
                <svg class="w-5 h-5" style="color:#EF4444" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7" stroke-width="2" stroke-linecap="round"/></svg>
              </div>
              <p class="stat-label">Spent</p>
              <p class="stat-value" style="color:#EF4444">{{ wallet()!.total_spent }}</p>
            </div>
            <div class="stat-card">
              <div class="stat-icon" style="background-color:rgba(59,130,246,0.12)">
                <svg class="w-5 h-5" style="color:#3B82F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke-width="2"/></svg>
              </div>
              <p class="stat-label">Saved</p>
              <p class="stat-value" style="color:#3B82F6">{{ wallet()!.total_saved }}</p>
            </div>
          </div>
        }

        <div class="card p-5">
          <div class="section-header">
            <h3 class="section-title">Transaction History</h3>
          </div>
          @if (transactions().length === 0) {
            <p class="text-sm text-center py-8" style="color: var(--fg-muted)">No transactions yet</p>
          }
          <div class="space-y-2">
            @for (txn of transactions(); track txn.id) {
              <div class="flex items-center gap-3 py-2">
                <div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                     [style.background-color]="txn.type === 'credit' ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.10)'">
                  <svg class="w-4 h-4" [style.color]="txn.type === 'credit' ? '#10B981' : '#EF4444'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    @if (txn.type === 'credit') { <path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/> }
                    @else { <path d="M19 12H5M12 5l-7 7 7 7" stroke-width="2" stroke-linecap="round"/> }
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium truncate">{{ txn.description }}</p>
                  <p class="text-[10px]" style="color: var(--fg-muted)">{{ txn.created_at | date:'shortDate' }} &middot; {{ txn.category }}</p>
                </div>
                <span class="text-sm font-bold flex-shrink-0" [style.color]="txn.type === 'credit' ? '#10B981' : '#EF4444'">
                  {{ txn.type === 'credit' ? '+' : '−' }}{{ txn.amount }}
                </span>
              </div>
            }
          </div>
        </div>
      </div>
    </app-parent-layout>
  `
})
export class ParentWalletPage implements OnInit {
  auth = inject(AuthService);
  private fs = inject(FirestoreService);
  private seo = inject(SeoService);
  wallet = signal<Wallet | null>(null);
  transactions = signal<Transaction[]>([]);

  async ngOnInit() {
    this.seo.setPage({ title: 'Wallet', noIndex: true });
    const kid = this.auth.selectedKid();
    if (!kid) return;
    const [w, t] = await Promise.all([this.fs.getWallet(kid.id), this.fs.getTransactions(kid.id)]);
    this.wallet.set(w);
    this.transactions.set(t);
  }
}
