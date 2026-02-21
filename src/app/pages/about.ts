import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../services/seo.service';
import { FirestoreService } from '../services/firestore.service';
import { FaqItem } from '../models/interfaces';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="min-h-screen overflow-x-hidden" style="background-color:var(--canvas)">

      <!-- Navbar -->
      <header class="sticky top-0 inset-x-0 z-50 glass border-b" style="border-color:var(--border)">
        <div class="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a routerLink="/" class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
            </div>
            <span class="font-bold font-heading text-base tracking-tight">Minyfin</span>
          </a>
          <nav class="flex items-center gap-1.5">
            <a routerLink="/" class="text-sm font-semibold px-4 py-2 rounded-full transition-colors" style="color:var(--fg-muted)">Home</a>
            <a routerLink="/login" class="text-sm font-semibold px-4 py-2 rounded-full transition-colors" style="color:var(--fg-muted)">Sign In</a>
            <a routerLink="/signup" class="btn-teal !py-2 !px-5 !text-sm">Get Started</a>
          </nav>
        </div>
      </header>

      <!-- Hero -->
      <section class="py-16 lg:py-24 px-5" style="background:linear-gradient(160deg,rgba(13,148,136,0.06) 0%,transparent 60%),var(--canvas)">
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold font-heading tracking-wide mb-6"
               style="background:rgba(13,148,136,0.10);color:#0D9488">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            About Minyfin
          </div>
          <h1 class="font-extrabold font-heading tracking-tight mb-5" style="font-size:clamp(2rem,4vw,3rem);line-height:1.15;color:var(--fg)">
            Teaching kids about money,<br>
            <span style="background:linear-gradient(135deg,#0D9488,#14B8A6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">one coin at a time.</span>
          </h1>
          <p class="text-lg leading-relaxed max-w-2xl mx-auto" style="color:var(--fg-muted)">
            Minyfin is a family-friendly platform that turns everyday chores into financial learning moments. Parents assign tasks, kids earn virtual coins, and everyone builds real money skills — with zero real-money risk.
          </p>
        </div>
      </section>

      <!-- Mission cards -->
      <section class="px-5 pb-16 lg:pb-20">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div class="card-widget p-6 rounded-2xl">
            <div class="w-11 h-11 rounded-2xl flex items-center justify-center mb-4" style="background:rgba(13,148,136,0.10)">
              <svg class="w-5 h-5" style="color:#0D9488" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 class="font-bold font-heading text-base mb-2">Safe &amp; Zero Risk</h3>
            <p class="text-sm leading-relaxed" style="color:var(--fg-muted)">All coins are virtual. No real money ever changes hands. Kids learn with full safety.</p>
          </div>
          <div class="card-widget p-6 rounded-2xl">
            <div class="w-11 h-11 rounded-2xl flex items-center justify-center mb-4" style="background:rgba(59,130,246,0.10)">
              <svg class="w-5 h-5" style="color:#3B82F6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            </div>
            <h3 class="font-bold font-heading text-base mb-2">Fun &amp; Engaging</h3>
            <p class="text-sm leading-relaxed" style="color:var(--fg-muted)">Gamified levels, credit scores, and story-based lessons keep kids motivated to learn.</p>
          </div>
          <div class="card-widget p-6 rounded-2xl">
            <div class="w-11 h-11 rounded-2xl flex items-center justify-center mb-4" style="background:rgba(168,85,247,0.10)">
              <svg class="w-5 h-5" style="color:#A855F7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <h3 class="font-bold font-heading text-base mb-2">Built for Families</h3>
            <p class="text-sm leading-relaxed" style="color:var(--fg-muted)">Parents stay in control while kids build independence. Up to 5 kids per account, free forever.</p>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-16 lg:py-20 px-5" style="background:var(--surface)">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <p class="text-xs font-bold font-heading uppercase tracking-widest mb-3" style="color:#0D9488">Questions answered</p>
            <h2 class="text-3xl lg:text-4xl font-bold font-heading tracking-tight">Frequently asked</h2>
            <p class="mt-3 text-base" style="color:var(--fg-muted)">Everything you need to know about Minyfin.</p>
          </div>

          @if (faqsLoading()) {
            <div class="flex justify-center py-12">
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

      <!-- Contact Us Section -->
      <section class="py-16 lg:py-20 px-5">
        <div class="max-w-2xl mx-auto">
          <div class="text-center mb-10">
            <p class="text-xs font-bold font-heading uppercase tracking-widest mb-3" style="color:#0D9488">Get in touch</p>
            <h2 class="text-3xl lg:text-4xl font-bold font-heading tracking-tight">Contact Us</h2>
            <p class="mt-3 text-base" style="color:var(--fg-muted)">Have a question or feedback? We'd love to hear from you.</p>
          </div>

          <div class="card-widget p-8 rounded-2xl">
            @if (submitSuccess()) {
              <div class="text-center py-10">
                <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background:rgba(13,148,136,0.12)">
                  <svg class="w-8 h-8" style="color:#0D9488" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 class="font-bold font-heading text-lg mb-2">Message sent!</h3>
                <p class="text-sm" style="color:var(--fg-muted)">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button (click)="resetForm()" class="btn-teal mt-6 !px-6 !py-2.5 !text-sm">Send another</button>
              </div>
            } @else {
              <form (ngSubmit)="submitContact()" #contactForm="ngForm" class="space-y-4">

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold font-heading mb-1.5" style="color:var(--fg-muted)">Full Name *</label>
                    <input
                      [(ngModel)]="form.name" name="name" required
                      type="text" placeholder="Your name"
                      class="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-colors"
                      style="background:var(--muted);border-color:var(--border);color:var(--fg)"
                      [class.border-red-400]="nameField?.invalid && nameField?.touched"
                      #nameField="ngModel"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold font-heading mb-1.5" style="color:var(--fg-muted)">Email Address *</label>
                    <input
                      [(ngModel)]="form.email" name="email" required email
                      type="email" placeholder="you@example.com"
                      class="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-colors"
                      style="background:var(--muted);border-color:var(--border);color:var(--fg)"
                      [class.border-red-400]="emailField?.invalid && emailField?.touched"
                      #emailField="ngModel"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold font-heading mb-1.5" style="color:var(--fg-muted)">Subject *</label>
                  <input
                    [(ngModel)]="form.subject" name="subject" required
                    type="text" placeholder="How can we help?"
                    class="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-colors"
                    style="background:var(--muted);border-color:var(--border);color:var(--fg)"
                    [class.border-red-400]="subjectField?.invalid && subjectField?.touched"
                    #subjectField="ngModel"
                  />
                </div>

                <div>
                  <label class="block text-xs font-semibold font-heading mb-1.5" style="color:var(--fg-muted)">Message *</label>
                  <textarea
                    [(ngModel)]="form.message" name="message" required
                    rows="5" placeholder="Tell us more..."
                    class="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-colors resize-none"
                    style="background:var(--muted);border-color:var(--border);color:var(--fg)"
                    [class.border-red-400]="msgField?.invalid && msgField?.touched"
                    #msgField="ngModel"
                  ></textarea>
                </div>

                @if (submitError()) {
                  <div class="text-sm text-red-500 px-1">{{ submitError() }}</div>
                }

                <button
                  type="submit"
                  [disabled]="contactForm.invalid || submitting()"
                  class="btn-teal w-full !py-3.5 !text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  @if (submitting()) {
                    <div class="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin" style="border-color:white;border-top-color:transparent"></div>
                    Sending...
                  } @else {
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9"/></svg>
                    Send Message
                  }
                </button>
              </form>
            }
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="px-5 pb-10" style="background:var(--surface)">
        <div class="max-w-6xl mx-auto pt-8 border-t" style="border-color:var(--border)">
          <div class="flex flex-col md:flex-row items-center justify-between gap-5 mb-6">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>
              </div>
              <span class="font-bold font-heading text-sm">Minyfin</span>
            </div>
            <div class="flex gap-6">
              <a routerLink="/" class="text-sm font-medium transition-colors" style="color:var(--fg-muted)">Home</a>
              <a routerLink="/about" class="text-sm font-medium transition-colors" style="color:var(--fg-muted)">About</a>
              <a routerLink="/login" class="text-sm font-medium transition-colors" style="color:var(--fg-muted)">Sign In</a>
              <a routerLink="/signup" class="text-sm font-medium transition-colors" style="color:var(--fg-muted)">Get Started</a>
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
export class AboutPage implements OnInit {
  private seo = inject(SeoService);
  private fs = inject(FirestoreService);

  faqs = signal<FaqItem[]>([]);
  faqsLoading = signal(true);
  submitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal('');

  form = { name: '', email: '', subject: '', message: '' };

  async ngOnInit() {
    this.seo.setPage({
      title: 'About Minyfin — Teaching Kids Financial Literacy',
      description: 'Learn about Minyfin, our mission, and get answers to frequently asked questions. Contact our team directly through our secure contact form.'
    });
    this.loadFaqs();
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

  async submitContact() {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) return;

    this.submitting.set(true);
    this.submitError.set('');

    try {
      await this.fs.submitContactMessage({
        name: this.form.name.trim(),
        email: this.form.email.trim(),
        subject: this.form.subject.trim(),
        message: this.form.message.trim()
      });
      this.submitSuccess.set(true);
    } catch (err) {
      this.submitError.set('Failed to send message. Please try again.');
    } finally {
      this.submitting.set(false);
    }
  }

  resetForm() {
    this.form = { name: '', email: '', subject: '', message: '' };
    this.submitSuccess.set(false);
    this.submitError.set('');
  }
}
