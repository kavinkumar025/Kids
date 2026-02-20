import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';
import { ThemeService } from '../services/theme.service';
import { getAvatarColor } from '../constants/app-data';

interface NavItem {
  path: string;
  label: string;
  icon: string;
  safeIcon?: SafeHtml;
}

@Component({
  selector: 'app-parent-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  host: { class: 'block' },
  template: `
    <div class="min-h-screen flex" style="background-color: var(--bg)">
      <!-- Desktop Sidebar -->
      <aside class="hidden lg:flex flex-col w-[260px] border-r fixed h-full z-20"
             style="border-color: var(--border); background-color: var(--bg-card)">

        <!-- Logo -->
        <a routerLink="/dashboard" class="flex items-center gap-3 px-5 py-5 border-b" style="border-color:var(--border)" data-testid="sidebar-logo">
          <div class="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md" style="background:linear-gradient(135deg,#0D9488,#14B8A6);box-shadow:0 4px 14px -3px rgba(13,148,136,0.45)">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke-width="1.5"/><path d="M8 14s1.5 2 4 2 4-2 4-2" stroke-width="1.5" stroke-linecap="round"/><path d="M9 9h.01M15 9h.01" stroke-width="2" stroke-linecap="round"/></svg>
          </div>
          <div>
            <h1 class="font-bold font-heading" style="font-size:1.0625rem;letter-spacing:-0.02em;line-height:1.2">Minyfin</h1>
            <p class="text-[10px] font-semibold uppercase" style="color:#0D9488;letter-spacing:0.08em">Parent Portal</p>
          </div>
        </a>

        <!-- Kid Selector -->
        @if (auth.kids().length > 0) {
          <div class="px-4 py-3 border-b" style="border-color:var(--border)">
            <p class="text-[10px] uppercase tracking-widest mb-2 font-semibold px-0.5" style="color: var(--fg-muted)">Active Child</p>
            <div class="relative">
              @if (auth.selectedKid(); as kid) {
                <div class="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold z-10 shadow-sm"
                     [style.background-color]="getAvatarColor(kid.avatar)">{{ kid.name[0] }}</div>
              }
              <select class="input text-sm pl-10" style="border-radius:0.75rem" [value]="auth.selectedKid()?.id" (change)="selectKid($event)" data-testid="kid-selector">
                @for (kid of auth.kids(); track kid.id) {
                  <option [value]="kid.id">{{ kid.name }}</option>
                }
              </select>
            </div>
          </div>
        }

        <!-- Nav -->
        <nav class="flex-1 overflow-y-auto px-2.5 py-3 space-y-0.5">
          @for (item of navItems; track item.path) {
            <a [routerLink]="item.path" routerLinkActive="active-nav"
               [attr.data-testid]="'nav-' + item.label.toLowerCase()"
               class="nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all">
              <span [innerHTML]="item.safeIcon" class="flex-shrink-0 opacity-70 nav-icon"></span>
              {{ item.label }}
            </a>
          }
        </nav>

        <!-- Bottom -->
        <div class="px-2.5 pb-4 pt-2 border-t space-y-0.5" style="border-color:var(--border)">
          <a routerLink="/settings" routerLinkActive="active-nav"
             class="nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all" data-testid="nav-settings">
            <span [innerHTML]="settingsNav.safeIcon" class="flex-shrink-0 opacity-70 nav-icon"></span>
            Settings
          </a>
          <button (click)="doLogout()" data-testid="logout-btn"
                  class="logout-btn flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all w-full text-left">
            <svg class="w-[18px] h-[18px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Log Out
          </button>
          <!-- Parent profile card -->
          <div class="mt-2 flex items-center gap-3 px-3 py-2.5 rounded-xl" style="background:linear-gradient(135deg,rgba(13,148,136,0.08),rgba(20,184,166,0.04));border:1px solid rgba(13,148,136,0.12)">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,#0D9488,#14B8A6);box-shadow:0 2px 8px -2px rgba(13,148,136,0.5)">
              {{ (auth.parentProfile()?.full_name || 'P')[0] }}
            </div>
            <div class="min-w-0">
              <p class="text-sm font-bold leading-tight truncate">{{ auth.parentProfile()?.full_name || 'Parent' }}</p>
              <p class="text-[10px] font-semibold" style="color:#0D9488">Parent Account</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 lg:ml-[260px] pb-20 lg:pb-0">
        <header class="sticky top-0 z-10 border-b px-4 lg:px-8 h-14 flex items-center justify-between"
                style="background-color:color-mix(in srgb,var(--bg-card) 92%,transparent);backdrop-filter:blur(24px);border-color:var(--border)">
          <div class="flex items-center gap-3">
            <button class="lg:hidden p-2 rounded-xl transition-colors hover-muted" style="color: var(--fg)" (click)="mobileMenu = !mobileMenu" data-testid="mobile-menu-btn">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <!-- Mobile logo -->
            <div class="lg:hidden flex items-center gap-2">
              <div class="w-7 h-7 rounded-xl flex items-center justify-center" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/><path d="M2 10h20" stroke-width="2"/></svg>
              </div>
              <span class="font-bold font-heading" style="font-size:1rem">Minyfin</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            @if (auth.selectedKid(); as kid) {
              <div class="flex items-center gap-2 rounded-full pl-1.5 pr-3 py-1" style="background-color:var(--muted);border:1px solid var(--border)">
                <span class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      [style.background-color]="getAvatarColor(kid.avatar)">{{ kid.name[0] }}</span>
                <span class="text-xs font-semibold hidden sm:block max-w-[80px] truncate">{{ kid.name }}</span>
              </div>
            }
            <button (click)="themeService.toggle()" class="p-2 rounded-xl transition-colors hover-muted" style="color:var(--fg-muted)" data-testid="theme-toggle">
              @if (themeService.theme() === 'light') {
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke-width="2"/></svg>
              } @else {
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke-width="2"/></svg>
              }
            </button>
          </div>
        </header>

        <div class="p-4 lg:p-8 max-w-7xl mx-auto">
          <ng-content />
        </div>
      </main>

      <!-- Mobile Menu Overlay -->
      @if (mobileMenu) {
        <div class="fixed inset-0 z-30 lg:hidden" (click)="mobileMenu = false">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div class="absolute left-0 top-0 bottom-0 w-[280px] flex flex-col animate-slide-in"
               style="background-color: var(--bg-card)" (click)="$event.stopPropagation()">
            <div class="flex items-center justify-between px-5 py-4 border-b" style="border-color:var(--border)">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl flex items-center justify-center" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/></svg>
                </div>
                <h1 class="text-sm font-bold font-heading">Minyfin</h1>
              </div>
              <button (click)="mobileMenu = false" class="p-1.5 rounded-lg" style="color:var(--fg-muted)">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round"/></svg>
              </button>
            </div>
            <nav class="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
              @for (item of allNavItems; track item.path) {
                <a [routerLink]="item.path" (click)="mobileMenu = false"
                   class="nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all">
                  <span [innerHTML]="item.safeIcon" class="flex-shrink-0 opacity-70 nav-icon"></span>
                  {{ item.label }}
                </a>
              }
            </nav>
          </div>
        </div>
      }

      <!-- Mobile Bottom Nav -->
      <nav class="lg:hidden fixed bottom-0 inset-x-0 z-20 border-t safe-area-bottom"
           style="background-color:color-mix(in srgb, var(--bg-card) 95%, transparent);backdrop-filter:blur(20px);border-color:var(--border)">
        <div class="flex items-center justify-around px-2 py-1">
          @for (item of mobileNavItems; track item.path) {
            <a [routerLink]="item.path" routerLinkActive="mob-active" [attr.data-testid]="'mobile-nav-' + item.label.toLowerCase()"
               class="mob-nav-item flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all min-w-[52px]">
              <span [innerHTML]="item.safeIcon || item.icon" class="mob-icon"></span>
              <span class="text-[10px] font-semibold">{{ item.label }}</span>
            </a>
          }
        </div>
      </nav>
    </div>
  `,
  styles: [`
    .nav-item { color: var(--fg-muted); transition: all 0.15s ease; position: relative; }
    .nav-item:hover { color: var(--fg); background-color: var(--muted); }
    .nav-item:hover .nav-icon { opacity: 0.9 !important; }
    .nav-icon { transition: opacity 0.15s; }
    .active-nav {
      background: linear-gradient(90deg, rgba(13,148,136,0.13) 0%, rgba(13,148,136,0.04) 100%) !important;
      color: #0D9488 !important; font-weight: 700;
      box-shadow: inset 3px 0 0 #0D9488;
    }
    .active-nav .nav-icon { opacity: 1 !important; }
    .logout-btn { color: var(--fg-muted); transition: all 0.15s ease; }
    .logout-btn:hover { color: #EF4444; background-color: rgba(239,68,68,0.07); }
    .hover-muted:hover { background-color: var(--muted); }
    .mob-nav-item { color: var(--fg-muted); transition: all 0.15s; }
    .mob-nav-item:hover { color: var(--fg); }
    .mob-active { color: #0D9488 !important; font-weight: 700; }
    .mob-active .mob-icon :deep(svg) { stroke: #0D9488 !important; }
    @keyframes slide-in { from { transform: translateX(-100%); } to { transform: translateX(0); } }
    .animate-slide-in { animation: slide-in 0.22s cubic-bezier(0.16,1,0.3,1); }
  `]

})
export class ParentLayoutComponent {
  auth = inject(AuthService);
  themeService = inject(ThemeService);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);
  mobileMenu = false;
  getAvatarColor = getAvatarColor;

  navItems: NavItem[];
  settingsNav: NavItem;
  allNavItems: NavItem[];
  mobileNavItems: NavItem[];

  constructor() {
    const s = (html: string) => this.sanitizer.bypassSecurityTrustHtml(html);
    const raw = [
      { path: '/dashboard', label: 'Dashboard', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1" stroke-width="2"/><rect x="14" y="3" width="7" height="5" rx="1" stroke-width="2"/><rect x="14" y="12" width="7" height="9" rx="1" stroke-width="2"/><rect x="3" y="16" width="7" height="5" rx="1" stroke-width="2"/></svg>' },
      { path: '/tasks', label: 'Tasks', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-width="2"/></svg>' },
      { path: '/wallet', label: 'Wallet', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/><path d="M2 10h20" stroke-width="2"/></svg>' },
      { path: '/goals', label: 'Goals', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><circle cx="12" cy="12" r="6" stroke-width="2"/><circle cx="12" cy="12" r="2" stroke-width="2"/></svg>' },
      { path: '/sip', label: 'Invest', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="17 6 23 6 23 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
      { path: '/loans', label: 'Borrow', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" stroke-width="2"/><line x1="2" y1="10" x2="22" y2="10" stroke-width="2"/></svg>' },
      { path: '/learning', label: 'Learn', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" stroke-width="2"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke-width="2"/></svg>' },
    ];
    this.navItems = raw.map(n => ({ ...n, safeIcon: s(n.icon) }));
    this.settingsNav = { path: '/settings', label: 'Settings', icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke-width="2"/></svg>', safeIcon: s('<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke-width="2"/></svg>') };
    this.allNavItems = [...this.navItems, this.settingsNav];
    this.mobileNavItems = [
      this.navItems[0], this.navItems[1], this.navItems[2], this.navItems[6],
      { path: '/settings', label: 'More', icon: '', safeIcon: s('<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke-width="2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke-width="2"/></svg>') },
    ];
  }

  selectKid(event: Event) {
    const id = (event.target as HTMLSelectElement).value;
    const kid = this.auth.kids().find(k => k.id === id);
    if (kid) this.auth.selectedKid.set(kid);
  }

  async doLogout() {
    await this.auth.logout();
    this.router.navigate(['/']);
  }
}
