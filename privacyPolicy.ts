/**
 * Política de Privacidad Oficial de ScamLock
 *
 * Basada fielmente en la auditoría y controles técnicos de ScamLock:
 * - Cifrado en reposo AES-256-GCM v1
 * - Retención configurable (90d detecciones / 180d moderación)
 * - Minimización de mensajes y desecho inmediato de archivos de imagen temporales
 * - Prohibición estricta de entrenamiento de IA con datos de la API de Discord
 * - Capa central de supresión de datos (UserDataDeletionService)
 */

export interface PrivacySection {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
}

export const PRIVACY_POLICY: PrivacySection[] = [
  {
    id: 'introduccion',
    title: '1. Introducción y Compromiso de Privacidad',
    titleEn: '1. Introduction & Privacy Commitment',
    content: `En ScamLock nos tomamos la privacidad y la protección de datos con la máxima seriedad técnica. ScamLock es un bot de seguridad para Discord diseñado para detectar y ayudar a prevenir estafas, phishing, suplantaciones de identidad y comportamientos maliciosos en comunidades.

Esta Política de Privacidad describe de manera transparente qué datos procesamos, con qué finalidad técnica, dónde se almacenan, cómo se protegen mediante criptografía estándar y cómo puedes solicitar la eliminación de tu información conforme a los principios de minimización y normativas vigentes (RGPD / CCPA).`,
    contentEn: `At ScamLock, we treat privacy and data security with utmost engineering rigor. ScamLock is a Discord security bot built to detect and help prevent scams, phishing, impersonation, and malicious behaviors in communities.

This Privacy Policy transparently explains what data we process, our specific technical purposes, where data is kept, how it is secured via authenticated cryptography, and how you can request data deletion under data minimization standards and privacy laws (GDPR / CCPA).`,
  },
  {
    id: 'datos-procesados',
    title: '2. Inventario de Datos Procesados y Finalidades',
    titleEn: '2. Inventory of Processed Data & Purposes',
    content: `ScamLock aplica el principio de minimización de datos: únicamente se procesa la información estrictamente necesaria para salvaguardar la seguridad de los servidores de Discord:

a) Contenido de Mensajes de Texto
• Finalidad: Análisis heurístico en tiempo real, detección de enlaces fraudulentos y cálculo del Risk Score (0-100).
• Tratamiento: Los mensajes con puntuación de riesgo normal o benigna se procesan en memoria volátil (RAM) y se descartan inmediatamente sin guardarse en disco. Solo cuando un mensaje supera los umbrales de riesgo configurados por el servidor o constituye evidencia de un incidente o sanción, se registra de forma cifrada en la base de datos interna.

b) Imágenes y Archivos Adjuntos
• Finalidad: Detección de comprobantes de pago falsos, capturas de phishing y credenciales robadas mediante reconocimiento de texto (OCR) y análisis forense multimodal.
• Tratamiento: Las imágenes se descargan de forma efímera en el directorio temporal del sistema (/tmp) para su análisis inmediato y se eliminan del disco de manera irrevocable una vez extraídas las firmas visuales. ScamLock NUNCA almacena copias permanentes de imágenes analizadas en disco.

c) Identificadores Técnicos de Discord
• Identificadores: IDs numéricas públicas de usuario (user_id), servidor (guild_id), canal (channel_id) y mensaje (message_id).
• Finalidad: Mantener la consistencia operativa, entregar alertas en canales de moderación autorizados, asociar configuraciones personalizadas y correlacionar ataques masivos entre servidores.

d) Historial de Incidentes y Moderación
• Finalidad: Trazabilidad administrativa de sanciones para los moderadores del servidor y prevención de reincidencia.`,
    contentEn: `ScamLock adheres strictly to the data minimization principle, processing only the information technically necessary to protect Discord servers:

a) Text Message Content
• Purpose: Real-time heuristic evaluation, malicious URL detection, and Risk Score calculation (0-100).
• Processing: Messages evaluated as safe or low risk are processed entirely in volatile memory (RAM) and immediately discarded. Only messages that trigger high-risk alerts or represent critical evidence of an infraction are stored in an encrypted database.

b) Images & File Attachments
• Purpose: Forensic detection of forged payment proofs, phishing screenshots, and credential harvesting via OCR and multimodal security models.
• Processing: Images are downloaded ephemerally into a temporary sandbox (/tmp) for analysis and permanently wiped from disk immediately after inspection. ScamLock NEVER maintains a persistent library of analyzed image attachments.

c) Technical Discord Identifiers
• Data: Public numerical IDs for user (user_id), guild (guild_id), channel (channel_id), and message (message_id).
• Purpose: Operational routing of alerts to designated moderator channels, guild settings storage, and multi-server attack campaign correlation.

d) Incident & Moderation History
• Purpose: Administrative audit logs for server moderators and repeat offender tracking.`,
  },
  {
    id: 'cifrado-seguridad',
    title: '3. Cifrado en Reposo y Medidas de Seguridad',
    titleEn: '3. Encryption at Rest & Security Controls',
    content: `Para salvaguardar la evidencia sensible que ScamLock debe conservar, implementamos criptografía moderna y autenticada:

• Algoritmo Estándar: AES-256-GCM (Galois/Counter Mode con clave de 256 bits).
• Campos Cifrados: El contenido de mensajes almacenados como evidencia, las explicaciones de investigaciones forenses, el texto de evidencia en casos de cuentas y los detalles de apelaciones se almacenan cifrados con prefijo versionado (enc:v1:).
• Gestión Segura de Claves: La clave criptográfica reside exclusivamente en una variable de entorno segura fuera del código y fuera de la base de datos. Si la clave no está configurada, el bot entra en modo pasivo sin generar claves volátiles que corrompan los datos existentes.
• Redacción en Logs: Los registros del sistema aplican sanitización automática eliminando tokens de Discord, claves de cifrado y API keys.`,
    contentEn: `To protect all retained security evidence, ScamLock employs industry-standard authenticated cryptography:

• Standard Algorithm: AES-256-GCM (Galois/Counter Mode with 256-bit keys).
• Encrypted Fields: Evidence message contents, forensic explanations, case evidence text, and appeal notes are stored encrypted with cryptographic versioning (enc:v1:).
• Key Isolation: The encryption key is held exclusively in environment variables outside the database and git repositories. In absence of a configured key, the bot operates in passive mode without generating volatile temporary keys.
• Automated Log Redaction: All runtime diagnostic logs redact Discord tokens, encryption secrets, and API credentials automatically.`,
  },
  {
    id: 'retencion',
    title: '4. Períodos de Retención de Datos',
    titleEn: '4. Data Retention Periods',
    content: `ScamLock no conserva datos de forma indefinida. El sistema cuenta con un servicio de retención periódica automatizado (RetentionService):

• Detecciones de seguridad: Máximo 90 días naturales (configurable por variables de entorno).
• Historial de moderación del servidor: Máximo 180 días naturales.
• Copias de seguridad atómicas: Rotación periódica con un límite máximo de 10 copias recientes; las versiones anteriores se destruyen.
• Canales privados de apelación: Se destruyen y eliminan inmediatamente en Discord al resolverse la apelación, transfiriendo una transcripción minimizada al canal de archivo seguro del servidor de soporte oficial.
• Salvaguarda de Casos Activos: Ningún dato correspondiente a una apelación o caso de cuenta en curso (OPEN / IN_REVIEW) es purgado automáticamente hasta su resolución.`,
    contentEn: `ScamLock does not store data indefinitely. A dedicated automated background retention service enforces retention windows:

• Security Detections: Maximum 90 calendar days.
• Server Moderation History: Maximum 180 calendar days.
• Atomic Backups: Automatic FIFO rotation keeping at most the 10 most recent snapshots; older backups are securely wiped.
• Private Appeal Channels: Destroyed and purged from Discord immediately once an appeal ticket is resolved, archiving a sanitized transcript into an authorized support archive channel.
• Active Case Safeguard: Evidence linked to ongoing open appeals or active investigations is protected from automated deletion until the case is officially closed.`,
  },
  {
    id: 'ia-proveedores',
    title: '5. Uso de Proveedores Externos de IA y Cero Entrenamiento',
    titleEn: '5. AI Providers & Strict Zero-Training Commitment',
    content: `ScamLock utiliza modelos de inteligencia artificial (Google Gemini API) de forma estrictamente funcional para el análisis heurístico avanzado de phishing complejo y reconocimiento óptico de caracteres (OCR).

• Cero Entrenamiento de Modelos: En estricto cumplimiento con los Términos de Desarrolladores de Discord (Discord Developer Terms of Service - Sección 5.c), los mensajes, adjuntos y contenidos obtenidos a través de la API de Discord NO se utilizan, ni se compartirán, licenciarán o comercializarán para entrenar modelos de IA propios o de terceros.
• Minimización de Envío: Solo se envía el texto o imagen objeto de análisis de riesgo, excluyendo metadatos superfluos, listas de miembros o datos de servidores no relacionados.`,
    contentEn: `ScamLock utilizes external AI services (Google Gemini API) strictly for functional cybersecurity evaluation (complex phishing heuristic analysis and OCR).

• Zero Model Training Policy: In full compliance with Discord Developer Terms of Service (Section 5.c), user messages, attachments, and content gathered via Discord are NEVER used, shared, licensed, or commercialized to train foundational or generative AI models.
• Transmission Minimization: Only the specific text snippet or image under risk analysis is transmitted, stripped of superfluous metadata, user lists, or unrelated server context.`,
  },
  {
    id: 'derechos-eliminacion',
    title: '6. Derechos de los Usuarios y Eliminación de Datos',
    titleEn: '6. User Rights & Data Deletion (GDPR / CCPA)',
    content: `Cualquier usuario de Discord puede ejercer sus derechos de acceso, rectificación y supresión («Derecho al Olvido»):

• Sistema Centralizado de Supresión (UserDataDeletionService): Disponemos de un servicio técnico centralizado que identifica y purga de forma atómica y transaccional todas las detecciones, registros de moderación, estados de cuenta y referencias vinculadas a una ID de usuario en SQLite.
• Copia Preventiva de Seguridad: Antes de ejecutar cualquier eliminación destructiva, el sistema genera un respaldo atómico de la base de datos para prevenir pérdida fortuita de información.
• Cómo solicitar la eliminación: Puedes solicitar la purga completa de tus datos personales enviando un mensaje en nuestro Servidor Oficial de Soporte o escribiendo a nuestro correo oficial de contacto indicando tu User ID de Discord.`,
    contentEn: `Any Discord user can exercise their data subject rights, including access, rectification, and erasure (Right to be Forgotten):

• Centralized Deletion Engine (UserDataDeletionService): A dedicated service atomically identifies and purges all detection records, moderation history entries, account flags, and campaign associations tied to a user ID.
• Safeguard Backup: An atomic integrity-checked backup is created prior to destructive deletion to safeguard system consistency.
• How to Request Deletion: Submit your request via our Official Support Server or email our official contact address with your numeric Discord User ID.`,
  },
  {
    id: 'control-acceso',
    title: '7. Control de Acceso y Personal Autorizado',
    titleEn: '7. Access Control & Authorized Staff',
    content: `El acceso a los registros de seguridad, casos de cuentas marcadas y transcripciones está restringido en el backend:

• Validación Estricta: Únicamente miembros con el rol de soporte autorizado (ID 1554460583321935872) dentro del servidor oficial de soporte (ID 1502345078880866536) tienen autorización técnica para acceder a funciones administrativas y expedientes de cuentas.
• Auditoría de Acceso: Todo acceso de staff a un caso o apelación se registra con timestamp, actor y tipo de operación, sin almacenar datos personales en los registros de auditoría.`,
    contentEn: `Access to stored security evidence, compromised account records, and transcripts is enforced at the backend level:

• Strict Role & Server Verification: Only staff members possessing the verified support role (ID 1554460583321935872) inside the official support guild (ID 1502345078880866536) can query administrative dossiers and review account flags.
• Minimized Audit Trails: Every staff inspection or status update is logged with actor ID, timestamp, and action code, omitting sensitive message contents from the audit trail.`,
  },
  {
    id: 'contacto-privacidad',
    title: '8. Contacto para Asuntos de Privacidad',
    titleEn: '8. Privacy Contact & Inquiries',
    content: `Para cualquier duda, solicitud de supresión de datos o aclaración sobre nuestras prácticas de seguridad, puedes comunicarte a través de:

• Correo electrónico oficial: Ver sección de Contacto en este sitio web.
• Servidor oficial de soporte de Discord: https://discord.gg/G37UGXjKbW`,
    contentEn: `For questions, data erasure requests, or security inquiries, reach out through:

• Official Contact Email: See the Contact section on this website.
• Official Discord Support Server: https://discord.gg/G37UGXjKbW`,
  },
];
