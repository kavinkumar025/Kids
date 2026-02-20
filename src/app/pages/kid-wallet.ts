import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidLayoutComponent } from '../layouts/kid-layout';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';
import { Wallet, Transaction } from '../models/interfaces';
import { KID_THEMES } from '../constants/app-data';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-kid-wallet',
  standalone: true,
  imports: [CommonModule, KidLayoutComponent],
  template: `
    <app-kid-layout>
      <div class="animate-fade-in">
        <div class="page-header-block">
          <div>
            <h1 class="page-title" data-testid="kid-wallet-heading">My Wallet</h1>
            <p class="page-subtitle">Your money at a glance</p>
          </div>
        </div>

        @if (wallet()) {
          <!-- Balance hero -->
          <div class="rounded-2xl p-6 mb-4 text-center relative overflow-hidden"
               [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'">
            <div class="absolute inset-0 opacity-10" style="background-image:radial-gradient(circle at 70% 20%, white 0%, transparent 60%)"></div>
            <p class="text-white/70 text-xs mb-1 relative">Current Balance</p>
            <p class="text-5xl font-bold text-white font-heading relative">{{ wallet()!.balance }}</p>
            <p class="text-white/60 text-xs mt-1 relative">coins</p>
          </div>

          <div class="grid grid-cols-3 gap-3 mb-4">
            <div class="stat-card text-center">
              <p class="stat-label">Earned</p>
              <p class="stat-value" style="color:#10B981">{{ wallet()!.total_earned }}</p>
            </div>
            <div class="stat-card text-center">
              <p class="stat-label">Spent</p>
              <p class="stat-value" style="color:#EF4444">{{ wallet()!.total_spent }}</p>
            </div>
            <div class="stat-card text-center">
              <p class="stat-label">Saved</p>
              <p class="stat-value" [style.color]="theme().primary">{{ wallet()!.total_saved }}</p>
            </div>
          </div>
        }

        <div class="card p-5">
          <div class="section-header"><h3 class="section-title">Transaction History</h3></div>
          @if (transactions().length === 0) {
            <p class="text-sm text-center py-8" style="color: var(--fg-muted)">No transactions yet</p>
          }
          <div class="space-y-1">
          @for (txn of transactions(); track txn.id) {
            <div class="flex items-center gap-3 py-2.5 border-b" style="border-color: var(--border)">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                   [style.background-color]="txn.type === 'credit' ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.10)'">
                <svg class="w-3.5 h-3.5" [style.color]="txn.type === 'credit' ? '#10B981' : '#EF4444'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  @if (txn.type === 'credit') { <path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/> }
                  @else { <path d="M5 12h14" stroke-width="2" stroke-linecap="round"/> }
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm truncate">{{ txn.description }}</p>
                <p class="text-[10px]" style="color: var(--fg-muted)">{{ txn.created_at | date:'shortDate' }}</p>
              </div>
              <span class="text-sm font-bold flex-shrink-0" [style.color]="txn.type === 'credit' ? '#10B981' : '#EF4444'">{{ txn.type === 'credit' ? '+' : '−' }}{{ txn.amount }}</span>
            </div>
          }
          </div>
        </div>
      </div>
    </app-kid-layout>
  `
})
export class KidWalletPage implements OnInit {
  auth = inject(AuthService);
  private fs = inject(FirestoreService);
  private seo = inject(SeoService);
  wallet = signal<Wallet | null>(null);
  transactions = signal<Transaction[]>([]);
  theme = computed(() => KID_THEMES[this.auth.kidSession()?.kid?.ui_theme || 'neutral'] || KID_THEMES['neutral']);

  async ngOnInit() {
    this.seo.setPage({ title: 'My Wallet', noIndex: true });
    const kid = this.auth.kidSession()?.kid;
    if (!kid) return;
    const [w, t] = await Promise.all([this.fs.getWallet(kid.id), this.fs.getTransactions(kid.id)]);
    this.wallet.set(w); this.transactions.set(t);
  }
}
