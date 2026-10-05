/**
 * Términos de Uso Oficiales de ScamLock
 *
 * Incluye advertencias claras sobre limitaciones de detección automatizada,
 * responsabilidad del administrador del servidor y desvinculación con Discord Inc.
 */

export interface TermsSection {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
}

export const TERMS_OF_SERVICE: TermsSection[] = [
  {
    id: 'aceptacion',
    title: '1. Aceptación de los Términos',
    titleEn: '1. Acceptance of Terms',
    content: `Al invitar, configurar o utilizar el bot ScamLock en tu servidor de Discord, o al acceder a este sitio web oficial, aceptas quedar vinculado por estos Términos de Uso y por nuestra Política de Privacidad. Si no estás de acuerdo con alguna de estas condiciones, no debes añadir ni utilizar ScamLock.`,
    contentEn: `By inviting, configuring, or operating the ScamLock bot within your Discord server, or by accessing this official website, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with any of these terms, you must not add or use ScamLock.`,
  },
  {
    id: 'descripcion-servicio',
    title: '2. Descripción del Servicio y Limitaciones de Detección',
    titleEn: '2. Service Scope & Automated Detection Limitations',
    content: `ScamLock es una herramienta de asistencia a la moderación y ciberseguridad comunitaria diseñada para analizar patrones de texto, enlaces sospechosos e imágenes a fin de alertar o mitigar vectores de estafas y phishing.

⚠️ ADVERTENCIA CRÍTICA:
Ningún sistema automatizado puede garantizar una protección del 100% contra estafas, ataques de ingeniería social o vulnerabilidades informáticas. ScamLock es una capa preventiva complementaria, NO un sustituto del criterio humano, la prudencia de los usuarios y la supervisión activa del equipo de moderación del servidor. No afirmamos ni garantizamos que ScamLock neutralizará la totalidad de las amenazas existentes o emergentes.`,
    contentEn: `ScamLock is a community security and moderation assistance tool built to analyze text patterns, suspicious links, and images to assist in flagging and mitigating scam and phishing vectors.

⚠️ CRITICAL DISCLAIMER:
No automated detection software can guarantee 100% protection against scams, social engineering exploits, or cyber threats. ScamLock serves as an auxiliary defensive layer, NEVER as a complete replacement for human judgment, user prudence, or active moderator oversight. We do not warrant that ScamLock will catch or neutralize all existing or future threats.`,
  },
  {
    id: 'responsabilidad-administrador',
    title: '3. Responsabilidad del Administrador del Servidor',
    titleEn: '3. Server Administrator Responsibilities',
    content: `El propietario y los administradores del servidor son los únicos responsables de:
• Configurar adecuadamente los umbrales de alerta y eliminación del bot según la tolerancia de su comunidad.
• Asignar y supervisar los permisos de moderación otorgados a ScamLock dentro del servidor.
• Atender las revisiones de falsos positivos y regular los canales de lista blanca cuando corresponda.
• Informar a los miembros de su servidor de que las comunicaciones públicas están sujetas a análisis automatizado de seguridad conforme a las directrices de la plataforma.`,
    contentEn: `Server owners and administrators maintain sole responsibility for:
• Properly calibrating alert and deletion thresholds according to their community standards.
• Provisioning and supervising bot permission roles inside their guild.
• Reviewing potential false positives and configuring whitelist exemptions where appropriate.
• Informing server members that public communications are analyzed by automated security filters in accordance with platform policies.`,
  },
  {
    id: 'falsos-positivos',
    title: '4. Falsos Positivos y Apelaciones',
    titleEn: '4. False Positives & Appeal Process',
    content: `Dado que los algoritmos de detección heurística y aprendizaje automático analizan patrones contextuales, pueden producirse falsos positivos de manera ocasional.

• ScamLock proporciona el comando /scamlock perfil y canales dedicados en el Servidor Oficial de Soporte para que los usuarios afectados puedan solicitar la revisión y normalización de su estado de cuenta.
• Los administradores del servidor pueden utilizar /scamlock whitelist para eximir dominios institucionales, canales específicos o roles legítimos que puedan generar coincidencias no deseadas.`,
    contentEn: `Because heuristic analyzers and machine-learning models evaluate contextual text and image signals, false positives may occasionally arise.

• ScamLock offers the /scamlock perfil command and dedicated support tickets in the Official Support Server where affected users can request an administrative review and status reset.
• Server administrators are encouraged to use /scamlock whitelist to exempt verified organizational domains, test channels, or trusted roles.`,
  },
  {
    id: 'uso-prohibido',
    title: '5. Uso Indebido y Restricciones',
    titleEn: '5. Prohibited Misuse & Abuse',
    content: `Queda estrictamente prohibido:
• Utilizar ScamLock para hostigar, espiar o acosar a usuarios legítimos de Discord.
• Intentar eludir, descompilar, saturar deliberadamente o realizar ataques de denegación de servicio (DoS) contra los servidores de ScamLock.
• Emplear ScamLock para distribuir contenido ilegal, malware o infringir los Términos de Servicio de Discord.
• Fingir ser miembro del equipo oficial de soporte o seguridad de ScamLock.`,
    contentEn: `You agree not to:
• Misuse ScamLock to target, harass, or surveil legitimate Discord users.
• Attempt to circumvent, reverse engineer, flood, or launch denial-of-service (DoS) attacks against ScamLock infrastructure.
• Utilize ScamLock to distribute illegal content, propagate malware, or violate Discord Terms of Service.
• Impersonate official ScamLock developers or authorized support staff.`,
  },
  {
    id: 'disponibilidad',
    title: '6. Disponibilidad, Modificaciones y Suspensión',
    titleEn: '6. Service Availability & Modifications',
    content: `ScamLock se proporciona «tal cual» («as is») y «según disponibilidad». No garantizamos que el servicio opere de manera ininterrumpida, libre de errores o que esté exento de caídas por mantenimiento técnico o incidentes en la red de Discord.

Nos reservamos el derecho de modificar, actualizar, restringir o suspender el acceso a ScamLock de forma temporal o definitiva ante abusos, violaciones a estos términos o requerimientos técnicos de la plataforma.`,
    contentEn: `ScamLock is provided on an "as is" and "as available" basis without warranties of any kind. We do not warrant that bot availability will be uninterrupted, error-free, or resilient against Discord API network outages.

We reserve the right to modify, upgrade, throttle, or suspend bot access temporarily or permanently in cases of service abuse, terms violations, or maintenance demands.`,
  },
  {
    id: 'desvinculacion-discord',
    title: '7. Relación Legal con Discord Inc.',
    titleEn: '7. Legal Relationship with Discord Inc.',
    content: `ScamLock es un software de desarrollo independiente creado por su propio equipo de desarrollo.

ScamLock NO es un producto oficial de Discord Inc., y NO está afiliado, patrocinado, respaldado ni asociado contractualmente con Discord Inc. El logotipo de Discord y la palabra "Discord" son marcas registradas propiedad exclusiva de Discord Inc.`,
    contentEn: `ScamLock is an independently built software application developed by its independent team.

ScamLock is NOT an official Discord Inc. product and is NOT affiliated with, sponsored by, endorsed by, or in partnership with Discord Inc. The Discord logo and the name "Discord" are registered trademarks of Discord Inc.`,
  },
  {
    id: 'modificaciones-terminos',
    title: '8. Modificaciones a los Términos de Uso',
    titleEn: '8. Changes to These Terms',
    content: `Podemos actualizar estos Términos de Uso periódicamente. La versión más reciente estará siempre publicada en este sitio web con su fecha de revisión correspondiente. El uso continuado del bot tras la entrada en vigor de los cambios constituye la aceptación plena de los mismos.`,
    contentEn: `We may revise these Terms of Use periodically. The latest version will always be published on this website. Continued operation or presence of the bot in your server following updates constitutes acceptance of the modified terms.`,
  },
];
