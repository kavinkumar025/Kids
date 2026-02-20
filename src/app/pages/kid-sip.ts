import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidLayoutComponent } from '../layouts/kid-layout';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';
import { SIP } from '../models/interfaces';
import { KID_THEMES } from '../constants/app-data';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-kid-sip',
  standalone: true,
  imports: [CommonModule, KidLayoutComponent],
  template: `
    <app-kid-layout>
      <div class="animate-fade-in">
        <div class="page-header-block">
          <div>
            <h1 class="page-title" data-testid="kid-sip-heading">My Investments</h1>
            <p class="page-subtitle">Watch your money grow!</p>
          </div>
        </div>

        @if (sips().length === 0) {
          <div class="empty-state">
            <div class="empty-icon" style="background:linear-gradient(135deg,#10B981,#059669)">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <p class="page-subtitle">No investments yet. Ask your parent to set one up!</p>
          </div>
        }

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          @for (sip of sips(); track sip.id) {
            <div class="card p-6" [attr.data-testid]="'kid-sip-' + sip.id">
              <div class="flex items-center justify-between mb-3">
                <p class="font-semibold font-heading text-sm">{{ sip.amount }} coins/{{ sip.frequency }}</p>
                <span class="badge text-[10px]" [style.background-color]="sip.status === 'active' ? theme().primary + '15' : '#FCD34D20'" [style.color]="sip.status === 'active' ? theme().primary : '#FCD34D'">{{ sip.status }}</span>
              </div>
              <div class="grid grid-cols-3 gap-2 text-center mb-3">
                <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Invested</p><p class="text-sm font-bold">{{ sip.total_invested }}</p></div>
                <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Value</p><p class="text-sm font-bold" [style.color]="theme().primary">{{ sip.current_value.toFixed(0) }}</p></div>
                <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Gain</p><p class="text-sm font-bold text-secondary">+{{ (sip.current_value - sip.total_invested).toFixed(0) }}</p></div>
              </div>
              @if (sip.status === 'active') {
                <button (click)="paySIP(sip)" class="btn-primary w-full text-xs py-2" [attr.data-testid]="'kid-pay-sip-' + sip.id">Pay {{ sip.amount }} Coins</button>
              }
            </div>
          }
        </div>
      </div>
    </app-kid-layout>
  `
})
export class KidSIPPage implements OnInit {
  auth = inject(AuthService);
  private fs = inject(FirestoreService);
  private seo = inject(SeoService);
  sips = signal<SIP[]>([]);
  theme = computed(() => KID_THEMES[this.auth.kidSession()?.kid?.ui_theme || 'neutral'] || KID_THEMES['neutral']);

  async ngOnInit() {
    this.seo.setPage({ title: 'My Savings Plans', noIndex: true });
    const kid = this.auth.kidSession()?.kid;
    if (kid) this.sips.set(await this.fs.getSIPs(kid.id));
  }

  async paySIP(sip: SIP) {
    const kid = this.auth.kidSession()?.kid;
    if (!kid) return;
    try { await this.fs.paySIP(sip.id, kid.id); this.sips.set(await this.fs.getSIPs(kid.id)); } catch (e: any) { alert(e.message); }
  }
}
