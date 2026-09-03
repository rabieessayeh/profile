// =========================================================
// Système de traduction FR / EN — léger, sans dépendance.
// Clé de mémorisation : "portfolio-language" (localStorage).
// =========================================================
(function () {
  'use strict';

  var STORAGE_KEY = 'portfolio-language';
  var DEFAULT_LANG = 'fr';

  var translations = {
    fr: {
      'skip': 'Aller au contenu',

      'nav.aria': 'Navigation principale',
      'nav.profile': 'Profil',
      'nav.experiences': 'Expériences',
      'nav.skills': 'Compétences',
      'nav.projects': 'Projets',
      'nav.education': 'Parcours',

      'hero.avatarAlt': "Portrait d'ES-SAYEH Rabie",
      'hero.title': 'Gen AI Software Engineer — LLM, Agents IA & MLOps',
      'hero.location': '<i class="fa-solid fa-location-dot" aria-hidden="true"></i> La Rochelle, France · Mobile en France',
      'hero.available': '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> Disponible à partir d\'octobre 2026',
      'hero.bio': "Gen AI Software Engineer spécialisé dans les solutions GenAI et les agents IA, de la conception à la mise en production. J'ai développé des plateformes SaaS multi-tenant (FastAPI, LangGraph, RAG) avec déploiement conteneurisé (Docker) et une architecture orientée besoins métier. Utilisateur quotidien de Claude Code pour accélérer le prototypage et le développement, je porte un projet du cadrage jusqu'au run en autonomie et je transforme des besoins métier complexes en produits IA concrets et maintenables. Actuellement AI Research Engineer à l'Université de La Rochelle, sur l'IA appliquée aux sciences des matériaux.",

      'contacts.pdf': 'Ouvrir le CV au format PDF',
      'contacts.github': 'Profil GitHub',
      'contacts.linkedin': 'Profil LinkedIn',
      'contacts.email': 'Envoyer un e-mail',
      'contacts.phone': 'Appeler',

      'exp.h2': 'Expériences professionnelles',
      'exp.e1.org': 'Université de La Rochelle',
      'exp.e1.date': 'Oct. 2024 – Sept. 2026',
      'exp.e1.subtitle': 'Intelligence artificielle appliquée aux sciences des matériaux',
      'exp.e1.b1': 'Conception et entraînement de modèles de Deep Learning sous PyTorch pour des problématiques de prédiction et de conception inverse.',
      'exp.e1.b2': 'Développement de modèles génératifs conditionnels (architectures CVAE) générant des structures compatibles avec des propriétés cibles.',
      'exp.e1.b3': 'Construction de pipelines de données reproductibles : prétraitement, normalisation, entraînement, validation, analyse des performances.',
      'exp.e1.b4': 'Intégration de contraintes physiques et de résultats de simulations numériques dans les modèles de Machine Learning.',
      'exp.e1.b5': "Optimisation des hyperparamètres, analyse des limites des modèles et mise en place de protocoles d'évaluation.",
      'exp.e1.b6': 'Rédaction de documentation technique et présentation des résultats devant des comités scientifiques.',

      'exp.e2.note': '(PME industrielle)',
      'exp.e2.date': 'Juil. 2025 – Août 2025',
      'exp.e2.b1': "Développement d'un outil Python automatisant la génération de schémas SQL à partir de fichiers Excel, CSV et TXT.",
      'exp.e2.b2': 'Inférence automatique des types, détection des clés primaires, des contraintes et des index.',
      'exp.e2.b3': "Intégration de Python avec Excel et VBA à l'aide de pandas, openpyxl et xlwings.",
      'exp.e2.b4': 'Réduction du temps nécessaire à la création de bases de données relationnelles à partir de fichiers tabulaires.',

      'exp.e3.org': 'Laboratoire LaSIE, Université de La Rochelle',
      'exp.e3.date': 'Fév. 2024 – Juil. 2024',
      'exp.e3.b1': 'Génération, structuration et prétraitement de jeux de données issus de simulations scientifiques.',
      'exp.e3.b2': "Développement d'un prototype de modèle génératif pour la résolution d'un problème inverse.",
      'exp.e3.b3': "Mise en place d'expérimentations comparatives et analyse des performances des modèles.",

      'exp.e4.note': '(PME industrielle)',
      'exp.e4.date': 'Juin 2023 – Sept. 2023',
      'exp.e4.b1': "Conception de schémas d'entrepôts de données et développement de pipelines ETL.",
      'exp.e4.b2': 'Création de tableaux de bord Power BI destinés au pilotage décisionnel (SSIS, SSAS).',
      'exp.e4.b3': 'Déploiement et personnalisation de modules Odoo dans plusieurs environnements.',
      'exp.e4.b4': 'Automatisation et optimisation de traitements de données.',

      'skills.h2': 'Compétences techniques',
      'skills.groupAiTools': 'Outils de développement assisté par IA',
      'skills.groupBackend': 'Backend & développement logiciel',
      'skills.groupWeb': 'Développement web',
      'skills.groupDb': 'Bases de données',
      'skills.groupOtherLangs': 'Autres langages',

      'chip.conversationalMemory': 'Mémoire conversationnelle',
      'chip.workflowOrchestration': 'Orchestration de workflows',
      'chip.claudeCode': 'Claude Code (usage quotidien)',
      'chip.llmAssistants': 'Assistants de programmation basés sur les LLM',
      'chip.oop': 'Programmation orientée objet',
      'chip.modularArch': 'Architecture modulaire',
      'chip.errorHandling': 'Gestion des erreurs',
      'chip.techDocs': 'Documentation technique',
      'chip.modelMonitoring': 'Monitoring de modèles',
      'chip.experimentReproducibility': 'Reproductibilité des expérimentations',
      'chip.generativeModels': 'Modèles génératifs',
      'chip.dataPreprocessing': 'Prétraitement de données',
      'chip.containerization': 'Conteneurisation',

      'projects.h2': 'Projets IA sélectionnés',
      'projects.p1.tag': 'Plateforme SaaS GenAI multi-tenant',
      'projects.p1.b1': "Plateforme SaaS d'assistant commercial IA pour agences de location de voitures : onboarding client, isolation des données par tenant, architecture pensée pour le passage à l'échelle (FastAPI, LangGraph, MongoDB).",
      'projects.p1.b2': 'Workflow IA déterministe (LangGraph) combinant outils métier, génération de devis et orchestration des conversations.',
      'projects.p1.b3': 'Système RAG multi-tenant : ingestion documentaire, recherche sémantique et réponses contextualisées.',
      'projects.p1.b4': 'Architecture sécurisée : JWT, RBAC, WebSocket, API REST, Docker.',
      'projects.p1.b5': 'Architecture modulaire compatible avec plusieurs fournisseurs de LLM (Ollama, puis OpenAI / Anthropic / Gemini), prête pour le déploiement en production.',
      'projects.p2.b1': 'Système Retrieval-Augmented Generation développé avec LangChain et un stockage vectoriel.',
      'projects.p2.b2': "Indexation de documents personnalisés et génération de réponses contextualisées à partir d'une base de connaissances locale.",
      'projects.p2.b3': "Intégration d'un LLM via API et architecture prête pour le déploiement (FastAPI, Docker).",
      'projects.p3.b1': "Pipeline d'extraction de PDF, de métadonnées et de résumé automatique d'articles scientifiques.",
      'projects.p3.b2': 'Backend FastAPI exposant des endpoints REST pour le résumé et la recherche sémantique.',
      'projects.p3.b3': 'Interface React pour la consultation et la recherche dans les documents.',
      'projects.githubLink': "Voir l'ensemble de mes dépôts sur GitHub →",

      'education.h2': 'Formation',
      'education.m1.title': 'Master — Big Data Analytics et Systèmes Intelligents',
      'education.m1.place': 'Université Sidi Mohamed Ben Abdellah, Maroc · 2022 – 2024',
      'education.m2.title': 'Licence — Mathématiques et Informatique',
      'education.m2.place': 'Université Sidi Mohamed Ben Abdellah, Maroc · 2018 – 2022',

      'languages.h2': 'Langues',
      'languages.arabic': '<b>Arabe</b> — langue maternelle',
      'languages.french': '<b>Français</b> — courant',
      'languages.english': '<b>Anglais</b> — professionnel',

      'volunteer.h2': 'Engagement associatif',
      'volunteer.v1.role': 'Responsable Numérique',
      'volunteer.v1.date': 'Sept. 2025 – Présent',
      'volunteer.v1.b1': "Gestion des accès et maintenance du site web de l'association.",
      'volunteer.v1.b2': 'Automatisation de tâches administratives répétitives.',
      'volunteer.v2.role': 'Responsable Sport',
      'volunteer.v2.date': 'Sept. 2025 – Présent',
      'volunteer.v2.b1': "Organisation et animation d'événements sportifs pour étudiants internationaux.",

      'meta.description': "Portfolio d'ES-SAYEH Rabie, Gen AI Software Engineer spécialisé en LLM, agents IA et MLOps : expériences, compétences et projets IA.",
      'meta.ogDescription': 'LLM, agents IA & MLOps — expériences, compétences et projets IA.'
    },

    en: {
      'skip': 'Skip to content',

      'nav.aria': 'Main navigation',
      'nav.profile': 'Profile',
      'nav.experiences': 'Experience',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.education': 'Education',

      'hero.avatarAlt': 'Portrait of ES-SAYEH Rabie',
      'hero.title': 'Gen AI Software Engineer — LLM, AI Agents & MLOps',
      'hero.location': '<i class="fa-solid fa-location-dot" aria-hidden="true"></i> La Rochelle, France · Available to relocate across France',
      'hero.available': '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> Available from October 2026',
      'hero.bio': "Gen AI Software Engineer specialized in GenAI solutions and AI agents, from design through to production. I've built multi-tenant SaaS platforms (FastAPI, LangGraph, RAG) with containerized deployment (Docker) and an architecture driven by business needs. A daily user of Claude Code to speed up prototyping and development, I take a project from scoping to running it in production autonomously, turning complex business needs into concrete, maintainable AI products. Currently an AI Research Engineer at the University of La Rochelle, working on AI applied to materials science.",

      'contacts.pdf': 'Open CV (PDF)',
      'contacts.github': 'GitHub profile',
      'contacts.linkedin': 'LinkedIn profile',
      'contacts.email': 'Send an email',
      'contacts.phone': 'Call',

      'exp.h2': 'Professional Experience',
      'exp.e1.org': 'University of La Rochelle',
      'exp.e1.date': 'Oct 2024 – Sept 2026',
      'exp.e1.subtitle': 'Artificial intelligence applied to materials science',
      'exp.e1.b1': 'Designed and trained Deep Learning models with PyTorch for prediction and inverse design problems.',
      'exp.e1.b2': 'Developed conditional generative models (CVAE architectures) generating structures matching target properties.',
      'exp.e1.b3': 'Built reproducible data pipelines: preprocessing, normalization, training, validation, performance analysis.',
      'exp.e1.b4': 'Integrated physical constraints and numerical simulation results into Machine Learning models.',
      'exp.e1.b5': 'Optimized hyperparameters, analyzed model limitations and set up evaluation protocols.',
      'exp.e1.b6': 'Wrote technical documentation and presented results to scientific committees.',

      'exp.e2.note': '(industrial SME)',
      'exp.e2.date': 'Jul 2025 – Aug 2025',
      'exp.e2.b1': 'Built a Python tool automating SQL schema generation from Excel, CSV and TXT files.',
      'exp.e2.b2': 'Automatic type inference, detection of primary keys, constraints and indexes.',
      'exp.e2.b3': 'Integrated Python with Excel and VBA using pandas, openpyxl and xlwings.',
      'exp.e2.b4': 'Reduced the time needed to build relational databases from tabular files.',

      'exp.e3.org': 'LaSIE Laboratory, University of La Rochelle',
      'exp.e3.date': 'Feb 2024 – Jul 2024',
      'exp.e3.b1': 'Generated, structured and preprocessed datasets from scientific simulations.',
      'exp.e3.b2': 'Developed a generative model prototype to solve an inverse problem.',
      'exp.e3.b3': 'Set up comparative experiments and analyzed model performance.',

      'exp.e4.note': '(industrial SME)',
      'exp.e4.date': 'Jun 2023 – Sept 2023',
      'exp.e4.b1': 'Designed data warehouse schemas and developed ETL pipelines.',
      'exp.e4.b2': 'Created Power BI dashboards for decision-making (SSIS, SSAS).',
      'exp.e4.b3': 'Deployed and customized Odoo modules across several environments.',
      'exp.e4.b4': 'Automated and optimized data processing.',

      'skills.h2': 'Technical Skills',
      'skills.groupAiTools': 'AI-Assisted Development Tools',
      'skills.groupBackend': 'Backend & Software Development',
      'skills.groupWeb': 'Web Development',
      'skills.groupDb': 'Databases',
      'skills.groupOtherLangs': 'Other Languages',

      'chip.conversationalMemory': 'Conversational memory',
      'chip.workflowOrchestration': 'Workflow orchestration',
      'chip.claudeCode': 'Claude Code (daily use)',
      'chip.llmAssistants': 'LLM-based coding assistants',
      'chip.oop': 'Object-oriented programming',
      'chip.modularArch': 'Modular architecture',
      'chip.errorHandling': 'Error handling',
      'chip.techDocs': 'Technical documentation',
      'chip.modelMonitoring': 'Model monitoring',
      'chip.experimentReproducibility': 'Experiment reproducibility',
      'chip.generativeModels': 'Generative models',
      'chip.dataPreprocessing': 'Data preprocessing',
      'chip.containerization': 'Containerization',

      'projects.h2': 'Selected AI Projects',
      'projects.p1.tag': 'Multi-tenant GenAI SaaS platform',
      'projects.p1.b1': 'AI sales assistant SaaS platform for car rental agencies: client onboarding, per-tenant data isolation, architecture designed to scale (FastAPI, LangGraph, MongoDB).',
      'projects.p1.b2': 'Deterministic AI workflow (LangGraph) combining business tools, quote generation and conversation orchestration.',
      'projects.p1.b3': 'Multi-tenant RAG system: document ingestion, semantic search and contextualized answers.',
      'projects.p1.b4': 'Secure architecture: JWT, RBAC, WebSocket, REST API, Docker.',
      'projects.p1.b5': 'Modular architecture supporting multiple LLM providers (Ollama, then OpenAI / Anthropic / Gemini), production-ready.',
      'projects.p2.b1': 'Retrieval-Augmented Generation system built with LangChain and a vector store.',
      'projects.p2.b2': 'Indexing of custom documents and generation of contextualized answers from a local knowledge base.',
      'projects.p2.b3': 'LLM integration via API, deployment-ready architecture (FastAPI, Docker).',
      'projects.p3.b1': 'Pipeline for PDF extraction, metadata extraction and automatic summarization of scientific papers.',
      'projects.p3.b2': 'FastAPI backend exposing REST endpoints for summarization and semantic search.',
      'projects.p3.b3': 'React interface for browsing and searching documents.',
      'projects.githubLink': 'See all my repositories on GitHub →',

      'education.h2': 'Education',
      'education.m1.title': "Master's Degree — Big Data Analytics and Intelligent Systems",
      'education.m1.place': 'Sidi Mohamed Ben Abdellah University, Morocco · 2022 – 2024',
      'education.m2.title': "Bachelor's Degree — Mathematics and Computer Science",
      'education.m2.place': 'Sidi Mohamed Ben Abdellah University, Morocco · 2018 – 2022',

      'languages.h2': 'Languages',
      'languages.arabic': '<b>Arabic</b> — native language',
      'languages.french': '<b>French</b> — fluent',
      'languages.english': '<b>English</b> — professional',

      'volunteer.h2': 'Volunteer Work',
      'volunteer.v1.role': 'Digital Officer',
      'volunteer.v1.date': 'Sept 2025 – Present',
      'volunteer.v1.b1': "Managed access and maintained the association's website.",
      'volunteer.v1.b2': 'Automated repetitive administrative tasks.',
      'volunteer.v2.role': 'Sports Officer',
      'volunteer.v2.date': 'Sept 2025 – Present',
      'volunteer.v2.b1': 'Organized and led sports events for international students.',

      'meta.description': "Portfolio of ES-SAYEH Rabie, Gen AI Software Engineer specialized in LLM, AI agents and MLOps: experience, skills and AI projects.",
      'meta.ogDescription': 'LLM, AI agents & MLOps — experience, skills and AI projects.'
    }
  };

  function t(lang, key) {
    var dict = translations[lang];
    return dict && Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : null;
  }

  function applyLanguage(lang) {
    if (!translations[lang]) { lang = DEFAULT_LANG; }

    document.documentElement.setAttribute('lang', lang);

    // Texte simple (textContent)
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var val = t(lang, el.getAttribute('data-i18n'));
      if (val !== null) { el.textContent = val; }
    });

    // Texte avec balisage interne (icônes, <b>…) → innerHTML
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-html]'), function (el) {
      var val = t(lang, el.getAttribute('data-i18n-html'));
      if (val !== null) { el.innerHTML = val; }
    });

    // Attributs traduisibles
    ['aria-label', 'title', 'alt'].forEach(function (attr) {
      var attrName = 'data-i18n-' + attr;
      Array.prototype.forEach.call(document.querySelectorAll('[' + attrName + ']'), function (el) {
        var val = t(lang, el.getAttribute(attrName));
        if (val !== null) { el.setAttribute(attr, val); }
      });
    });

    // Métadonnées SEO
    var desc = document.querySelector('meta[name="description"]');
    var descVal = t(lang, 'meta.description');
    if (desc && descVal !== null) { desc.setAttribute('content', descVal); }

    var ogDesc = document.querySelector('meta[property="og:description"]');
    var ogDescVal = t(lang, 'meta.ogDescription');
    if (ogDesc && ogDescVal !== null) { ogDesc.setAttribute('content', ogDescVal); }

    // État visuel/accessible du sélecteur de langue
    Array.prototype.forEach.call(document.querySelectorAll('.lang-btn'), function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setLanguage(lang) {
    applyLanguage(lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* stockage indisponible : on ignore */ }
  }

  function getInitialLanguage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'fr' || saved === 'en') { return saved; }
    } catch (e) { /* stockage indisponible : on garde le défaut */ }
    return DEFAULT_LANG;
  }

  // Initialisation
  applyLanguage(getInitialLanguage());

  // Sélecteur de langue
  Array.prototype.forEach.call(document.querySelectorAll('.lang-btn'), function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
})();
