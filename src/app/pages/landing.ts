import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen mesh-gradient">

      <!-- â”€â”€ Navbar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
      <header class="fixed top-0 inset-x-0 z-50 glass" data-testid="landing-nav">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a routerLink="/" class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg,#0D9488,#14B8A6)">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
            </div>
            <span class="font-bold font-heading text-base tracking-tight">Kids Money</span>
          </a>
          <nav class="flex items-center gap-1.5">
            <a routerLink="/login" class="text-sm font-semibold px-4 py-2 rounded-full transition-colors" style="color: var(--fg-muted)" data-testid="landing-login-btn">Sign In</a>
            <a routerLink="/signup" class="btn-teal !py-2 !px-5 !text-sm" data-testid="landing-signup-btn">Get Started</a>
          </nav>
        </div>
      </header>

      <!-- â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
      <section style="padding-top: 64px">
        <div class="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <!-- Left: copy -->
          <div class="animate-fade-up">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold font-heading tracking-wide mb-6"
                 style="background: rgba(13,148,136,0.10); color: #0D9488" data-testid="hero-badge">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              Financial Literacy for Kids
            </div>

            <h1 class="font-extrabold font-heading tracking-tight mb-5" style="font-size: clamp(2.4rem,4.8vw,3.75rem); line-height: 1.08; color: var(--fg)">
              Teach money skills<br>
              <span style="background:linear-gradient(135deg,#0D9488,#14B8A6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">they'll keep forever.</span>
            </h1>

            <p class="text-lg leading-relaxed max-w-lg mb-8" style="color: var(--fg-muted)">
              A gamified platform where kids earn, save, invest, and learn — all with virtual coins, fully managed by you.
            </p>

            <div class="flex flex-wrap gap-3 mb-10">
              <a routerLink="/signup" class="btn-teal !px-8 !py-3.5 !text-base" data-testid="hero-cta">Start for Free →</a>
              <a routerLink="/login" class="btn-ghost !px-7 !py-3.5 !text-base">Sign In</a>
            </div>

            <div class="flex items-center gap-3">
              <div class="flex -space-x-2.5">
                <div class="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[11px] font-bold text-white" style="border-color:var(--canvas);background:#3B82F6">A</div>
                <div class="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[11px] font-bold text-white" style="border-color:var(--canvas);background:#EC4899">S</div>
                <div class="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[11px] font-bold text-white" style="border-color:var(--canvas);background:#10B981">M</div>
                <div class="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[11px] font-bold text-white" style="border-color:var(--canvas);background:#F59E0B">K</div>
              </div>
              <p class="text-sm" style="color:var(--fg-muted)">
                <span class="font-semibold" style="color:var(--fg)">2,400+</span> families learning together
              </p>
            </div>
          </div>

          <!-- Right: dashboard preview -->
          <div class="hidden lg:block animate-fade-up stagger-2">
            <div class="relative ml-8">
              <div class="card-widget p-6 rounded-3xl relative z-10" style="box-shadow: var(--shadow-float)">
                <!-- Profile row -->
                <div class="flex items-center justify-between mb-5">
                  <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-base" style="background:linear-gradient(135deg,#3B82F6,#06B6D4)">S</div>
                    <div>
                      <p class="text-sm font-bold font-heading">Sarah's Dashboard</p>
                      <p class="text-xs font-medium" style="color:#10B981">● Level 5 — Budget Hero</p>
                    </div>
                  </div>
                  <span class="badge" style="background:rgba(13,148,136,0.10);color:#0D9488">Active</span>
                </div>
                <!-- Balance -->
                <div class="rounded-2xl p-5 mb-4" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
                  <p class="text-xs font-medium mb-1" style="color:rgba(255,255,255,0.65)">Total Balance</p>
                  <p class="text-3xl font-extrabold text-white font-heading">₵ 2,450</p>
                  <div class="flex gap-4 mt-2.5">
                    <div><p class="text-[10px]" style="color:rgba(255,255,255,0.55)">Earned</p><p class="text-xs font-bold text-white">3,120</p></div>
                    <div><p class="text-[10px]" style="color:rgba(255,255,255,0.55)">Saved</p><p class="text-xs font-bold text-white">680</p></div>
                    <div><p class="text-[10px]" style="color:rgba(255,255,255,0.55)">Invested</p><p class="text-xs font-bold text-white">240</p></div>
                  </div>
                </div>
                <!-- Transactions -->
                <p class="text-xs font-semibold font-heading mb-2.5" style="color:var(--fg-muted)">Recent Activity</p>
                <div class="space-y-2">
                  <div class="flex items-center gap-3 p-2.5 rounded-xl" style="background:var(--muted)">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(16,185,129,0.12)">
                      <svg class="w-4 h-4" style="color:#10B981" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/></svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-semibold truncate">Cleaned bedroom</p>
                      <p class="text-[10px]" style="color:var(--fg-muted)">Task reward</p>
                    </div>
                    <span class="text-xs font-bold" style="color:#10B981">+25</span>
                  </div>
                  <div class="flex items-center gap-3 p-2.5 rounded-xl" style="background:var(--muted)">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(59,130,246,0.12)">
                      <svg class="w-4 h-4" style="color:#3B82F6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-semibold truncate">Saved to Bicycle goal</p>
                      <p class="text-[10px]" style="color:var(--fg-muted)">Goal savings</p>
                    </div>
                    <span class="text-xs font-bold" style="color:#3B82F6">-50</span>
                  </div>
                  <div class="flex items-center gap-3 p-2.5 rounded-xl" style="background:var(--muted)">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(168,85,247,0.12)">
                      <svg class="w-4 h-4" style="color:#A855F7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-semibold truncate">Monthly SIP investment</p>
                      <p class="text-[10px]" style="color:var(--fg-muted)">SIP — Auto</p>
                    </div>
                    <span class="text-xs font-bold" style="color:#A855F7">-100</span>
                  </div>
                </div>
              </div>

              <!-- Floating XP badge -->
              <div class="absolute -top-4 -right-4 card-widget px-3.5 py-2.5 rounded-2xl z-20 animate-fade-up stagger-3" style="box-shadow:var(--shadow-float)">
                <div class="flex items-center gap-2">
                  <span class="text-lg">⭐</span>
                  <div>
                    <p class="text-xs font-bold font-heading">+50 XP</p>
                    <p class="text-[10px]" style="color:var(--fg-muted)">Level up!</p>
                  </div>
                </div>
              </div>

              <!-- Floating credit score -->
              <div class="absolute -bottom-4 -left-5 card-widget px-3.5 py-2.5 rounded-2xl z-20 animate-fade-up stagger-4" style="box-shadow:var(--shadow-float)">
                <p class="text-[10px] font-medium" style="color:var(--fg-muted)">Credit Score</p>
                <p class="text-xl font-extrabold font-heading" style="color:#10B981">750</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- â”€â”€ Features â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
      <section class="py-20 lg:py-28 px-6" style="background:var(--surface)">
        <div class="max-w-6xl mx-auto">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <p class="text-xs font-bold font-heading uppercase tracking-widest mb-3" style="color:#0D9488">Everything they need</p>
            <h2 class="text-3xl lg:text-[2.5rem] font-bold font-heading tracking-tight leading-[1.15]">Real-world skills,<br>zero real risk.</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            @for (f of features; track f.title) {
              <div class="card-widget card-widget-glow p-7 animate-fade-up" [attr.data-testid]="'feature-' + f.key">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" [style.background]="f.bg">
                  <svg class="w-6 h-6" [style.color]="f.color" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    @if (f.key === 'tasks')    { <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/> }
                    @if (f.key === 'saving')   { <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/> }
                    @if (f.key === 'investing'){ <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/> }
                    @if (f.key === 'stories')  { <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/> }
                    @if (f.key === 'credit')   { <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/> }
                    @if (f.key === 'levels')   { <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/> }
                  </svg>
                </div>
                <h3 class="font-bold font-heading text-base mb-2 tracking-tight">{{ f.title }}</h3>
                <p class="text-sm leading-relaxed" style="color:var(--fg-muted)">{{ f.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- â”€â”€ How it works â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
      <section class="py-20 lg:py-28 px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-14">
            <p class="text-xs font-bold font-heading uppercase tracking-widest mb-3" style="color:#0D9488">Simple setup</p>
            <h2 class="text-3xl lg:text-[2.5rem] font-bold font-heading tracking-tight">Up and running<br>in under 5 minutes.</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            @for (step of steps; track step.n) {
              <div class="text-center animate-fade-up">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white font-extrabold font-heading text-xl" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">{{ step.n }}</div>
                <h3 class="font-bold font-heading mb-2 tracking-tight">{{ step.title }}</h3>
                <p class="text-sm leading-relaxed" style="color:var(--fg-muted)">{{ step.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
      <section class="py-20 lg:py-28 px-6" style="background:var(--surface)">
        <div class="max-w-3xl mx-auto text-center">
          <div class="rounded-3xl p-12 lg:p-20 relative overflow-hidden" style="background:linear-gradient(135deg,#0D9488 0%,#0F766E 100%)">
            <div class="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.08]" style="background:white;transform:translate(35%,-40%)"></div>
            <div class="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.06]" style="background:white;transform:translate(-35%,40%)"></div>
            <div class="relative z-10">
              <h2 class="text-2xl lg:text-4xl font-bold font-heading text-white mb-4 tracking-tight">Start your family's<br>financial journey today.</h2>
              <p class="text-base mb-8 max-w-sm mx-auto" style="color:rgba(255,255,255,0.72)">No real money. No risk. Just fun financial lessons your kids will actually enjoy.</p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <a routerLink="/signup" class="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white rounded-full font-bold font-heading tracking-tight hover:scale-105 transition-transform" style="color:#0D9488" data-testid="cta-signup">
                  Get Started Free
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a routerLink="/login" class="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold font-heading border-2 text-white transition-colors" style="border-color:rgba(255,255,255,0.3)">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- â”€â”€ Footer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
      <footer class="px-6 pb-10">
        <div class="max-w-6xl mx-auto pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style="border-color:var(--border)">
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
              <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
            </div>
            <span class="font-bold font-heading text-sm">Kids Money</span>
          </div>
          <p class="text-sm" style="color:var(--fg-muted)">© 2026 Kids Money · Built with love for families.</p>
          <div class="flex gap-5">
            <a routerLink="/login" class="text-sm font-medium" style="color:var(--fg-muted)">Sign In</a>
            <a routerLink="/signup" class="text-sm font-medium" style="color:var(--fg-muted)">Sign Up</a>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class LandingPage {
  features = [
    { key: 'tasks',     title: 'Tasks & Rewards',    desc: 'Create chores and missions. Kids complete them to earn virtual coins and build real discipline.',       color: '#0D9488', bg: 'rgba(13,148,136,0.10)' },
    { key: 'saving',    title: 'Smart Goals',         desc: 'Set savings targets and visually track progress toward things they actually want to buy.',               color: '#3B82F6', bg: 'rgba(59,130,246,0.10)' },
    { key: 'investing', title: 'SIP Investing',       desc: 'Understand compound interest and long-term wealth through recurring virtual investments.',               color: '#A855F7', bg: 'rgba(168,85,247,0.10)' },
    { key: 'stories',   title: 'Financial Stories',   desc: 'Interactive lessons with quizzes. Learn money concepts through fun, age-appropriate stories.',           color: '#F97316', bg: 'rgba(249,115,22,0.10)' },
    { key: 'credit',    title: 'Credit Score',        desc: 'A gamified score that rewards responsibility — completing tasks, hitting savings, repaying loans.',      color: '#EC4899', bg: 'rgba(236,72,153,0.10)' },
    { key: 'levels',    title: '10 Skill Levels',     desc: 'Progress from Money Beginner to Money Legend as skills, habits, and XP grow over time.',                color: '#F59E0B', bg: 'rgba(245,158,11,0.10)' },
  ];

  steps = [
    { n: 1, title: 'Create your account',      desc: 'Sign up as a parent in seconds. No credit card, no real money involved.' },
    { n: 2, title: 'Add your children',         desc: 'Create kid profiles with avatars, custom themes, and a secret login PIN.' },
    { n: 3, title: 'Start learning together',   desc: 'Assign tasks, set goals, and watch your kids build lifelong financial habits.' },
  ];
}
