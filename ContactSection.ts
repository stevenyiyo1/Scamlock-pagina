import { siteConfig } from '../config/siteConfig';
import { UI_STRINGS, SupportedLanguage } from '../content/i18n';

export function renderContactSection(currentLang: SupportedLanguage): string {
  const t = UI_STRINGS[currentLang].contact;

  return `
    <section class="section-wrapper" id="contacto">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">${t.badge}</div>
          <h2>${t.title}</h2>
          <p>${t.subtitle}</p>
        </div>

        <div class="contact-cards-grid">
          <!-- Card 1: Official Email -->
          <div class="contact-card">
            <div style="font-size: 32px;">✉️</div>
            <h3>${t.emailCardTitle}</h3>
            <p>${t.emailCardDesc}</p>
            <div class="contact-val">
              <a href="mailto:${siteConfig.CONTACT_EMAIL}" style="color: var(--accent-red-bright);">
                ${siteConfig.CONTACT_EMAIL}
              </a>
            </div>
            <div style="font-size: 13px; color: var(--text-muted);">
              ${t.responseEstimate}
            </div>
          </div>

          <!-- Card 2: Discord Support Guild -->
          <div class="contact-card">
            <div style="font-size: 32px;">🛡️</div>
            <h3>${t.discordCardTitle}</h3>
            <p>${t.discordCardDesc}</p>
            <div>
              <a 
                href="${siteConfig.SUPPORT_SERVER_URL}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-secondary"
                style="width: 100%; justify-content: center; padding: 14px;"
              >
                <span>${t.joinDiscordBtn} →</span>
              </a>
            </div>
            <div style="font-size: 13px; color: var(--text-muted);">
              ${currentLang === 'es' ? 'Atención en español e inglés.' : 'Support in Spanish and English.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
