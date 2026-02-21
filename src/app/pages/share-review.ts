import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ParentLayoutComponent } from '../layouts/parent-layout';
import { FirestoreService } from '../services/firestore.service';
import { AuthService } from '../services/auth.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-share-review',
  standalone: true,
  imports: [CommonModule, FormsModule, ParentLayoutComponent],
  template: `
    <app-parent-layout>
      <div class="animate-fade-in max-w-2xl mx-auto">

        <!-- Page Header -->
        <div class="page-header-block">
          <div>
            <h1 class="page-title">Share Your Experience</h1>
            <p class="page-subtitle">Your review helps other families discover Minyfin</p>
          </div>
        </div>

        @if (submitted()) {
          <!-- Success State -->
          <div class="card p-7 text-center">
            <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                 style="background:rgba(13,148,136,0.10)">
              <svg class="w-10 h-10" style="color:#0D9488" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h2 class="font-bold font-heading text-xl mb-2">Thank you, {{ submittedName() }}!</h2>
            <p class="text-sm leading-relaxed max-w-sm mx-auto mb-6" style="color:var(--fg-muted)">
              Your review has been submitted and will be visible on the landing page after admin approval.
            </p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <button (click)="reset()" class="btn-ghost !px-6 !py-2.5">Write Another</button>
              <button (click)="goToDashboard()" class="btn-teal !px-6 !py-2.5">Back to Dashboard</button>
            </div>
          </div>
        } @else {
          <!-- Form Card -->
          <div class="card p-6 lg:p-8">

            <!-- Info banner -->
            <div class="flex items-start gap-3 p-4 rounded-xl mb-6" style="background:rgba(13,148,136,0.07);border:1px solid rgba(13,148,136,0.15)">
              <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color:#0D9488" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
              </svg>
              <p class="text-sm leading-relaxed" style="color:var(--fg-muted)">
                Reviews are moderated before going live. Once approved, your review will be shown on the Minyfin landing page to help other families.
              </p>
            </div>

            <form (ngSubmit)="submitReview()" #reviewForm="ngForm" class="space-y-5">
              <!-- Name & Role row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="label">Your Name *</label>
                  <input
                    [(ngModel)]="form.name" name="name" required
                    type="text" placeholder="e.g. Priya Sharma"
                    class="input"
                    #nameField="ngModel"
                  />
                  @if (nameField.invalid && nameField.touched) {
                    <p class="text-xs mt-1" style="color:#EF4444">Name is required</p>
                  }
                </div>
                <div>
                  <label class="label">Your Role *</label>
                  <input
                    [(ngModel)]="form.role" name="role" required
                    type="text" placeholder="e.g. Parent of 2"
                    class="input"
                    #roleField="ngModel"
                  />
                  @if (roleField.invalid && roleField.touched) {
                    <p class="text-xs mt-1" style="color:#EF4444">Role is required</p>
                  }
                </div>
              </div>

              <!-- Review text -->
              <div>
                <label class="label">Your Review *</label>
                <textarea
                  [(ngModel)]="form.text" name="text" required
                  rows="6"
                  placeholder="Tell us how Minyfin has helped your family learn about money, build good habits, or made finance fun..."
                  class="input resize-none"
                  #textField="ngModel"
                ></textarea>
                <div class="flex items-center justify-between mt-1">
                  @if (textField.invalid && textField.touched) {
                    <p class="text-xs" style="color:#EF4444">Review text is required</p>
                  } @else {
                    <span></span>
                  }
                  <p class="text-xs" style="color:var(--fg-muted)">{{ form.text.length }}/500</p>
                </div>
              </div>

              <!-- Rating -->
              <div>
                <label class="label">Rating *</label>
                <div class="flex items-center gap-1">
                  @for (star of [1,2,3,4,5]; track star) {
                    <button type="button" (click)="form.rating = star"
                            class="transition-transform hover:scale-110 focus:outline-none">
                      <svg class="w-8 h-8" [attr.fill]="star <= form.rating ? '#F59E0B' : 'none'"
                           [attr.stroke]="star <= form.rating ? '#F59E0B' : 'var(--border)'"
                           stroke-width="1.5" viewBox="0 0 24 24">
                        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                      </svg>
                    </button>
                  }
                  @if (form.rating > 0) {
                    <span class="ml-2 text-sm font-semibold" style="color:#F59E0B">{{ ratingLabel() }}</span>
                  }
                </div>
              </div>

              @if (error()) {
                <div class="p-3 rounded-xl text-sm" style="background:rgba(239,68,68,0.08);color:#EF4444;border:1px solid rgba(239,68,68,0.2)">
                  {{ error() }}
                </div>
              }

              <button
                type="submit"
                [disabled]="reviewForm.invalid || submitting() || form.rating === 0"
                class="btn-teal w-full !py-3.5 !text-base flex items-center justify-center gap-2 disabled:opacity-55 disabled:cursor-not-allowed"
              >
                @if (submitting()) {
                  <div class="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin" style="border-color:white;border-top-color:transparent"></div>
                  Submitting...
                } @else {
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                  </svg>
                  Submit Review
                }
              </button>
            </form>
          </div>
        }
      </div>
    </app-parent-layout>
  `
})
export class ShareReviewPage implements OnInit {
  private fs = inject(FirestoreService);
  private seo = inject(SeoService);
  private router = inject(Router);
  auth = inject(AuthService);

  submitting = signal(false);
  submitted = signal(false);
  submittedName = signal('');
  error = signal('');

  form = { name: '', role: '', text: '', rating: 0 };

  ngOnInit() {
    this.seo.setPage({ title: 'Share Your Experience', noIndex: true });
    // Pre-fill name from auth if available
    const profile = this.auth.parentProfile();
    if (profile?.full_name) {
      this.form.name = profile.full_name;
    }
  }

  ratingLabel() {
    const labels = ['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'];
    return labels[this.form.rating] || '';
  }

  async submitReview() {
    if (!this.form.name.trim() || !this.form.role.trim() || !this.form.text.trim() || this.form.rating === 0) return;

    this.submitting.set(true);
    this.error.set('');

    try {
      await this.fs.submitUserReview({
        name: this.form.name.trim(),
        role: this.form.role.trim(),
        text: this.form.text.trim(),
      });
      this.submittedName.set(this.form.name.trim());
      this.submitted.set(true);
    } catch {
      this.error.set('Failed to submit review. Please try again.');
    } finally {
      this.submitting.set(false);
    }
  }

  reset() {
    this.form = { name: '', role: '', text: '', rating: 0 };
    this.submitted.set(false);
    this.error.set('');
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
