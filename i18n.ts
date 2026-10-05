/**
 * Sistema de Internacionalización (i18n) para el sitio web oficial de ScamLock.
 * Soporta Español (por defecto) e Inglés de forma totalmente independiente del bot.
 */

export type SupportedLanguage = 'es' | 'en';

export const UI_STRINGS = {
  es: {
    nav: {
      home: 'Inicio',
      commands: 'Comandos',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso',
      contact: 'Contacto',
      addBot: 'Añadir ScamLock',
      supportServer: 'Servidor de soporte',
    },
    hero: {
      badge: 'Ciberseguridad Comunitaria para Discord',
      title: 'Protección activa contra estafas, phishing y suplantaciones.',
      subtitle:
        'ScamLock es un bot de seguridad para Discord diseñado para detectar y ayudar a prevenir estafas, phishing, suplantaciones y otros comportamientos maliciosos con análisis contextual e inteligencia forense.',
      ctaAdd: 'Añadir ScamLock a Discord',
      ctaSupport: 'Unirse al Soporte',
      ctaCommands: 'Explorar Comandos',
    },
    features: {
      badge: 'Capacidades de Seguridad',
      title: 'Protección multicapa diseñada para comunidades exigentes',
      subtitle: 'Defensas técnicas automáticas que operan con discreción, rapidez y rigor.',
      card1Title: 'Análisis Heurístico Anti-Phishing',
      card1Desc:
        'Detección en tiempo real de ingeniería social, ofertas falsas de Nitro, enlaces con dominios homógrafos y patrones de robo de cuentas.',
      card2Title: 'Laboratorio Forense de Imágenes y OCR',
      card2Desc:
        'Inspección de capturas de pantalla, comprobantes falsificados y códigos QR sospechosos mediante procesamiento efímero que se destruye tras su análisis.',
      card3Title: 'Cifrado Autenticado en Reposo (AES-256-GCM)',
      card3Desc:
        'La evidencia sensible se custodia con criptografía estándar AEAD v1 y claves aisladas fuera de la base de datos para máxima privacidad.',
      card4Title: 'Detección de Campañas Masivas',
      card4Desc:
        'Correlación de ataques coordinados entre múltiples servidores para mitigar oleadas de bots de spam antes de que comprometan a tus miembros.',
      card5Title: 'Minimización y Supresión Centralizada',
      card5Desc:
        'Los mensajes legítimos nunca se persisten en disco y cualquier usuario puede solicitar el derecho al olvido a través de nuestro motor transaccional de supresión.',
      card6Title: '18 Idiomas con Traducción Integral',
      card6Desc:
        'Alertas nativas, embeds y configuraciones adaptadas al idioma principal de tu comunidad con el comando /scamlock idioma.',
    },
    commands: {
      badge: 'Guía de Comandos Oficial',
      title: 'Comandos disponibles y manual de uso',
      subtitle:
        'Consulta la sintaxis, permisos requeridos y parámetros de cada comando público activo en ScamLock.',
      searchPlaceholder: 'Buscar comando o parámetro...',
      filterAll: 'Todos',
      permissionLabel: 'Permiso:',
      exampleLabel: 'Ejemplo de uso:',
      parametersLabel: 'Parámetros:',
      copySuccess: '¡Copiado!',
      noResults: 'No se encontraron comandos con ese criterio.',
    },
    privacy: {
      badge: 'Transparencia y Seguridad',
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: Octubre 2026',
      intro:
        'Nuestras prácticas de privacidad reflejan exactamente los controles técnicos implementados en el código de ScamLock.',
    },
    terms: {
      badge: 'Marco Operativo',
      title: 'Términos de Uso',
      lastUpdated: 'Última actualización: Octubre 2026',
      intro:
        'Condiciones de uso del bot ScamLock, responsabilidades del administrador y límites del servicio.',
    },
    contact: {
      badge: 'Canales de Atención',
      title: 'Contacto y Soporte Oficial',
      subtitle:
        '¿Tienes dudas sobre ScamLock, necesitas reportar un falso positivo o ejercer tus derechos de privacidad?',
      emailCardTitle: 'Correo Electrónico Oficial',
      emailCardDesc: 'Para solicitudes formales, derechos de protección de datos (ARCO) y consultas administrativas.',
      discordCardTitle: 'Servidor Oficial de Soporte',
      discordCardDesc: 'Únete a nuestra comunidad de Discord para recibir asistencia técnica directa y abrir tickets de apelación.',
      joinDiscordBtn: 'Entrar a discord.gg/G37UGXjKbW',
      responseEstimate: 'Tiempo estimado de respuesta: 24 - 48 horas laborales.',
    },
    footer: {
      about:
        'ScamLock es un bot de seguridad y asistencia a la moderación para Discord dedicado a neutralizar estafas, phishing y amenazas comunitarias.',
      linksTitle: 'Navegación',
      legalTitle: 'Legal y Privacidad',
      communityTitle: 'Comunidad',
      copyright: '© 2026 ScamLock. Todos los derechos reservados.',
      discordDisclaimer:
        'ScamLock es un proyecto de software independiente. No es un producto oficial de Discord Inc. ni está afiliado, respaldado ni asociado con Discord Inc. Discord es una marca comercial registrada de Discord Inc.',
    },
    notFound: {
      title: 'Página no encontrada',
      desc: 'La sección o enlace que estás buscando no existe o ha sido reubicada.',
      backHome: 'Volver al inicio',
    },
  },
  en: {
    nav: {
      home: 'Home',
      commands: 'Commands',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact',
      addBot: 'Add ScamLock',
      supportServer: 'Support Server',
    },
    hero: {
      badge: 'Community Cybersecurity for Discord',
      title: 'Active protection against scams, phishing, and impersonations.',
      subtitle:
        'ScamLock is a Discord security bot built to detect and help prevent scams, phishing, impersonation, and malicious behaviors using contextual analysis and forensic intelligence.',
      ctaAdd: 'Add ScamLock to Discord',
      ctaSupport: 'Join Support Server',
      ctaCommands: 'Explore Commands',
    },
    features: {
      badge: 'Security Capabilities',
      title: 'Multi-layer defense engineered for demanding communities',
      subtitle: 'Automated technical safeguards operating with speed, discretion, and accuracy.',
      card1Title: 'Heuristic Anti-Phishing Engine',
      card1Desc:
        'Real-time detection of social engineering lures, fake Nitro links, lookalike domains, and account takeover patterns.',
      card2Title: 'Forensic Image & OCR Lab',
      card2Desc:
        'Inspection of screenshots, forged payment proofs, and suspicious QR codes via ephemeral sandboxed processing wiped immediately after analysis.',
      card3Title: 'Authenticated Encryption at Rest (AES-256-GCM)',
      card3Desc:
        'Sensitive incident evidence is guarded with standard AEAD v1 cryptography and keys held strictly outside the database.',
      card4Title: 'Coordinated Campaign Tracking',
      card4Desc:
        'Cross-server threat intelligence correlating mass attack patterns to neutralize spam bot waves before they compromise members.',
      card5Title: 'Data Minimization & Centralized Erasure',
      card5Desc:
        'Safe messages are never persisted on disk, and users can exercise their right to be forgotten via our atomic deletion service.',
      card6Title: '18 Languages with Full Localization',
      card6Desc:
        'Native embeds, warnings, and settings tailored to your community language through the /scamlock idioma command.',
    },
    commands: {
      badge: 'Official Command Manual',
      title: 'Available commands and usage instructions',
      subtitle:
        'Review syntax, required permissions, and parameter descriptions for each active public command in ScamLock.',
      searchPlaceholder: 'Search command or parameter...',
      filterAll: 'All',
      permissionLabel: 'Permission:',
      exampleLabel: 'Example usage:',
      parametersLabel: 'Parameters:',
      copySuccess: 'Copied!',
      noResults: 'No commands found matching your criteria.',
    },
    privacy: {
      badge: 'Transparency & Security',
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: October 2026',
      intro:
        'Our privacy commitments directly reflect the engineering controls implemented within ScamLock source architecture.',
    },
    terms: {
      badge: 'Operational Framework',
      title: 'Terms of Service',
      lastUpdated: 'Last updated: October 2026',
      intro:
        'Conditions for operating ScamLock, administrator responsibilities, and automated service boundaries.',
    },
    contact: {
      badge: 'Direct Channels',
      title: 'Official Contact & Support',
      subtitle:
        'Have inquiries about ScamLock, need to dispute a false positive, or request data deletion?',
      emailCardTitle: 'Official Contact Email',
      emailCardDesc: 'For formal privacy rights requests (GDPR/ARCO), partnerships, and administrative communication.',
      discordCardTitle: 'Official Support Server',
      discordCardDesc: 'Join our Discord server to speak with authorized staff, report suspicious campaigns, and submit appeal tickets.',
      joinDiscordBtn: 'Join discord.gg/G37UGXjKbW',
      responseEstimate: 'Estimated response window: 24 - 48 business hours.',
    },
    footer: {
      about:
        'ScamLock is an independent Discord security and moderation assistant bot dedicated to shielding servers from scams and phishing.',
      linksTitle: 'Navigation',
      legalTitle: 'Legal & Privacy',
      communityTitle: 'Community',
      copyright: '© 2026 ScamLock. All rights reserved.',
      discordDisclaimer:
        'ScamLock is an independently developed software tool. It is not an official Discord Inc. product and is not affiliated with, sponsored by, or endorsed by Discord Inc. Discord is a registered trademark of Discord Inc.',
    },
    notFound: {
      title: 'Page Not Found',
      desc: 'The section or link you were seeking does not exist or has been relocated.',
      backHome: 'Return to Homepage',
    },
  },
};
