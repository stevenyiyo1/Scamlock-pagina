import { siteConfig } from '../config/siteConfig';
import { UI_STRINGS, SupportedLanguage } from '../content/i18n';

export function renderFooter(currentLang: SupportedLanguage): string {
  const t = UI_STRINGS[currentLang].footer;
  const nav = UI_STRINGS[currentLang].nav;

  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Brand & Tagline -->
          <div class="footer-col">
            <div class="nav-brand" style="margin-bottom: 14px;">
              <svg class="nav-brand-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L6 8.5V15.2C6 21.6 10.3 27.6 16 29C21.7 27.6 26 21.6 26 15.2V8.5L16 4Z" fill="#12131C" stroke="#EF4444" stroke-width="2.2" stroke-linejoin="round"/>
                <path d="M12.5 16.5L15 19L20 13.5" stroke="#FF2A4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>${siteConfig.name}</span>
            </div>
            <p style="font-size: 14px; color: var(--text-secondary); max-width: 320px; line-height: 1.6;">
              ${t.about}
            </p>
          </div>

          <!-- Col 2: Navigation Links -->
          <div class="footer-col">
            <h4>${t.linksTitle}</h4>
            <ul>
              <li><a href="#inicio" data-nav="inicio">${nav.home}</a></li>
              <li><a href="#comandos" data-nav="comandos">${nav.commands}</a></li>
              <li><a href="#contacto" data-nav="contacto">${nav.contact}</a></li>
            </ul>
          </div>

          <!-- Col 3: Legal & Privacy -->
          <div class="footer-col">
            <h4>${t.legalTitle}</h4>
            <ul>
              <li><a href="#privacidad" data-nav="privacidad">${nav.privacy}</a></li>
              <li><a href="#terminos" data-nav="terminos">${nav.terms}</a></li>
              <li><a href="mailto:${siteConfig.CONTACT_EMAIL}">DPO / Privacidad</a></li>
            </ul>
          </div>

          <!-- Col 4: Community & Actions -->
          <div class="footer-col">
            <h4>${t.communityTitle}</h4>
            <ul>
              <li>
                <a href="${siteConfig.DISCORD_BOT_INVITE_URL}" target="_blank" rel="noopener noreferrer">
                  ${nav.addBot} ↗
                </a>
              </li>
              <li>
                <a href="${siteConfig.SUPPORT_SERVER_URL}" target="_blank" rel="noopener noreferrer">
                  ${nav.supportServer} ↗
                </a>
              </li>
              <li>
                <a href="#inicio" data-nav="inicio">
                  Volver arriba ↑
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>${t.copyright}</p>
          <p style="line-height: 1.5; color: #475569;">
            ${t.discordDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  `;
}
