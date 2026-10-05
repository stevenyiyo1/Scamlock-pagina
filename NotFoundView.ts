import { UI_STRINGS, SupportedLanguage } from '../content/i18n';

export function renderNotFoundView(currentLang: SupportedLanguage): string {
  const t = UI_STRINGS[currentLang].notFound;

  return `
    <div class="container" style="padding: 100px 24px; text-align: center; max-width: 600px; margin: 0 auto;">
      <div style="font-size: 64px; font-weight: 800; font-family: var(--font-display); color: var(--accent-emerald); margin-bottom: 12px;">
        404
      </div>
      <h2 style="font-size: 28px; margin-bottom: 12px;">${t.title}</h2>
      <p style="margin-bottom: 28px; font-size: 16px; color: var(--text-secondary);">
        ${t.desc}
      </p>
      <a href="#inicio" class="btn btn-primary" data-nav="inicio">
        ← ${t.backHome}
      </a>
    </div>
  `;
}
