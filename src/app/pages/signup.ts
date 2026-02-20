import { Component, inject, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="min-h-screen flex" style="background-color: var(--bg)">

      <!-- Left brand panel (desktop only) -->
      <div class="hidden lg:flex lg:flex-col lg:w-[44%] xl:w-[40%] p-12 relative overflow-hidden" style="background: linear-gradient(145deg,#0D9488 0%,#0F766E 60%,#115E59 100%)">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.07]" style="background:white;transform:translate(40%,-30%)"></div>
          <div class="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.06]" style="background:white;transform:translate(-30%,35%)"></div>
        </div>
        <a routerLink="/" class="flex items-center gap-2.5 mb-auto relative z-10">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:rgba(255,255,255,0.18)">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
          </div>
          <span class="font-bold font-heading text-white text-base">Kids Money</span>
        </a>
        <div class="relative z-10 mt-16">
          <h2 class="text-3xl font-extrabold font-heading text-white mb-4 tracking-tight leading-tight">Start your family's financial journey today</h2>
          <p class="text-base mb-10" style="color:rgba(255,255,255,0.72)">Join thousands of families teaching kids real money skills — with zero real money involved.</p>
          <div class="p-5 rounded-2xl" style="background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.14)">
            <p class="text-sm font-semibold font-heading text-white mb-1">What's included:</p>
            <ul class="space-y-1.5 mt-2">
              <li class="flex items-center gap-2 text-sm" style="color:rgba(255,255,255,0.80)">
                <svg class="w-4 h-4 flex-shrink-0" style="color:rgba(255,255,255,0.60)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Unlimited task creation &amp; rewards
              </li>
              <li class="flex items-center gap-2 text-sm" style="color:rgba(255,255,255,0.80)">
                <svg class="w-4 h-4 flex-shrink-0" style="color:rgba(255,255,255,0.60)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Savings goals, SIP investing &amp; loans
              </li>
              <li class="flex items-center gap-2 text-sm" style="color:rgba(255,255,255,0.80)">
                <svg class="w-4 h-4 flex-shrink-0" style="color:rgba(255,255,255,0.60)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Financial stories, quizzes &amp; achievements
              </li>
              <li class="flex items-center gap-2 text-sm" style="color:rgba(255,255,255,0.80)">
                <svg class="w-4 h-4 flex-shrink-0" style="color:rgba(255,255,255,0.60)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Up to 5 kids per family account
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Right form panel -->
      <div class="flex-1 flex items-center justify-center p-6 lg:p-12">
      <div class="w-full max-w-md">
        <a routerLink="/" class="inline-flex items-center gap-2 text-sm mb-8 lg:hidden" style="color:var(--fg-muted)">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" stroke-width="2"/></svg>
          Back to home
        </a>

        <h1 class="text-2xl font-extrabold font-heading tracking-tight mb-1">Create your account</h1>
        <p class="text-sm mb-8" style="color:var(--fg-muted)">Start your family's financial journey — completely free.</p>

        <div class="card p-7 lg:p-8">
          <form (ngSubmit)="handleSignup()" class="space-y-5">
            <div>
              <label class="label">Full Name</label>
              <input class="input" type="text" placeholder="Your full name" [(ngModel)]="fullName" name="fullName" data-testid="signup-name-input">
            </div>
            <div>
              <label class="label">Email</label>
              <input class="input" type="email" placeholder="parent&#64;example.com" [(ngModel)]="email" name="email" data-testid="signup-email-input">
            </div>
            <div>
              <label class="label">Password</label>
              <input class="input" type="password" placeholder="Min 6 characters" [(ngModel)]="password" name="password" data-testid="signup-password-input">
            </div>
            @if (error()) { <p class="text-sm px-3 py-2 rounded-xl" style="color:#EF4444;background:rgba(239,68,68,0.08)">{{ error() }}</p> }
            <button type="submit" class="btn-teal w-full py-3.5" [disabled]="loading()" data-testid="signup-submit-btn">
              {{ loading() ? 'Creating account...' : 'Create Account' }}
            </button>
          </form>
          <p class="text-center text-sm mt-6" style="color:var(--fg-muted)">
            Already have an account? <a routerLink="/login" class="font-semibold text-primary" data-testid="signup-to-login">Sign in</a>
          </p>
        </div>
      </div>
      </div>
    </div>
  `
})
export class SignupPage {
  private auth = inject(AuthService);
  private router = inject(Router);
  fullName = ''; email = ''; password = '';
  loading = signal(false); error = signal('');

  async handleSignup() {
    if (!this.fullName || !this.email || !this.password) { this.error.set('Please fill in all fields'); return; }
    if (this.password.length < 6) { this.error.set('Password must be at least 6 characters'); return; }
    this.loading.set(true); this.error.set('');
    try {
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out. Please check your Firebase configuration.')), 15000));
      await Promise.race([this.auth.signup(this.fullName, this.email, this.password), timeoutPromise]);
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      const msg = err?.code === 'auth/configuration-not-found'
        ? 'Firebase Auth not configured. Please enable Email/Password sign-in in Firebase Console.'
        : err?.message || 'Signup failed';
      this.error.set(msg);
    } finally { this.loading.set(false); }
  }
}
