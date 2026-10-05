import { UI_STRINGS, SupportedLanguage } from '../content/i18n';

export function renderSecurityPillars(currentLang: SupportedLanguage): string {
  const t = UI_STRINGS[currentLang].features;

  return `
    <section class="section-wrapper" id="capacidades">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">${t.badge}</div>
          <h2>${t.title}</h2>
          <p>${t.subtitle}</p>
        </div>

        <div class="bento-grid">
          <!-- Card 1: Phishing Heuristics (Col span 2) -->
          <div class="bento-card col-span-2">
            <div class="card-num">01. HEURISTIC ENGINE</div>
            <h3>${t.card1Title}</h3>
            <p>${t.card1Desc}</p>
          </div>

          <!-- Card 2: Image Forensics -->
          <div class="bento-card">
            <div class="card-num">02. OCR & FORENSICS</div>
            <h3>${t.card2Title}</h3>
            <p>${t.card2Desc}</p>
          </div>

          <!-- Card 3: Encryption at Rest -->
          <div class="bento-card">
            <div class="card-num">03. DATA ENCRYPTION</div>
            <h3>${t.card3Title}</h3>
            <p>${t.card3Desc}</p>
          </div>

          <!-- Card 4: Campaign Detection -->
          <div class="bento-card">
            <div class="card-num">04. CAMPAIGN MITIGATION</div>
            <h3>${t.card4Title}</h3>
            <p>${t.card4Desc}</p>
          </div>

          <!-- Card 5: Data Minimization & Centralized Erasure -->
          <div class="bento-card">
            <div class="card-num">05. PRIVACY BY DESIGN</div>
            <h3>${t.card5Title}</h3>
            <p>${t.card5Desc}</p>
          </div>

          <!-- Card 6: 18 Languages (Col span 2) -->
          <div class="bento-card col-span-2">
            <div class="card-num">06. GLOBAL I18N</div>
            <h3>${t.card6Title}</h3>
            <p>${t.card6Desc}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
