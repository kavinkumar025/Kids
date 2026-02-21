import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="min-h-screen flex flex-col items-center justify-center p-4" style="background-color:var(--canvas)">

      <!-- Logo -->
      <a routerLink="/" class="flex items-center gap-2.5 mb-6">
        <div class="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md"
             style="background:linear-gradient(135deg,#0D9488,#14B8A6);box-shadow:0 4px 14px -3px rgba(13,148,136,0.40)">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/>
          </svg>
        </div>
        <span class="font-bold font-heading text-xl tracking-tight" style="color:var(--fg)">Minyfin</span>
      </a>

      <div class="w-full max-w-md">

        <!-- Heading -->
        <div class="text-center mb-5">
          <h1 class="font-extrabold font-heading text-2xl tracking-tight mb-1" style="color:var(--fg)">
            {{ tab() === 'parent' ? (adminMode() ? 'Admin Sign In' : 'Welcome back') : "Kid&apos;s Sign In" }}
          </h1>
          <p class="text-sm" style="color:var(--fg-muted)">
            {{ tab() === 'parent' ? (adminMode() ? 'Sign in to the admin panel.' : 'Sign in to your Minyfin parent account.') : 'Enter your details to access your space.' }}
          </p>
        </div>

        <div class="card p-6">

          <!-- Tab switcher -->
          <div class="flex rounded-2xl p-1 mb-5 gap-1" style="background:var(--muted)" data-testid="login-tabs">
            <button (click)="tab.set('parent'); error.set('')"
                    class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold font-heading transition-all"
                    [style.background]="tab() === 'parent' ? 'var(--bg-card)' : 'transparent'"
                    [style.color]="tab() === 'parent' ? 'var(--fg)' : 'var(--fg-muted)'"
                    [style.box-shadow]="tab() === 'parent' ? '0 1px 4px rgba(0,0,0,0.10)' : 'none'"
                    data-testid="login-tab-parent">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke-width="2"/><circle cx="12" cy="7" r="4" stroke-width="2"/>
              </svg>
              Parent / Admin
            </button>
            <button (click)="tab.set('kid'); error.set('')"
                    class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold font-heading transition-all"
                    [style.background]="tab() === 'kid' ? 'var(--bg-card)' : 'transparent'"
                    [style.color]="tab() === 'kid' ? 'var(--fg)' : 'var(--fg-muted)'"
                    [style.box-shadow]="tab() === 'kid' ? '0 1px 4px rgba(0,0,0,0.10)' : 'none'"
                    data-testid="login-tab-kid">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-width="2"/>
              </svg>
              Kid
            </button>
          </div>

          <!-- Parent / Admin Form -->
          @if (tab() === 'parent') {
            <form (ngSubmit)="handleParentLogin()" class="space-y-4">
              @if (adminMode()) {
                <div class="space-y-1.5">
                  <label class="label">Admin Username</label>
                  <input class="input" type="text" placeholder="Admin" [(ngModel)]="adminUsername" name="adminUsername" data-testid="admin-user-input" autocomplete="username">
                </div>
              } @else {
                <div class="space-y-1.5">
                  <label class="label">Email Address</label>
                  <input class="input" type="email" placeholder="parent@example.com" [(ngModel)]="email" name="email" data-testid="login-email-input" autocomplete="email">
                </div>
              }

              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <label class="label">{{ adminMode() ? 'Admin Password' : 'Password' }}</label>
                  @if (!adminMode()) {
                    <button type="button" (click)="showPass.set(!showPass())" class="text-xs font-semibold" style="color:#0D9488">
                      {{ showPass() ? 'Hide' : 'Show' }}
                    </button>
                  }
                </div>
                <input class="input" [type]="showPass() ? 'text' : 'password'"
                       [placeholder]="adminMode() ? 'Welcome@123' : 'Your password'"
                       [(ngModel)]="password" name="password"
                       data-testid="login-password-input" autocomplete="current-password">
              </div>

              @if (error()) {
                <div class="flex items-center gap-2 p-3 rounded-xl text-sm" style="background:rgba(239,68,68,0.08);color:#EF4444;border:1px solid rgba(239,68,68,0.18)">
                  <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {{ error() }}
                </div>
              }

              <button type="submit" class="btn-teal w-full !py-3 !text-sm flex items-center justify-center gap-2"
                      [disabled]="loading()" data-testid="login-submit-btn">
                @if (loading()) {
                  <div class="w-4 h-4 rounded-full border-2 animate-spin" style="border-color:rgba(255,255,255,0.3);border-top-color:white"></div>
                  Signing in...
                } @else {
                  {{ adminMode() ? 'Sign In as Admin' : 'Sign In' }}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                }
              </button>
            </form>

            @if (!adminMode()) {
              <p class="text-center text-sm mt-5" style="color:var(--fg-muted)">
                Don&apos;t have an account?
                <a routerLink="/signup" class="font-semibold ml-1" style="color:#0D9488" data-testid="login-to-signup">Create one free</a>
              </p>
            }
          }

          <!-- Kid Form -->
          @if (tab() === 'kid') {
            <form (ngSubmit)="handleKidLogin()" class="space-y-4">
              <div class="space-y-1.5">
                <label class="label">Parent&apos;s Email</label>
                <input class="input" type="email" placeholder="parent@example.com" [(ngModel)]="parentEmail" name="parentEmail" data-testid="kid-login-parent-email" autocomplete="email">
              </div>
              <div class="space-y-1.5">
                <label class="label">Your Name</label>
                <input class="input" type="text" placeholder="What&apos;s your name?" [(ngModel)]="kidName" name="kidName" data-testid="kid-login-name" autocomplete="name">
              </div>
              <div class="space-y-1.5">
                <label class="label">Your Secret PIN</label>
                <input class="input text-center tracking-[0.5em] text-lg font-bold"
                       type="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
                       [(ngModel)]="kidPin" name="kidPin" maxlength="6"
                       data-testid="kid-login-pin" autocomplete="current-password">
              </div>

              @if (error()) {
                <div class="flex items-center gap-2 p-3 rounded-xl text-sm" style="background:rgba(239,68,68,0.08);color:#EF4444;border:1px solid rgba(239,68,68,0.18)">
                  <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {{ error() }}
                </div>
              }

              <button type="submit" class="btn-teal w-full !py-3 !text-sm flex items-center justify-center gap-2"
                      [disabled]="loading()" data-testid="kid-login-submit-btn">
                @if (loading()) {
                  <div class="w-4 h-4 rounded-full border-2 animate-spin" style="border-color:rgba(255,255,255,0.3);border-top-color:white"></div>
                  Signing in...
                } @else {
                  Let&apos;s Go!
                }
              </button>
            </form>

            <div class="mt-5 p-4 rounded-xl text-sm text-center" style="background:var(--muted);color:var(--fg-muted)">
              Ask your parent to create your account and share your PIN with you.
            </div>
          }

        </div>

        <!-- Admin link -->
        @if (!adminMode() && tab() === 'parent') {
          <p class="text-center text-xs mt-5" style="color:var(--fg-muted)">
            <a routerLink="/login" [queryParams]="{admin: ''}" class="hover:underline">Admin access</a>
          </p>
        }
      </div>
    </div>
  `
})
export class LoginPage implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  ngOnInit() {
    this.adminMode.set(this.route.snapshot.queryParamMap.has('admin'));
    this.seo.setPage({
      title: 'Sign In',
      description: 'Sign in to your Minyfin account to manage your children\'s financial learning, tasks, and rewards.'
    });
  }

  adminMode = signal(false);
  tab = signal<'parent' | 'kid'>('parent');
  adminUsername = '';
  email = ''; password = ''; showPass = signal(false);
  parentEmail = ''; kidName = ''; kidPin = '';
  loading = signal(false); error = signal('');

  async handleParentLogin() {
    if (this.adminMode()) {
      if (!this.adminUsername || !this.password) { this.error.set('Please fill in all fields'); return; }
      this.loading.set(true); this.error.set('');
      try {
        if (this.adminUsername === 'Admin' && this.password === 'Welcome@123') {
          sessionStorage.setItem('km_admin_auth', '1');
          this.router.navigate(['/admin']);
        } else {
          this.error.set('Invalid admin credentials');
        }
      } finally { this.loading.set(false); }
      return;
    }

    if (!this.email || !this.password) { this.error.set('Please fill in all fields'); return; }
    this.loading.set(true); this.error.set('');
    try {
      await this.auth.login(this.email, this.password);
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      this.error.set(err.message || 'Login failed');
    } finally { this.loading.set(false); }
  }

  async handleKidLogin() {
    if (!this.parentEmail || !this.kidName || !this.kidPin) { this.error.set('Please fill in all fields'); return; }
    this.loading.set(true); this.error.set('');
    try {
      await this.auth.kidLogin(this.parentEmail, this.kidName, this.kidPin);
      this.router.navigate(['/kid/dashboard']);
    } catch (err: any) {
      this.error.set(err.message || 'Login failed');
    } finally { this.loading.set(false); }
  }
}
