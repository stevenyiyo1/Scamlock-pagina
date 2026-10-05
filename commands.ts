/**
 * Catálogo Oficial de Comandos de ScamLock
 *
 * NOTA DE SEGURIDAD:
 * Los siguientes comandos obsoletos fueron eliminados y NO deben agregarse:
 * - /scamlock language (reemplazado por /scamlock idioma)
 * - /scamlock test-image (integrado en /scamlock test imagen:[adjunto])
 * - /scamlock cleanup (restringido a procesos internos de infraestructura)
 * - /scamlock logs (reemplazado por /scamlock incidentes)
 */

export interface BotCommand {
  name: string;
  category: 'Seguridad y Pruebas' | 'Moderación e Incidentes' | 'Configuración' | 'Cuentas y Perfil' | 'Utilidad';
  categoryEn: 'Security & Lab' | 'Moderation & Incidents' | 'Configuration' | 'Accounts & Profile' | 'Utility';
  description: string;
  descriptionEn: string;
  permission: 'Todos' | 'Staff / Moderadores' | 'Administradores';
  permissionEn: 'Everyone' | 'Staff / Moderators' | 'Administrators';
  parameters?: {
    name: string;
    description: string;
    required: boolean;
  }[];
  example: string;
}

export const COMMAND_CATEGORIES = [
  'Todos',
  'Seguridad y Pruebas',
  'Moderación e Incidentes',
  'Configuración',
  'Cuentas y Perfil',
  'Utilidad',
] as const;

export const COMMANDS_CATALOG: BotCommand[] = [
  {
    name: '/scamlock help',
    category: 'Utilidad',
    categoryEn: 'Utility',
    description:
      'Muestra la guía interactiva de ScamLock, manual de funciones de seguridad y estado de los módulos activos.',
    descriptionEn:
      'Displays the interactive ScamLock guide, security feature manual, and status of active modules.',
    permission: 'Todos',
    permissionEn: 'Everyone',
    example: '/scamlock help',
  },
  {
    name: '/scamlock status',
    category: 'Utilidad',
    categoryEn: 'Utility',
    description:
      'Consulta el estado general del bot en el servidor, latencia de conexión (ping), idioma activo y estadísticas de moderación reciente.',
    descriptionEn:
      'Checks the bot status in the server, connection latency (ping), active language, and recent moderation statistics.',
    permission: 'Todos',
    permissionEn: 'Everyone',
    example: '/scamlock status',
  },
  {
    name: '/scamlock test',
    category: 'Seguridad y Pruebas',
    categoryEn: 'Security & Lab',
    description:
      'Examina un mensaje de texto o una imagen en el laboratorio forense de ScamLock para evaluar su nivel de riesgo (Risk Score 0-100) y señales maliciosas sin sancionar al usuario.',
    descriptionEn:
      'Evaluates a text message or an image in the ScamLock forensic lab to calculate Risk Score (0-100) and identify threat signals without punishing the user.',
    permission: 'Staff / Moderadores',
    permissionEn: 'Staff / Moderators',
    parameters: [
      {
        name: 'mensaje',
        description: 'Texto o enlace sospechoso a examinar',
        required: false,
      },
      {
        name: 'imagen',
        description: 'Archivo de imagen adjunto a examinar mediante OCR y análisis multimodal',
        required: false,
      },
      {
        name: 'url_imagen',
        description: 'URL directa a la imagen para análisis forense remoto',
        required: false,
      },
    ],
    example: '/scamlock test mensaje:"Reclama 3 meses de Discord Nitro gratis en discord-nitro.gift"',
  },
  {
    name: '/scamlock incidentes',
    category: 'Moderación e Incidentes',
    categoryEn: 'Moderation & Incidents',
    description:
      'Muestra el historial reciente de incidentes detectados en el servidor, clasificando por nivel de riesgo, usuario emisor y medidas preventivas aplicadas.',
    descriptionEn:
      'Shows the recent security incidents detected on the server, categorized by risk level, author, and mitigation actions taken.',
    permission: 'Staff / Moderadores',
    permissionEn: 'Staff / Moderators',
    parameters: [
      {
        name: 'limite',
        description: 'Cantidad máxima de registros a mostrar (por defecto 5, máx 25)',
        required: false,
      },
      {
        name: 'nivel',
        description: 'Filtrar por severidad (CRITICAL, HIGH, MEDIUM, LOW)',
        required: false,
      },
    ],
    example: '/scamlock incidentes limite:10 nivel:CRITICAL',
  },
  {
    name: '/scamlock revisar',
    category: 'Moderación e Incidentes',
    categoryEn: 'Moderation & Incidents',
    description:
      'Abre el panel de inspección de un incidente específico para ver la evidencia forense recopilada, el análisis heurístico y las acciones recomendadas.',
    descriptionEn:
      'Opens the inspection view for a specific incident to review collected evidence, heuristic diagnosis, and recommended staff actions.',
    permission: 'Staff / Moderadores',
    permissionEn: 'Staff / Moderators',
    parameters: [
      {
        name: 'id',
        description: 'Identificador del incidente de seguridad',
        required: true,
      },
    ],
    example: '/scamlock revisar id:INC-2026-90412',
  },
  {
    name: '/scamlock sancionar',
    category: 'Moderación e Incidentes',
    categoryEn: 'Moderation & Incidents',
    description:
      'Aplica una medida disciplinaria manual (advertencia, timeout, expulsión o baneo) a un usuario por comportamiento malicioso confirmado.',
    descriptionEn:
      'Applies a manual disciplinary action (warn, timeout, kick, or ban) to a user following verified malicious behavior.',
    permission: 'Staff / Moderadores',
    permissionEn: 'Staff / Moderators',
    parameters: [
      {
        name: 'usuario',
        description: 'Miembro al que se aplicará la sanción',
        required: true,
      },
      {
        name: 'accion',
        description: 'Tipo de acción (warn, timeout, kick, ban)',
        required: true,
      },
      {
        name: 'motivo',
        description: 'Justificación administrativa de la sanción',
        required: false,
      },
    ],
    example: '/scamlock sancionar usuario:@spambot accion:ban motivo:"Distribución masiva de enlaces phishing"',
  },
  {
    name: '/scamlock config',
    category: 'Configuración',
    categoryEn: 'Configuration',
    description:
      'Permite ver o ajustar los umbrales de detección (Alerta y Eliminación), activar o pausar el escudo de protección y configurar canales de auditoría.',
    descriptionEn:
      'Allows viewing or tuning detection thresholds (Alert and Delete), enabling or pausing the shield, and setting alert channels.',
    permission: 'Administradores',
    permissionEn: 'Administrators',
    parameters: [
      {
        name: 'estado',
        description: 'Habilitar o pausar la protección activa en el servidor',
        required: false,
      },
      {
        name: 'umbral_alerta',
        description: 'Puntuación de riesgo mínima para emitir alerta (0-100)',
        required: false,
      },
      {
        name: 'umbral_eliminar',
        description: 'Puntuación de riesgo mínima para borrar el mensaje (0-100)',
        required: false,
      },
    ],
    example: '/scamlock config estado:activo umbral_alerta:60 umbral_eliminar:80',
  },
  {
    name: '/scamlock idioma',
    category: 'Configuración',
    categoryEn: 'Configuration',
    description:
      'Cambia el idioma oficial del bot para todo el servidor. ScamLock soporta 18 idiomas con traducciones completas de alertas, embeds y respuestas.',
    descriptionEn:
      'Configures the server primary language for ScamLock. Supports 18 languages with complete translations for alerts, embeds, and responses.',
    permission: 'Administradores',
    permissionEn: 'Administrators',
    parameters: [
      {
        name: 'codigo',
        description: 'Código del idioma deseado (es, en, pt, fr, de, it, ru, ja, etc.)',
        required: false,
      },
    ],
    example: '/scamlock idioma codigo:es',
  },
  {
    name: '/scamlock whitelist',
    category: 'Configuración',
    categoryEn: 'Configuration',
    description:
      'Gestiona la lista blanca de canales, roles exentos y dominios corporativos autorizados para evitar falsos positivos.',
    descriptionEn:
      'Manages the whitelist for channels, exempt roles, and authorized corporate domains to prevent false positives.',
    permission: 'Administradores',
    permissionEn: 'Administrators',
    parameters: [
      {
        name: 'accion',
        description: 'Acción a realizar: ver, agregar, remover',
        required: true,
      },
      {
        name: 'tipo',
        description: 'Tipo de elemento: canal, rol, dominio',
        required: true,
      },
      {
        name: 'valor',
        description: 'Identificador del canal, rol o nombre de dominio',
        required: false,
      },
    ],
    example: '/scamlock whitelist accion:agregar tipo:dominio valor:miempresa.com',
  },
  {
    name: '/scamlock security',
    category: 'Configuración',
    categoryEn: 'Configuration',
    description:
      'Audita la integridad criptográfica de la configuración del servidor, detecta manipulaciones indebidas (Tamper Protection) y muestra el estado del cifrado y diagnósticos de privacidad.',
    descriptionEn:
      'Audits cryptographic integrity of server settings, checks for unauthorized tampering (Tamper Protection), and shows privacy & encryption status.',
    permission: 'Administradores',
    permissionEn: 'Administrators',
    example: '/scamlock security',
  },
  {
    name: '/scamlock perfil',
    category: 'Cuentas y Perfil',
    categoryEn: 'Accounts & Profile',
    description:
      'Permite a un usuario consultar su propio historial de reputación pública y estado en ScamLock, con enlaces para apelar si considera que hubo un error.',
    descriptionEn:
      'Enables any user to check their own public security status in ScamLock and view instructions to appeal if flagged mistakenly.',
    permission: 'Todos',
    permissionEn: 'Everyone',
    parameters: [
      {
        name: 'usuario',
        description: 'Usuario a consultar (solo visible para staff si es de terceros)',
        required: false,
      },
    ],
    example: '/scamlock perfil',
  },
  {
    name: '/scamlock account',
    category: 'Cuentas y Perfil',
    categoryEn: 'Accounts & Profile',
    description:
      'Gestión de cuentas centralizada para el personal del servidor oficial de soporte: permite revisar casos de cuentas comprometidas, abrir expedientes y tramitar apelaciones.',
    descriptionEn:
      'Central account status management for official support staff: review compromised account records, investigate cases, and resolve appeals.',
    permission: 'Staff / Moderadores',
    permissionEn: 'Staff / Moderators',
    parameters: [
      {
        name: 'accion',
        description: 'Acción: info, clasificar, historial, apelar',
        required: true,
      },
      {
        name: 'usuario_id',
        description: 'Identificador del usuario de Discord',
        required: true,
      },
    ],
    example: '/scamlock account accion:info usuario_id:123456789012345678',
  },
];
