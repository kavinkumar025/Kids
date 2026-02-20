import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ParentLayoutComponent } from '../layouts/parent-layout';
import { AuthService } from '../services/auth.service';
import { ThemeService } from '../services/theme.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-parent-settings',
  standalone: true,
  imports: [CommonModule, RouterLink, ParentLayoutComponent],
  template: `
    <app-parent-layout>
      <div class="animate-fade-in max-w-2xl">
        <div class="page-header-block" style="margin-bottom:1.5rem">
          <div>
            <h1 class="page-title" data-testid="settings-heading">Settings</h1>
            <p class="page-subtitle">Manage your preferences</p>
          </div>
        </div>

        <div class="card p-5 mb-4">
          <div class="section-header"><h3 class="section-title">Profile</h3></div>
          <div class="space-y-3">
            <div class="flex justify-between"><span class="text-sm" style="color: var(--fg-muted)">Name</span><span class="text-sm font-medium">{{ auth.parentProfile()?.full_name }}</span></div>
            <div class="flex justify-between"><span class="text-sm" style="color: var(--fg-muted)">Email</span><span class="text-sm font-medium">{{ auth.parentProfile()?.email }}</span></div>
          </div>
        </div>

        <div class="card p-5 mb-4">
          <div class="section-header"><h3 class="section-title">Appearance</h3></div>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium">Dark Mode</p>
              <p class="text-xs" style="color: var(--fg-muted)">Toggle light/dark theme</p>
            </div>
            <button (click)="themeService.toggle()" class="px-4 py-2 rounded-full text-sm font-medium border" style="border-color: var(--border)" data-testid="toggle-dark-mode">
              {{ themeService.theme() === 'light' ? 'Enable' : 'Disable' }}
            </button>
          </div>
        </div>

        <div class="card p-5 mb-4">
          <div class="section-header"><h3 class="section-title">Admin</h3></div>
          <p class="text-sm mb-3" style="color: var(--fg-muted)">Manage landing template content (reviews and FAQs).</p>
          <a routerLink="/admin" class="btn-teal !py-2 !px-4 !text-sm inline-flex">Open Template Admin</a>
        </div>

        <div class="card p-5">
          <div class="section-header"><h3 class="section-title">Manage Children</h3></div>
          <div class="space-y-3">
            @for (kid of auth.kids(); track kid.id) {
              <div class="list-row">
                <div class="flex items-center gap-3 flex-1">
                  <span class="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background-color: var(--color-primary)">{{ kid.name[0] }}</span>
                  <div>
                    <p class="text-sm font-medium">{{ kid.name }}</p>
                    <p class="text-[10px]" style="color: var(--fg-muted)">Age {{ kid.age }} &middot; {{ kid.ui_theme }} theme</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </app-parent-layout>
  `
})
export class ParentSettingsPage implements OnInit {
  auth = inject(AuthService);
  themeService = inject(ThemeService);
  private seo = inject(SeoService);
  ngOnInit() { this.seo.setPage({ title: 'Settings', noIndex: true }); }
}
