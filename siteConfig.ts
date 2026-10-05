/**
 * Configuración central del sitio web oficial de ScamLock.
 *
 * Puedes modificar las URLs de invitación, enlaces de soporte, correo oficial
 * y metadatos desde este único archivo sin tocar el resto del código.
 */

export const siteConfig = {
  // Nombre del proyecto y marca
  name: 'ScamLock',
  tagline: 'Bot de Discord Antiestafas, Phishing y Suplantación',
  description:
    'ScamLock es un bot de seguridad para Discord diseñado para detectar y ayudar a prevenir estafas, phishing, suplantaciones y otros comportamientos maliciosos.',

  // URL del sitio web público (utilizada para SEO y canonical links)
  siteUrl: 'https://scamlock.io',

  // ===========================================================================
  // 1. ENLACE DE INVITACIÓN OFICIAL DEL BOT
  // Introduce aquí la URL OAuth2 generada en el Discord Developer Portal
  // ===========================================================================
  DISCORD_BOT_INVITE_URL:
    'https://discord.com/oauth2/authorize?client_id=TU_CLIENT_ID_AQUI&scope=bot%20applications.commands&permissions=1099511627776',

  // ===========================================================================
  // 2. SERVIDOR OFICIAL DE SOPORTE DE DISCORD
  // Servidor oficial de la comunidad y soporte técnico de ScamLock
  // ===========================================================================
  SUPPORT_SERVER_URL: 'https://discord.gg/G37UGXjKbW',

  // ===========================================================================
  // 3. CORREO ELECTRÓNICO OFICIAL DE CONTACTO
  // Dirección de correo para consultas generales, soporte y derechos de privacidad
  // ===========================================================================
  CONTACT_EMAIL: 'contacto@scamlock.io',

  // Enlaces de navegación rápida
  navLinks: [
    { id: 'inicio', label: 'Inicio', labelEn: 'Home' },
    { id: 'comandos', label: 'Comandos', labelEn: 'Commands' },
    { id: 'privacidad', label: 'Privacidad', labelEn: 'Privacy' },
    { id: 'terminos', label: 'Términos', labelEn: 'Terms' },
    { id: 'contacto', label: 'Contacto', labelEn: 'Contact' },
  ],

  // Metadatos para SEO y redes sociales
  seo: {
    title: 'ScamLock — Bot de Discord Antiestafas y Ciberseguridad',
    metaDescription:
      'Protege tu comunidad de Discord con ScamLock: detección avanzada de phishing, estafas financieras, suplantaciones y análisis forense de imágenes.',
    ogImage: '/images/hero-shield.jpg',
    twitterCard: 'summary_large_image',
  },

  // Declaración legal obligatoria
  legalNotice:
    'ScamLock es un proyecto de software independiente. No es un producto oficial de Discord Inc. ni está afiliado, respaldado ni asociado con Discord Inc. Discord es una marca registrada de Discord Inc.',
};
