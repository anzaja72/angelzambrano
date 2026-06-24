import { Solution, Certificate, TimelineEvent } from './types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'medic-ia',
    name: 'Medic-IA',
    icon: 'health_and_safety',
    tagline: 'Precision diagnostics & regulatory clinical framework automation.',
    description: 'Advanced clinical diagnostic helper and patient management automation system powered by neural LLM pipelines. Engineered to minimize administrative overhead while preserving safety and data sovereignty.',
    fullDetails: 'Medic-IA is a clinical and legal-tech marvel built specifically for hospital systems and individual clinics. It streamlines doctor-patient intakes, translates messy multi-sentence symptoms into standardized medical profiles, and suggests ICD-10 codification structures while ensuring rigorous compliance with patient privacy laws.',
    features: [
      'Standardized symptomatic intake & ICD-10 code suggestion',
      'Anonymized parsing of clinical records with automatic PII redacting',
      'Secure multi-modal document intake (Prescriptions, Lab Results, Imaging reports)',
      'Physician-in-the-loop validation dashboards with audit trails'
    ],
    cognitiveStack: [
      'Gemini 2.5 Flash API with Medical grounding embeddings',
      'Clinical-BERT text classification processors',
      'HIPAA-compliant end-to-end telemetry'
    ],
    legalTechCompliance: 'Complies fully with the healthcare secrecy laws of Colombia, HIPAA regulations, and General Data Protection Regulations (GDPR).'
  },
  {
    id: 'dian-ia',
    name: 'Dian-IA',
    icon: 'account_balance_wallet',
    tagline: 'Intelligent real-time fiscal audit & automated tax compliance analysis.',
    description: 'Automated tax compliance analyzer and corporate financial risk predictor. Helps financial directors and legal teams run predictive tax audits mapping directly to Colombian DIAN and international guidelines.',
    fullDetails: 'Dian-IA scans invoice ledgers, company expense sheets, and custom contract sheets to automatically flag unaligned asset classifications, detect missing VAT references, and forecast yearly tax brackets. It converts thousands of PDF invoices into a structured, queryable semantic schema, offering automated legal defenses based on updated tax sub-articles.',
    features: [
      'Automatic parsing and categorization of XML & PDF invoices matching DIAN structures',
      'Tax risk prediction algorithms matching active statutory audit criteria',
      'Automated suggestions of legal tax shields and write-offs based on Article updates',
      'Aggregated compliance scoring for multi-entity holdings'
    ],
    cognitiveStack: [
      'Structured JSON Schema extraction via LLM Function Calling',
      'Advanced vector database ingestion of daily Colombia Tax Code changes',
      'Dynamic PDF parsing OCR layers'
    ],
    legalTechCompliance: 'Matches Colombian DIAN requirements, OECD transfer pricing structures, and national accounting protocols.'
  },
  {
    id: 'sinerg-ia',
    name: 'Sinerg-IA',
    icon: 'groups',
    tagline: 'Multi-agent business operations and contractual workflow routing.',
    description: 'Autonomous AI staff orchestrator designed to route tasks between custom specialized agents (contracts, marketing, compliance, operations), boosting corporate output autonomously.',
    fullDetails: 'Sinerg-IA creates a private, shared neural sandbox where specialized AI agents discuss corporate challenges, formulate marketing slogans, review commercial contracts, and perform compliance checks before presenting finalized outputs to managers for authorization.',
    features: [
      'Stateful multi-agent communication frameworks supporting human-in-the-loop approvals',
      'Automatic contractual milestone monitoring and smart notifications',
      'Pre-built connectors for Slack, Zapier, Microsoft Teams, and Google Chat',
      'Executive-ready status briefs generated in human-friendly language'
    ],
    cognitiveStack: [
      'LangGraph State Managers',
      'Multi-agent role-playing orchestration with custom System Prompts',
      'Zapier cross-system workflow integrations'
    ],
    legalTechCompliance: 'Implements rigorous enterprise security, OAuth 2.0 authorization tokens, and complete SOC2 Type II compliance audit trails.'
  },
  {
    id: 'neuro-ia',
    name: 'Neuro-IA',
    icon: 'psychology',
    tagline: 'Cognitive behavioral modeling for secure consumer & legal contract interfaces.',
    description: 'Deep-learning based user engagement optimization and compliance checking. Analyzes friction levels in critical banking, insurance, and legal sign-up sheets.',
    fullDetails: 'Neuro-IA checks terms-of-service flows and enterprise portals to ensure that users are truly aware of their legal rights and are not subject to dark patterns. It uses smart reading speed diagnostics and micro-interaction analytics to simplify customer intake interfaces while maintaining bulletproof legal consent.',
    features: [
      'Interactive reading-speed pacing to prevent rapid, unconscious clicking of legal waivers',
      'Dynamic UX adjustments catering to different user technical literacy tiers',
      'Intelligent layout scoring to identify dark visual patterns',
      'Detailed legal proof of intent and compliance logging certificates for fintech applications'
    ],
    cognitiveStack: [
      'Real-time web micro-interaction monitoring layer',
      'Cognitive workload scoring networks',
      'Verifiable cryptographic evidence trail generation'
    ],
    legalTechCompliance: 'Complies with GDPR provisions on informed consent, CCPA requirements, and national financial regulatory guidelines.'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'ibm-ia-pm',
    title: 'IBM - IA Product Management Professional Certificate',
    institution: 'IBM / Coursera',
    date: 'Nov 2024',
    category: 'Product'
  },
  {
    id: 'gcp-cdl',
    title: 'GOOGLE - Professional Certificate Cloud Digital Leader',
    institution: 'Google Cloud / Coursera',
    date: 'Dec 2022',
    category: 'Other'
  },
  {
    id: 'google-pm',
    title: 'GOOGLE - Professional Certificate Project Management',
    institution: 'Google / Coursera',
    date: 'Oct 2022',
    category: 'Project'
  },
  {
    id: 'lawyer-degree',
    title: 'Lawyer (Pregrado en Derecho)',
    institution: 'Corporación Universitaria Rafael Nuñez',
    date: 'Dec 2011',
    category: 'Law'
  },
  {
    id: 'cert-1',
    title: 'IA Product Management: Foundation & Stakeholder Collaboration',
    institution: 'IBM',
    date: 'Nov 2024',
    category: 'Product'
  },
  {
    id: 'cert-2',
    title: 'Product Management: An Introduction',
    institution: 'IBM',
    date: 'Jun 2024',
    category: 'Product'
  },
  {
    id: 'cert-3',
    title: 'Curso de Zapier e Integraciones',
    institution: 'Platzi',
    date: 'Mar 2024',
    category: 'Project'
  },
  {
    id: 'cert-4',
    title: 'Agile Project Management',
    institution: 'Google',
    date: 'Oct 2023',
    category: 'Project'
  },
  {
    id: 'cert-5',
    title: 'High Performance Collaboration Leadership',
    institution: 'Northwestern University',
    date: 'Oct 2023',
    category: 'Project'
  },
  {
    id: 'cert-6',
    title: 'Data Science Methodology',
    institution: 'IBM',
    date: 'Nov 2023',
    category: 'AI'
  },
  {
    id: 'cert-7',
    title: 'Curso de Introducción a Inteligencia Artificial',
    institution: 'Platzi',
    date: 'Sept 2023',
    category: 'AI'
  },
  {
    id: 'cert-8',
    title: 'Introduction to Responsible AI',
    institution: 'Google Cloud',
    date: 'Sept 2023',
    category: 'AI'
  },
  {
    id: 'cert-9',
    title: 'Introduction to Large Language Models (LLMs)',
    institution: 'Google Cloud',
    date: 'Sept 2023',
    category: 'AI'
  },
  {
    id: 'cert-10',
    title: 'Introduction to Generative AI',
    institution: 'Google Cloud',
    date: 'Sept 2023',
    category: 'AI'
  },
  {
    id: 'cert-11',
    title: 'Curso de Iniciación a la Creación de Empresas y Startups',
    institution: 'Platzi',
    date: 'Sept 2023',
    category: 'Other'
  },
  {
    id: 'cert-12',
    title: 'Generative AI Fundamentals',
    institution: 'Google Cloud',
    date: 'Sept 2023',
    category: 'AI'
  },
  {
    id: 'cert-13',
    title: 'Curso de Prompt Engineering con ChatGPT',
    institution: 'Platzi',
    date: 'Sept 2023',
    category: 'AI'
  },
  {
    id: 'cert-14',
    title: 'Curso de Inteligencia Artificial para el Trabajo',
    institution: 'Platzi',
    date: 'Sept 2023',
    category: 'AI'
  },
  {
    id: 'cert-15',
    title: 'EF STANDARD ENGLISH TEST (C1 Advanced Level)',
    institution: 'EF Academy',
    date: 'May 2023',
    category: 'Other'
  },
  {
    id: 'cert-16',
    title: 'Fundamentos de IA para Data y Machine Learning',
    institution: 'Platzi',
    date: 'Mar 2023',
    category: 'AI'
  },
  {
    id: 'cert-17',
    title: 'Curso de Inversión y Finanzas en Startups Tecnológicas',
    institution: 'Platzi',
    date: 'Mar 2023',
    category: 'Other'
  },
  {
    id: 'cert-18',
    title: 'Curso de Inteligencia Artificial: ChatGPT, DALL-E y Hugging Face',
    institution: 'Platzi',
    date: 'Mar 2023',
    category: 'AI'
  },
  {
    id: 'cert-19',
    title: 'Fundamentos del análisis empresarial',
    institution: 'Platzi',
    date: 'Jan 2023',
    category: 'Product'
  },
  {
    id: 'cert-20',
    title: 'Curso Básico de Python',
    institution: 'Platzi',
    date: 'Dec 2022',
    category: 'AI'
  },
  {
    id: 'cert-21',
    title: 'Curso de Introducción al Financiamiento de Startups',
    institution: 'Platzi',
    date: 'Dec 2022',
    category: 'Other'
  },
  {
    id: 'cert-22',
    title: 'Digital Transformation with Google Cloud',
    institution: 'Google Cloud',
    date: 'Dec 2022',
    category: 'Other'
  },
  {
    id: 'cert-23',
    title: 'Project Management Essentials Certificate',
    institution: 'Management and Strategy Institute',
    date: 'Oct 2022',
    category: 'Project'
  },
  {
    id: 'cert-24',
    title: 'SCRUM Fundamental Certified (SFC)',
    institution: 'SCRUMstudy',
    date: 'Oct 2022',
    category: 'Project'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2024',
    title: 'AI Product & Corporate Strategy Lead',
    institution: 'Autonomous Tech Orchestrations',
    description: 'Directing LLM agent integrations, regulatory compliance audits, and custom business architecture for LATAM legal-tech enterprises.'
  },
  {
    year: '2023',
    title: 'AI Research & Data Science Certifications',
    institution: 'Google Cloud & IBM',
    description: 'Obtained comprehensive specialization markers in Generative AI, Large Language Models formulation, and Agile project governance.'
  },
  {
    year: '2022',
    title: 'Cloud Digital & Business Analysis Lead',
    institution: 'Corporate Consultancy Systems',
    description: 'Certified by Google Cloud on digital transformations. Managed technological migrations and structured scrum loops with distributed engineering squads.'
  },
  {
    year: '2011 - 2021',
    title: 'Attorney at Law & Regulatory Expert',
    institution: 'Zambrano & Partners legal services',
    description: 'Specialized in fiscal regulatory structures, tax planning, administrative law, and corporate contract negotiation in Colombia.'
  }
];

export const COGNITIVE_BENTO_IMAGES = [
  {
    id: 1,
    title: "AI Strategy Keynote Barranquilla",
    description: "Presenting real-time corporate automation models at the Caribbean Legal Tech forum.",
    url: "https://lh3.googleusercontent.com/aida/AP1WRLvCkJLjOomFIohyimiuTs_ABL5jkvDA8TC657cTFMEwxU8hOgv2FdWsBujXDmZNuJ8jDOV1IKzxh4wYIcxsa6jM1cAJbrFRvffOKn7fEDryquZqn3KvDYA5ayf8lIzPgjx4K9XHTnL_q-vym6UrePoRwxB-tHuatuxFBQwfhED6YpCc_Dw0KORbjLLe1NZLeV2mGivE-216BKRn48e2e1dhuthztMN-0PEM2np0pF3-tWCTasj15NB9xo8",
    type: "presentation"
  },
  {
    id: 2,
    title: "Startups & Venture Capital Masterclass",
    description: "Deep dive of startup validation engines with high-growth legal advisors.",
    url: "https://lh3.googleusercontent.com/aida/AP1WRLuNqinMsIYSHiVPbAaheWctQgMd0e0NCPqBiWby2i_AREfii93XKENHwn-ic_sFelvtw2dkKgi9VWg5zuf3_ONs0j0gu8rAzf0q5jJ451WKEiS2Q-1veynENpbaFJgHtrKa7v-5cyquujujngCBpJVWfJDmGVzYiSM6qsUUGbPzvYJ1b8JH-wPyIQle-udBR0aki9f8LjfJl1mxaBQmWfNKA4AurkGdW5Zhha71j37yDz22F7q9mNctrcw",
    type: "lecture"
  },
  {
    id: 3,
    title: "Tech Hub Dialogues",
    description: "Spearheading multi-agent system applications for regional business clusters.",
    url: "https://lh3.googleusercontent.com/aida/AP1WRLsZhoL0ZUKaGegpOgFGWBQvzwmvd7dh8xhTyiBgBsNZJ_wgvofMwOuaHBmY6LdURHuaH1679qwnhCRDa_nm71U4NcupJV1dwfcKJWC-zEKCgQGieFu2t1vkVLM4q3yENhFz3ZavdygGAGLbWIcm-ia-MRrxOOL4ESSoSFgTYCwhRP_5hjktbsl3YtSKIPRRXZskw2oVpej_wvfNFGo1X4f1ObJgGnB4NhSnKAvYnzq-j5Q8Q1703M4J4sw",
    type: "collaboration"
  },
  {
    id: 4,
    title: "Regional Tech Summit Keynote",
    description: "Discussing AI product ethics and GDPR compliance with government delegates.",
    url: "https://lh3.googleusercontent.com/aida/AP1WRLusqshSpaJXBLA-4kx1Qefw2QaOdbex5zSyiy_kSXKlsfvLWh8pApLQUuECZ77AJJ0xMfmKTRGJaFFTtMF5DqEa-xxjVxctUyQUHeQ2Vcvu2Aq6e7XrYofQsmFLjuDdnERDFyH9dbVOESucGp7-ZkTfdMygqrY607McizIhj-E46HtwLPHEP8LlrZNVkomEH-6mNUOpTg70dJ03kP0VRYT331YeHAl3OFyRKd2GqVpUG-6Ef-K8f5EtoSQ4",
    type: "keynote"
  }
];
