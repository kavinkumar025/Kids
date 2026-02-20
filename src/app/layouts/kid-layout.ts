import { Component, inject, computed } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';
import { ThemeService } from '../services/theme.service';
import { KID_THEMES } from '../constants/app-data';

interface NavItem { path: string; label: string; icon: string; safeIcon?: SafeHtml; }

@Component({
  selector: 'app-kid-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  host: { class: 'block' },
  template: `
    <div class="min-h-screen flex" style="background-color: var(--bg)">
      <!-- Desktop Sidebar -->
      <aside class="hidden lg:flex flex-col w-[260px] border-r fixed h-full z-20"
             style="border-color: var(--border); background-color: var(--bg-card)">

        <!-- Kid Brand Header -->
        <div class="border-b" [style.border-color]="'var(--border)'" data-testid="kid-sidebar-logo">
          <!-- Gradient top strip -->
          <div class="px-5 pt-5 pb-4" [style.background]="'linear-gradient(160deg,' + theme().primary + '14 0%,' + theme().secondary + '08 100%)'">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0"
                   [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'"
                   [style.box-shadow]="'0 4px 14px -3px ' + theme().primary + '60'">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke-width="1.5"/><path d="M8 14s1.5 2 4 2 4-2 4-2" stroke-width="1.5" stroke-linecap="round"/><path d="M9 9h.01M15 9h.01" stroke-width="2" stroke-linecap="round"/></svg>
              </div>
              <div>
                <h1 class="font-bold font-heading" style="font-size:1.0625rem;letter-spacing:-0.02em;line-height:1.2">Minyfin</h1>
                <p class="text-[10px] font-semibold uppercase" [style.color]="theme().primary" style="letter-spacing:0.08em">My Space ✨</p>
              </div>
            </div>
            <!-- Kid avatar card -->
            <div class="rounded-2xl p-3 flex items-center gap-3" [style.background]="'rgba(255,255,255,0.5)'" style="border:1px solid rgba(0,0,0,0.06);backdrop-filter:blur(8px)">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-sm flex-shrink-0"
                   [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'"
                   [style.box-shadow]="'0 3px 10px -2px ' + theme().primary + '50'">
                {{ kidName()[0] }}
              </div>
              <div class="min-w-0">
                <p class="font-bold leading-tight truncate" style="font-size:0.9375rem">{{ kidName() }}</p>
                <p class="text-[10px] font-semibold" [style.color]="theme().primary">🚀 Kid Explorer</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Nav -->
        <nav class="flex-1 overflow-y-auto px-2.5 py-3 space-y-0.5">
          @for (item of navItems; track item.path) {
            <a [routerLink]="item.path" routerLinkActive="kid-active" [routerLinkActiveOptions]="{exact: item.path.endsWith('/dashboard')}"
               [attr.data-testid]="'kid-nav-' + item.label.toLowerCase().replace(' ', '-')"
               class="kid-nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all">
              <span [innerHTML]="item.safeIcon" class="flex-shrink-0 kid-icon"></span>
              {{ item.label }}
            </a>
          }
        </nav>

        <!-- Logout -->
        <div class="px-2.5 pb-4 pt-2 border-t" style="border-color:var(--border)">
          <button (click)="doLogout()" data-testid="kid-logout-btn"
                  class="kid-logout flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all w-full text-left">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Log Out
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 lg:ml-[260px] pb-20 lg:pb-0">
        <!-- Themed Header -->
        <header class="sticky top-0 z-10 border-b px-4 lg:px-8 h-14 flex items-center justify-between"
                style="background-color:color-mix(in srgb, var(--bg-card) 95%, transparent);backdrop-filter:blur(20px);border-color:var(--border)">
          <div class="flex items-center gap-3">
            <button class="lg:hidden p-2 rounded-xl transition-colors" style="color:var(--fg)" (click)="mobileMenu = !mobileMenu" data-testid="kid-mobile-menu">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <!-- Mobile brand -->
            <div class="lg:hidden flex items-center gap-2">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                   [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'">
                {{ kidName()[0] }}
              </div>
              <span class="text-sm font-bold font-heading">{{ kidName() }}'s Space</span>
            </div>
            <!-- Desktop greeting -->
            <div class="hidden lg:flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                   [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'">
                {{ kidName()[0] }}
              </div>
              <div>
                <p class="text-xs font-bold leading-tight">Hi, {{ kidName() }}! 👋</p>
                <p class="text-[10px]" style="color:var(--fg-muted)">Keep it up, superstar!</p>
              </div>
            </div>
          </div>
          <button (click)="themeService.toggle()" class="p-2 rounded-xl transition-colors kid-theme-btn" style="color:var(--fg-muted)" data-testid="kid-theme-toggle">
            @if (themeService.theme() === 'light') {
              <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke-width="2"/></svg>
            } @else {
              <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke-width="2"/></svg>
            }
          </button>
        </header>
        <div class="p-4 lg:p-8 max-w-7xl mx-auto"><ng-content /></div>
      </main>

      <!-- Mobile Menu -->
      @if (mobileMenu) {
        <div class="fixed inset-0 z-30 lg:hidden" (click)="mobileMenu = false">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div class="absolute left-0 top-0 bottom-0 w-[280px] flex flex-col animate-slide-in"
               style="background-color: var(--bg-card)" (click)="$event.stopPropagation()">
            <div class="flex items-center justify-between px-5 py-4 border-b" style="border-color:var(--border)">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-2xl flex items-center justify-center text-white font-bold"
                     [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'">
                  {{ kidName()[0] }}
                </div>
                <div>
                  <span class="text-sm font-bold font-heading">{{ kidName() }}</span>
                  <p class="text-[10px]" [style.color]="theme().primary">Kid Explorer ✨</p>
                </div>
              </div>
              <button (click)="mobileMenu = false" class="p-1.5 rounded-lg" style="color:var(--fg-muted)">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round"/></svg>
              </button>
            </div>
            <nav class="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
              @for (item of navItems; track item.path) {
                <a [routerLink]="item.path" (click)="mobileMenu = false"
                   class="kid-nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all">
                  <span [innerHTML]="item.safeIcon" class="flex-shrink-0 kid-icon"></span> {{ item.label }}
                </a>
              }
            </nav>
          </div>
        </div>
      }

      <!-- Mobile Bottom Nav - themed -->
      <nav class="lg:hidden fixed bottom-0 inset-x-0 z-20 border-t safe-area-bottom"
           style="background-color:color-mix(in srgb, var(--bg-card) 95%, transparent);backdrop-filter:blur(20px);border-color:var(--border)">
        <div class="flex items-center justify-around px-1 py-1">
          @for (item of mobileNavItems; track item.path) {
            <a [routerLink]="item.path" routerLinkActive="kid-mob-active" [attr.data-testid]="'kid-mob-' + item.label.toLowerCase()"
               class="kid-mob-item flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all min-w-[52px]">
              <span [innerHTML]="item.safeIcon" class="kid-mob-icon"></span>
              <span class="text-[10px] font-semibold">{{ item.label }}</span>
            </a>
          }
        </div>
      </nav>
    </div>
  `,
  styles: [`
    .kid-nav-item { color: var(--fg-muted); transition: all 0.15s ease; position: relative; }
    .kid-nav-item:hover { color: var(--fg); background-color: var(--muted); }
    .kid-nav-item:hover .kid-icon { opacity: 0.9 !important; }
    .kid-icon { opacity: 0.65; transition: opacity 0.15s; }
    .kid-active {
      background: linear-gradient(90deg, color-mix(in srgb, var(--color-primary) 14%, transparent) 0%, color-mix(in srgb, var(--color-primary) 5%, transparent) 100%) !important;
      color: var(--color-primary) !important;
      font-weight: 700;
      box-shadow: inset 3px 0 0 var(--color-primary);
    }
    .kid-active .kid-icon { opacity: 1 !important; }
    .kid-logout { color: var(--fg-muted); transition: all 0.15s ease; }
    .kid-logout:hover { color: #EF4444; background-color: rgba(239,68,68,0.07); }
    .kid-theme-btn:hover { background-color: var(--muted); border-radius: 0.75rem; }
    .kid-mob-item { color: var(--fg-muted); transition: all 0.15s; }
    .kid-mob-active { color: var(--color-primary) !important; font-weight: 700; }
    .kid-mob-active .kid-mob-icon :deep(svg) { stroke: var(--color-primary) !important; }
    @keyframes slide-in { from { transform: translateX(-100%); } to { transform: translateX(0); } }
    .animate-slide-in { animation: slide-in 0.22s cubic-bezier(0.16,1,0.3,1); }
  `]
})
export class KidLayoutComponent {
  auth = inject(AuthService);
  themeService = inject(ThemeService);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);
  mobileMenu = false;

  kidName = computed(() => this.auth.kidSession()?.kid?.name || 'Kid');
  theme = computed(() => {
    const t = this.auth.kidSession()?.kid?.ui_theme || 'neutral';
    return KID_THEMES[t] || KID_THEMES['neutral'];
  });

  navItems: NavItem[];
  mobileNavItems: NavItem[];

  constructor() {
    const s = (html: string) => this.sanitizer.bypassSecurityTrustHtml(html);
    const raw = [
      { path: '/kid/dashboard', label: 'Home', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1" stroke-width="2"/><rect x="14" y="3" width="7" height="5" rx="1" stroke-width="2"/><rect x="14" y="12" width="7" height="9" rx="1" stroke-width="2"/><rect x="3" y="16" width="7" height="5" rx="1" stroke-width="2"/></svg>' },
      { path: '/kid/tasks', label: 'My Tasks', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-width="2"/></svg>' },
      { path: '/kid/wallet', label: 'My Wallet', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/><path d="M2 10h20" stroke-width="2"/></svg>' },
      { path: '/kid/goals', label: 'Goals', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><circle cx="12" cy="12" r="6" stroke-width="2"/><circle cx="12" cy="12" r="2" stroke-width="2"/></svg>' },
      { path: '/kid/sip', label: 'Invest', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke-width="2"/></svg>' },
      { path: '/kid/loans', label: 'Borrow', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" stroke-width="2"/><line x1="2" y1="10" x2="22" y2="10" stroke-width="2"/></svg>' },
      { path: '/kid/learning', label: 'Stories', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" stroke-width="2"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke-width="2"/></svg>' },
      { path: '/kid/achievements', label: 'Achievements', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7" stroke-width="2"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" stroke-width="2"/></svg>' },
    ];
    this.navItems = raw.map(n => ({ ...n, safeIcon: s(n.icon) }));
    this.mobileNavItems = [this.navItems[0], this.navItems[1], this.navItems[2], this.navItems[6], this.navItems[7]];
  }

  async doLogout() {
    await this.auth.logout();
    this.router.navigate(['/']);
  }
}
