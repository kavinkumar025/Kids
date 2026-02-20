import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../services/seo.service';
import { FirestoreService } from '../services/firestore.service';
import { Testimonial, FaqItem } from '../models/interfaces';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="min-h-screen overflow-x-hidden" style="background-color:var(--canvas)">

      <!-- Navbar -->
      <header class="sticky top-0 inset-x-0 z-50 glass border-b" style="border-color:var(--border)" data-testid="landing-nav">
        <div class="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a routerLink="/" class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
            </div>
            <span class="font-bold font-heading text-base tracking-tight">Minyfin</span>
          </a>
          <nav class="flex items-center gap-1.5">
            <a routerLink="/login" class="text-sm font-semibold px-4 py-2 rounded-full transition-colors" style="color:var(--fg-muted)" data-testid="landing-login-btn">Sign In</a>
            <a routerLink="/signup" class="btn-teal !py-2 !px-5 !text-sm" data-testid="landing-signup-btn">Get Started</a>
          </nav>
        </div>
      </header>

      <!-- Hero -->
      <section style="background:linear-gradient(160deg,rgba(13,148,136,0.06) 0%,transparent 55%),var(--canvas)">
        <div class="max-w-6xl mx-auto px-5 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <!-- Left copy -->
          <div class="animate-fade-up">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold font-heading tracking-wide mb-6"
                 style="background:rgba(13,148,136,0.10);color:#0D9488" data-testid="hero-badge">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              Trusted by 2,400+ Families
            </div>
            <h1 class="font-extrabold font-heading tracking-tight mb-5" style="font-size:clamp(2.2rem,4.5vw,3.5rem);line-height:1.1;color:var(--fg)">
              Tasks done.<br>Coins earned.<br>
              <span style="background:linear-gradient(135deg,#0D9488,#14B8A6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Money lessons learned.</span>
            </h1>
            <p class="text-lg leading-relaxed max-w-lg mb-8" style="color:var(--fg-muted)">
              Parents assign chores &amp; tasks. Kids complete them to earn virtual coins. Together, your family builds real financial discipline — with zero real-money risk.
            </p>
            <div class="flex flex-wrap gap-3 mb-10">
              <a routerLink="/signup" class="btn-teal !px-7 !py-3.5 !text-base" data-testid="hero-cta">Start for Free &#8594;</a>
              <a routerLink="/login" class="btn-ghost !px-6 !py-3.5 !text-base">Sign In</a>
            </div>
            <!-- Social proof -->
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

          <!-- Right: dashboard preview (desktop) -->
          <div class="hidden lg:block animate-fade-up stagger-2">
            <div class="relative ml-6">
              <div class="card-widget p-6 rounded-3xl relative z-10" style="box-shadow:var(--shadow-float)">
                <!-- Profile -->
                <div class="flex items-center justify-between mb-5">
                  <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-base" style="background:linear-gradient(135deg,#3B82F6,#06B6D4)">S</div>
                    <div>
                      <p class="text-sm font-bold font-heading">Sarah's Dashboard</p>
                      <p class="text-xs font-medium" style="color:#10B981">&#9679; Level 5 &mdash; Budget Hero</p>
                    </div>
                  </div>
                  <span class="badge" style="background:rgba(13,148,136,0.10);color:#0D9488">Active</span>
                </div>
                <!-- Balance -->
                <div class="rounded-2xl p-5 mb-4" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
                  <p class="text-xs font-medium mb-1" style="color:rgba(255,255,255,0.65)">Total Balance</p>
                  <p class="text-3xl font-extrabold text-white font-heading">&#8373; 2,450</p>
                  <div class="flex gap-4 mt-2.5">
                    <div><p class="text-[10px]" style="color:rgba(255,255,255,0.55)">Earned</p><p class="text-xs font-bold text-white">3,120</p></div>
                    <div><p class="text-[10px]" style="color:rgba(255,255,255,0.55)">Saved</p><p class="text-xs font-bold text-white">680</p></div>
                    <div><p class="text-[10px]" style="color:rgba(255,255,255,0.55)">Invested</p><p class="text-xs font-bold text-white">240</p></div>
                  </div>
                </div>
                <!-- Activity -->
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
                      <p class="text-[10px]" style="color:var(--fg-muted)">SIP &mdash; Auto</p>
                    </div>
                    <span class="text-xs font-bold" style="color:#A855F7">-100</span>
                  </div>
                </div>
              </div>
              <!-- Floating badges -->
              <!-- <div class="absolute top-3 right-3 card-widget px-3.5 py-2.5 rounded-2xl z-20 animate-fade-up stagger-3" style="box-shadow:var(--shadow-float)">
                <div class="flex items-center gap-2">
                  <span class="text-lg">&#11088;</span>
                  <div><p class="text-xs font-bold font-heading">+50 XP</p><p class="text-[10px]" style="color:var(--fg-muted)">Level up!</p></div>
                </div>
              </div> -->
              <!-- <div class="absolute bottom-3 left-3 card-widget px-3.5 py-2.5 rounded-2xl z-20 animate-fade-up stagger-4" style="box-shadow:var(--shadow-float)">
                <p class="text-[10px] font-medium" style="color:var(--fg-muted)">Credit Score</p>
                <p class="text-xl font-extrabold font-heading" style="color:#10B981">750</p>
              </div> -->
            </div>
          </div>
        </div>
      </section>

      <!-- Stats bar -->
      <section class="border-t border-b" style="background:var(--surface);border-color:var(--border)">
        <div class="max-w-6xl mx-auto px-5 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          @for (stat of stats; track stat.label) {
            <div class="text-center">
              <p class="text-2xl font-extrabold font-heading" style="color:#0D9488">{{ stat.value }}</p>
              <p class="text-xs mt-0.5" style="color:var(--fg-muted)">{{ stat.label }}</p>
            </div>
          }
        </div>
      </section>

      <!-- For Parents & For Kids -->
      <section class="py-16 lg:py-24 px-5">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <p class="text-xs font-bold font-heading uppercase tracking-widest mb-3" style="color:#0D9488">Built for the whole family</p>
            <h2 class="text-3xl lg:text-4xl font-bold font-heading tracking-tight">One platform, two experiences</h2>
          </div>
          <div class="grid lg:grid-cols-2 gap-6">
            <!-- For Parents -->
            <div class="relative overflow-hidden rounded-3xl p-8" style="background:linear-gradient(135deg,#0D9488,#0F766E)">
              <div class="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10" style="background:white;transform:translate(30%,-30%)"></div>
              <div class="relative z-10">
                <div class="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center" style="background:rgba(255,255,255,0.18)">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <h3 class="text-xl font-bold font-heading text-white mb-3">For Parents</h3>
                <ul class="space-y-2.5 mb-7">
                  @for (item of parentFeatures; track item) {
                    <li class="flex items-start gap-2.5">
                      <svg class="w-4 h-4 mt-0.5 flex-shrink-0" style="color:rgba(255,255,255,0.7)" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                      <span class="text-sm" style="color:rgba(255,255,255,0.85)">{{ item }}</span>
                    </li>
                  }
                </ul>
                <a routerLink="/signup" class="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold font-heading text-sm transition-transform hover:scale-105" style="background:white;color:#0D9488">
                  Get Started as Parent &#8594;
                </a>
              </div>
            </div>
            <!-- For Kids -->
            <div class="relative overflow-hidden rounded-3xl p-8" style="background:linear-gradient(135deg,#7C3AED,#A855F7)">
              <div class="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10" style="background:white;transform:translate(30%,-30%)"></div>
              <div class="relative z-10">
                <div class="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center" style="background:rgba(255,255,255,0.18)">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 class="text-xl font-bold font-heading text-white mb-3">For Kids</h3>
                <ul class="space-y-2.5 mb-7">
                  @for (item of kidFeatures; track item) {
                    <li class="flex items-start gap-2.5">
                      <svg class="w-4 h-4 mt-0.5 flex-shrink-0" style="color:rgba(255,255,255,0.7)" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                      <span class="text-sm" style="color:rgba(255,255,255,0.85)">{{ item }}</span>
                    </li>
                  }
                </ul>
                <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,0.18);color:white">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                  Kids join via parent invite
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="py-16 lg:py-24 px-5" style="background:var(--surface)">
        <div class="max-w-6xl mx-auto">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <p class="text-xs font-bold font-heading uppercase tracking-widest mb-3" style="color:#0D9488">Everything they need</p>
            <h2 class="text-3xl lg:text-4xl font-bold font-heading tracking-tight leading-tight">Real-world skills,<br>zero real risk.</h2>
            <p class="mt-4 text-base leading-relaxed" style="color:var(--fg-muted)">6 powerful modules that take kids from earning their first coin to understanding compound interest.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            @for (f of features; track f.title) {
              <div class="card-widget p-6 rounded-2xl hover-lift" [attr.data-testid]="'feature-' + f.key">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center mb-4" [style.background]="f.bg">
                  <svg class="w-5 h-5" [style.color]="f.color" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    @if (f.key === 'tasks')     { <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/> }
                    @if (f.key === 'saving')    { <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/> }
                    @if (f.key === 'investing') { <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/> }
                    @if (f.key === 'stories')   { <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/> }
                    @if (f.key === 'credit')    { <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/> }
                    @if (f.key === 'levels')    { <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/> }
                  </svg>
                </div>
                <h3 class="font-bold font-heading text-base mb-1.5 tracking-tight">{{ f.title }}</h3>
                <p class="text-sm leading-relaxed" style="color:var(--fg-muted)">{{ f.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- How it works -->
      <section class="py-16 lg:py-24 px-5">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <p class="text-xs font-bold font-heading uppercase tracking-widest mb-3" style="color:#0D9488">Simple setup</p>
            <h2 class="text-3xl lg:text-4xl font-bold font-heading tracking-tight">Up and running<br>in under 5 minutes.</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            @for (step of steps; track step.n) {
              <div class="text-center animate-fade-up">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white font-extrabold font-heading text-xl" style="background:linear-gradient(135deg,#0D9488,#14B8A6);box-shadow:0 8px 20px -4px rgba(13,148,136,0.35)">{{ step.n }}</div>
                <h3 class="font-bold font-heading mb-2 tracking-tight">{{ step.title }}</h3>
                <p class="text-sm leading-relaxed" style="color:var(--fg-muted)">{{ step.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="py-16 lg:py-24 px-5" style="background:var(--surface)">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <p class="text-xs font-bold font-heading uppercase tracking-widest mb-3" style="color:#0D9488">Real families</p>
            <h2 class="text-3xl lg:text-4xl font-bold font-heading tracking-tight">Parents &amp; kids love it</h2>
          </div>

          @if (testimonialsLoading()) {
            <div class="flex justify-center py-12">
              <div class="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin" style="border-color:#0D9488;border-top-color:transparent"></div>
            </div>
          } @else if (testimonials().length === 0) {
            <div class="card-widget p-6 rounded-2xl text-center" style="color:var(--fg-muted)">
              No approved reviews yet.
            </div>
          } @else {
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              @for (t of testimonials(); track t.id) {
                <div class="card-widget p-5 rounded-2xl hover-lift">
                  <div class="flex gap-0.5 mb-3">
                    @for (s of [1,2,3,4,5]; track s) {
                      <svg class="w-4 h-4" fill="#F59E0B" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    }
                  </div>
                  <p class="text-sm leading-relaxed mb-4" style="color:var(--fg-muted)">"{{ t.text }}"</p>
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" [style.background]="t.bg">{{ t.name[0] }}</div>
                    <div>
                      <p class="text-sm font-semibold font-heading">{{ t.name }}</p>
                      <p class="text-xs" style="color:var(--fg-muted)">{{ t.role }}</p>
                    </div>
                  </div>
                </div>
              }
            </div>
          }

        </div>
      </section>

      <!-- FAQ -->
      <section class="py-16 lg:py-24 px-5">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <p class="text-xs font-bold font-heading uppercase tracking-widest mb-3" style="color:#0D9488">Questions answered</p>
            <h2 class="text-3xl lg:text-4xl font-bold font-heading tracking-tight">Frequently asked</h2>
          </div>
          @if (faqsLoading()) {
            <div class="flex justify-center py-8">
              <div class="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin" style="border-color:#0D9488;border-top-color:transparent"></div>
            </div>
          } @else if (faqs().length === 0) {
            <div class="card-widget p-6 rounded-2xl text-center" style="color:var(--fg-muted)">
              FAQs will appear here once added by admin.
            </div>
          } @else {
            <div class="space-y-3">
              @for (faq of faqs(); track faq.id) {
                <div class="card-widget p-5 rounded-2xl">
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(13,148,136,0.12)">
                      <svg class="w-3 h-3" style="color:#0D9488" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                      <p class="font-semibold font-heading text-sm mb-1.5">{{ faq.q }}</p>
                      <p class="text-sm leading-relaxed" style="color:var(--fg-muted)">{{ faq.a }}</p>
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </section>

      <!-- CTA -->
      <section class="py-16 lg:py-24 px-5" style="background:var(--surface)">
        <div class="max-w-3xl mx-auto text-center">
          <div class="rounded-3xl p-10 lg:p-16 relative overflow-hidden" style="background:linear-gradient(135deg,#0D9488 0%,#0F766E 100%)">
            <div class="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.08]" style="background:white;transform:translate(35%,-40%)"></div>
            <div class="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.06]" style="background:white;transform:translate(-35%,40%)"></div>
            <div class="relative z-10">
              <div class="text-4xl mb-4">&#127919;</div>
              <h2 class="text-2xl lg:text-4xl font-bold font-heading text-white mb-4 tracking-tight">Start your family's<br>financial journey today.</h2>
              <p class="text-base mb-8 max-w-sm mx-auto" style="color:rgba(255,255,255,0.72)">No real money. No risk. Just fun financial lessons your kids will actually enjoy.</p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <a routerLink="/signup" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-full font-bold font-heading tracking-tight hover:scale-105 transition-transform text-base" style="color:#0D9488" data-testid="cta-signup">
                  Get Started Free
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a routerLink="/login" class="inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold font-heading border-2 text-white transition-colors text-base" style="border-color:rgba(255,255,255,0.3)">
                  Sign In
                </a>
              </div>
              <p class="mt-5 text-sm" style="color:rgba(255,255,255,0.55)">Free forever &nbsp;&middot;&nbsp; No credit card &nbsp;&middot;&nbsp; Up to 5 kids</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="px-5 pb-10">
        <div class="max-w-6xl mx-auto pt-8 border-t" style="border-color:var(--border)">
          <div class="flex flex-col md:flex-row items-center justify-between gap-5 mb-6">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
              </div>
              <span class="font-bold font-heading text-sm">Minyfin</span>
            </div>
            <div class="flex gap-6">
              @for (link of footerLinks; track link.label) {
                <a [routerLink]="link.path" class="text-sm font-medium transition-colors" style="color:var(--fg-muted)">{{ link.label }}</a>
              }
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-between gap-3 pt-5 border-t" style="border-color:var(--border)">
            <p class="text-sm" style="color:var(--fg-muted)">&#169; 2026 Minyfin &middot; Built with love for families.</p>
            <div class="flex items-center gap-1.5 text-xs" style="color:var(--fg-muted)">
              <svg class="w-3.5 h-3.5" style="color:#10B981" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              No real money &nbsp;&middot;&nbsp; Safe for kids &nbsp;&middot;&nbsp; Private &amp; secure
            </div>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class LandingPage implements OnInit {
  private seo = inject(SeoService);
  private fs = inject(FirestoreService);

  // Dynamic data
  testimonials = signal<Testimonial[]>([]);
  faqs = signal<FaqItem[]>([]);
  testimonialsLoading = signal(true);
  faqsLoading = signal(true);

  async ngOnInit() {
    this.seo.setPage({
      title: 'Minyfin — Teach Children Financial Literacy Through Tasks & Rewards',
      description: 'Parents assign tasks. Kids complete them to earn virtual coins. Build saving habits, learn investing basics, and develop financial discipline — free for families, no real money involved.'
    });
    this.loadTestimonials();
    this.loadFaqs();
  }

  private async loadTestimonials() {
    this.testimonialsLoading.set(true);
    try {
      const data = await this.fs.getTestimonials(true);
      this.testimonials.set(data);
    } catch {
      this.testimonials.set([]);
    } finally {
      this.testimonialsLoading.set(false);
    }
  }

  private async loadFaqs() {
    this.faqsLoading.set(true);
    try {
      const data = await this.fs.getFaqs(true);
      this.faqs.set(data);
    } catch {
      this.faqs.set([]);
    } finally {
      this.faqsLoading.set(false);
    }
  }

  stats = [
    { value: '2,400+', label: 'Families enrolled' },
    { value: '18,000+', label: 'Tasks completed' },
    { value: '95,000+', label: 'Coins earned' },
    { value: '4.9 ★', label: 'Parent satisfaction' },
  ];

  parentFeatures = [
    'Create tasks & assign coin rewards',
    'Review and approve completed tasks',
    'Monitor wallet balance and savings goals',
    'Track credit score and discipline habits',
    'Manage up to 5 kids per account',
    'Set up automatic SIP investments',
  ];

  kidFeatures = [
    'Complete tasks to earn virtual coins',
    'Save toward goals you actually want',
    'Learn money concepts through fun stories',
    'Level up from Beginner to Money Legend',
    'Build a credit score with good habits',
    'Borrow virtual coins and learn about loans',
  ];

  features = [
    { key: 'tasks',     title: 'Tasks & Rewards',  desc: 'Create chores and missions. Kids complete them to earn virtual coins and build real discipline.',            color: '#0D9488', bg: 'rgba(13,148,136,0.10)' },
    { key: 'saving',    title: 'Smart Goals',       desc: 'Set savings targets and visually track progress toward things they actually want to buy.',                   color: '#3B82F6', bg: 'rgba(59,130,246,0.10)' },
    { key: 'investing', title: 'SIP Investing',     desc: 'Understand compound interest and long-term wealth through recurring virtual investments.',                   color: '#A855F7', bg: 'rgba(168,85,247,0.10)' },
    { key: 'stories',   title: 'Financial Stories', desc: 'Interactive lessons with quizzes. Learn money concepts through fun, age-appropriate stories.',               color: '#F97316', bg: 'rgba(249,115,22,0.10)' },
    { key: 'credit',    title: 'Credit Score',      desc: 'A gamified score that rewards responsibility — completing tasks, hitting savings goals, repaying loans.',    color: '#EC4899', bg: 'rgba(236,72,153,0.10)' },
    { key: 'levels',    title: '10 Skill Levels',   desc: 'Progress from Money Beginner to Money Legend as skills, habits, and XP accumulate over time.',              color: '#F59E0B', bg: 'rgba(245,158,11,0.10)' },
  ];

  steps = [
    { n: 1, title: 'Create your account',     desc: 'Sign up as a parent in seconds. No credit card, no real money involved.' },
    { n: 2, title: 'Add your children',        desc: 'Create kid profiles with avatars, themes, and a secure PIN login.' },
    { n: 3, title: 'Start learning together',  desc: 'Assign tasks, approve completions, and watch your kids build lifelong financial habits.' },
  ];

  footerLinks = [
    { label: 'Sign In', path: '/login' },
    { label: 'Sign Up', path: '/signup' },
  ];
}
