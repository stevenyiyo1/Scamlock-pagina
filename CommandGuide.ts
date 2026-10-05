import { COMMANDS_CATALOG, COMMAND_CATEGORIES, BotCommand } from '../content/commands';
import { UI_STRINGS, SupportedLanguage } from '../content/i18n';

export function renderCommandGuide(
  currentLang: SupportedLanguage,
  selectedCategory: string = 'Todos',
  searchQuery: string = ''
): string {
  const t = UI_STRINGS[currentLang].commands;

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredCommands = COMMANDS_CATALOG.filter(cmd => {
    const matchesCategory =
      selectedCategory === 'Todos' ||
      cmd.category === selectedCategory ||
      cmd.categoryEn === selectedCategory;

    const matchesSearch =
      normalizedQuery === '' ||
      cmd.name.toLowerCase().includes(normalizedQuery) ||
      cmd.description.toLowerCase().includes(normalizedQuery) ||
      cmd.descriptionEn.toLowerCase().includes(normalizedQuery) ||
      (cmd.parameters &&
        cmd.parameters.some(
          p =>
            p.name.toLowerCase().includes(normalizedQuery) ||
            p.description.toLowerCase().includes(normalizedQuery)
        ));

    return matchesCategory && matchesSearch;
  });

  const categoryTabsHtml = COMMAND_CATEGORIES.map(cat => {
    const isActive = selectedCategory === cat || (cat === 'Todos' && selectedCategory === 'All');
    const label = currentLang === 'en' && cat === 'Todos' ? 'All' : cat;
    return `
      <button class="tab-btn ${isActive ? 'active' : ''}" data-cmd-cat="${cat}">
        ${label}
      </button>
    `;
  }).join('');

  const commandCardsHtml =
    filteredCommands.length > 0
      ? filteredCommands
          .map(cmd => {
            const desc = currentLang === 'en' ? cmd.descriptionEn : cmd.description;
            const perm = currentLang === 'en' ? cmd.permissionEn : cmd.permission;

            let paramsHtml = '';
            if (cmd.parameters && cmd.parameters.length > 0) {
              const paramRows = cmd.parameters
                .map(
                  p => `
                <div class="cmd-param-row">
                  <span class="cmd-param-name">${p.name}${p.required ? ' *' : ''}:</span>
                  <span class="cmd-param-desc">${p.description}</span>
                </div>
              `
                )
                .join('');

              paramsHtml = `
                <div class="cmd-params-list">
                  <div class="cmd-params-title">${t.parametersLabel}</div>
                  ${paramRows}
                </div>
              `;
            }

            return `
              <div class="cmd-card">
                <div class="cmd-header">
                  <div class="cmd-name">${cmd.name}</div>
                  <div class="cmd-perm">${perm}</div>
                </div>

                <p class="cmd-desc">${desc}</p>

                ${paramsHtml}

                <div class="cmd-example">
                  <span>${cmd.example}</span>
                  <button class="copy-btn" data-copy="${cmd.example}" title="Copiar comando" aria-label="Copiar comando">
                    📋
                  </button>
                </div>
              </div>
            `;
          })
          .join('')
      : `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: var(--text-muted);">
          <p>${t.noResults}</p>
        </div>
      `;

  return `
    <section class="section-wrapper" id="comandos">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">${t.badge}</div>
          <h2>${t.title}</h2>
          <p>${t.subtitle}</p>
        </div>

        <div class="command-toolbar">
          <div class="category-tabs">
            ${categoryTabsHtml}
          </div>

          <div class="search-input-wrap">
            <span class="search-icon-svg">🔍</span>
            <input 
              type="text" 
              id="commandSearchInput" 
              class="search-input" 
              placeholder="${t.searchPlaceholder}" 
              value="${searchQuery}" 
              aria-label="Buscar comandos"
            />
          </div>
        </div>

        <div class="commands-grid">
          ${commandCardsHtml}
        </div>
      </div>
    </section>
  `;
}
