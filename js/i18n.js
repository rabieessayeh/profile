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
      'nav.projects': 'Projets',
      'nav.experiences': 'Expériences',
      'nav.skills': 'Compétences',
      'nav.education': 'Parcours',
      'nav.contact': 'Contact',

      'hero.avatarAlt': "Portrait d'ES-SAYEH Rabie",
      'hero.title': 'AI Engineer — LLM, agents IA & ML',
      'hero.lead': 'Je conçois des applications IA fiables : le LLM interprète, du code testé décide.',
      'hero.bio': "AI Engineer spécialisé en solutions GenAI et agents IA, de la conception à la mise en production. Expérience en développement de plateformes SaaS multi-tenant (FastAPI, LangGraph, RAG), déploiement conteneurisé (Docker) et architecture orientée besoins métier. À l'aise pour porter un projet du cadrage jusqu'au run, en autonomie, et pour transformer des besoins métier complexes en produits IA concrets et maintenables.",
      'hero.location': '<i class="fa-solid fa-location-dot" aria-hidden="true"></i> La Rochelle, France',
      'hero.available': '<span class="dot" aria-hidden="true"></span> Disponible à partir de novembre 2026',
      'hero.ctaProjects': 'Voir les projets',
      'hero.ctaContact': 'Contact',

      'contacts.github': 'Profil GitHub',
      'contacts.linkedin': 'Profil LinkedIn',
      'contacts.email': 'Envoyer un e-mail',

      'projects.h2': 'Projets phares',
      'projects.lead': 'Applications déployées où le LLM choisit des outils et où du code testé produit les résultats.',
      'projects.details': 'Détails techniques',
      'projects.demo': 'Démo en ligne',
      'projects.othersH3': 'Autres projets',
      'projects.githubLink': "Voir l'ensemble de mes dépôts sur GitHub →",

      'projects.devis.tag': 'Devis de rénovation à partir de notes de visite',
      'projects.devis.imgAlt': 'Interface de Devis IA Travaux : notes de visite en texte libre et devis de rénovation chiffré par lot, avec quantités modifiables',
      'projects.devis.pitch': 'Transforme des notes de visite en devis de rénovation chiffré. Le LLM propose les lignes depuis une bibliothèque de prix ; chiffrage, TVA et totaux sont calculés par du code testé.',
      'projects.devis.b1': 'Transforme des notes de visite en texte libre en devis de rénovation chiffré.',
      'projects.devis.b2': "Le LLM propose les lignes à partir d'une bibliothèque de prix (codes, quantités, hypothèses de calcul explicites) mais ne fixe aucun prix : chiffrage, TVA, totaux et contrôles sont déterministes et testés.",
      'projects.devis.b3': "Les points incertains sont signalés (à chiffrer, questions à poser), les quantités restent modifiables, et le devis s'exporte en CSV ou PDF ; appelable depuis n8n via une API REST.",
      'projects.devis.b4': 'Python, FastAPI, LLM tool calling, Automation, n8n, Pydantic, Docker, CI.',

      'projects.cyber.tag': 'Assistant LLM pour la cyberdéfense (MITRE ATT&CK)',
      'projects.cyber.imgAlt': 'Interface de Cyber Range Scenario Assistant : matrice de couverture MITRE ATT&CK avec les tactiques non couvertes et les techniques suggérées',
      'projects.cyber.pitch': "Génère, valide, fusionne et analyse des scénarios d'entraînement en cyberdéfense reliés à MITRE ATT&CK. Le LLM choisit des outils autorisés ; validation et couverture sont déterministes.",
      'projects.cyber.b1': "Assistant LLM qui génère, valide, fusionne et analyse les lacunes de scénarios d'entraînement en cyberdéfense, reliés à MITRE ATT&CK (v19).",
      'projects.cyber.b2': "Le LLM choisit uniquement des outils autorisés ; la construction des scénarios, la validation par JSON Schema, la matrice de couverture ATT&CK et l'analyse des lacunes sont déterministes et testées.",
      'projects.cyber.b3': 'Python, FastAPI, LLM tool calling, MITRE ATT&CK, JSON Schema, Pydantic, Docker, CI.',

      'projects.geo.tag': 'Agent IA pour données géospatiales',
      'projects.geo.imgAlt': 'Interface de Geo Assistant : question en langage naturel et résultats affichés sur une carte du Luxembourg',
      'projects.geo.pitch': 'Répond en langage naturel sur des données géospatiales du Luxembourg. Le LLM sélectionne des outils GeoPandas sur liste blanche ; chaque réponse montre sa trace et ses résultats sur une carte.',
      'projects.geo.b1': "Répond à des questions en langage naturel sur des données géospatiales : un LLM sélectionne des outils GeoPandas déterministes, sur liste blanche, sans jamais écrire de code ni inventer de chiffres ; chaque réponse renvoie la trace de ses appels d'outils et ses résultats sur une carte.",
      'projects.geo.b2': 'Données ouvertes réelles du Luxembourg (limites administratives, arrêts de transport public, écoles géocodées), calculs métriques en EPSG:2169.',
      'projects.geo.b3': "FastAPI + Leaflet, couche LLM indépendante du fournisseur (API compatible OpenAI, testée avec gpt-oss-20b), jeu d'évaluation, tests, Docker, CI GitHub Actions ; déployé en ligne.",

      'projects.geometry.tag': 'Agent IA pour pièces 3D (Three.js)',
      'projects.geometry.imgAlt': "Interface de Geometry Assistant : pièce 3D dans la visionneuse Three.js avec les résultats d'analyse affichés sur le modèle",
      'projects.geometry.pitch': 'Questions en langage naturel sur une pièce STL/OBJ. Le LLM sélectionne des outils trimesh sur liste blanche ; la visionneuse Three.js affiche faces, coupes et cotes.',
      'projects.geometry.b1': "Chargement d'une pièce STL/OBJ et questions en langage naturel : le LLM sélectionne des outils trimesh sur liste blanche (volume, analyse des surplombs pour l'impression 3D, coupes, mesures) et ne calcule jamais la géométrie lui-même.",
      'projects.geometry.b2': 'La visionneuse Three.js applique chaque résultat : faces surlignées, contours de coupe, cotes, mouvements de caméra ; rendu à la demande et sélection accélérée par BVH.',
      'projects.geometry.b3': "FastAPI, context engineering (modèle actif, points sélectionnés, vue), jeu d'évaluation, tests, Docker, CI GitHub Actions ; déployé en ligne.",

      'projects.p1.tag': 'Plateforme SaaS GenAI multi-tenant',
      'projects.p1.pitch': 'Assistant commercial IA pour agences de location de voitures : workflow LangGraph, RAG multi-tenant et isolation des données par client.',
      'projects.p1.b1': "Plateforme SaaS d'assistant commercial IA pour agences de location de voitures : onboarding client, isolation des données par tenant, architecture pensée pour le passage à l'échelle (FastAPI, LangGraph, MongoDB).",
      'projects.p1.b2': 'Workflow IA déterministe (LangGraph) combinant outils métier, génération de devis et orchestration des conversations.',
      'projects.p1.b3': 'Système RAG multi-tenant : ingestion documentaire, recherche sémantique et réponses contextualisées.',
      'projects.p1.b4': 'Architecture sécurisée : JWT, RBAC, WebSocket, API REST, Docker.',
      'projects.p1.b5': 'Architecture modulaire compatible avec plusieurs fournisseurs de LLM (Ollama, puis OpenAI / Anthropic / Gemini), prête pour le déploiement en production.',

      'projects.p3.tag': 'Assistant de recherche IA',
      'projects.p3.pitch': "Résumé automatique et recherche sémantique d'articles scientifiques au format PDF.",
      'projects.p3.b1': "Pipeline d'extraction de PDF, de métadonnées et de résumé automatique d'articles scientifiques.",
      'projects.p3.b2': 'Backend FastAPI exposant des endpoints REST pour le résumé et la recherche sémantique.',
      'projects.p3.b3': 'Interface React pour la consultation et la recherche dans les documents.',

      'exp.h2': 'Expériences professionnelles',
      'exp.e1.org': 'Université de La Rochelle',
      'exp.e1.date': 'Oct. 2024 – Oct. 2026',
      'exp.e1.subtitle': 'Intelligence artificielle appliquée aux sciences des matériaux',
      'exp.e1.b1': 'Conception et entraînement de modèles de Deep Learning sous PyTorch pour des problématiques de prédiction et de conception inverse.',
      'exp.e1.b2': 'Développement de modèles génératifs conditionnels (architectures CVAE) générant des structures compatibles avec des propriétés cibles.',
      'exp.e1.b3': 'Construction de pipelines de données reproductibles : prétraitement, normalisation, entraînement, validation, analyse des performances.',

      'exp.e2.note': '(PME industrielle)',
      'exp.e2.date': 'Juil. 2025 – Août 2025',
      'exp.e2.b1': "Développement d'un outil Python automatisant la génération de schémas SQL à partir de fichiers Excel, CSV et TXT.",
      'exp.e2.b2': 'Inférence automatique des types, détection des clés primaires, des contraintes et des index.',
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

      'skills.h2': 'Compétences techniques',
      'skills.g1': 'IA générative & agents',
      'skills.g4': 'Data Engineering & bases de données',
      'skills.g5': 'Web, 3D & géospatial',

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

      'background.h2': 'Parcours',
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

      'contact.h2': 'Contact',
      'contact.text': 'Un projet IA, un poste ou une question technique ? Écrivez-moi, je réponds rapidement.',

      'meta.description': "Portfolio d'ES-SAYEH Rabie, AI Engineer (LLM, agents IA et ML) : projets IA déployés, expériences et compétences.",
      'meta.ogDescription': 'Des applications IA fiables : le LLM interprète, du code testé décide. Projets, expériences et compétences.'
    },

    en: {
      'skip': 'Skip to content',

      'nav.aria': 'Main navigation',
      'nav.projects': 'Projects',
      'nav.experiences': 'Experience',
      'nav.skills': 'Skills',
      'nav.education': 'Background',
      'nav.contact': 'Contact',

      'hero.avatarAlt': 'Portrait of ES-SAYEH Rabie',
      'hero.title': 'AI Engineer — LLM, agents & ML',
      'hero.lead': 'I build AI applications that are reliable: the LLM interprets, tested code decides.',
      'hero.bio': "AI Engineer specialized in GenAI solutions and AI agents, from design through to production. Experienced in building multi-tenant SaaS platforms (FastAPI, LangGraph, RAG), containerized deployment (Docker) and business-driven architecture. Comfortable taking a project from scoping to production autonomously, and turning complex business needs into concrete, maintainable AI products.",
      'hero.location': '<i class="fa-solid fa-location-dot" aria-hidden="true"></i> La Rochelle, France',
      'hero.available': '<span class="dot" aria-hidden="true"></span> Available from November 2026',
      'hero.ctaProjects': 'See projects',
      'hero.ctaContact': 'Contact',

      'contacts.github': 'GitHub profile',
      'contacts.linkedin': 'LinkedIn profile',
      'contacts.email': 'Send an email',

      'projects.h2': 'Featured projects',
      'projects.lead': 'Deployed applications where the LLM picks the tools and tested code produces the results.',
      'projects.details': 'Technical details',
      'projects.demo': 'Live demo',
      'projects.othersH3': 'Other projects',
      'projects.githubLink': 'See all my repositories on GitHub →',

      'projects.devis.tag': 'Renovation quotes from site-visit notes',
      'projects.devis.imgAlt': 'Devis IA Travaux interface: free-text site-visit notes and a priced renovation quote grouped by trade, with editable quantities',
      'projects.devis.pitch': 'Turns site-visit notes into a priced renovation quote. The LLM proposes lines from a price library; pricing, VAT and totals are computed by tested code.',
      'projects.devis.b1': 'Turns free-text site-visit notes into a priced renovation quote.',
      'projects.devis.b2': 'The LLM proposes quote lines from a price library (codes, quantities, explicit calculation assumptions) but never sets a price: pricing, VAT, totals and checks are deterministic and tested.',
      'projects.devis.b3': 'Uncertain items are flagged (manual pricing, questions to ask), quantities stay editable, and quotes export to CSV or PDF; callable from n8n through a REST API.',
      'projects.devis.b4': 'Python, FastAPI, LLM tool calling, Automation, n8n, Pydantic, Docker, CI.',

      'projects.cyber.tag': 'LLM assistant for cyber defence (MITRE ATT&CK)',
      'projects.cyber.imgAlt': 'Cyber Range Scenario Assistant interface: MITRE ATT&CK coverage matrix with uncovered tactics and suggested techniques',
      'projects.cyber.pitch': 'Generates, validates, merges and gap-analyses cyber-defence training scenarios mapped to MITRE ATT&CK. The LLM picks whitelisted tools; validation and coverage are deterministic.',
      'projects.cyber.b1': 'LLM assistant that generates, validates, merges and gap-analyses cyber-defence training scenarios mapped to MITRE ATT&CK (v19).',
      'projects.cyber.b2': 'The LLM only selects whitelisted tools; scenario building, JSON-Schema validation, the ATT&CK coverage matrix and gap analysis are deterministic and tested.',
      'projects.cyber.b3': 'Python, FastAPI, LLM tool calling, MITRE ATT&CK, JSON Schema, Pydantic, Docker, CI.',

      'projects.geo.tag': 'AI agent for geospatial data',
      'projects.geo.imgAlt': 'Geo Assistant interface: a natural-language question and its results displayed on a map of Luxembourg',
      'projects.geo.pitch': 'Answers natural-language questions on Luxembourg geospatial data. The LLM selects whitelisted GeoPandas tools; every answer shows its trace and results on a map.',
      'projects.geo.b1': 'Answers natural-language questions on geospatial data: an LLM selects whitelisted, deterministic GeoPandas tools and never writes code or invents figures; every answer returns its tool-call trace and results on a map.',
      'projects.geo.b2': 'Real open data for Luxembourg (boundaries, public-transport stops, geocoded schools), metric computations in EPSG:2169.',
      'projects.geo.b3': 'FastAPI + Leaflet, provider-agnostic LLM layer (OpenAI-compatible API, tested with gpt-oss-20b), evaluation set, tests, Docker, GitHub Actions CI; deployed online.',

      'projects.geometry.tag': 'AI agent for 3D parts (Three.js)',
      'projects.geometry.imgAlt': 'Geometry Assistant interface: a 3D part in the Three.js viewer with analysis results displayed on the model',
      'projects.geometry.pitch': 'Natural-language questions about an STL/OBJ part. The LLM selects whitelisted trimesh tools; the Three.js viewer shows faces, slices and dimensions.',
      'projects.geometry.b1': 'Load an STL/OBJ part and ask questions in natural language: the LLM selects whitelisted trimesh tools (volume, overhang analysis for 3D printing, cross-sections, measurements) and never computes geometry itself.',
      'projects.geometry.b2': 'The Three.js viewer applies each result: highlighted faces, slice contours, dimension lines, camera moves; on-demand rendering and BVH-accelerated picking.',
      'projects.geometry.b3': 'FastAPI, context engineering (active model, picked points, view), evaluation set, tests, Docker, GitHub Actions CI; deployed online.',

      'projects.p1.tag': 'Multi-tenant GenAI SaaS platform',
      'projects.p1.pitch': 'AI sales assistant for car rental agencies: LangGraph workflow, multi-tenant RAG and per-client data isolation.',
      'projects.p1.b1': 'AI sales assistant SaaS platform for car rental agencies: client onboarding, per-tenant data isolation, architecture designed to scale (FastAPI, LangGraph, MongoDB).',
      'projects.p1.b2': 'Deterministic AI workflow (LangGraph) combining business tools, quote generation and conversation orchestration.',
      'projects.p1.b3': 'Multi-tenant RAG system: document ingestion, semantic search and contextualized answers.',
      'projects.p1.b4': 'Secure architecture: JWT, RBAC, WebSocket, REST API, Docker.',
      'projects.p1.b5': 'Modular architecture supporting multiple LLM providers (Ollama, then OpenAI / Anthropic / Gemini), production-ready.',

      'projects.p3.tag': 'AI Research Assistant',
      'projects.p3.pitch': 'Automatic summarisation and semantic search over scientific papers in PDF.',
      'projects.p3.b1': 'Pipeline for PDF extraction, metadata extraction and automatic summarization of scientific papers.',
      'projects.p3.b2': 'FastAPI backend exposing REST endpoints for summarization and semantic search.',
      'projects.p3.b3': 'React interface for browsing and searching documents.',

      'exp.h2': 'Professional Experience',
      'exp.e1.org': 'University of La Rochelle',
      'exp.e1.date': 'Oct 2024 – Oct 2026',
      'exp.e1.subtitle': 'Artificial intelligence applied to materials science',
      'exp.e1.b1': 'Designed and trained Deep Learning models with PyTorch for prediction and inverse design problems.',
      'exp.e1.b2': 'Developed conditional generative models (CVAE architectures) generating structures matching target properties.',
      'exp.e1.b3': 'Built reproducible data pipelines: preprocessing, normalization, training, validation, performance analysis.',

      'exp.e2.note': '(industrial SME)',
      'exp.e2.date': 'Jul 2025 – Aug 2025',
      'exp.e2.b1': 'Built a Python tool automating SQL schema generation from Excel, CSV and TXT files.',
      'exp.e2.b2': 'Automatic type inference, detection of primary keys, constraints and indexes.',
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

      'skills.h2': 'Technical Skills',
      'skills.g1': 'Generative AI & Agents',
      'skills.g4': 'Data Engineering & Databases',
      'skills.g5': 'Web, 3D & Geospatial',

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

      'background.h2': 'Background',
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

      'contact.h2': 'Contact',
      'contact.text': 'An AI project, a role or a technical question? Write to me, I reply quickly.',

      'meta.description': 'Portfolio of ES-SAYEH Rabie, AI Engineer (LLM, agents and ML): deployed AI projects, experience and skills.',
      'meta.ogDescription': 'Reliable AI applications: the LLM interprets, tested code decides. Projects, experience and skills.'
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
