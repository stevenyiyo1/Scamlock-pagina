/**
 * ScamLock Official Website Application Entry Point
 *
 * Maneja el enrutamiento SPA basado en hash, cambio de idioma bilingüe (ES/EN),
 * filtrado y búsqueda de comandos, y copiado interactivo al portapapeles.
 */

import { SupportedLanguage } from './content/i18n';
import { renderNavbar } from './components/Navbar';
import { renderHero } from './components/Hero';
import { renderSecurityPillars } from './components/SecurityPillars';
import { renderCommandGuide } from './components/CommandGuide';
import { renderPrivacyPolicyView } from './components/PrivacyPolicyView';
import { renderTermsOfServiceView } from './components/TermsOfServiceView';
import { renderContactSection } from './components/ContactSection';
import { renderFooter } from './components/Footer';
import { renderNotFoundView } from './components/NotFoundView';

interface AppState {
  lang: SupportedLanguage;
  route: string;
  selectedCommandCategory: string;
  commandSearchQuery: string;
}

const state: AppState = {
  lang: (localStorage.getItem('scamlock_lang') as SupportedLanguage) || 'es',
  route: window.location.hash.replace('#', '') || 'inicio',
  selectedCommandCategory: 'Todos',
  commandSearchQuery: '',
};

function getActiveRoute(): string {
  const hash = window.location.hash.replace('#', '');
  if (!hash || hash === '') return 'inicio';
  return hash;
}

function renderApp(): void {
  const root = document.getElementById('app');
  if (!root) return;

  const currentRoute = getActiveRoute();
  state.route = currentRoute;

  let mainContentHtml = '';

  if (currentRoute === 'privacidad') {
    mainContentHtml = renderPrivacyPolicyView(state.lang);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (currentRoute === 'terminos') {
    mainContentHtml = renderTermsOfServiceView(state.lang);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (currentRoute === '404') {
    mainContentHtml = renderNotFoundView(state.lang);
  } else {
    // Vista principal integrada (Inicio, Capacidades, Comandos, Contacto)
    mainContentHtml = `
      <main>
        ${renderHero(state.lang)}
        ${renderSecurityPillars(state.lang)}
        ${renderCommandGuide(state.lang, state.selectedCommandCategory, state.commandSearchQuery)}
        ${renderContactSection(state.lang)}
      </main>
    `;
  }

  root.innerHTML = `
    ${renderNavbar(state.lang, currentRoute)}
    ${mainContentHtml}
    ${renderFooter(state.lang)}
  `;

  attachEventListeners();

  // Scroll to section if routing to hash anchor on home
  if (currentRoute === 'comandos' || currentRoute === 'contacto' || currentRoute === 'capacidades') {
    setTimeout(() => {
      const el = document.getElementById(currentRoute);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  }
}

function attachEventListeners(): void {
  // 1. Language switcher
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      state.lang = state.lang === 'es' ? 'en' : 'es';
      localStorage.setItem('scamlock_lang', state.lang);
      renderApp();
    });
  }

  // 2. Mobile drawer toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  if (mobileToggle && drawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = drawer.classList.toggle('open');
      mobileToggle.textContent = isOpen ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('open') && !drawer.contains(e.target as Node) && e.target !== mobileToggle) {
        drawer.classList.remove('open');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // 3. Navigation links click
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      if (drawer) {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      }
      if (mobileToggle) {
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
      const targetRoute = el.getAttribute('data-nav');
      if (targetRoute) {
        window.location.hash = targetRoute;
      }
    });
  });

  // 4. Command category tabs
  document.querySelectorAll('[data-cmd-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-cmd-cat');
      if (cat) {
        state.selectedCommandCategory = cat;
        // Re-render only commands view if on home
        const commandSection = document.getElementById('comandos');
        if (commandSection) {
          const newHtml = renderCommandGuide(state.lang, state.selectedCommandCategory, state.commandSearchQuery);
          const temp = document.createElement('div');
          temp.innerHTML = newHtml;
          const freshEl = temp.firstElementChild;
          if (freshEl) {
            commandSection.replaceWith(freshEl);
            attachEventListeners();
          }
        } else {
          renderApp();
        }
      }
    });
  });

  // 5. Command search input
  const searchInput = document.getElementById('commandSearchInput') as HTMLInputElement | null;
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      state.commandSearchQuery = (e.target as HTMLInputElement).value;
      const commandSection = document.getElementById('comandos');
      if (commandSection) {
        const newHtml = renderCommandGuide(state.lang, state.selectedCommandCategory, state.commandSearchQuery);
        const temp = document.createElement('div');
        temp.innerHTML = newHtml;
        const freshEl = temp.firstElementChild;
        if (freshEl) {
          commandSection.replaceWith(freshEl);
          attachEventListeners();
          // Restore focus to input and cursor position
          const reSearch = document.getElementById('commandSearchInput') as HTMLInputElement | null;
          if (reSearch) {
            reSearch.focus();
            reSearch.setSelectionRange(state.commandSearchQuery.length, state.commandSearchQuery.length);
          }
        }
      }
    });
  }

  // 6. Copy command example button
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      if (text) {
        try {
          await navigator.clipboard.writeText(text);
          const original = btn.innerHTML;
          btn.innerHTML = '✅';
          setTimeout(() => {
            btn.innerHTML = original;
          }, 1500);
        } catch {
          // Fallback if clipboard API is restricted
          prompt('Copia el comando manualmente:', text);
        }
      }
    });
  });
}

// Listen to hash changes
window.addEventListener('hashchange', () => {
  renderApp();
});

// Initial boot
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
