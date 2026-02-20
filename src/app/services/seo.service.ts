import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description?: string;
  noIndex?: boolean;
}

const DEFAULT_DESCRIPTION =
  'Minyfin — A gamified platform where parents assign tasks and kids earn virtual coins to learn saving, investing, and financial discipline.';

const BASE_TITLE = 'Minyfin';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  setPage(config: SeoConfig): void {
    const fullTitle = config.title === BASE_TITLE
      ? `${BASE_TITLE} — Teach Kids Financial Literacy`
      : `${config.title} | ${BASE_TITLE}`;

    this.titleService.setTitle(fullTitle);

    const desc = config.description ?? DEFAULT_DESCRIPTION;
    this.metaService.updateTag({ name: 'description', content: desc });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: desc });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: desc });

    if (config.noIndex) {
      this.metaService.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    } else {
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    }
  }
}
