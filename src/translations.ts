import { Solution, TimelineEvent } from './types';

export const TRANSLATIONS = {
  en: {
    // Nav & Sidebar
    core_intel: 'CORE_INTELLIGENCE',
    spec_solutions: 'SPECIALIZED_SOLUTIONS',
    feat_publication: 'FEATURED_PUBLICATION',
    trajectory_chronos: 'TRAJECTORY_CHRONOS',
    system_terminal: 'SYSTEM_TERMINAL',
    uplink_status: 'UPLINK_STATUS',
    secure: 'SECURE',
    cognitive_grid: 'COGNITIVE_GRID',
    stable: 'STABLE',
    representation: 'REPRESENTATION',
    active_logs: 'ACTIVE LOGS //',
    email_uplink: 'EMAIL_UPLINK',
    lead_ai_architect: 'Strategic AI Consultant',

    // Hero Section
    sys_activate: 'SYSTEM_ACTIVATE // CONVERGENCE_INITIATED',
    strategic: 'STRATEGIC_',
    ai_evolution: 'AI_EVOLUTION',
    lawyer_title: 'Lawyer & Artificial Intelligence Product Strategist',
    hero_description: 'Decisive cross-disciplinary bridge. Merging more than 10 years of legal advisory acumen with official Cloud and AI credentials from IBM and Google to engineer reliable cognitive workflows, absolute compliance mapping, and bulletproof strategic integrations.',
    legal_compliance: 'Legal Compliance',
    legal_desc: 'Ley 1581 / DIAN / GDPR',
    ai_product_owner: 'AI Product Owner',
    ai_desc: 'IBM & Google Certified',
    init_consult: 'INITIALIZE_CONSULT',
    deploy_logs: 'DEPLOY_ACADEMIC_LOGS',
    system_core_version: 'System Core Version',

    // Solutions Section
    proprietary_systems: 'PROPRIETARY SYSTEMS',
    custom_engines: 'Custom sector-specific cognitive engines',
    activate_diagnostics: 'ACTIVATE DIAGNOSTICS',
    secure_shell: 'SECURE_SHELL //',
    modal_description: '1. Operational Description',
    modal_subsystems: '2. Built-in Core Subsystems',
    modal_compliance: 'LEGAL TECH STANDARDS',
    modal_cognitive_stack: 'COGNITIVE STACK',
    request_pilot: 'REQUEST_PILOT_MIGRATION',
    close_shell: 'CLOSE_SHELL',

    // Publication Section
    featured_p_badge: 'BEST SELLING MONKEY // FEATURED PUBLICATION',
    unleash_power: 'UNLEASH THE POWER',
    of_ai: 'OF AI',
    guideline: 'A comprehensive strategic manuscript by Angel Zambrano',
    pub_description: '"Desata el poder de la IA" is a definitive handbook tailored for legal counsel, corporate managers, and startup builders navigating the complex waves of automation. It bridges technical machine-learning fundamentals with real-world strategic frameworks and regulatory compliance.',
    points: [
      { num: '01', title: 'Ingestion Methodology', text: 'How to design prompts and robust pipelines step by step.' },
      { num: '02', title: 'Liability Protection', text: 'Mitigating algorithmic bias and establishing controls against hallucination.' },
      { num: '03', title: 'Data Governance', text: 'Ethical implementations in line with active regional Habeas Data legislation.' },
      { num: '04', title: 'Agile Product', text: 'Agile development (Scrum) customized specifically for deep-tech integrations.' }
    ],
    preview_btn: 'ACCESS_MANUSCRIPT_PREVIEW',
    sync: 'SYNCHRONIZING_CORE_',
    download_complete: 'MANUSCRIPT_SYNC_COMPLETE // Check systemic records in local directory.',
    available_preview: '*Available PDF Preview File',
    book_badge: 'FEATURED PUBLICATION // MANUAL',
    book_tagline: 'A comprehensive strategic manuscript by Angel Zambrano J.',
    book_description: '"Desata el poder de la IA" is a definitive handbook tailored for legal counsel, corporate managers, and startup builders navigating the complex waves of automation. It bridges technical machine-learning fundamentals with real-world strategic frameworks and regulatory compliance.',
    book_point1_title: 'Master Prompts',
    book_point1_desc: 'Learn to communicate effectively with AI.',
    book_point2_title: 'Multiply Your Productivity',
    book_point2_desc: 'Automate tasks and save hours of work.',
    book_point3_title: 'Think with AI',
    book_point3_desc: 'Convert complex ideas into concrete results.',
    book_point4_title: 'Gear Up for the Future',
    book_point4_desc: 'Develop key skills for the new digital era.',
    book_buy_now: 'Get it now',
    book_available_format: 'Available in Kindle & Paperback format',

    // Chronos Section
    ecosystem_expansion: 'ECOSYSTEM EXPANSION',
    trajectory_desc: 'Keynotes, symposium logs, and distributed collaboration records',
    chronology_metric: 'CHRONOLOGY METRIC',
    bento_desc: 'VISUAL TELEMETRY MODULES',

    // Terminal Section
    terminal_title: 'SYSTEM_TERMINAL',
    terminal_desc: 'Execute virtual directories on Angel Zambrano\'s credentials',
    terminal_header: 'SYSTEM_TERMINAL // root@angelzambrano',
    terminal_welcome: 'Type "help" to view available subroutines, or use the query chips below.',
    chip_help: 'deploy help',
    chip_about: 'query about',
    chip_certs: 'decrypt certs',
    chip_solutions: 'inspect solutions',
    chip_contact: 'ping contact',
    chip_sysinfo: 'run diagnostics',
    credential_explorer: 'CREDENTIAL EXPLORER PORT',
    cred_desc: 'Use metadata search matrix to verify cryptographic certification issuance logs',
    search_placeholder: 'Filter by credential name, issuer, key topics...',
    all_categories: 'ALL RECORDS',
    not_found: 'NO MUTATION MATCHES FOUND IN CRYPTO DIRECTORY.',

    // Consultation Form Section
    grid_entrance: 'GRID ENTRANCE',
    integrated_consult: 'INTEGRATED_STRATEGY',
    consultation: 'CONSULTATION',
    consult_subtitle: 'Submit your enterprise regulatory, logistics, or legal tech challenge. Receive an automated strategic assessment detailing procedural architecture and protective compliance.',
    nda_guaranteed: 'Guaranteed NDA & Client Secrecy',
    select_sector: '1. Operational Sector / Field',
    describe_challenge: '2. Describe your automation challenge or bottleneck',
    placeholder_challenge: 'e.g., We spend too much time sorting physical invoices before sending them to the DIAN...',
    submit_btn: 'GENERATE_STRATEGIC_PLAN',
    submitting_btn: 'SYNCHRONIZING_GRID_RESOURCES...',
    matrix_comp: 'STRATAGEM GENERATION COMPLETE',
    confidential_watermark: '*Confidential and Proprietary Strategic Insight',
    send_to_angel: 'SEND_TO_ANGEL'
  },
  es: {
    // Nav & Sidebar
    core_intel: 'NÚCLEO_INTELIGENTE',
    spec_solutions: 'SOLUCIONES_ESPECIALIZADAS',
    feat_publication: 'PUBLICACIÓN_DESTACADA',
    trajectory_chronos: 'TRAYECTORIA_CHRONOS',
    system_terminal: 'TERMINAL_SISTEMA',
    uplink_status: 'ESTADO_CONEXIÓN',
    secure: 'SEGURO',
    cognitive_grid: 'RED_COGNITIVA',
    stable: 'ESTABLE',
    representation: 'REPRESENTACIÓN',
    active_logs: 'LOGS ACTIVOS //',
    email_uplink: 'ENLACE_CORREO',
    lead_ai_architect: 'Estratega Consultor en IA',

    // Hero Section
    sys_activate: 'SISTEMA_ACTIVO // CONVERGENCIA_INICIADA',
    strategic: 'EVOLUCIÓN_',
    ai_evolution: 'ESTRATEGICA_IA',
    lawyer_title: 'Abogado y Estratega de Producto de Inteligencia Artificial',
    hero_description: 'Puente interdisciplinario decisivo. Fusionando más de 10 años de experiencia en asesoría legal en entornos corporativos y fiscales de Colombia con credenciales oficiales de Inteligencia Artificial de IBM y Google Cloud para diseñar flujos de trabajo cognitivos confiables, mapeo de cumplimiento estricto e integraciones estratégicas blindadas.',
    legal_compliance: 'Cumplimiento Legal',
    legal_desc: 'Ley 1581 / DIAN / GDPR',
    ai_product_owner: 'Líder de Producto IA',
    ai_desc: 'Certificado por IBM y Google',
    init_consult: 'INICIAR_CONSULTORÍA',
    deploy_logs: 'VER_REGISTROS_ACADÉMICOS',
    system_core_version: 'Versión del Núcleo',

    // Solutions Section
    proprietary_systems: 'SISTEMAS PROPIETARIOS',
    custom_engines: 'Motores cognitivos personalizados por sector regulado',
    activate_diagnostics: 'ACTIVAR DIAGNÓSTICO',
    secure_shell: 'SHELL_SEGURO //',
    modal_description: '1. Descripción de la Operación',
    modal_subsystems: '2. Sub-sistemas del Núcleo Integrados',
    modal_compliance: 'ESTÁNDAR DE CUMPLIMIENTO (LEGAL TECH)',
    modal_cognitive_stack: 'COGNITIVE STACK (TECNOLOGÍAS)',
    request_pilot: 'SOLICITAR_PILOTO_MIGRACIÓN',
    close_shell: 'CERRAR_SHELL',

    // Publication Section
    featured_p_badge: 'MANUSCRITO SECTORIAL // PUBLICACIÓN DESTACADA',
    unleash_power: 'DESATA EL PODER',
    of_ai: 'DE LA IA',
    guideline: 'Una guía estratégica completa por Ángel Zambrano',
    pub_description: '"Desata el poder de la IA" es un manual definitivo diseñado para directores jurídicos, gerentes corporativos y fundadores de startups que navegan por las complejas olas de la automatización industrial. Conecta los conceptos técnicos de Machine Learning con gobernanza corporativa, agilidad y cumplimiento normativo colombiano.',
    points: [
      { num: '01', title: 'Metodología de Ingesta', text: 'Cómo diseñar prompts y canalizaciones robustas paso a paso sin alucinaciones.' },
      { num: '02', title: 'Blindaje de Responsabilidad', text: 'Cómo mitigar el sesgo algorítmico y establecer cláusulas contractuales limitativas.' },
      { num: '03', title: 'Gobernanza de Datos', text: 'Implementación ética en base a las leyes de protección de datos personales (Habeas Data / Ley 1581).' },
      { num: '04', title: 'Producto Ágil (Scrum)', text: 'Ciclos Scrum integrados de forma ágil para iteraciones rápidas en tecnología profunda.' }
    ],
    preview_btn: 'DESCARGAR_PREVISTA_MANUSCRITO',
    sync: 'SINCRONIZANDO_NÚCLEO_LOCAL_',
    download_complete: 'SINCRONIZACIÓN DE MANUSCRITO CORRECTA // Registros guardados en directorio local.',
    available_preview: '*Disponible únicamente previsualización PDF autorizada',
    book_badge: 'PUBLICACIÓN DESTACADA // MANUAL PRÁCTICO',
    book_tagline: 'Una guía estratégica completa por Ángel Zambrano J.',
    book_description: '"Desata el poder de la IA" es un manual definitivo diseñado para directores jurídicos, gerentes corporativos y fundadores de startups que desean dominar la inteligencia artificial. Conecta conceptos técnicos con marcos prácticos y cumplimiento regulatorio.',
    book_point1_title: 'Domina los Prompts',
    book_point1_desc: 'Aprende a comunicarte eficazmente con la IA.',
    book_point2_title: 'Multiplica tu Productividad',
    book_point2_desc: 'Automatiza tareas y ahorra horas de trabajo.',
    book_point3_title: 'Piensa con IA',
    book_point3_desc: 'Convierte ideas complejas en resultados concretos.',
    book_point4_title: 'Prepárate para el Futuro',
    book_point4_desc: 'Desarrolla habilidades clave para la nueva era digital.',
    book_buy_now: 'Adquiérelo ya',
    book_available_format: 'Disponible en formato Kindle y físico',

    // Chronos Section
    ecosystem_expansion: 'EXPANSIÓN DEL ECOSISTEMA',
    trajectory_desc: 'Conferencias magistrales, participación en simposios y registros de investigación distribuida',
    chronology_metric: 'MÉTRICA DE CRONOLOGÍA',
    bento_desc: 'MÓDULOS DE TELEMETRÍA VISUAL',

    // Terminal Section
    terminal_title: 'TERMINAL_DEL_SISTEMA',
    terminal_desc: 'Ejecute consultas en la consola y acceda al directorio de credenciales de Angel',
    terminal_header: 'TERMINAL_SISTEMA // root@angelzambrano',
    terminal_welcome: 'Escriba "help" para ver subrutinas válidas, o use los comandos rápidos:',
    chip_help: 'desplegar help',
    chip_about: 'acerca de',
    chip_certs: 'desencriptar certs',
    chip_solutions: 'listar soluciones',
    chip_contact: 'ping de contacto',
    chip_sysinfo: 'ver rendimiento',
    credential_explorer: 'REGISTRO DE CREDENCIALES COMPLETA',
    cred_desc: 'Filtre y valide en tiempo real los registros normativos de certificación recibidos',
    search_placeholder: 'Buscar credencial, emisor, tema clave...',
    all_categories: 'TODAS LAS CATEGORÍAS',
    not_found: 'NINGUNA CREDENCIAL COINCIDE CON LOS PARÁMETROS DEL FILTRO.',

    // Consultation Form Section
    grid_entrance: 'ENTRADA DE DATOS',
    integrated_consult: 'CONSULTORÍA_ESTRATÉGICA',
    consultation: 'INTEGRADA',
    consult_subtitle: 'Exponga su desafío regulatorio, operativo o legal tech corporativo. Obtenga un reporte estratégico generado por computadora detallando la arquitectura procesal idónea y blindaje de cumplimiento.',
    nda_guaranteed: 'Confidencialidad absoluta y NDA Garantizado',
    select_sector: '1. Campo o Sector de Operación',
    describe_challenge: '2. Describa su desafío o cuello de botella técnico',
    placeholder_challenge: 'Ej. Tardamos mucho tiempo clasificando facturas manuales antes de reportarlas a la DIAN...',
    submit_btn: 'GENERAR_PLANO_ESTRATÉGICO',
    submitting_btn: 'SINCRONIZANDO RECURSOS DE PROCESAMIENTO...',
    matrix_comp: 'PLAN DE ACCIÓN ESTRATÉGICO COMPLETADO',
    confidential_watermark: '*Información Estratégica Confidencial y de Propiedad Intelectual Exclusiva',
    send_to_angel: 'ENVIAR_A_ANGEL'
  }
};

export const SOLUTIONS_ES: Solution[] = [
  {
    id: 'medic-ia',
    name: 'Medic-IA',
    icon: 'health_and_safety',
    tagline: 'Diagnósticos de precisión y automatización procesal en salud.',
    description: 'Sistema avanzado de asistencia clínica de diagnóstico y gestión de pacientes impulsado por redes neuronales artificiales. Diseñado para reducir los tiempos muertos administrativos respetando Habeas Data de salud.',
    fullDetails: 'Medic-IA es una maravilla bio-técnica pensada para redes hospitalarias y consultorios. Facilita los intakes médicos iniciales estructurando síntomas conversacionales caóticos en perfiles médicos con códigos ICD-10 preliminares, asegurando estricto cumplimiento legal de secreto profesional.',
    features: [
      'Clasificación sintomática estructurada e hipótesis inicial ICD-10',
      'Anonimización automática de expedientes con filtrado de datos sensibles en tiempo real',
      'Ingesta documental multimodal (exámenes, prescripciones e imágenes)',
      'Tablero de control interactivo para validación del especialista médico'
    ],
    cognitiveStack: [
      'Gemini 2.5 Flash API con embeddings terminológicos de salud',
      'Procesadores NLP optimizados para medicina castellana',
      'Protocolos de cifrado robusto extremo a extremo de extremo corporativo'
    ],
    legalTechCompliance: 'Diseñado bajo la normatividad de Habeas Data Médico en Colombia (Ley Estatutaria 1581 de 2012) y regulaciones internacionales de salud.'
  },
  {
    id: 'dian-ia',
    name: 'Dian-IA',
    icon: 'account_balance_wallet',
    tagline: 'Auditoría inteligente tributaria y análisis fiscal predictiva.',
    description: 'Analizador tributario automático y mapeador de riesgos contables. Facilita estructurar alegatos de defensa de manera informada frente a la DIAN y entes tributarios.',
    fullDetails: 'Dian-IA examina libros contables corporativos, cruces de facturación XML y nóminas del equipo. Identifica inconsistencias de retenciones, clasificaciones incorrectas y simula pre-auditorías de impuestos predictivos en base a las últimas reformas legislativas colombianas.',
    features: [
      'Ingestión analítica masiva de facturación digital PDF/XML compatible DIAN',
      'Algoritmo de alerta contra inconsistencias fiscales recurrentes',
      'Recomendaciones fundamentadas de exoneraciones y deducciones vigentes',
      'Métrica agregada de salud fiscal tributaria empresarial'
    ],
    cognitiveStack: [
      'Estructuración predictiva utilizando esquemas JSON semánticos',
      'Indexación vectorial periódica del Estatuto Tributario Colombiano',
      'Motor avanzado OCR de pre-clasificación inteligente'
    ],
    legalTechCompliance: 'Coincide rigurosamente con los protocolos exigidos por la DIAN y estándares financieros NIIF.'
  },
  {
    id: 'sinerg-ia',
    name: 'Sinerg-IA',
    icon: 'groups',
    tagline: 'Orquestación corporativa autónoma multi-agente y flujos de trabajo.',
    description: 'Coordinador privado de agentes de inteligencia artificial especializados (contratos, compliance, mercadeo). Centraliza y automatiza la ejecución autónoma de tareas.',
    fullDetails: 'Sinerg-IA configura un entorno de colaboración empresarial aislada. Distintos sub-agentes neuronales cooperan redactando y revisando minutas de contratos comerciales, validando compliance interno y unificando campañas publicitarias.',
    features: [
      'Flujo integrado multi-agente con aprobante humano directo en mesa',
      'Alertas tempranas automáticas sobre entregables contractuales clave',
      'Enlace nativo mediante Zapier, Slack, Teams y ecosistema integrado',
      'Reporte ejecutivo estructurado final redactado en lenguaje natural impecable'
    ],
    cognitiveStack: [
      'LangGraph multi-agente de control continuo',
      'Orquestación de roles con prompts de sistema aislados',
      'Integraciones directas seguras API'
    ],
    legalTechCompliance: 'Implementa auditoría inalterable de accesos y tokens de autorización OAuth 2.0.'
  },
  {
    id: 'neuro-ia',
    name: 'Neuro-IA',
    icon: 'psychology',
    tagline: 'Modelado cognitivo de comportamiento y transparencia transaccional.',
    description: 'Optimización de portales legales y financieros regulados. Reduce fricción en formularios y asiste la transparencia de derechos de cara al usuario final.',
    fullDetails: 'Neuro-IA evalúa los embudos transaccionales en banca, seguros o portales legales estatales. Previene el uso involuntario de dark patterns (patrones oscuros) en autorizaciones de Habeas Data acelerando la aceptación verdaderamente consciente del usuario.',
    features: [
      'Monitoreo inteligente de velocidades de clicks para garantizar lectura de cláusulas de exención de responsabilidad',
      'Simplificación semántica según el nivel de alfabetización digital del cliente',
      'Análisis proactivo de diseños para certificar estándares de usabilidad legal',
      'Certificados criptográficos de intención en procesos fintech protegidos'
    ],
    cognitiveStack: [
      'Monitoreo micro-interactivo de interacción front-end',
      'Modelo de cómputo de carga cognitiva de interfaces',
      'Bloques hash de evidencia de consentimiento inmutable'
    ],
    legalTechCompliance: 'Respeta el consentimiento informado estatuido por la Corte Constitucional colombiana y la directriz GDPR europea.'
  }
];

export const TIMELINE_ES: TimelineEvent[] = [
  {
    year: '2024',
    title: 'Líder de Producto IA y Estrategia Gubernamental',
    institution: 'Orquestaciones Tecnológicas Autónomas',
    description: 'Dirigiendo integraciones de agentes LLM avanzados, auditorías de cumplimiento legal tech y esquemas de automatización para holdings de LATAM.'
  },
  {
    year: '2023',
    title: 'Especializaciones de IA y Ciencia de Datos',
    institution: 'Google Cloud & IBM',
    description: 'Adquisición de títulos especializados en Inteligencia Artificial Generativa, Prompt Engineering, arquitectura de LLMs y gestión de proyectos.'
  },
  {
    year: '2022',
    title: 'Consultor de Análisis de Negocios y Cloud',
    institution: 'Sistemas Profesionales de Consultoría',
    description: 'Certificado por Google Cloud en transformación digital. Gestión de migraciones operativas y agilidad corporativa utilizando metodologías Scrum.'
  },
  {
    year: '2011 - 2021',
    title: 'Abogado Corporativo y Tributarista',
    institution: 'Zambrano & Asociados Servicios Legales',
    description: 'Especializado en tributación, planeación fiscal, derecho administrativo y negociación de contratos corporativos complejos en Colombia.'
  }
];
