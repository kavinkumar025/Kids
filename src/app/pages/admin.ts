import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SeoService } from '../services/seo.service';
import { FirestoreService } from '../services/firestore.service';
import { FaqItem, Testimonial } from '../models/interfaces';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen" style="background:var(--bg)">
      <header class="sticky top-0 z-10 border-b px-5 py-3 flex items-center justify-between" style="background:color-mix(in srgb,var(--bg-card) 92%,transparent);border-color:var(--border)">
        <a routerLink="/dashboard" class="inline-flex items-center gap-2 text-sm font-semibold" style="color:var(--fg)">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" stroke-width="2" stroke-linecap="round"/></svg>
          Back to Dashboard
        </a>
        <h2 class="font-bold font-heading text-sm" style="color:var(--fg)">Admin Template</h2>
      </header>

      <div class="animate-fade-in max-w-6xl mx-auto p-5 lg:p-8">
        <div class="page-header-block mb-5">
          <div>
            <h1 class="page-title">Admin</h1>
            <p class="page-subtitle">Manage landing page template content</p>
          </div>
        </div>

        <div class="card p-2 mb-4 inline-flex gap-2">
          <button class="px-4 py-2 rounded-lg text-sm font-semibold" style="background:rgba(13,148,136,0.12);color:#0D9488">
            Template
          </button>
        </div>

        @if (error()) {
          <div class="card p-3 mb-4" style="border:1px solid rgba(239,68,68,0.25)">
            <p class="text-sm" style="color:#EF4444">{{ error() }}</p>
          </div>
        }

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-4">
          <div class="card p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="section-title">Testimonials</h3>
              <button class="btn-ghost !py-2 !px-3 !text-xs" (click)="loadData()" [disabled]="loading()">Refresh</button>
            </div>

            <form class="space-y-2 mb-4" (ngSubmit)="addTestimonial()">
              <input [(ngModel)]="newTestimonial.name" name="t_name" required class="input" placeholder="Name" />
              <input [(ngModel)]="newTestimonial.role" name="t_role" required class="input" placeholder="Role (e.g. Parent of 2)" />
              <textarea [(ngModel)]="newTestimonial.text" name="t_text" required rows="3" class="input" placeholder="Review text"></textarea>
              <div class="flex items-center gap-2">
                <button class="btn-teal !py-2 !px-4 !text-sm" [disabled]="saving()">Add testimonial</button>
                <label class="text-xs flex items-center gap-1" style="color:var(--fg-muted)">
                  <input type="checkbox" [(ngModel)]="newTestimonial.approved" name="t_approved" /> Approved
                </label>
              </div>
            </form>

            <div class="space-y-3 max-h-[520px] overflow-auto pr-1">
              @for (item of testimonials(); track item.id) {
                <div class="rounded-xl p-3" style="background:var(--muted)">
                  <div class="grid grid-cols-1 gap-2 mb-2">
                    <input [(ngModel)]="item.name" [name]="'tn_'+item.id" class="input" />
                    <input [(ngModel)]="item.role" [name]="'tr_'+item.id" class="input" />
                    <textarea [(ngModel)]="item.text" [name]="'tt_'+item.id" rows="3" class="input"></textarea>
                  </div>
                  <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-3">
                      <label class="text-xs flex items-center gap-1" style="color:var(--fg-muted)">
                        <input type="checkbox" [(ngModel)]="item.approved" [name]="'ta_'+item.id" /> Approved
                      </label>
                      <span class="text-[10px] uppercase" style="color:var(--fg-muted)">{{ item.source }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <button class="btn-ghost !py-1.5 !px-3 !text-xs" (click)="saveTestimonial(item)">Save</button>
                      <button class="btn-ghost !py-1.5 !px-3 !text-xs" style="color:#EF4444" (click)="deleteTestimonial(item.id)">Delete</button>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <div class="card p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="section-title">Frequently Asked Questions</h3>
            </div>

            <form class="space-y-2 mb-4" (ngSubmit)="addFaq()">
              <input [(ngModel)]="newFaq.q" name="f_q" required class="input" placeholder="Question" />
              <textarea [(ngModel)]="newFaq.a" name="f_a" required rows="3" class="input" placeholder="Answer"></textarea>
              <div class="flex items-center gap-2">
                <input [(ngModel)]="newFaq.order" name="f_order" type="number" class="input" min="1" placeholder="Order" />
                <label class="text-xs flex items-center gap-1" style="color:var(--fg-muted)">
                  <input type="checkbox" [(ngModel)]="newFaq.active" name="f_active" /> Active
                </label>
                <button class="btn-teal !py-2 !px-4 !text-sm" [disabled]="saving()">Add FAQ</button>
              </div>
            </form>

            <div class="space-y-3 max-h-[520px] overflow-auto pr-1">
              @for (item of faqs(); track item.id) {
                <div class="rounded-xl p-3" style="background:var(--muted)">
                  <div class="grid grid-cols-1 gap-2 mb-2">
                    <input [(ngModel)]="item.q" [name]="'fq_'+item.id" class="input" />
                    <textarea [(ngModel)]="item.a" [name]="'fa_'+item.id" rows="3" class="input"></textarea>
                  </div>
                  <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-2">
                      <input [(ngModel)]="item.order" [name]="'fo_'+item.id" type="number" class="input !w-20" min="1" />
                      <label class="text-xs flex items-center gap-1" style="color:var(--fg-muted)">
                        <input type="checkbox" [(ngModel)]="item.active" [name]="'fx_'+item.id" /> Active
                      </label>
                    </div>
                    <div class="flex items-center gap-2">
                      <button class="btn-ghost !py-1.5 !px-3 !text-xs" (click)="saveFaq(item)">Save</button>
                      <button class="btn-ghost !py-1.5 !px-3 !text-xs" style="color:#EF4444" (click)="deleteFaq(item.id)">Delete</button>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AdminPage implements OnInit {
  private seo = inject(SeoService);
  private fs = inject(FirestoreService);

  loading = signal(false);
  saving = signal(false);
  error = signal('');

  testimonials = signal<Testimonial[]>([]);
  faqs = signal<FaqItem[]>([]);

  newTestimonial = { name: '', role: '', text: '', approved: true };
  newFaq = { q: '', a: '', order: 1, active: true };

  async ngOnInit() {
    this.seo.setPage({ title: 'Admin Template', noIndex: true });
    await this.loadData();
  }

  async loadData() {
    this.loading.set(true);
    this.error.set('');
    try {
      const [testimonials, faqs] = await Promise.all([
        this.fs.getTestimonials(false),
        this.fs.getFaqs(false)
      ]);
      this.testimonials.set(testimonials);
      this.faqs.set(faqs);
    } catch {
      this.error.set('Failed to load admin template data.');
    } finally {
      this.loading.set(false);
    }
  }

  async addTestimonial() {
    if (!this.newTestimonial.name.trim() || !this.newTestimonial.role.trim() || !this.newTestimonial.text.trim()) return;
    this.saving.set(true);
    this.error.set('');
    try {
      await this.fs.addTestimonial({
        name: this.newTestimonial.name.trim(),
        role: this.newTestimonial.role.trim(),
        text: this.newTestimonial.text.trim(),
        approved: this.newTestimonial.approved,
        source: 'admin',
        bg: '#0D9488'
      });
      this.newTestimonial = { name: '', role: '', text: '', approved: true };
      await this.loadData();
    } catch {
      this.error.set('Failed to add testimonial.');
    } finally {
      this.saving.set(false);
    }
  }

  async saveTestimonial(item: Testimonial) {
    this.saving.set(true);
    this.error.set('');
    try {
      await this.fs.updateTestimonial(item.id, {
        name: item.name.trim(),
        role: item.role.trim(),
        text: item.text.trim(),
        approved: item.approved
      });
      await this.loadData();
    } catch {
      this.error.set('Failed to save testimonial.');
    } finally {
      this.saving.set(false);
    }
  }

  async deleteTestimonial(id: string) {
    this.saving.set(true);
    this.error.set('');
    try {
      await this.fs.deleteTestimonial(id);
      await this.loadData();
    } catch {
      this.error.set('Failed to delete testimonial.');
    } finally {
      this.saving.set(false);
    }
  }

  async addFaq() {
    if (!this.newFaq.q.trim() || !this.newFaq.a.trim()) return;
    this.saving.set(true);
    this.error.set('');
    try {
      await this.fs.addFaq({
        q: this.newFaq.q.trim(),
        a: this.newFaq.a.trim(),
        order: Number(this.newFaq.order) || 1,
        active: this.newFaq.active
      });
      this.newFaq = { q: '', a: '', order: 1, active: true };
      await this.loadData();
    } catch {
      this.error.set('Failed to add FAQ.');
    } finally {
      this.saving.set(false);
    }
  }

  async saveFaq(item: FaqItem) {
    this.saving.set(true);
    this.error.set('');
    try {
      await this.fs.updateFaq(item.id, {
        q: item.q.trim(),
        a: item.a.trim(),
        order: Number(item.order) || 1,
        active: item.active
      });
      await this.loadData();
    } catch {
      this.error.set('Failed to save FAQ.');
    } finally {
      this.saving.set(false);
    }
  }

  async deleteFaq(id: string) {
    this.saving.set(true);
    this.error.set('');
    try {
      await this.fs.deleteFaq(id);
      await this.loadData();
    } catch {
      this.error.set('Failed to delete FAQ.');
    } finally {
      this.saving.set(false);
    }
  }
}
