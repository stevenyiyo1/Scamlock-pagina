import { PRIVACY_POLICY } from '../content/privacyPolicy';
import { UI_STRINGS, SupportedLanguage } from '../content/i18n';

export function renderPrivacyPolicyView(currentLang: SupportedLanguage): string {
  const t = UI_STRINGS[currentLang].privacy;

  const sectionsHtml = PRIVACY_POLICY.map(sec => {
    const title = currentLang === 'en' ? sec.titleEn : sec.title;
    const content = currentLang === 'en' ? sec.contentEn : sec.content;

    return `
      <article class="legal-section-block" id="${sec.id}">
        <h3>${title}</h3>
        <p>${content}</p>
      </article>
    `;
  }).join('');

  return `
    <div class="container">
      <div class="legal-document" id="privacidad">
        <div class="legal-header">
          <div class="section-kicker" style="color: var(--accent-red-light); font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">
            ${t.badge}
          </div>
          <h1>${t.title}</h1>
          <div class="legal-meta">
            <span>${t.lastUpdated}</span>
            <span>·</span>
            <span>Versión 1.0 (GDPR & CCPA Compliant Controls)</span>
          </div>
          <p style="margin-top: 14px; font-size: 15px; color: var(--text-secondary);">
            ${t.intro}
          </p>
        </div>

        <div class="legal-content">
          ${sectionsHtml}
        </div>
      </div>
    </div>
  `;
}
