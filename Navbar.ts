import { siteConfig } from '../config/siteConfig';
import { UI_STRINGS, SupportedLanguage } from '../content/i18n';

export function renderNavbar(currentLang: SupportedLanguage, activeRoute: string): string {
  const t = UI_STRINGS[currentLang].nav;

  const links = [
    { id: 'inicio', label: t.home, href: '#inicio' },
    { id: 'comandos', label: t.commands, href: '#comandos' },
    { id: 'privacidad', label: t.privacy, href: '#privacidad' },
    { id: 'terminos', label: t.terms, href: '#terminos' },
    { id: 'contacto', label: t.contact, href: '#contacto' },
  ];

  const linksHtml = links
    .map(
      l => `
      <li>
        <a href="${l.href}" class="nav-link ${activeRoute === l.id ? 'active' : ''}" data-nav="${l.id}">
          ${l.label}
        </a>
      </li>
    `
    )
    .join('');

  const mobileLinksHtml = links
    .map(
      l => `
      <a href="${l.href}" class="mobile-nav-link" data-nav="${l.id}">
        ${l.label}
      </a>
    `
    )
    .join('');

  return `
    <header class="site-navbar">
      <div class="container">
        <!-- Zone 1: Brand Wordmark -->
        <a href="#inicio" class="nav-brand" data-nav="inicio" aria-label="ScamLock Home">
          <svg class="nav-brand-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4L6 8.5V15.2C6 21.6 10.3 27.6 16 29C21.7 27.6 26 21.6 26 15.2V8.5L16 4Z" fill="#12131C" stroke="#EF4444" stroke-width="2.2" stroke-linejoin="round"/>
            <path d="M12.5 16.5L15 19L20 13.5" stroke="#FF2A4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>${siteConfig.name}</span>
        </a>

        <!-- Zone 2: Navigation Links -->
        <nav aria-label="Navegación principal">
          <ul class="nav-links">
            ${linksHtml}
          </ul>
        </nav>

        <!-- Zone 3: Primary Actions & Language Switcher -->
        <div class="nav-actions">
          <button id="langToggleBtn" class="lang-switch" aria-label="Cambiar idioma">
            <span>🌐</span>
            <span>${currentLang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          <a href="${siteConfig.SUPPORT_SERVER_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm nav-btn-support">
            <span>${t.supportServer}</span>
          </a>

          <a href="${siteConfig.DISCORD_BOT_INVITE_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm nav-btn-add">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>${t.addBot}</span>
          </a>

          <button id="mobileMenuToggle" class="mobile-menu-btn" aria-label="Abrir menú">
            ☰
          </button>
        </div>
      </div>

      <!-- Mobile Drawer -->
      <div id="mobileDrawer" class="mobile-drawer">
        ${mobileLinksHtml}
        <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 12px;">
          <a href="${siteConfig.DISCORD_BOT_INVITE_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            ${t.addBot}
          </a>
          <a href="${siteConfig.SUPPORT_SERVER_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            ${t.supportServer}
          </a>
        </div>
      </div>
    </header>
  `;
}
