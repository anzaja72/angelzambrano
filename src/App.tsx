import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Cpu, 
  Award, 
  BookOpen, 
  ExternalLink, 
  Search, 
  Send, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Calendar, 
  Sliders, 
  MapPin, 
  Mail, 
  Linkedin, 
  Download, 
  Heart,
  ChevronRight,
  RefreshCw,
  Sparkles,
  Command,
  FileText,
  Languages
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SOLUTIONS, CERTIFICATES, TIMELINE, COGNITIVE_BENTO_IMAGES } from './data';
import { TRANSLATIONS, SOLUTIONS_ES, TIMELINE_ES } from './translations';
import { Solution, Certificate } from './types';

export default function App() {
  // Language locale setting
  const [locale, setLocale] = useState<'es' | 'en'>('es');
  const t = TRANSLATIONS[locale];
  const activeSolutions = locale === 'es' ? SOLUTIONS_ES : SOLUTIONS;
  const activeTimeline = locale === 'es' ? TIMELINE_ES : TIMELINE;

  // Navigation active anchors
  const [activeTab, setActiveTab] = useState('core');
  
  // Interactive Solution Modal State
  const [selectedSolutionId, setSelectedSolutionId] = useState<string | null>(null);
  const activeSelectedSolution = selectedSolutionId ? activeSolutions.find(s => s.id === selectedSolutionId) || null : null;

  // Search & Filter state for Credentials
  const [certSearch, setCertSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'AI' | 'Product' | 'Project' | 'Law' | 'Other'>('all');

  // Terminal State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ text: string; type: 'cmd' | 'resp' | 'error' | 'success' | 'system' }>>([
    { text: 'SYSTEM INTERCONNECT LINK: SECURE UPLINK ESTABLISHED.', type: 'system' },
    { text: 'SYSTEM VERSION: 4.0.2_SECURE_STABLE_BUILD', type: 'system' },
    { text: 'DECRYPTING ACADEMIC_CREDENTIALS.DB...', type: 'system' },
    { text: 'Type "help" to view available subroutines, or use the query chips below.', type: 'resp' },
  ]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Strategy Simulation Engine State
  const [consultSector, setConsultSector] = useState('Legal Tech');
  const [consultChallenge, setConsultChallenge] = useState('');
  const [isConsulting, setIsConsulting] = useState(false);
  const [consultOutput, setConsultOutput] = useState<string | null>(null);
  const [consultStep, setConsultStep] = useState(0);

  // Book reader simulation state
  const [isDownloadingBook, setIsDownloadingBook] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [hasDownloadedBook, setHasDownloadedBook] = useState(false);

  // Scroll spy to update Navigation Highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const coreSec = document.getElementById('core');
      const solutionsSec = document.getElementById('solutions');
      const publicationsSec = document.getElementById('publications');
      const trajectorySec = document.getElementById('trajectory');
      const terminalSec = document.getElementById('terminal-sec');

      if (terminalSec && scrollPosition >= terminalSec.offsetTop) {
        setActiveTab('terminal');
      } else if (trajectorySec && scrollPosition >= trajectorySec.offsetTop) {
        setActiveTab('trajectory');
      } else if (publicationsSec && scrollPosition >= publicationsSec.offsetTop) {
        setActiveTab('publications');
      } else if (solutionsSec && scrollPosition >= solutionsSec.offsetTop) {
        setActiveTab('solutions');
      } else if (coreSec && scrollPosition >= coreSec.offsetTop) {
        setActiveTab('core');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTab(id);
    }
  };

  // Helper to append log in Terminal
  const appendTerminalLog = (text: string, type: 'cmd' | 'resp' | 'error' | 'success' | 'system') => {
    setTerminalHistory(prev => [...prev, { text, type }]);
  };

  // Autoscroll terminal
  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory]);

  // Command Parser
  const parseTerminalCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    appendTerminalLog(`$ ${cmd}`, 'cmd');

    if (trimmed === 'help' || trimmed === 'ayuda') {
      if (locale === 'es') {
        appendTerminalLog('Comandos disponibles:', 'system');
        appendTerminalLog('  ayuda        - Muestra las subrutinas válidas', 'resp');
        appendTerminalLog('  acercade     - Muestra la biografía del perfil y sectores de Angel Zambrano', 'resp');
        appendTerminalLog('  credenciales - Consulta y cuenta los títulos de legal-tech, productos e IA', 'resp');
        appendTerminalLog('  soluciones   - Enlista los módulos de sistemas cognitivos propietarios', 'resp');
        appendTerminalLog('  contacto     - Obtiene coordenadas de comunicación directa verificada', 'resp');
        appendTerminalLog('  diagnostico  - Muestra la información de rendimiento del núcleo virtual', 'resp');
        appendTerminalLog('  limpiar      - Limpia el buffer de historial de comandos', 'resp');
      } else {
        appendTerminalLog('Available commands:', 'system');
        appendTerminalLog('  help       - Display valid subroutines', 'resp');
        appendTerminalLog('  about      - Display Angel Zambrano\'s profile biography & active sectors', 'resp');
        appendTerminalLog('  certs      - Query and retrieve counts of all legal-tech, product, and AI certificates', 'resp');
        appendTerminalLog('  solutions  - Lists proprietary AI cognitive modules (Medic-IA, etc.)', 'resp');
        appendTerminalLog('  contact    - Retrieve verified encrypted communication coordinates', 'resp');
        appendTerminalLog('  sysinfo    - Run virtual core diagnostic performance check', 'resp');
        appendTerminalLog('  clear      - Whack prompt history buffer clean', 'resp');
      }
    } else if (trimmed === 'about' || trimmed === 'acercade' || trimmed === 'sobre' || trimmed === 'autor') {
      if (locale === 'es') {
        appendTerminalLog('ÁNGEL ZAMBRANO JARABA // Abogado y Gestor de Producto de IA Estratégico', 'success');
        appendTerminalLog('Uniendo más de 10 años de asesoramiento jurídico en entornos corporativos de Colombia con credenciales y liderazgo en Inteligencia Artificial Generativa certificadas por IBM y Google Cloud. Pionero en el despliegue de soluciones LLM confiables para industrias reguladas.', 'resp');
      } else {
        appendTerminalLog('ANGEL ZAMBRANO JARABA // Attorney at Law & Strategic AI Product Manager', 'success');
        appendTerminalLog('Bridging 10+ years of regulatory legal expertise in Colombian Corporate and Fiscal environments with advanced IBM & Google Cloud Artificial Intelligence leadership credentials. Pioneer in deploying high-integrity LLM solutions for regulated industries.', 'resp');
      }
    } else if (trimmed === 'certs' || trimmed === 'credenciales' || trimmed === 'titulos') {
      const aiCount = CERTIFICATES.filter(c => c.category === 'AI').length;
      const productCount = CERTIFICATES.filter(c => c.category === 'Product').length;
      const projCount = CERTIFICATES.filter(c => c.category === 'Project').length;
      const lawCount = CERTIFICATES.filter(c => c.category === 'Law').length;
      if (locale === 'es') {
        appendTerminalLog(`LIBRO ACADÉMICO DESENCRIPTADO: EXITOSO. Encontrado:`, 'success');
        appendTerminalLog(`  [★] IA y Aprendizaje Automático: ${aiCount} Credenciales`, 'resp');
        appendTerminalLog(`  [★] Marcos de Gestión de Productos: ${productCount} Credenciales`, 'resp');
        appendTerminalLog(`  [★] Metodologías Ágiles de Proyectos: ${projCount} Credenciales`, 'resp');
        appendTerminalLog(`  [★] Títulos y Grados de Jurisprudencia: ${lawCount} Credenciales`, 'resp');
        appendTerminalLog(`Use el explorador de credenciales interactivo de abajo para inspeccionar los certificados en detalle.`, 'system');
      } else {
        appendTerminalLog(`DECRYPTED ACADEMIC LEDGER: SUCCESSFUL. Found:`, 'success');
        appendTerminalLog(`  [★] IA & Machine Learning Specialized: ${aiCount} Credentials`, 'resp');
        appendTerminalLog(`  [★] Product Management Frameworks: ${productCount} Credentials`, 'resp');
        appendTerminalLog(`  [★] Scrum & Agile Management Systems: ${projCount} Credentials`, 'resp');
        appendTerminalLog(`  [★] Jurisprudence & Regulatory Degrees: ${lawCount} Credentials`, 'resp');
        appendTerminalLog(`Use the credential explorer down below to inspect all certificates in fine detail.`, 'system');
      }
    } else if (trimmed === 'solutions' || trimmed === 'soluciones') {
      if (locale === 'es') {
        appendTerminalLog('MÓDULOS DE NÚCLEO COGNITIVO PROPIETARIOS DEPLOYADOS:', 'success');
        SOLUTIONS_ES.forEach(s => {
          appendTerminalLog(`  ● [${s.name.toUpperCase()}] - ${s.tagline}`, 'resp');
        });
      } else {
        appendTerminalLog('PROPRIETARY COGNITIVE ENGINE MODULES DEPLOYED:', 'success');
        SOLUTIONS.forEach(s => {
          appendTerminalLog(`  ● [${s.name.toUpperCase()}] - ${s.tagline}`, 'resp');
        });
      }
    } else if (trimmed === 'contact' || trimmed === 'contacto') {
      if (locale === 'es') {
        appendTerminalLog('CANALES DE COMUNICACIÓN ENCRIPTADOS ACTIVO:', 'success');
        appendTerminalLog('  ● Correo Directo: angelzambranojaraba@gmail.com', 'resp');
        appendTerminalLog('  ● Ubicación: Barranquilla / Bogotá, Colombia', 'resp');
        appendTerminalLog('  ● Red Profesional: linkedin.com/in/angelzambrano', 'resp');
      } else {
        appendTerminalLog('ENCRYPTED TELEMETRY COMMUNICATIONS UPLINK:', 'success');
        appendTerminalLog('  ● Direct Email: angelzambranojaraba@gmail.com', 'resp');
        appendTerminalLog('  ● Location: Barranquilla / Bogotá, Colombia', 'resp');
        appendTerminalLog('  ● Professional Network: linkedin.com/in/angelzambrano', 'resp');
      }
    } else if (trimmed === 'sysinfo' || trimmed === 'diagnostico' || trimmed === 'sistema') {
      if (locale === 'es') {
        appendTerminalLog('MATRIZ DE RENDIMIENTO VIRTUAL DEL NÚCLEO:', 'system');
        appendTerminalLog('  ● Estado de Operación: ÓPTIMO_ESTABLE', 'success');
        appendTerminalLog('  ● Procesamiento: Reactor Virtual de Cliente v4.0.2', 'resp');
        appendTerminalLog('  ● Conectividad: Túnel Seguro de Cloud Run Habilitado', 'resp');
        appendTerminalLog('  ● Intervalo de Latido: 1024ms (Nodo Protegido)', 'resp');
      } else {
        appendTerminalLog('CORE SYSTEM PERFORMANCE MATRIX:', 'system');
        appendTerminalLog('  ● Operational State: OPTIMAL_STABLE', 'success');
        appendTerminalLog('  ● Core Processing: Client-Side Virtual Reactor v4.0.2', 'resp');
        appendTerminalLog('  ● Connectivity: Cloud Run Security Tunnel Enabled', 'resp');
        appendTerminalLog('  ● Heartbeat Interval: 1024ms (Secure Node)', 'resp');
      }
    } else if (trimmed === 'clear' || trimmed === 'limpiar') {
      setTerminalHistory([]);
    } else {
      if (locale === 'es') {
        appendTerminalLog(`Comando "${cmd}" no reconocido. Escriba "ayuda" para ver coordinadas del sistema cibernético.`, 'error');
      } else {
        appendTerminalLog(`Command "${cmd}" not recognized. Type "help" to see valid cyber coordinates.`, 'error');
      }
    }
    setTerminalInput('');
  };

  // Pre-configured terminal action keys
  const runPredefinedCmd = (cmdText: string) => {
    parseTerminalCommand(cmdText);
  };

  // Simulated AI Strategic Consult generator
  const runStrategyConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultChallenge.trim()) return;

    setIsConsulting(true);
    setConsultOutput(null);
    setConsultStep(0);

    const steps = [
      'Initializing Neural Grid Mapping...',
      'Analyzing sector regulatory compliance boundaries for ' + consultSector + '...',
      'Analyzing custom bottleneck: "' + consultChallenge.substring(0, 40) + '..."',
      'Correlating insights with Colombian legislation & IBM AI Product framework standards...',
      'Synthesizing actionable strategic AI execution timeline...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        setConsultStep(currentStep);
      } else {
        clearInterval(interval);
        
        // Generate customized insight report based on selected metrics
        let response = '';
        if (consultSector === 'Legal Tech') {
          response = `### ESTADO: ANÁLISIS DE ESTRATEGIA COMPLETADO (PRE-AUDITORÍA)
1. **Clasificación del Cuello de Botella**: Complejidad en la extracción de expedientes y redacción de minutas procesales.
2. **Arquitectura Propuesta**: Implementar un agente extractor RAG (Retrieval-Augmented Generation) sobre base documental local, acoplado con filtros de des-identificación de datos sensibles de la Ley 1581 de 2012 (Habeas Data).
3. **Mitigación Legal Tech**: Gobernanza estricta en el ingestor de documentos vectoriales para evitar alucinaciones, aplicando validación de firmas criptográficas "doctor-in-the-loop".
4. **Vía de Acción**: Integrar un pipeline de pre-procesamiento con Python y Gemini 2.5 Flash para reducir el tiempo de estudio de 6 horas a 4 minutos por contrato.`;
        } else if (consultSector === 'Healthcare') {
          response = `### ESTADO: ANÁLISIS DE ESTRATEGIA COMPLETADO (CLÍNICO)
1. **Clasificación del Cuello de Botella**: Agotamiento de personal técnico en triage de pacientes y transcripción de notas de consulta médica.
2. **Arquitectura Propuesta**: Motor conversacional Medic-IA federado que interactúe por voz con el médico. Genera dinámicamente resúmenes formateados en el estándar de historias clínicas nacionales.
3. **Mitigación Legal Tech**: Aislamiento estricto de PII (Información Personal Identificable), almacenamiento cifrado en reposo bajo estándares NIST y limitación estricta de prompts para excluir diagnósticos automatizados auto-conclusivos sin aprobación humana.
4. **Vía de Acción**: Desplegar micro-agentes conversacionales con validación de credenciales vía Scrum de entrega ágil bimestral.`;
        } else if (consultSector === 'Fiscal compliance (DIAN)') {
          response = `### ESTADO: ANÁLISIS DE ESTRATEGIA COMPLETADO (CORP-TRIBUTARIO)
1. **Clasificación del Cuello de Botella**: Cuadre de facturas digitales masivas y cálculo proactivo de deducciones tributarias complejas.
2. **Arquitectura Propuesta**: Motor inteligente Dian-IA de análisis semántico de facturación XML estructurada. Correlaciona aduanas, retenciones y tarifas vigentes en el Estatuto Tributario Colombiano.
3. **Mitigación Legal Tech**: Certificados de firma electrónica válidos para blindaje documental. Generación automatizada de alegaciones e impugnaciones ante la DIAN ante discrepancia de conceptos artificiales.
4. **Vía de Acción**: Integración de conectores automatizados en la nube acoplados a ERP tradicional (SAP o Siigo) asegurando integridad inalterable de los libros contables.`;
        } else {
          response = `### ESTADO: ANÁLISIS DE ESTRATEGIA COMPLETADO (GENERAL)
1. **Clasificación del Cuello de Botella**: Automatización de operaciones redundantes y flujos contractuales.
2. **Arquitectura Propuesta**: Integración de multiagentes cooperativos bajo el framework Sinerg-IA. Sincronización transparente con plataformas de automatización avanzada (Zapier y APIs de mensajería).
3. **Mitigación Legal Tech**: Contratos de licencia tecnológica claros, establecimiento de límites de responsabilidad tecnológica y protección robusta de información confidencial comercial.
4. **Vía de Acción**: Prototipado rápido de automatizaciones sin código complejas acopladas a modelos locales potentes para salvaguardar propiedad intelectual de la startup.`;
        }
        
        setConsultOutput(response);
        setIsConsulting(false);
      }
    }, 1200);
  };

  // Book Download Simulator
  const triggerBookDownload = () => {
    setIsDownloadingBook(true);
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloadingBook(false);
          setHasDownloadedBook(true);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  // Dynamic filter lists for certificates
  const filteredCertificates = CERTIFICATES.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(certSearch.toLowerCase()) || 
                          cert.institution.toLowerCase().includes(certSearch.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0a0e12] cyber-grid-bg text-slate-100 flex selection:bg-[#00f2ff]/30 selection:text-white">
      
      {/* LEFT SIDEBAR: Large screens - Anchor controller & Brand Hub */}
      <aside className="w-80 border-r border-[#1e293b]/50 bg-[#0d131a]/95 backdrop-blur-md hidden lg:flex flex-col fixed top-0 bottom-0 left-0 z-40 p-6  ">
        <div className="flex items-center gap-3 mb-10 pb-5 border-b border-slate-800">
          <div className="w-12 h-12 rounded-lg bg-[#00f2ff]/10 border border-[#00f2ff]/30 flex items-center justify-center glow-teal">
            <Cpu className="w-6 h-6 text-[#00f2ff]" />
          </div>
          <div>
            <h1 className="font-display font-bold text-lg tracking-wider text-slate-200">Angel Zambrano J.</h1>
            <p className="font-mono text-xs text-[#00f2ff]/80 tracking-widest uppercase">{t.lead_ai_architect}</p>
          </div>
        </div>

        {/* Short Personal Card */}
        <div className="glass-panel p-4 rounded-xl border border-slate-800/80 mb-6 max-w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl border border-slate-700 overflow-hidden bg-slate-950 flex items-center justify-center shrink-0">
              <img 
                src="https://i.imgur.com/lN72Ff0.png" 
                alt="Angel Zambrano J." 
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-display font-semibold text-sm text-slate-200 leading-tight">Angel Zambrano</p>
              <p className="font-mono text-[10px] text-slate-400">Barranquilla, CO</p>
            </div>
          </div>
          <div className="text-[11px] font-mono leading-relaxed text-slate-400 space-y-1">
            <p className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#00f2ff]" /> {locale === 'es' ? 'Abogado & Consultor IA' : 'Lawyer & AI Consultant'}</p>
            <p className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-[#00f2ff]" /> angelzambranojaraba@gmail.com</p>
          </div>
        </div>

        {/* Language Selection Swapper */}
        <div className="mb-6">
          <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-2 px-1">SYSTEM_LOCALE</p>
          <button
            onClick={() => setLocale(prev => prev === 'es' ? 'en' : 'es')}
            className="w-full py-2.5 px-3 rounded-lg bg-slate-900/60 border border-slate-850 hover:border-[#00f2ff]/50 hover:bg-[#00f2ff]/5 text-slate-300 hover:text-white transition-all flex items-center justify-between font-mono text-xs outline-none group cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Languages className="w-3.5 h-3.5 text-[#00f2ff] group-hover:rotate-12 transition-transform" />
              <span>{locale === 'es' ? 'ESPAÑOL (CO)' : 'ENGLISH (US)'}</span>
            </span>
            <span className="text-[10px] text-[#00f2ff] font-semibold bg-[#00f2ff]/10 px-1.5 py-0.5 rounded border border-[#00f2ff]/25">
              {locale.toUpperCase()}
            </span>
          </button>
        </div>

        {/* Dynamic Nav link anchors */}
        <nav className="space-y-1.5 flex-grow">
          {[
            { id: 'core', label: t.core_intel, icon: 'zap' },
            { id: 'solutions', label: t.spec_solutions, icon: 'cpu' },
            { id: 'publications', label: t.feat_publication, icon: 'book' },
            { id: 'trajectory', label: t.trajectory_chronos, icon: 'grid' },
            { id: 'terminal-sec', label: t.system_terminal, icon: 'terminal' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg font-mono text-xs tracking-wider flex items-center justify-between transition-all group ${
                activeTab === item.id 
                  ? 'bg-gradient-to-r from-[#00f2ff]/10 to-[#7000ff]/5 border-l-2 border-[#00f2ff] text-[#00f2ff] font-bold shadow-[0_0_15px_rgba(0,242,255,0.05)]' 
                  : 'text-slate-400 hover:bg-slate-800/30 hover:text-slate-200'
              }`}
            >
              <span>{item.label}</span>
              <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                activeTab === item.id ? 'translate-x-0.5 text-[#00f2ff]' : 'opacity-0 group-hover:opacity-100'
              }`} />
            </button>
          ))}
        </nav>

        {/* Uplink Health Matrix in footer of sidebar */}
        <div className="mt-auto border-t border-slate-800 pt-5 text-[10px] font-mono text-slate-500 space-y-2">
          <div className="flex items-center justify-between">
            <span>{t.uplink_status}</span>
            <span className="flex items-center gap-1 text-[#00f2ff] font-semibold animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff]"></span>
              {t.secure}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>{t.cognitive_grid}</span>
            <span className="text-[#7000ff] font-semibold">{t.stable}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>{t.representation}</span>
            <span>angelzambrano.co</span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTAINER PAGE */}
      <div className="flex-1 lg:pl-80 w-full flex flex-col">
        
        {/* HEADER TOP BAR */}
        <header className="sticky top-0 z-50 w-full h-16 bg-[#0a0e12]/85 backdrop-blur-xl border-b border-slate-800/40 flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center gap-2 lg:hidden">
            <Cpu className="w-5 h-5 text-[#00f2ff]" />
            <span className="font-display font-semibold tracking-wider text-sm">Angel Zambrano J.</span>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <span className="font-mono text-xs text-slate-400">{t.active_logs}</span>
            <span className="font-mono text-xs text-[#00f2ff] bg-[#00f2ff]/10 px-2.5 py-0.5 rounded border border-[#00f2ff]/30">v4.0.2_SECURE</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Header Language Selector Button */}
            <button
              onClick={() => setLocale(prev => prev === 'es' ? 'en' : 'es')}
              className="font-mono text-xs text-slate-300 hover:text-[#00f2ff] border border-[#1e293b] hover:border-[#00f2ff]/60 px-3 py-1.5 rounded-lg bg-slate-900/50 flex items-center gap-1.5 transition-colors outline-none cursor-pointer"
              title={locale === 'es' ? 'Cambiar a Inglés' : 'Cambiar a Español'}
            >
              <Languages className="w-3.5 h-3.5 text-[#00f2ff]" />
              <span className="font-bold">{locale === 'es' ? 'ES' : 'EN'}</span>
            </button>

            <a 
              href="mailto:angelzambranojaraba@gmail.com" 
              className="font-mono text-xs text-slate-300 hover:text-[#00f2ff] border border-[#1e293b] px-3 py-1.5 rounded-lg bg-slate-900/50 flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.email_uplink}</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/angelzambrano" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1.5 text-slate-400 hover:text-[#00f2ff] hover:bg-slate-800/40 rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </header>

        {/* CONTAINER VIEWPORTS */}
        <main className="flex-grow px-4 md:px-8 py-8 space-y-16 max-w-5xl mx-auto w-full">
          
          {/* SECTION 1: HERO (CORE_INTELLIGENCE) */}
          <section id="core" className="relative min-h-[75vh] flex items-center rounded-3xl overflow-hidden border border-slate-800/80 p-6 md:p-12 mb-8 bg-slate-950/20">
            {/* Background Video with Gray Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-45"
              >
                <source src="https://i.imgur.com/qw5TDEH.mp4" type="video/mp4" />
              </video>
              {/* Gray transparency layer / overlay */}
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
              {/* Subtle gradients to blend with background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e12] via-transparent to-[#0a0e12]/30"></div>
            </div>

            <div className="w-full relative z-10">
              <div className="max-w-2xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#00f2ff]/10 to-[#7005ff]/10 border border-[#00f2ff]/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] animate-ping"></span>
                  <span className="font-mono text-[10px] text-slate-300 uppercase tracking-widest font-bold">{t.sys_activate}</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
                    {t.strategic}<br />
                    <span className="cyber-gradient-text">{t.ai_evolution}</span>
                  </h2>
                  <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-wide uppercase">
                    {t.lawyer_title}
                  </p>
                </div>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans max-w-xl">
                  {t.hero_description}
                </p>

                {/* Quick key highlights pill group */}
                <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
                  <div className="bg-[#121820]/60 border border-slate-800 p-3 rounded-lg flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00f2ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-semibold text-xs text-slate-200">{t.legal_compliance}</h4>
                      <p className="font-mono text-[10px] text-slate-400">{t.legal_desc}</p>
                    </div>
                  </div>
                  <div className="bg-[#121820]/60 border border-slate-800 p-3 rounded-lg flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00f2ff] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-semibold text-xs text-slate-200">{t.ai_product_owner}</h4>
                      <p className="font-mono text-[10px] text-slate-400">{t.ai_desc}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <button 
                    onClick={() => scrollToSection('contact-matrix')}
                    className="px-6 py-3 bg-[#00f2ff] text-[#0a0e12] font-semibold rounded-lg hover:scale-105 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,242,255,0.2)] font-mono text-xs cursor-pointer"
                  >
                    {t.init_consult}
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection('terminal-sec');
                      runPredefinedCmd(locale === 'es' ? 'credenciales' : 'certs');
                    }}
                    className="px-6 py-3 border border-slate-700 hover:border-[#00f2ff]/60 hover:bg-[#00f2ff]/5 text-slate-300 font-semibold rounded-lg transition-all font-mono text-xs cursor-pointer"
                  >
                    {t.deploy_logs}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: SPECIALIZED_SOLUTIONS */}
          <section id="solutions" className="scroll-mt-24 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/60 pb-5">
              <div>
                <span className="font-mono text-xs text-[#00f2ff] uppercase tracking-widest font-bold">{t.proprietary_systems}</span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mt-1">
                  {t.spec_solutions}
                </h3>
              </div>
              <p className="font-mono text-xs text-slate-400">
                {t.custom_engines}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeSolutions.map((solution) => (
                <div 
                  key={solution.id} 
                  className="glass-card rounded-2xl overflow-hidden flex flex-col group p-6 relative cursor-pointer"
                  onClick={() => setSelectedSolutionId(solution.id)}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f2ff]/2 rounded-bl-full pointer-events-none group-hover:bg-[#00f2ff]/5 transition-all"></div>
                  
                  {/* Icon & Name header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#00f2ff] group-hover:border-[#00f2ff]/40 transition-colors">
                      <span className="material-symbols-outlined text-2xl text-[#00f2ff]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {solution.icon}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-[#7000ff] bg-[#7000ff]/10 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                      COGNITIVE_GRID
                    </span>
                  </div>

                  <div className="space-y-2 flex-grow">
                    <h4 className="text-xl font-display font-bold text-white flex items-center gap-1.5 group-hover:text-[#00f2ff] transition-colors">
                      {solution.name}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-[#00f2ff] translate-x-[-4px] group-hover:translate-x-0" />
                    </h4>
                    <p className="font-mono text-xs text-indigo-200/90 tracking-wide font-medium">
                      {solution.tagline}
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
                      {solution.description.substring(0, 110)}...
                    </p>
                  </div>

                  {/* Badges footer */}
                  <div className="mt-5 pt-4 border-t border-slate-800/50 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#00f2ff] hover:underline flex items-center gap-1">
                      {t.activate_diagnostics}
                    </span>
                    <span className="font-mono text-[9px] text-slate-500 uppercase">
                      {t.secure_shell}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* COGNITIVE REVELATION MODAL */}
          <AnimatePresence>
            {activeSelectedSolution && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-2xl bg-[#0d131a] border border-[#00f2ff]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-[0_0_50px_rgba(0,242,255,0.15)] max-h-[90vh] overflow-y-auto"
                >
                  {/* Modal Header */}
                  <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                    <div className="flex gap-4 items-center">
                      <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#00f2ff]">
                        <span className="material-symbols-outlined text-3xl text-[#00f2ff]">
                          {activeSelectedSolution.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-display font-extrabold text-white">{activeSelectedSolution.name}</h4>
                        <p className="font-mono text-xs text-[#00f2ff]">{activeSelectedSolution.tagline}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedSolutionId(null)}
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Body text details */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                       <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">{t.modal_description}</span>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        {activeSelectedSolution.fullDetails}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 pt-2">
                      <span className="font-mono text-[10px] text-[#00f2ff] uppercase tracking-wider block">{t.modal_subsystems}</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeSelectedSolution.features.map((feat, index) => (
                          <li key={index} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-200">
                            <span className="text-[#00f2ff] mt-0.5 shrink-0">✔</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech & Compliance Stack */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                      <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                        <span className="font-mono text-[10px] text-indigo-400 uppercase tracking-widest block mb-2 font-semibold">{t.modal_cognitive_stack}</span>
                        <div className="space-y-1.5">
                          {activeSelectedSolution.cognitiveStack.map((tech, index) => (
                            <div key={index} className="flex items-center gap-2 font-mono text-[11px] text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                              <span>{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                        <span className="font-mono text-[10px] text-[#ff007f] uppercase tracking-widest block mb-2 font-semibold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> {t.modal_compliance}
                        </span>
                        <p className="text-slate-300 text-[11px] leading-relaxed">
                          {activeSelectedSolution.legalTechCompliance}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action button inside modal */}
                  <div className="pt-4 border-t border-slate-800/80 flex justify-end gap-3">
                    <button 
                      onClick={() => {
                        setSelectedSolutionId(null);
                        scrollToSection('contact-matrix');
                        setConsultSector(
                          activeSelectedSolution.id === 'medic-ia' ? 'Healthcare' : 
                          activeSelectedSolution.id === 'dian-ia' ? 'Fiscal compliance (DIAN)' : 'Corporate workflow'
                        );
                      }}
                      className="px-5 py-2.5 bg-gradient-to-r from-[#00f2ff] to-[#7000ff] text-[#0a0e12] font-semibold text-xs font-mono rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    >
                      {t.request_pilot}
                    </button>
                    <button 
                      onClick={() => setSelectedSolutionId(null)}
                      className="px-4 py-2.5 border border-slate-800 text-slate-400 hover:text-white text-xs font-mono rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
                    >
                      {t.close_shell}
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* SECTION 3: FEATURED PUBLICATION */}
          <section id="publications" className="scroll-mt-24 space-y-8 bg-gradient-to-r from-[#0d131a]/80 to-[#121820]/80 p-6 md:p-10 rounded-3xl border border-slate-800/80 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7000ff]/5 blur-[90px] rounded-full pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* Left Column: Book Mock Cover */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative group perspective-[1000px] w-56 sm:w-64">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#7000ff] rounded-2xl blur-lg opacity-25 group-hover:opacity-45 transition-all duration-500"></div>
                  
                  {/* Cyber book container */}
                  <div className="relative bg-[#0d131a] rounded-xl overflow-hidden shadow-2xl border border-[#00f2ff]/30 aspect-[3/4.2] flex flex-col justify-between p-6 hover:rotate-y-[-12deg] transition-transform duration-500 origin-left">
                    <div className="font-mono text-[9px] text-[#00f2ff] tracking-widest flex items-center justify-between border-b border-slate-800 pb-2">
                      <span>GLOBAL_RELEASE</span>
                      <span>v1.0.2</span>
                    </div>

                    <div className="space-y-3 flex-grow flex flex-col justify-center text-center">
                      <BookOpen className="w-8 h-8 text-[#00f2ff] mx-auto opacity-80" />
                      <div>
                        <p className="font-mono text-[10px] text-slate-400 tracking-wider">GUÍA DE ESTRATEGIA TECNOLÓGICA</p>
                        <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight mt-1">
                          DESATA EL<br />
                          PODER DE<br />
                          <span className="text-[#00f2ff]">LA IA</span>
                        </h4>
                      </div>
                      <div className="h-0.5 w-10 bg-gradient-to-r from-[#00f2ff] to-[#7000ff] mx-auto"></div>
                      <p className="font-mono text-[9px] text-slate-400">ESTRATEGIA // IMPLEMENTACIÓN // FUTURO</p>
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-center">
                      <p className="font-display font-bold text-[11px] text-[#7005ff] tracking-widest uppercase mb-0.5">ANGEL ZAMBRANO</p>
                      <p className="font-mono text-[8px] text-slate-500">LAWYER &amp; AI PRODUCT LEAD</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Book details */}
              <div className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7000ff]/10 border border-[#7000ff]/30 rounded-full">
                  <span className="font-mono text-[10px] text-[#d1bcff] uppercase tracking-wide font-bold">{t.book_badge}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                    DESATA EL PODER <span className="text-[#00f2ff]">DE LA IA</span>
                  </h3>
                  <p className="font-mono text-xs text-slate-400">
                    {t.book_tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {t.book_description}
                </p>

                {/* Grid of highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-6 h-6 rounded bg-[#00f2ff]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#00f2ff] font-mono text-xs font-bold">01</div>
                    <div>
                      <p className="text-xs font-semibold text-white">{t.book_point1_title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{t.book_point1_desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <div className="w-6 h-6 rounded bg-[#00f2ff]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#00f2ff] font-mono text-xs font-bold">02</div>
                    <div>
                      <p className="text-xs font-semibold text-white">{t.book_point2_title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{t.book_point2_desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <div className="w-6 h-6 rounded bg-[#00f2ff]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#00f2ff] font-mono text-xs font-bold">03</div>
                    <div>
                      <p className="text-xs font-semibold text-white">{t.book_point3_title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{t.book_point3_desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <div className="w-6 h-6 rounded bg-[#00f2ff]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#00f2ff] font-mono text-xs font-bold">04</div>
                    <div>
                      <p className="text-xs font-semibold text-white">{t.book_point4_title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{t.book_point4_desc}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a 
                    href="https://www.amazon.com/dp/B0D396J332?ref_=pe_93986420_775043100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-[#00f2ff] to-[#7000ff] hover:from-[#00d6e0] hover:to-[#5c00e6] text-black font-display font-black text-xs uppercase tracking-wider rounded-xl shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:shadow-[0_0_25px_rgba(0,242,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 font-bold"
                  >
                    <BookOpen className="w-4 h-4 text-black" />
                    <span>{t.book_buy_now}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-black" />
                  </a>
                  
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-1.5 justify-center sm:justify-start">
                    <span className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full animate-pulse"></span>
                    {t.book_available_format}
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 4: TRAJECTORY_CHRONOS BENTO PHOTO GRID */}
          <section id="trajectory" className="scroll-mt-24 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/60 pb-5">
              <div>
                <span className="font-mono text-xs text-[#00f2ff] uppercase tracking-widest font-bold">{t.ecosystem_expansion}</span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mt-1">
                  {t.trajectory_chronos}
                </h3>
              </div>
              <p className="font-mono text-xs text-slate-400">
                {t.trajectory_desc}
              </p>
            </div>

            {/* Timeless chronology timeline + bento board */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Column: Sequential Chrono Registry */}
              <div className="md:col-span-4 space-y-6">
                <span className="font-mono text-[10px] text-slate-400 block tracking-widest border-b border-slate-800 pb-2">{t.chronology_metric}</span>
                <div className="relative border-l border-slate-800 pl-4 ml-2 space-y-8">
                  {activeTimeline.map((time, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-[#00f2ff] ring-4 ring-[#0a0e12]"></span>
                      <p className="font-mono text-xs text-[#00f2ff] font-bold">{time.year}</p>
                      <h5 className="font-display font-bold text-sm text-slate-200 mt-0.5">{time.title}</h5>
                      <p className="font-mono text-[10px] text-slate-400 leading-tight mb-1">{time.institution}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{time.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Bento Matrix */}
              <div className="md:col-span-8 space-y-3">
                <span className="font-mono text-[10px] text-slate-400 block tracking-widest border-b border-slate-800 pb-2 ml-1">{t.bento_desc}</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {COGNITIVE_BENTO_IMAGES.map((img) => (
                    <div key={img.id} className="group relative rounded-xl overflow-hidden glass-panel border border-slate-800 bg-[#0d131a] aspect-video sm:aspect-square flex flex-col justify-end">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e12] via-transparent to-transparent opacity-90 z-20"></div>
                      <img 
                        src={img.url} 
                        alt={img.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="relative z-20 p-4 space-y-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="font-mono text-[8px] text-[#00f2ff] bg-[#00f2ff]/10 border border-[#00f2ff]/20 px-2 py-0.5 rounded">
                          {img.type.toUpperCase()}
                        </span>
                        <h4 className="font-display font-medium text-xs sm:text-sm text-white pt-1">{img.title}</h4>
                        <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {img.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 5: DYNAMIC ACADEMIC SYSTEM TERMINAL & EXPLORER */}
          <section id="terminal-sec" className="scroll-mt-24 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/60 pb-5">
              <div>
                <span className="font-mono text-xs text-[#00f2ff] uppercase tracking-widest font-bold font-semibold">INTERACTIVE PORT</span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mt-1">
                  {t.terminal_title}
                </h3>
              </div>
              <p className="font-mono text-xs text-slate-400">
                {t.terminal_desc}
              </p>
            </div>

            {/* The Terminal container */}
            <div className="rounded-2xl overflow-hidden border border-[#00f2ff]/20 bg-[#070b0f] shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2ff]/1 blur-2xl pointer-events-none"></div>
              
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d131a] border-b border-[#1e293b]/60">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50"></span>
                </div>
                <div className="font-mono text-[10px] text-slate-400 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-[#00f2ff]" />
                  <span>root@angelzambrano: ~</span>
                </div>
                <span className="font-mono text-[9px] text-[#00f2ff] bg-[#00f2ff]/10 px-2 py-0.5 rounded border border-[#00f2ff]/30">ACTIVE</span>
              </div>

              {/* Terminal Content Screen */}
              <div className="p-5 font-mono text-xs space-y-2 h-72 overflow-y-auto terminal-scroll text-slate-300">
                {terminalHistory.map((log, index) => (
                  <div key={index} className="leading-relaxed whitespace-pre-wrap">
                    {log.type === 'cmd' ? (
                      <p className="text-white"><span className="text-emerald-400">$</span> {log.text.substring(2)}</p>
                    ) : log.type === 'error' ? (
                      <p className="text-red-400">[⚡ ERROR] {log.text}</p>
                    ) : log.type === 'success' ? (
                      <p className="text-[#00f2ff] font-semibold">{log.text}</p>
                    ) : log.type === 'system' ? (
                      <p className="text-[#7000ff]/70">[SYSTEM] {log.text}</p>
                    ) : (
                      <p className="text-slate-400">{log.text}</p>
                    )}
                  </div>
                ))}
                <div ref={terminalBottomRef}></div>
              </div>

              {/* Terminal Input Form */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  parseTerminalCommand(terminalInput);
                }}
                className="flex items-center bg-[#070b0f] border-t border-slate-800/80 p-3"
              >
                <span className="font-mono text-emerald-400 text-sm font-semibold pl-2 pr-1.5">$</span>
                <input 
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder={locale === 'es' ? "Escribe 'ayuda', 'acercade', 'credenciales', 'contacto' o 'sistema'..." : "Type 'help', 'about', 'certs', 'contact' or 'sysinfo'..."}
                  className="bg-transparent text-white placeholder-slate-600 focus:outline-none font-mono text-xs flex-grow py-1"
                />
                <button 
                  type="submit"
                  className="p-1 text-slate-400 hover:text-[#00f2ff] transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Quick pre-configured anchor keys */}
            <div className="pt-2">
              <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3 text-center">
                {locale === 'es' ? '-- O HAZ CLIC PARA EJECUTAR UN COMANDO RÁPIDO --' : '-- OR CLICK QUICK RUN INSTRUCTIONS BELOW --'}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { text: locale === 'es' ? 'acercade' : 'about', label: t.chip_about },
                  { text: locale === 'es' ? 'credenciales' : 'certs', label: t.chip_certs },
                  { text: locale === 'es' ? 'soluciones' : 'solutions', label: t.chip_solutions },
                  { text: locale === 'es' ? 'contacto' : 'contact', label: t.chip_contact },
                  { text: locale === 'es' ? 'sistema' : 'sysinfo', label: t.chip_sysinfo },
                ].map((cmd, idx) => (
                  <button 
                    key={idx}
                    onClick={() => runPredefinedCmd(cmd.text)}
                    className="px-3.5 py-1.5 bg-[#121820]/40 border border-slate-800 hover:border-[#00f2ff]/60 rounded-md font-mono text-[10px] text-slate-300 hover:text-white transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <Command className="w-3 h-3 text-[#00f2ff]" />
                    <span>{cmd.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic ledger directory filter system */}
            <div className="bg-[#0d131a]/50 p-6 rounded-2xl border border-slate-800/80 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-extrabold text-white text-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#00f2ff]" /> {t.credential_explorer}
                  </h4>
                  <p className="font-mono text-xs text-slate-400 mt-0.5">{t.cred_desc}</p>
                </div>
                
                {/* Search Bar */}
                <div className="relative w-full sm:w-64 shrink-0">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input 
                    type="text"
                    value={certSearch}
                    onChange={(e) => setCertSearch(e.target.value)}
                    placeholder={t.search_placeholder}
                    className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-sans text-white focus:outline-none focus:border-[#00f2ff] placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Categorized filter chips */}
              <div className="flex flex-wrap gap-2 border-b border-slate-800/60 pb-4">
                {[
                  { id: 'all', label: t.all_categories },
                  { id: 'AI', label: locale === 'es' ? 'IA Generativa & Tech' : 'Generative AI & Tech' },
                  { id: 'Product', label: locale === 'es' ? 'Gestión de Producto' : 'Product Management' },
                  { id: 'Project', label: locale === 'es' ? 'Proyectos & Metodologías Ágiles' : 'Agile & Project Control' },
                  { id: 'Law', label: locale === 'es' ? 'Jurisprudencia & Derecho' : 'Jurisprudence & Law' },
                  { id: 'Other', label: locale === 'es' ? 'Otros & Generales' : 'Utilities & General' }
                ].map((chip) => (
                  <button
                    key={chip.id}
                    onClick={() => setSelectedCategory(chip.id as any)}
                    className={`px-3 py-1.5 rounded-lg font-mono text-[10px] tracking-wider transition-all border ${
                      selectedCategory === chip.id 
                        ? 'bg-[#00f2ff]/10 border-[#00f2ff] text-[#00f2ff] font-bold' 
                        : 'border-slate-800 bg-[#121820]/30 text-slate-400 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* Certificate Registry Table Grid */}
              <div className="max-h-96 overflow-y-auto terminal-scroll pr-1">
                <div className="grid grid-cols-1 gap-3">
                  {filteredCertificates.length > 0 ? (
                    filteredCertificates.map((cert) => (
                      <div key={cert.id} className="p-3 bg-[#070b0f] rounded-lg border border-slate-800/60 flex items-center justify-between gap-4 hover:border-[#00f2ff]/20 transition-all group">
                        <div className="space-y-1">
                          <h5 className="font-display font-semibold text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors">
                            {cert.title}
                          </h5>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[10px] text-slate-400">
                            <span className="text-slate-300 font-medium">{cert.institution}</span>
                            <span className="text-slate-500">•</span>
                            <span>{cert.date}</span>
                          </div>
                        </div>

                        <span className={`px-2 py-0.5 rounded font-mono text-[9px] uppercase font-bold shrink-0 ${
                          cert.category === 'AI' ? 'bg-cyan-950 text-cyan-400 border border-cyan-800' :
                          cert.category === 'Product' ? 'bg-indigo-950 text-indigo-400 border border-indigo-800' :
                          cert.category === 'Project' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                          cert.category === 'Law' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                          'bg-slate-900 text-slate-400 border border-slate-800'
                        }`}>
                          {cert.category === 'AI' ? 'Gen-AI' : cert.category}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="py-10 text-center font-mono text-slate-500 text-xs">
                      {t.not_found}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 6: DYNAMIC COGNITIVE STRATEGY INTAKE FORM (INITIALIZE_CONSULT) */}
          <section id="contact-matrix" className="scroll-mt-24 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-gradient-to-br from-[#0d131a] to-[#070b0f] p-6 md:p-8 rounded-3xl border border-slate-800 relative">
              <div className="absolute inset-0 bg-[#00f2ff]/1 blur-2xl rounded-3xl pointer-events-none"></div>

              {/* Left Column info */}
              <div className="md:col-span-5 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#00f2ff]/10 to-transparent border-l-2 border-[#00f2ff] rounded-r">
                    <span className="font-mono text-[10px] text-[#00f2ff] uppercase tracking-widest font-bold">{t.grid_entrance}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
                    {t.integrated_consult}<br />
                    <span className="cyber-gradient-text">{t.consultation}</span>
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
                    {t.consult_subtitle}
                  </p>
                </div>

                {/* Direct info list */}
                <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                  <div className="flex gap-2 items-center">
                    <MapPin className="w-4 h-4 text-[#00f2ff] shrink-0" />
                    <span>Colombia (Bogotá &amp; Barranquilla Hubs)</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Mail className="w-4 h-4 text-[#00f2ff] shrink-0" />
                    <span>angelzambranojaraba@gmail.com</span>
                  </div>
                  <div className="flex gap-2 items-center text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{t.nda_guaranteed}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Simulated consultation generator form */}
              <div className="md:col-span-7 bg-[#0a0e12]/80 p-5 md:p-6 rounded-2xl border border-slate-800/80">
                {!consultOutput ? (
                  <form onSubmit={runStrategyConsultation} className="space-y-4">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">{t.select_sector}</label>
                      <select 
                        value={consultSector}
                        onChange={(e) => setConsultSector(e.target.value)}
                        className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-sans text-white focus:outline-none focus:border-[#00f2ff]"
                      >
                        <option value="Legal Tech">{locale === 'es' ? 'Legal Tech & Gestión Contractual' : 'Legal Tech & Contractual Management'}</option>
                        <option value="Healthcare">{locale === 'es' ? 'Salud & Administración Clínica' : 'Healthcare & Clinical Administration'}</option>
                        <option value="Fiscal compliance (DIAN)">{locale === 'es' ? 'Cumplimiento Fiscal & Impuestos Corporativos (DIAN)' : 'Fiscal Compliance & Corporate Taxes (DIAN)'}</option>
                        <option value="Corporate workflow">{locale === 'es' ? 'Estrategia Multi-Agente Corporativa' : 'Corporate Multi-Agent Strategy'}</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">{t.describe_challenge}</label>
                      <textarea
                        required
                        value={consultChallenge}
                        onChange={(e) => setConsultChallenge(e.target.value)}
                        rows={4}
                        placeholder={t.placeholder_challenge}
                        className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-sans text-white focus:outline-none focus:border-[#00f2ff] placeholder-slate-600 resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isConsulting}
                      className="w-full py-3 bg-gradient-to-r from-[#00f2ff] to-[#7000ff] text-[#0a0e12] font-semibold font-mono text-xs rounded-lg hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isConsulting ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>{t.submitting_btn}</span>
                        </>
                      ) : (
                        <>
                          <Cpu className="w-3.5 h-3.5" />
                          <span>{t.submit_btn}</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="font-mono text-[#00f2ff] text-xs font-bold flex items-center gap-1.5 animate-pulse">
                        <Sparkles className="w-3.5 h-3.5" /> {t.matrix_comp}
                      </span>
                      <button 
                        onClick={() => {
                          setConsultOutput(null);
                          setConsultChallenge('');
                        }}
                        className="p-1 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="bg-[#070b0f] p-4 rounded-xl border border-slate-800 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto">
                      {consultOutput}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <p className="font-mono text-[9px] text-slate-500">
                        {t.confidential_watermark}
                      </p>
                      
                      <a 
                        href={`mailto:angelzambranojaraba@gmail.com?subject=Strategic Consultation Followup&body=Hi Angel, I just generated an automated strategy report on your portfolio regarding our bottleneck of: ${encodeURIComponent(consultChallenge)}`} 
                        className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-[#00f2ff]/60 text-slate-200 hover:text-white text-xs font-mono rounded-lg transition-colors flex items-center gap-2"
                      >
                        <span>{t.send_to_angel}</span>
                        <ChevronRight className="w-3 h-3 text-[#00f2ff]" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </section>

        </main>

        {/* BOTTOM FOOTER */}
        <footer className="w-full py-8 mt-16 bg-[#070b0f] border-t border-slate-800/80 font-mono text-xs text-slate-500">
          <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#00f2ff]" />
              <span className="text-slate-300 font-semibold tracking-wider">ANGEL ZAMBRANO JARABA</span>
              <span className="text-slate-600">|</span>
              <span>v4.0.2</span>
            </div>

            <p className="text-[10px] text-slate-600 uppercase tracking-wider text-center md:text-right">
              © 2026 ANGEL ZAMBRANO // OPERATIONAL_STATUS: OPTIMAL_STABLE
            </p>

            <nav className="flex gap-4">
              <a href="#" className="hover:text-slate-300 transition-colors">TOP</a>
              <a href="#solutions" className="hover:text-slate-300 transition-colors">SOLUTIONS</a>
              <a href="#publications" className="hover:text-slate-300 transition-colors">PUBLICATIONS</a>
              <a href="#trajectory" className="hover:text-slate-300 transition-colors">TRAJECTORY</a>
            </nav>
          </div>
        </footer>

      </div>
    </div>
  );
}
