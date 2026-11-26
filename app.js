/* ==========================================================================
   Portfolio Application — Mouhamadou Halissou SEIDOU IBRAHIM
   Vanilla JS · i18n FR/EN · WCAG 2.2 AA · Netlify Forms + WhatsApp
   ========================================================================== */

// Initialisation Plausible Analytics (hors script inline pour CSP stricte)
window.plausible = window.plausible || function () {
    (window.plausible.q = window.plausible.q || []).push(arguments);
};
if (typeof window.plausible.init === 'function') {
    window.plausible.init();
} else {
    window.plausible.init = function (opts) {
        window.plausible.o = opts || {};
    };
    window.plausible.init();
}

const CONTACT_EMAIL = 'halissous1491@gmail.com';
const WHATSAPP_NUMBER = '2290164557673';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const portfolioData = {
    profile: {
        name: "Mouhamadou Halissou SEIDOU IBRAHIM",
        roles: {
            fr: [
                "Rédaction stratégique & Ghostwriting",
                "Automatisation n8n, Make & Notion",
                "Conformité associative (Loi 2025-19)",
                "Intégration IA & Développement web",
                "Coordination & gestion de projet"
            ],
            en: [
                "Strategic Writing & Ghostwriting",
                "n8n, Make & Notion Automation",
                "NGO Statutory Compliance (Law 2025-19)",
                "AI Integration & Web Development",
                "Project Coordination & Delivery"
            ]
        }
    },
    skills: [
        { name: { fr: "Rédaction professionnelle", en: "Professional Writing" }, level: 95, category: "writing" },
        { name: { fr: "Ghostwriting", en: "Ghostwriting" }, level: 90, category: "writing" },
        { name: { fr: "SEO & rédaction web structurée", en: "SEO & Web Copywriting" }, level: 88, category: "writing" },
        { name: { fr: "Rédaction bilingue (Français / Anglais)", en: "Bilingual Writing (French / English)" }, level: 82, category: "writing" },

        { name: { fr: "Outils d'IA (Claude, GPT-4, Gemini)", en: "AI Tools (Claude, GPT-4, Gemini)" }, level: 93, category: "technical" },
        { name: { fr: "Prompt Engineering appliqué", en: "Applied Prompt Engineering" }, level: 93, category: "technical" },
        { name: { fr: "HTML / CSS / JavaScript", en: "HTML / CSS / JavaScript" }, level: 85, category: "technical" },
        { name: { fr: "Génération documentaire (WeasyPrint, python-docx)", en: "Document Generation (WeasyPrint, python-docx)" }, level: 88, category: "technical" },
        { name: { fr: "Microsoft Office & Excel avancé", en: "Microsoft Office & Advanced Excel" }, level: 90, category: "technical" },
        { name: { fr: "Collecte et analyse de données", en: "Data Collection & Analysis" }, level: 78, category: "technical" },

        { name: { fr: "n8n (workflows & intégrations)", en: "n8n (Workflows & Integrations)" }, level: 90, category: "nocode" },
        { name: { fr: "Make (ex-Integromat)", en: "Make (formerly Integromat)" }, level: 88, category: "nocode" },
        { name: { fr: "Zapier", en: "Zapier" }, level: 88, category: "nocode" },
        { name: { fr: "Notion (espaces de travail & automatisation)", en: "Notion (Workspaces & Automation)" }, level: 92, category: "nocode" },

        { name: { fr: "Gestion de projet opérationnel", en: "Operational Project Management" }, level: 90, category: "management" },
        { name: { fr: "Dossiers institutionnels & conformité", en: "Institutional & Compliance Dossiers" }, level: 92, category: "management" },
        { name: { fr: "Planification stratégique & chronogrammes", en: "Strategic Planning & Timelines" }, level: 88, category: "management" },
        { name: { fr: "Coordination multi-acteurs (ONG, PME, bailleurs)", en: "Multi-Stakeholder Coordination (NGOs, SMEs, Donors)" }, level: 86, category: "management" },

        { name: { fr: "Communication écrite et orale", en: "Written & Verbal Communication" }, level: 92, category: "soft" },
        { name: { fr: "Organisation & rigueur documentaire", en: "Organization & Document Rigor" }, level: 94, category: "soft" },
        { name: { fr: "Adaptabilité & sens éditorial", en: "Adaptability & Editorial Judgment" }, level: 88, category: "soft" },
        { name: { fr: "Résolution de problèmes opérationnels", en: "Operational Problem Solving" }, level: 91, category: "soft" },
        { name: { fr: "Travail d'équipe & coordination", en: "Teamwork & Coordination" }, level: 91, category: "soft" },
        { name: { fr: "Pédagogie & formation", en: "Training & Knowledge Transfer" }, level: 87, category: "soft" }
    ],
    services: [
        {
            title: { fr: "Rédaction professionnelle & SEO", en: "Professional & SEO Writing" },
            icon: "fa-solid fa-feather-pointed",
            description: {
                fr: "Articles de fond, rapports, dossiers institutionnels et documentation technique. Chaque texte est structuré pour votre lectorat, vérifié et optimisé pour le référencement naturel.",
                en: "Long-form articles, reports, institutional dossiers, and technical documentation. Every piece is structured for clarity, fact-checked, and built for organic search."
            }
        },
        {
            title: { fr: "Ghostwriting", en: "Ghostwriting" },
            icon: "fa-solid fa-user-pen",
            description: {
                fr: "Rédaction sous votre signature de tribunes, prises de parole LinkedIn et documents de référence, dans le respect fidèle de votre voix et de votre ligne éditoriale.",
                en: "Executive articles, LinkedIn commentary, and reference papers written under your byline while staying faithful to your voice and point of view."
            }
        },
        {
            title: { fr: "Gestion de projet opérationnel", en: "Operational Project Management" },
            icon: "fa-solid fa-diagram-project",
            description: {
                fr: "Cadrage, planification, suivi des échéances et coordination des intervenants pour maintenir vos livrables sur les rails du lancement jusqu'à la clôture.",
                en: "Scoping, scheduling, milestone tracking, and contributor coordination to keep deliverables on time from kickoff to handover."
            }
        },
        {
            title: { fr: "Accompagnement & conseil sur mesure", en: "Tailored Advisory & Support" },
            icon: "fa-solid fa-handshake",
            description: {
                fr: "Conseil pratique, formation aux outils et structuration de vos méthodes de travail pour rendre vos équipes autonomes dans la durée.",
                en: "Hands-on consulting, tool training, and workflow structuring designed to leave your team self-sufficient."
            }
        },
        {
            title: { fr: "Intégration d'Intelligence Artificielle", en: "Applied AI Integration" },
            icon: "fa-solid fa-microchip",
            description: {
                fr: "Déploiement d'usages concrets autour de Claude, GPT-4 ou Gemini : assistants documentaires, génération automatisée de livrables et guides de prompts adaptés à vos métiers.",
                en: "Practical workflows powered by Claude, GPT-4, or Gemini: document assistants, automated deliverable drafting, and custom prompt playbooks."
            }
        },
        {
            title: { fr: "Audit & analyse des processus", en: "Process Audit & Needs Analysis" },
            icon: "fa-solid fa-magnifying-glass-chart",
            description: {
                fr: "Diagnostic de vos flux documentaires et tâches récurrentes afin d'identifier les gains réalistes en automatisation et en organisation avant d'investir.",
                en: "Diagnostic review of your document workflows and recurring tasks to pinpoint practical automation and process improvements before you invest."
            }
        },
        {
            title: { fr: "Automatisation No-Code & Workflows", en: "No-Code Automation & Workflows" },
            icon: "fa-solid fa-plug",
            description: {
                fr: "Conception de scénarios fiables sous n8n, Make ou Zapier : relances prospects, génération de PDF, alertes WhatsApp et synchronisation CRM/Notion sans ressaisie manuelle.",
                en: "Reliable workflows in n8n, Make, or Zapier: lead follow-ups, automated PDF generation, WhatsApp alerts, and Notion/CRM sync without manual copy-pasting."
            }
        },
        {
            title: { fr: "Applications No-Code sur mesure", en: "Custom No-Code Applications" },
            icon: "fa-solid fa-mobile-screen",
            description: {
                fr: "Création d'outils métier web et mobile (Glide, Bubble, FlutterFlow) en 1 à 3 semaines : suivi de livraisons, gestion de stocks, tontines numériques ou portails clients modifiables par vos équipes.",
                en: "Turnkey web and mobile tools (Glide, Bubble, FlutterFlow) delivered in 1 to 3 weeks: delivery tracking, inventory management, digital tontines, or client portals you can maintain."
            }
        },
        {
            title: { fr: "Coordination multi-acteurs (ONG, PME, bailleurs)", en: "Multi-Stakeholder Coordination (NGOs, SMEs, Donors)" },
            icon: "fa-solid fa-people-arrows",
            description: {
                fr: "Animation des échanges entre ONG, PME, institutions publiques et bailleurs : suivi des engagements, comptes-rendus, rapports d'avancement et alignement de tous les acteurs vers un objectif commun.",
                en: "Coordination across NGOs, SMEs, public bodies, and donors: meeting facilitation, commitment tracking, progress reports, and alignment around shared milestones."
            }
        },
        {
            title: { fr: "Développement Web & IA", en: "Web & AI Development" },
            icon: "fa-solid fa-code",
            description: {
                fr: "Conception de sites et d'applications web (HTML/CSS/JS ou Python Flask) intégrant formulaires intelligents, tableaux de bord, génération documentaire ou assistants conversationnels.",
                en: "Custom websites and web apps (HTML/CSS/JS or Python Flask) featuring smart intake forms, dashboards, automated document generation, or conversational assistants."
            }
        }
    ],
    projects: [
        {
            id: "proj-apple-store",
            category: "webdev",
            icon: "fa-brands fa-apple",
            metric: { fr: "Déployé & en ligne", en: "Deployed & Live" },
            title: {
                fr: "Plateforme Web E-Commerce — Apple Store",
                en: "E-Commerce Web Platform — Apple Store"
            },
            summary: {
                fr: "Conception, développement front-end sur mesure et mise en ligne d'une boutique web réactive orientée produits haut de gamme.",
                en: "Custom front-end development and deployment of a responsive e-commerce storefront for premium electronics."
            },
            challenge: {
                fr: "Proposer une interface claire, rapide et rassurante pour présenter un catalogue produit structuré sur ordinateur comme sur mobile.",
                en: "Deliver a clean, fast, and reliable interface to browse a structured product catalog across desktop and mobile."
            },
            solution: {
                fr: "Intégration web responsive, parcours de consultation simplifié, optimisation du chargement et déploiement en production.",
                en: "Responsive architecture, streamlined browsing flow, load-time optimization, and production deployment."
            },
            results: {
                fr: [
                    "Mise en production complète et stable",
                    "Navigation fluide sur mobile et ordinateur",
                    "Temps de chargement optimisés"
                ],
                en: [
                    "Clean production deployment",
                    "Consistent navigation on mobile and desktop",
                    "Fast page load performance"
                ]
            },
            tools: ["HTML/CSS/JS", "UX/UI", "Responsive", "Déploiement Web"]
        },
        {
            id: "proj-fadama-water",
            category: "webdev",
            icon: "fa-solid fa-bottle-water",
            metric: { fr: "Suivi de production", en: "Production Tracking" },
            title: {
                fr: "FADAMA — Application de Gestion de Production d'Eau Minérale",
                en: "FADAMA — Mineral Water Production Tracking App"
            },
            summary: {
                fr: "Application web métier dédiée au suivi des volumes de production, à la traçabilité des lots et au pilotage des stocks d'eau minérale.",
                en: "Web application for tracking mineral water production volumes, batch traceability, and stock levels."
            },
            challenge: {
                fr: "Centraliser le suivi quotidien de la production et des lots pour limiter les écarts d'inventaire et les pertes d'information.",
                en: "Centralize daily production records and batch logs to reduce inventory discrepancies and data loss."
            },
            solution: {
                fr: "Tableau de bord web de suivi en temps réel, gestion des entrées/sorties de stock et édition de rapports d'activité.",
                en: "Real-time production dashboard, stock movement tracking, and structured activity reporting."
            },
            results: {
                fr: [
                    "Suivi de production entièrement numérisé",
                    "Traçabilité des lots facilitée pour le contrôle qualité",
                    "Réduction des écarts d'inventaire"
                ],
                en: [
                    "Fully digitized production tracking",
                    "Clear batch traceability for quality control",
                    "Fewer inventory discrepancies"
                ]
            },
            tools: ["Développement Web", "Tableau de bord", "Base de données", "UX/UI"]
        },
        {
            id: "proj-aads-governance",
            category: "compliance",
            icon: "fa-solid fa-scale-balanced",
            metric: { fr: "Conformité statutaire", en: "Statutory Compliance" },
            title: {
                fr: "AADS — Gouvernance Financière & Documents Statutaires",
                en: "AADS — Financial Governance & Statutory Documents"
            },
            summary: {
                fr: "Mise en conformité statutaire, rédaction des textes fondateurs et structuration de la gouvernance financière d'une association de développement social.",
                en: "Statutory alignment, bylaws drafting, and financial governance structuring for a social development association."
            },
            challenge: {
                fr: "Structurer le cadre juridique, les statuts et les procédures de suivi financier conformément aux exigences réglementaires associatives.",
                en: "Establish clear legal bylaws and financial oversight procedures aligned with association regulations."
            },
            solution: {
                fr: "Rédaction des statuts et du règlement intérieur, complétée par des outils de suivi financier et comptable pour les instances dirigeantes.",
                en: "Drafted bylaws and internal rules alongside transparent financial tracking templates for governing bodies."
            },
            results: {
                fr: [
                    "Conformité juridique et statutaire validée",
                    "Procédures de gestion financière formalisées",
                    "Cadre clair pour les assemblées et comités"
                ],
                en: [
                    "Legal and statutory compliance validated",
                    "Documented financial management procedures",
                    "Clear governance framework for assemblies"
                ]
            },
            tools: ["Conformité légale", "Gouvernance", "Rédaction statutaire", "Suivi financier"]
        },
        {
            id: "proj-ab2s-compliance",
            category: "compliance",
            icon: "fa-solid fa-file-contract",
            metric: { fr: "Loi 2025-19 conforme", en: "Law 2025-19 Compliant" },
            title: {
                fr: "AB2S — Mise en Conformité Légale (Loi 2025-19)",
                en: "AB2S — Legal Compliance Alignment (Law 2025-19)"
            },
            summary: {
                fr: "Refonte statutaire et alignement juridique d'une association de solidarité sociale selon les dispositions de la Loi 2025-19 au Bénin.",
                en: "Statutory overhaul and legal alignment of a social solidarity association under Benin's Law 2025-19."
            },
            challenge: {
                fr: "Adapter les statuts existants et le fonctionnement interne aux nouvelles obligations réglementaires applicables aux associations.",
                en: "Bring legacy bylaws and internal rules in line with updated statutory obligations for associations."
            },
            solution: {
                fr: "Revue juridique des actes existants, réécriture des statuts, mise à jour du règlement intérieur et constitution du dossier officiel.",
                en: "Document audit, rewritten bylaws, updated internal regulations, and preparation of the official filing dossier."
            },
            results: {
                fr: [
                    "Attestation de conformité réglementaire obtenue",
                    "Statuts et règlement intérieur alignés sur la Loi 2025-19",
                    "Sécurisation juridique des organes dirigeants"
                ],
                en: [
                    "Regulatory compliance certificate obtained",
                    "Bylaws and internal rules aligned with Law 2025-19",
                    "Executive governance legally secured"
                ]
            },
            tools: ["Loi 2025-19", "Conformité légale", "Droit associatif", "Rédaction juridique"]
        },
        {
            id: "proj-elide-ong-compliance",
            category: "compliance",
            icon: "fa-solid fa-hand-holding-heart",
            metric: { fr: "Conformité ONG validée", en: "NGO Compliance Approved" },
            title: {
                fr: "ELiDe — Mise en Conformité ONG (Loi 2025-19)",
                en: "ELiDe — NGO Legal Compliance (Law 2025-19)"
            },
            summary: {
                fr: "Accompagnement juridique et montage du dossier d'agrément d'une ONG dans le cadre de la Loi 2025-19.",
                en: "End-to-end compliance alignment and administrative accreditation dossier for an NGO under Law 2025-19."
            },
            challenge: {
                fr: "Répondre aux exigences renforcées de transparence, de gouvernance et de déclaration administrative imposées aux ONG.",
                en: "Meet heightened transparency, governance, and reporting obligations required for NGOs."
            },
            solution: {
                fr: "Revue du cadre institutionnel, rédaction des chartes de gouvernance, révision statutaire et constitution complète du dossier administratif.",
                en: "Institutional review, governance charters, revised bylaws, and complete administrative filing package."
            },
            results: {
                fr: [
                    "Dossier de conformité validé par les autorités compétentes",
                    "Procédures administratives et de transparence formalisées",
                    "Statut juridique de l'ONG sécurisé"
                ],
                en: [
                    "Compliance dossier approved by competent authorities",
                    "Administrative and transparency procedures documented",
                    "Long-term legal standing secured"
                ]
            },
            tools: ["Loi 2025-19", "Conformité ONG", "Gouvernance", "Dossier administratif"]
        },
        {
            id: "proj-2a2s-compliance",
            category: "compliance",
            icon: "fa-solid fa-gavel",
            metric: { fr: "Conformité 2025-19", en: "2025-19 Compliance" },
            title: {
                fr: "2A2S — Mise en Conformité Statutaire (Loi 2025-19)",
                en: "2A2S — Statutory Compliance Alignment (Law 2025-19)"
            },
            summary: {
                fr: "Actualisation des statuts et alignement des actes administratifs d'une association d'assistance sociale sous la Loi 2025-19.",
                en: "Bylaw revision and administrative alignment for a social assistance association under Law 2025-19."
            },
            challenge: {
                fr: "Mettre à jour les textes fondateurs et le registre des délibérations conformément au cadre associatif en vigueur.",
                en: "Update founding documents and assembly records to comply with current association rules."
            },
            solution: {
                fr: "Audit des délibérations, révision des statuts administratifs et structuration du registre de conformité statutaire.",
                en: "Review of assembly minutes, revised administrative bylaws, and organized compliance register."
            },
            results: {
                fr: [
                    "Dossier administratif de conformité validé",
                    "Registre des assemblées générales mis à jour",
                    "Fonctionnement des instances sécurisé"
                ],
                en: [
                    "Statutory compliance file validated",
                    "General assembly register brought into compliance",
                    "Governance processes secured"
                ]
            },
            tools: ["Loi 2025-19", "Révision statutaire", "Audit documentaire", "Conformité associative"]
        },
        {
            id: "proj-fovideh-foundation",
            category: "compliance",
            icon: "fa-solid fa-building-ngo",
            metric: { fr: "Fondation conforme", en: "Foundation Compliant" },
            title: {
                fr: "FoViDéH — Conformité Légale pour Fondation de Développement",
                en: "FoViDéH — Legal Compliance for Development Foundation"
            },
            summary: {
                fr: "Constitution des dossiers de conformité et structuration administrative pour une fondation dédiée au développement humain.",
                en: "Legal compliance documentation and administrative structuring for a human development foundation."
            },
            challenge: {
                fr: "Régulariser et consolider les actes d'existence légale ainsi que les conventions de fonctionnement de la fondation.",
                en: "Consolidate legal existence acts and operating agreements for a social-benefit foundation."
            },
            solution: {
                fr: "Rédaction des actes juridiques, harmonisation des chartes institutionnelles et suivi du dépôt auprès des autorités.",
                en: "Drafted legal acts, aligned institutional charters, and supported filing with competent authorities."
            },
            results: {
                fr: [
                    "Dossier de conformité légale validé",
                    "Statut juridique consolidé",
                    "Cadre administratif clarifié pour les partenariats"
                ],
                en: [
                    "Legal compliance package approved",
                    "Institutional status consolidated",
                    "Administrative structure ready for partnerships"
                ]
            },
            tools: ["Droit des fondations", "Conformité légale", "Gouvernance institutionnelle"]
        },
        {
            id: "proj-koborou-info-media",
            category: "writing",
            icon: "fa-solid fa-newspaper",
            metric: { fr: "Média multi-supports", en: "Multi-Platform Media" },
            title: {
                fr: "Koborou Info — Projet Média (Presse Écrite, Web & Audiovisuel)",
                en: "Koborou Info — Media Project (Print, Web & Broadcast)"
            },
            summary: {
                fr: "Structuration de la ligne éditoriale et rédaction d'articles d'actualité pour un média couvrant la presse écrite, le web et l'audiovisuel.",
                en: "Editorial direction and news writing across print, web, and broadcast channels."
            },
            challenge: {
                fr: "Installer une ligne éditoriale cohérente et maintenir une production régulière d'articles fiables sur plusieurs formats.",
                en: "Maintain a consistent editorial voice and steady publishing cadence across three media formats."
            },
            solution: {
                fr: "Élaboration de la charte éditoriale, rédaction d'articles journalistiques, scripts courts et publication web.",
                en: "Built the editorial style guide, wrote news features, broadcast briefs, and web copy."
            },
            results: {
                fr: [
                    "Couverture éditoriale multi-canal opérationnelle",
                    "Production régulière d'articles de presse et contenus web",
                    "Ligne éditoriale homogène et lisible"
                ],
                en: [
                    "Operational multi-channel editorial workflow",
                    "Consistent publishing cadence across print and web",
                    "Cohesive editorial voice"
                ]
            },
            tools: ["Rédaction journalistique", "Charte éditoriale", "Presse web", "Audiovisuel"]
        },
        {
            id: "proj-orientabenin-platform",
            category: "webdev",
            icon: "fa-solid fa-graduation-cap",
            metric: { fr: "Plateforme EdTech", en: "EdTech Platform" },
            title: {
                fr: "OrientaBénin — Plateforme d'Orientation Académique",
                en: "OrientaBénin — Academic Guidance Platform"
            },
            summary: {
                fr: "Plateforme web centralisant les filières universitaires, établissements et pistes d'orientation pour les étudiants et bacheliers au Bénin.",
                en: "Web platform organizing degree programs, universities, and study paths for students in Benin."
            },
            challenge: {
                fr: "Rendre l'information d'orientation universitaire facilement consultable et comparable pour les nouveaux bacheliers.",
                en: "Make higher-education options searchable and easy to compare for high school graduates."
            },
            solution: {
                fr: "Annuaire structuré des filières, recherche d'établissements et parcours guidé d'aide au choix.",
                en: "Structured program directory, institution search, and step-by-step orientation guide."
            },
            results: {
                fr: [
                    "Centralisation claire des filières et établissements",
                    "Recherche rapide et accessible sur mobile",
                    "Outil pratique pour les futurs étudiants et parents"
                ],
                en: [
                    "Centralized catalog of majors and universities",
                    "Fast, mobile-friendly search",
                    "Practical guidance tool for prospective students"
                ]
            },
            tools: ["Développement Web", "EdTech", "Base de données", "UX/UI"]
        },
        {
            id: "proj-tontinebj-app",
            category: "webdev",
            icon: "fa-solid fa-piggy-bank",
            metric: { fr: "Application FinTech", en: "FinTech Web App" },
            title: {
                fr: "TontineBJ — Application de Tontine Digitale",
                en: "TontineBJ — Digital Tontine Web App"
            },
            summary: {
                fr: "Application web d'épargne rotative conçue pour digitaliser le suivi des cotisations et des tours de table au Bénin.",
                en: "Web application digitizing rotating savings groups (tontines) with clear contribution tracking."
            },
            challenge: {
                fr: "Fiabiliser la gestion des tontines traditionnelles grâce à un suivi transparent des cotisations et échéances.",
                en: "Bring transparent tracking of member payments and payout cycles to traditional savings groups."
            },
            solution: {
                fr: "Gestion des cycles de cotisation, calcul automatique des tours de table et rappels d'échéance adaptés au mobile.",
                en: "Cycle management, automated round tracking, and mobile-friendly payment reminders."
            },
            results: {
                fr: [
                    "Suivi numérisé des membres et des cotisations",
                    "Transparence accrue sur l'historique des versements",
                    "Interface pensée pour les écrans de smartphone"
                ],
                en: [
                    "Digitized member and contribution ledger",
                    "Transparent payment history",
                    "Mobile-first interface"
                ]
            },
            tools: ["Développement Web", "FinTech", "Base de données", "Mobile UX"]
        },
        {
            id: "proj-n8n-lead-gen",
            category: "automation",
            icon: "fa-solid fa-paper-plane",
            metric: { fr: "Workflow n8n", en: "n8n Workflow" },
            title: {
                fr: "Automatisation de Prospection & Relance Associations",
                en: "Association Outreach & Follow-Up Automation"
            },
            summary: {
                fr: "Scénario n8n orchestrant la qualification d'associations, l'envoi d'emails personnalisés via Gmail et le suivi de relance WhatsApp.",
                en: "n8n workflow automating association prospecting, personalized Gmail outreach, and WhatsApp follow-ups."
            },
            challenge: {
                fr: "Éliminer la recherche manuelle, la copie de coordonnées et le suivi dispersé des prises de contact associatives.",
                en: "Eliminate slow manual prospecting, contact copying, and scattered follow-up spreadsheets."
            },
            solution: {
                fr: "Workflow n8n reliant collecte ciblée, enrichissement structuré, envoi Gmail contextualisé et alertes de relance WhatsApp.",
                en: "Automated n8n pipeline connecting targeted collection, structured enrichment, Gmail outreach, and WhatsApp reminders."
            },
            results: {
                fr: [
                    "Cycle de qualification et de prise de contact automatisé",
                    "Relances personnalisées sans oubli manuel",
                    "Gain de temps important sur le suivi des campagnes"
                ],
                en: [
                    "Automated outreach and qualification cycle",
                    "Consistent, personalized follow-ups",
                    "Significant time saved on campaign administration"
                ]
            },
            tools: ["n8n", "Gmail API", "WhatsApp", "Automatisation"]
        },
        {
            id: "proj-seo-strategy",
            category: "writing",
            icon: "fa-solid fa-feather-pointed",
            metric: { fr: "+185 % trafic SEO", en: "+185% SEO Traffic" },
            title: {
                fr: "Stratégie de Contenu & Rédaction SEO",
                en: "SEO Content Strategy & Copywriting"
            },
            summary: {
                fr: "Conception éditoriale et rédaction d'un corpus bilingue de plus de 35 articles de fond et guides de référence.",
                en: "Editorial architecture and writing of 35+ bilingual long-form articles and reference guides."
            },
            challenge: {
                fr: "Faible visibilité sur les requêtes métier stratégiques et taux de rebond élevé sur les pages existantes.",
                en: "Weak organic visibility on strategic keywords and high bounce rates on legacy pages."
            },
            solution: {
                fr: "Audit sémantique, structuration en cocons thématiques, préparation assistée par IA et rédaction/relecture humaine complète.",
                en: "Semantic audit, topical cluster planning, AI-assisted research outlines, and full human writing and editing."
            },
            results: {
                fr: [
                    "+185 % de trafic organique ciblé en 4 mois",
                    "Top 3 Google sur 18 requêtes métier clés",
                    "Temps moyen de lecture multiplié par 2,4"
                ],
                en: [
                    "+185% targeted organic traffic in 4 months",
                    "Google Top 3 on 18 strategic industry queries",
                    "2.4x increase in average time on article"
                ]
            },
            tools: ["SEO Copywriting", "Recherche sémantique", "GPT-4", "WordPress", "Analytics"]
        },
        {
            id: "proj-n8n-automation",
            category: "automation",
            icon: "fa-solid fa-gears",
            metric: { fr: "25 h / sem. économisées", en: "25 hrs/week Saved" },
            title: {
                fr: "Automatisation n8n / Notion / WhatsApp",
                en: "n8n / Notion / WhatsApp Automation"
            },
            summary: {
                fr: "Automatisation complète des relances prospects et de la génération de factures et comptes-rendus PDF.",
                en: "End-to-end automation of prospect follow-ups and instant PDF invoice and report generation."
            },
            challenge: {
                fr: "Saisie répétitive des devis et oublis fréquents dans le suivi commercial quotidien.",
                en: "Manual quote drafting and missed sales follow-ups during busy weeks."
            },
            solution: {
                fr: "Workflow n8n connecté à Notion, Stripe, WeasyPrint et WhatsApp pour déclencher automatiquement notifications et documents PDF.",
                en: "Custom n8n workflow connecting Notion, Stripe, WeasyPrint, and WhatsApp to automate alerts and PDF outputs."
            },
            results: {
                fr: [
                    "25 heures administratives économisées par semaine",
                    "Délai de relance prospect ramené de 48 h à 2 minutes",
                    "Suppression des erreurs de ressaisie"
                ],
                en: [
                    "25 hours of admin work saved per week",
                    "Lead response time cut from 48 hours to 2 minutes",
                    "Manual data-entry errors eliminated"
                ]
            },
            tools: ["n8n", "Notion API", "WhatsApp", "WeasyPrint", "Make"]
        },
        {
            id: "proj-glide-app",
            category: "webdev",
            icon: "fa-solid fa-mobile-screen-button",
            metric: { fr: "Livré en 10 jours", en: "Delivered in 10 Days" },
            title: {
                fr: "Web App No-Code de Suivi de Projets",
                en: "No-Code Field Project Tracking App"
            },
            summary: {
                fr: "Application No-Code PWA permettant le suivi en temps réel des chantiers et la validation des jalons sur le terrain.",
                en: "Responsive No-Code PWA for real-time site tracking and field milestone sign-off."
            },
            challenge: {
                fr: "Données dispersées dans des fichiers Excel sans accès mobile fiable pour les équipes terrain.",
                en: "Project status trapped in scattered spreadsheets with no reliable mobile access for field staff."
            },
            solution: {
                fr: "Application Glide connectée à Google Sheets avec tableau de bord administrateur et vue client dédiée.",
                en: "Glide web app backed by Google Sheets with an admin dashboard and dedicated client portal."
            },
            results: {
                fr: [
                    "Adoption immédiate par les équipes terrain",
                    "Baisse de 40 % des appels de demande d'avancement",
                    "Livraison opérationnelle en 10 jours"
                ],
                en: [
                    "Full adoption across field teams",
                    "40% fewer status-check phone calls",
                    "Delivered in 10 days"
                ]
            },
            tools: ["Glide", "Google Sheets API", "No-Code", "UX/UI"]
        },
        {
            id: "proj-ai-chatbot",
            category: "webdev",
            icon: "fa-solid fa-robot",
            metric: { fr: "94 % réponses exactes", en: "94% Answer Accuracy" },
            title: {
                fr: "Assistant IA sur Base Documentaire Interne (RAG)",
                en: "Internal Knowledge-Base AI Assistant (RAG)"
            },
            summary: {
                fr: "Déploiement d'un assistant RAG permettant d'interroger instantanément des centaines de procédures PDF internes.",
                en: "RAG assistant enabling instant natural-language queries across hundreds of internal PDF procedures."
            },
            challenge: {
                fr: "Temps perdu par les équipes à retrouver des procédures techniques dans des dossiers volumineux.",
                en: "Team hours lost hunting for technical procedures across deeply nested folders."
            },
            solution: {
                fr: "Indexation vectorielle des documents internes et interface conversationnelle encadrée par des règles strictes de confidentialité.",
                en: "Vector indexing of company PDFs paired with a guarded conversational interface."
            },
            results: {
                fr: [
                    "Temps de recherche documentaire divisé par 10",
                    "94 % de réponses exactes dès la première requête",
                    "Adopté quotidiennement par l'équipe support"
                ],
                en: [
                    "10x faster internal document lookup",
                    "94% first-try response accuracy",
                    "Adopted daily by the support team"
                ]
            },
            tools: ["Python", "OpenAI API", "Prompt Engineering", "Base vectorielle", "HTML/CSS/JS"]
        },
        {
            id: "proj-ngo-funding",
            category: "compliance",
            icon: "fa-solid fa-list-check",
            metric: { fr: "Subvention 85 000 €", en: "€85,000 Grant Won" },
            title: {
                fr: "Coordination & Rédaction de Dossier Institutionnel",
                en: "Institutional Grant Proposal & Coordination"
            },
            summary: {
                fr: "Pilotage opérationnel, rédaction du document cadre et coordination de 4 organisations partenaires pour une demande de financement.",
                en: "Operational coordination and framework proposal drafting across 4 partner organizations."
            },
            challenge: {
                fr: "Synthétiser les contributions de 4 entités partenaires dans une fenêtre de dépôt très courte.",
                en: "Synthesize inputs from 4 partner entities under a tight submission deadline."
            },
            solution: {
                fr: "Rétro-planning strict, animation des comités de validation et harmonisation éditoriale de l'ensemble du dossier.",
                en: "Structured timeline, review committee facilitation, and unified editorial drafting."
            },
            results: {
                fr: [
                    "Projet retenu et subvention de 85 000 € accordée",
                    "Dossier déposé 48 h avant la date limite",
                    "Alignement complet des 4 organisations partenaires"
                ],
                en: [
                    "Proposal approved with €85,000 grant awarded",
                    "Submitted 48 hours ahead of deadline",
                    "Full alignment across all 4 partner organizations"
                ]
            },
            tools: ["Gestion de projet", "Rédaction institutionnelle", "Planification", "Coordination"]
        }
    ],
    faq: [
        {
            question: {
                fr: "Quels sont vos délais pour la création de contenus rédigés ?",
                en: "What are your turnaround times for written content?"
            },
            answer: {
                fr: "Tout dépend du volume et de la technicité du sujet. Pour un article de fond documenté ou un document technique, comptez entre 2 et 5 jours ouvrés. Si vous avez une échéance serrée, précisez-le dès le brief : selon mon planning, un traitement prioritaire peut être organisé sans compromis sur la relecture.",
                en: "Turnaround depends on scope and technical depth. A well-researched article or technical document typically takes 2 to 5 business days. If you have an urgent deadline, flag it in your brief—when my schedule allows, we can arrange priority delivery without cutting editorial review."
            }
        },
        {
            question: {
                fr: "Comment intégrez-vous l'Intelligence Artificielle dans vos projets ?",
                en: "How do you use Artificial Intelligence in your work?"
            },
            answer: {
                fr: "L'IA intervient en appui de préparation : structuration de recherches, tri de données brutes ou test d'angles éditoriaux. Chaque livrable est intégralement vérifié, recoupé et rédigé par mes soins avant livraison. L'outil accélère l'analyse ; le fond, la nuance et la responsabilité éditoriale restent humains.",
                en: "AI supports the prep stage—organizing research, sorting raw data, or stress-testing outlines. Every deliverable is thoroughly fact-checked, edited, and finalized by hand before handover. AI speeds up preparation; judgment, tone, and accountability remain 100% human."
            }
        },
        {
            question: {
                fr: "En quoi consistent vos automatisations No-Code (n8n, Make) ?",
                en: "What do your No-Code automations (n8n, Make) cover?"
            },
            answer: {
                fr: "L'objectif est de supprimer les ressaisies et copier-coller récurrents. Je relie vos outils existants (Notion, Gmail, CRM, WhatsApp) via n8n ou Make : notification WhatsApp dès qu'un prospect remplit un formulaire, génération automatique d'un récapitulatif PDF ou mise à jour synchronisée de vos suivis.",
                en: "The goal is to remove repetitive copy-pasting and manual handoffs. I connect the tools you already use (Notion, Gmail, CRM, WhatsApp) with n8n or Make—such as instant WhatsApp alerts for new leads, automated PDF summaries, or synchronized project trackers."
            }
        },
        {
            question: {
                fr: "Pouvons-nous collaborer à distance ?",
                en: "Do you work remotely with international clients?"
            },
            answer: {
                fr: "Oui, la grande majorité de mes missions s'effectue à distance. Les échanges quotidiens passent par WhatsApp pour la réactivité, les validations par e-mail pour garder une trace claire, et des points vidéo courts sur Google Meet ou Zoom aux étapes clés.",
                en: "Yes—most of my client engagements are remote. We use WhatsApp for quick day-to-day coordination, email for clear milestone sign-offs, and short Google Meet or Zoom calls whenever a decision calls for live discussion."
            }
        }
    ]
};

const staticTranslations = {
    fr: {
        "skip-to-content": "Aller au contenu principal",
        "seo-title": "Mouhamadou Halissou SEIDOU IBRAHIM — Rédaction Stratégique, IA & Gestion de Projet",
        "seo-descr": "Mouhamadou Halissou SEIDOU IBRAHIM : rédacteur professionnel, consultant en automatisation IA (n8n, Make) et gestion de projet à Parakou, Bénin. Contenus SEO, ghostwriting et conformité ONG (Loi 2025-19).",
        "og-title": "Mouhamadou Halissou SEIDOU IBRAHIM — Rédaction Stratégique, IA & Gestion de Projet",
        "og-descr": "Rédacteur professionnel, consultant en automatisation IA (n8n, Make) et coordinateur de projets à Parakou, Bénin. Accompagnement à distance pour dirigeants, PME et ONG.",
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-skills": "Compétences",
        "nav-services": "Services",
        "nav-projects": "Projets",
        "nav-faq": "FAQ",
        "nav-contact": "Contact",
        "hero-badge": "Disponible pour de nouvelles missions · Parakou & à distance",
        "hero-greeting": "Mouhamadou Halissou SEIDOU IBRAHIM",
        "hero-headline": "Rédaction stratégique, automatisation IA & pilotage de projets.",
        "hero-description": "J'accompagne dirigeants, PME et ONG depuis 7 ans pour produire des contenus éditoriaux rigoureux, structurer leurs dossiers statutaires et automatiser leurs opérations courantes avec n8n, Make et l'IA.",
        "stat-projects": "Livrables réalisés",
        "stat-experience": "Années de pratique",
        "stat-clients": "Organisations accompagnées",
        "btn-start": "Présenter un projet",
        "btn-services": "Voir les réalisations",
        "hero-follow": "Réseaux & contact direct",
        "about-subtitle": "Profil & Méthode",
        "about-title": "À propos",
        "about-descr-sub": "Sept ans d'expérience à la croisée de l'écrit stratégique, de la conformité documentaire et de l'automatisation.",
        "about-exp-label": "Années d'expérience",
        "about-role-title": "Rédacteur professionnel · Consultant IA & Gestion de Projet",
        "about-p1": "Basé à Parakou et habitué aux collaborations à distance depuis 7 ans, j'ai accompagné plus de 60 dirigeants, PME et ONG sur plus de 369 livrables : articles de fond, ghostwriting, dossiers institutionnels et mise en conformité statutaire (Loi 2025-19 au Bénin).",
        "about-p2": "Ma démarche reste concrète : rédiger des textes clairs qui servent vos objectifs réels, et connecter vos outils du quotidien (n8n, Make, Notion, WhatsApp) pour éliminer les tâches répétitives. Des livrables relus, structurés et directement exploitables.",
        "highlight-writing-title": "Rédaction & Ghostwriting",
        "highlight-writing-desc": "Articles SEO, livres blancs, prises de parole et dossiers institutionnels.",
        "highlight-ia-title": "Automatisation & IA",
        "highlight-ia-desc": "Workflows n8n/Make et assistants IA branchés sur vos outils métier.",
        "highlight-mgmt-title": "Conformité & Pilotage",
        "highlight-mgmt-desc": "Statuts d'ONG (Loi 2025-19), espaces Notion et suivi opérationnel.",
        "highlight-acc-title": "Collaboration directe",
        "highlight-acc-desc": "Échanges fluides sur WhatsApp ou Meet et jalons livrés dans les délais.",
        "btn-chat": "Échanger sur WhatsApp",
        "btn-cv": "Télécharger le CV (PDF)",
        "skills-subtitle": "Savoir-faire",
        "skills-title": "Compétences",
        "skills-descr": "Une combinaison de compétences éditoriales, techniques et organisationnelles mobilisées selon la nature de chaque mission.",
        "cat-all": "Toutes",
        "cat-writing": "Rédaction",
        "cat-technical": "Techniques",
        "cat-nocode": "No-Code & Automation",
        "cat-management": "Gestion",
        "cat-soft": "Transversales",
        "cat-compliance": "Conformité associative",
        "cat-proj-writing": "Rédaction & Contenu",
        "cat-automation": "Automatisation n8n",
        "cat-webdev": "Développement web",
        "services-subtitle": "Prestations",
        "services-title": "Domaines d'intervention",
        "services-descr": "Des prestations cadrées, adaptées aux contraintes des dirigeants, PME, ONG et équipes projet.",
        "services-cta-title": "Un besoin précis en rédaction, conformité ou automatisation ?",
        "services-cta-desc": "Partagez le contexte de votre projet pour obtenir une proposition claire, chiffrée et sans engagement.",
        "services-cta-btn": "Demander un échange",
        "projects-subtitle": "Études de cas",
        "projects-title": "Réalisations sélectionnées",
        "projects-descr": "Dossiers menés en conformité associative, rédaction stratégique, automatisation n8n et développement web.",
        "faq-subtitle": "Questions pratiques",
        "faq-title": "Questions fréquentes",
        "faq-descr": "Délais, usage de l'IA, automatisation No-Code et organisation du travail à distance.",
        "contact-subtitle": "Prise de contact",
        "contact-title": "Démarrer une collaboration",
        "contact-descr": "Décrivez brièvement votre besoin ou réservez un créneau de 15 minutes pour cadrer votre projet.",
        "contact-info-title": "Coordonnées directes",
        "contact-info-desc": "Réponse sous 24 heures ouvrées. Vous pouvez envoyer un brief structuré ci-contre, réserver un appel court ou m'écrire directement sur WhatsApp.",
        "contact-label-email": "Email",
        "contact-label-phone": "Téléphone",
        "contact-label-loc": "Localisation",
        "contact-label-avail": "Disponibilité",
        "contact-avail-desc": "7j/7 — Réponse sous 24h",
        "contact-loc-desc": "Parakou, Bénin",
        "btn-book": "Planifier un appel de 15 min",
        "contact-form-name": "Votre nom *",
        "contact-form-email": "Votre email *",
        "contact-form-phone": "Téléphone (optionnel)",
        "contact-form-subject": "Sujet du projet *",
        "contact-form-msg": "Votre message ou brief *",
        "btn-next": "Suivant",
        "btn-prev": "Précédent",
        "btn-submit-email": "Envoyer le brief",
        "btn-submit-wa": "Envoyer sur WhatsApp",
        "form-select-service": "Choisir un service *",
        "form-srv-writing": "Rédaction Professionnelle & SEO",
        "form-srv-ghost": "Ghostwriting",
        "form-srv-compliance": "Conformité Légale & ONG (Loi 2025-19)",
        "form-srv-auto": "Automatisation (n8n, Make)",
        "form-srv-nocode": "Applications No-Code",
        "form-srv-dev": "Développement Web IA / Intégration IA",
        "form-srv-mgmt": "Gestion de Projet / Consulting",
        "form-srv-other": "Autre projet",
        "footer-role-desc": "Rédaction stratégique, automatisation IA et gestion de projet",
        "footer-tagline": "Des écrits clairs et des systèmes fiables, livrés avec rigueur.",
        "footer-nav-title": "Navigation",
        "footer-services-title": "Expertises",
        "footer-contact-title": "Contact",
        "footer-rights": "Tous droits réservés.",
        "booking-modal-title": "Planifier un appel de 15 minutes",
        "book-form-phone": "Téléphone *",
        "book-label-date": "Date de l'appel *",
        "book-select-time": "Heure souhaitée *",
        "book-submit-btn": "Confirmer sur WhatsApp",
        "bot-online": "Réponse instantanée",
        "bot-welcome": "Bonjour. Posez-moi une question rapide sur mes tarifs indicatifs, ma disponibilité, la rédaction, la conformité ONG (Loi 2025-19) ou l'automatisation n8n/Make.",
        "sug-rates": "Tarifs indicatifs",
        "sug-avail": "Disponibilité",
        "sug-ai": "Usage de l'IA",
        "sug-n8n": "Automatisations n8n",
        "chatbot-input-placeholder": "Posez une question..."
    },
    en: {
        "skip-to-content": "Skip to main content",
        "seo-title": "Mouhamadou Halissou SEIDOU IBRAHIM — Strategic Writing, AI & Project Delivery",
        "seo-descr": "Mouhamadou Halissou SEIDOU IBRAHIM: professional writer, AI & No-Code automation consultant (n8n, Make), and project coordinator based in Parakou, Benin. SEO copywriting, ghostwriting, and NGO compliance.",
        "og-title": "Mouhamadou Halissou SEIDOU IBRAHIM — Strategic Writing, AI & Project Delivery",
        "og-descr": "Professional writer, AI automation consultant (n8n, Make), and project coordinator based in Parakou, Benin. Remote support for executives, SMEs, and NGOs.",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-services": "Services",
        "nav-projects": "Projects",
        "nav-faq": "FAQ",
        "nav-contact": "Contact",
        "hero-badge": "Available for new engagements · Parakou & Remote",
        "hero-greeting": "Mouhamadou Halissou SEIDOU IBRAHIM",
        "hero-headline": "Strategic writing, AI automation & project delivery.",
        "hero-description": "For the past 7 years, I have helped executives, SMEs, and NGOs produce clear editorial content, complete statutory compliance dossiers, and automate recurring operations with n8n, Make, and AI.",
        "stat-projects": "Deliverables shipped",
        "stat-experience": "Years of practice",
        "stat-clients": "Organizations supported",
        "btn-start": "Start a brief",
        "btn-services": "View case studies",
        "hero-follow": "Direct channels",
        "about-subtitle": "Background & Approach",
        "about-title": "About",
        "about-descr-sub": "Seven years working across strategic writing, regulatory documentation, and operational automation.",
        "about-exp-label": "Years of experience",
        "about-role-title": "Professional Writer · AI & Project Management Consultant",
        "about-p1": "Based in Parakou and collaborating remotely for 7 years, I have supported over 60 executives, SMEs, and NGOs across 369+ deliverables: in-depth articles, executive ghostwriting, institutional dossiers, and NGO statutory compliance (Benin Law 2025-19).",
        "about-p2": "My method stays grounded: clear writing that serves concrete business goals, paired with connected tools (n8n, Make, Notion, WhatsApp) that cut repetitive manual work. Every deliverable is reviewed, structured, and ready for production.",
        "highlight-writing-title": "Writing & Ghostwriting",
        "highlight-writing-desc": "SEO articles, white papers, executive commentary, and institutional copy.",
        "highlight-ia-title": "Automation & AI",
        "highlight-ia-desc": "n8n/Make workflows and AI assistants wired into your daily stack.",
        "highlight-mgmt-title": "Compliance & Delivery",
        "highlight-mgmt-desc": "NGO bylaws (Law 2025-19), Notion workspaces, and milestone tracking.",
        "highlight-acc-title": "Direct Collaboration",
        "highlight-acc-desc": "Clear communication on WhatsApp or Meet and dependable delivery timelines.",
        "btn-chat": "Message on WhatsApp",
        "btn-cv": "Download CV (PDF)",
        "skills-subtitle": "Capabilities",
        "skills-title": "Skills",
        "skills-descr": "Editorial, technical, and organizational capabilities applied according to each engagement's scope.",
        "cat-all": "All",
        "cat-writing": "Writing",
        "cat-technical": "Technical",
        "cat-nocode": "No-Code & Automation",
        "cat-management": "Management",
        "cat-soft": "Core Skills",
        "cat-compliance": "NGO Compliance",
        "cat-proj-writing": "Writing & Content",
        "cat-automation": "n8n Automation",
        "cat-webdev": "Web Development",
        "services-subtitle": "Services",
        "services-title": "Areas of Practice",
        "services-descr": "Well-scoped services tailored to the real constraints of executives, SMEs, NGOs, and project teams.",
        "services-cta-title": "Have a specific writing, compliance, or automation project?",
        "services-cta-desc": "Share your context to receive a clear, scoped proposal with no obligation.",
        "services-cta-btn": "Request a conversation",
        "projects-subtitle": "Case Studies",
        "projects-title": "Selected Work",
        "projects-descr": "Recent engagements across NGO legal compliance, strategic writing, n8n automation, and web development.",
        "faq-subtitle": "Practical Details",
        "faq-title": "Frequently Asked Questions",
        "faq-descr": "Turnaround times, how AI is used, No-Code workflows, and remote collaboration.",
        "contact-subtitle": "Get in Touch",
        "contact-title": "Start a Collaboration",
        "contact-descr": "Outline your project in the short brief below or book a 15-minute intro call.",
        "contact-info-title": "Direct Contact",
        "contact-info-desc": "Replies within 24 business hours. Send a structured brief here, schedule a short call, or reach out directly on WhatsApp.",
        "contact-label-email": "Email",
        "contact-label-phone": "Phone",
        "contact-label-loc": "Location",
        "contact-label-avail": "Availability",
        "contact-avail-desc": "7d/7 — Reply within 24h",
        "contact-loc-desc": "Parakou, Benin",
        "btn-book": "Schedule a 15-min call",
        "contact-form-name": "Your name *",
        "contact-form-email": "Your email *",
        "contact-form-phone": "Phone (optional)",
        "contact-form-subject": "Project subject *",
        "contact-form-msg": "Your message or brief *",
        "btn-next": "Next",
        "btn-prev": "Previous",
        "btn-submit-email": "Send Brief",
        "btn-submit-wa": "Send via WhatsApp",
        "form-select-service": "Select a service *",
        "form-srv-writing": "Professional Writing & SEO",
        "form-srv-ghost": "Ghostwriting",
        "form-srv-compliance": "Legal & NGO Compliance (Law 2025-19)",
        "form-srv-auto": "Automation (n8n, Make)",
        "form-srv-nocode": "No-Code Applications",
        "form-srv-dev": "AI Web Development & AI Integration",
        "form-srv-mgmt": "Project Management / Consulting",
        "form-srv-other": "Other project",
        "footer-role-desc": "Strategic writing, AI automation, and project delivery",
        "footer-tagline": "Clear writing and dependable systems, delivered with rigor.",
        "footer-nav-title": "Navigation",
        "footer-services-title": "Practice Areas",
        "footer-contact-title": "Contact",
        "footer-rights": "All rights reserved.",
        "booking-modal-title": "Schedule a 15-minute call",
        "book-form-phone": "Phone *",
        "book-label-date": "Call Date *",
        "book-select-time": "Preferred Time *",
        "book-submit-btn": "Confirm on WhatsApp",
        "bot-online": "Instant reply",
        "bot-welcome": "Hello. Ask me a quick question about indicative rates, availability, writing, NGO compliance (Law 2025-19), or n8n/Make automation.",
        "sug-rates": "Indicative rates",
        "sug-avail": "Availability",
        "sug-ai": "How AI is used",
        "sug-n8n": "n8n automation",
        "chatbot-input-placeholder": "Ask a question..."
    }
};

// État applicatif
let isLoaded = false;
let currentLang = 'fr';
let activeSkillCategory = 'all';
let activeProjectCategory = 'all';
let typingTimeoutId = null;
let revealObserver = null;
let lastFocusedElement = null;

const elements = {
    navbar: document.getElementById('navbar'),
    navToggle: document.getElementById('nav-toggle'),
    navMenu: document.getElementById('nav-menu'),
    typingText: document.getElementById('typing-text'),
    skillsGrid: document.getElementById('skills-grid'),
    servicesGrid: document.getElementById('services-grid'),
    projectsGrid: document.getElementById('projects-grid'),
    faqContainer: document.getElementById('faq-container'),
    contactForm: document.getElementById('contact-form'),
    langToggle: document.getElementById('lang-toggle')
};

// Initialisation immédiate au DOMContentLoaded (sans écran de chargement bloquant)
document.addEventListener('DOMContentLoaded', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    }

    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    initializeApp();
});

function initializeApp() {
    setupThemeToggle();
    setupLanguage();
    setupEventListeners();
    generateSkills();
    generateServices();
    generateProjects();
    generateFaq();
    setupTypingAnimation();
    animateCounters();
    setupRevealObserver();
    setupActiveSectionObserver();
    setupBookingModal();
    setupProjectModal();
    checkDeepLinkProject();
    setupIntakeFormWizard();
    setupChatbotAssistant();
    renderBottomNav();
    setupScrollEffects();

    isLoaded = true;
}

/* ==========================================================================
   Accessibilité : Focus Trap générique pour modales
   ========================================================================== */
function getFocusableElements(container) {
    return Array.from(
        container.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
    ).filter((el) => el.offsetParent !== null);
}

function handleModalFocusTrap(e, modalEl) {
    if (e.key !== 'Tab' || !modalEl.classList.contains('active')) return;
    const focusables = getFocusableElements(modalEl);
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
}

/* ==========================================================================
   Navigation mobile basse (Bottom Nav)
   ========================================================================== */
function renderBottomNav() {
    if (document.querySelector('.bottom-nav')) return;

    const navContainer = document.createElement('nav');
    navContainer.className = 'bottom-nav';
    navContainer.setAttribute('aria-label', 'Navigation mobile rapide');

    const items = [
        { id: 'home', translateKey: 'nav-home', icon: 'fa-solid fa-house' },
        { id: 'about', translateKey: 'nav-about', icon: 'fa-solid fa-user' },
        { id: 'services', translateKey: 'nav-services', icon: 'fa-solid fa-briefcase' },
        { id: 'projects', translateKey: 'nav-projects', icon: 'fa-solid fa-layer-group' },
        { id: 'contact', translateKey: 'nav-contact', icon: 'fa-solid fa-envelope' }
    ];

    navContainer.innerHTML = items
        .map((item, idx) => {
            const label = (staticTranslations[currentLang] && staticTranslations[currentLang][item.translateKey]) || '';
            return `
                <a href="#${item.id}" class="bottom-nav__item nav-link${idx === 0 ? ' active' : ''}" data-section="${item.id}" data-translate="${item.translateKey}">
                    <span class="bottom-nav__icon-wrapper" aria-hidden="true"><i class="${item.icon}"></i></span>
                    <span class="bottom-nav__label">${label}</span>
                </a>
            `;
        })
        .join('');

    document.body.appendChild(navContainer);

    navContainer.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (!link) return;
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            setActiveNavLinks(link.getAttribute('data-section'));
            closeMobileMenu();
        }
    });
}

function setActiveNavLinks(sectionId) {
    if (!sectionId) return;
    document.querySelectorAll('.nav-link').forEach((link) => {
        const matches = link.getAttribute('href') === `#${sectionId}`;
        link.classList.toggle('active', matches);
    });
}

/* ==========================================================================
   i18n FR / EN & Synchronisation SEO / JSON-LD
   ========================================================================== */
function setupLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang');
    if (lang !== 'fr' && lang !== 'en') {
        lang = localStorage.getItem('portfolio-lang');
    }
    if (lang !== 'fr' && lang !== 'en') {
        const browserLang = (navigator.language || navigator.userLanguage || 'fr').toLowerCase();
        lang = browserLang.startsWith('en') ? 'en' : 'fr';
    }
    setLanguage(lang, false);

    window.addEventListener('popstate', () => {
        const params = new URLSearchParams(window.location.search);
        const navLang = params.get('lang') === 'en' ? 'en' : 'fr';
        if (navLang !== currentLang) {
            setLanguage(navLang, false);
        }
    });
}

function setLanguage(lang, updateHistory = true) {
    currentLang = lang === 'en' ? 'en' : 'fr';
    localStorage.setItem('portfolio-lang', currentLang);
    document.documentElement.setAttribute('lang', currentLang);

    // Mise à jour propre de l'URL (?lang=fr supprimé pour respecter la canonique /)
    try {
        const url = new URL(window.location.href);
        if (currentLang === 'fr') {
            url.searchParams.delete('lang');
        } else {
            url.searchParams.set('lang', 'en');
        }
        const query = url.searchParams.toString();
        const newPath = url.pathname + (query ? `?${query}` : '') + url.hash;
        if (updateHistory) {
            window.history.pushState({ lang: currentLang }, '', newPath);
        } else {
            window.history.replaceState({ lang: currentLang }, '', newPath);
        }
    } catch (_) {
        // Fallback silencieux sur file://
    }

    if (elements.langToggle) {
        const span = elements.langToggle.querySelector('span');
        if (span) span.textContent = currentLang === 'fr' ? 'EN' : 'FR';
    }

    const dict = staticTranslations[currentLang];
    if (dict) {
        document.querySelectorAll('[data-translate]').forEach((el) => {
            const key = el.getAttribute('data-translate');
            const translation = dict[key];
            if (!translation) return;

            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else if (el.classList.contains('bottom-nav__item')) {
                const labelEl = el.querySelector('.bottom-nav__label');
                if (labelEl) labelEl.textContent = translation;
            } else {
                el.textContent = translation;
            }
        });

        updateSeoMetadata(currentLang, dict);
    }

    if (isLoaded) {
        generateSkills();
        generateServices();
        generateProjects();
        generateFaq();
        setupTypingAnimation();
        observeRevealItems();
    }
}

function updateSeoMetadata(lang, dict) {
    const canonicalUrl = lang === 'fr' ? 'https://www.halissoumsi.com/' : 'https://www.halissoumsi.com/?lang=en';

    if (dict['seo-title']) document.title = dict['seo-title'];

    const setMeta = (selector, value) => {
        const el = document.querySelector(selector);
        if (el && value) el.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', dict['seo-descr']);
    setMeta('meta[property="og:title"]', dict['og-title']);
    setMeta('meta[property="og:description"]', dict['og-descr']);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:locale"]', lang === 'fr' ? 'fr_FR' : 'en_US');
    setMeta('meta[property="og:locale:alternate"]', lang === 'fr' ? 'en_US' : 'fr_FR');
    setMeta('meta[name="twitter:title"]', dict['og-title']);
    setMeta('meta[name="twitter:description"]', dict['og-descr']);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', canonicalUrl);

    // Mise à jour unifiée du @graph JSON-LD (incluant FAQPage aligné sur le contenu affiché)
    const schemaScript = document.getElementById('schema-ld');
    if (schemaScript) {
        const isFr = lang === 'fr';
        const schemaData = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Person",
                    "@id": "https://www.halissoumsi.com/#person",
                    "name": portfolioData.profile.name,
                    "url": canonicalUrl,
                    "image": "https://www.halissoumsi.com/images/profile-hero.webp",
                    "sameAs": [
                        "https://github.com/halissoumsi",
                        "https://x.com/HalissouMSI",
                        "https://instagram.com/halissoumsi",
                        `https://wa.me/${WHATSAPP_NUMBER}`
                    ],
                    "jobTitle": isFr
                        ? "Rédacteur professionnel, consultant IA et coordinateur de projets"
                        : "Professional writer, AI consultant, and project coordinator",
                    "knowsAbout": isFr
                        ? ["Rédaction web", "Ghostwriting", "SEO", "Intelligence Artificielle", "Automatisation n8n et Make", "Conformité associative Loi 2025-19", "Gestion de projet"]
                        : ["Web Writing", "Ghostwriting", "SEO", "Artificial Intelligence", "n8n and Make Automation", "NGO Legal Compliance Law 2025-19", "Project Management"],
                    "address": { "@type": "PostalAddress", "addressLocality": "Parakou", "addressCountry": "BJ" },
                    "email": `mailto:${CONTACT_EMAIL}`,
                    "telephone": "+229-01-64-55-76-73"
                },
                {
                    "@type": "WebSite",
                    "@id": "https://www.halissoumsi.com/#website",
                    "url": canonicalUrl,
                    "name": "Mouhamadou Halissou SEIDOU IBRAHIM — Portfolio",
                    "publisher": { "@id": "https://www.halissoumsi.com/#person" },
                    "inLanguage": isFr ? "fr-FR" : "en-US"
                },
                {
                    "@type": "WebPage",
                    "@id": "https://www.halissoumsi.com/#webpage",
                    "url": canonicalUrl,
                    "name": dict['seo-title'],
                    "isPartOf": { "@id": "https://www.halissoumsi.com/#website" },
                    "about": { "@id": "https://www.halissoumsi.com/#person" },
                    "description": dict['seo-descr'],
                    "inLanguage": isFr ? "fr-FR" : "en-US"
                },
                {
                    "@type": "ProfessionalService",
                    "@id": "https://www.halissoumsi.com/#service",
                    "name": isFr
                        ? "Mouhamadou Halissou SEIDOU IBRAHIM — Services Freelance"
                        : "Mouhamadou Halissou SEIDOU IBRAHIM — Freelance Services",
                    "url": canonicalUrl,
                    "image": "https://www.halissoumsi.com/images/profile-hero.webp",
                    "telephone": "+229-01-64-55-76-73",
                    "priceRange": "$$",
                    "provider": { "@id": "https://www.halissoumsi.com/#person" },
                    "address": { "@type": "PostalAddress", "addressLocality": "Parakou", "addressCountry": "BJ" },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": isFr ? "Catalogue des prestations freelance" : "Freelance Services Catalog",
                        "itemListElement": portfolioData.services.slice(0, 5).map((s) => ({
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": s.title[lang],
                                "description": s.description[lang]
                            }
                        }))
                    }
                },
                {
                    "@type": "FAQPage",
                    "@id": "https://www.halissoumsi.com/#faq",
                    "mainEntity": portfolioData.faq.map((item) => ({
                        "@type": "Question",
                        "name": item.question[lang],
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": item.answer[lang]
                        }
                    }))
                }
            ]
        };
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
    }
}

/* ==========================================================================
   Navigation, Filtres & Scroll (sans layout thrashing)
   ========================================================================== */
function closeMobileMenu() {
    if (elements.navMenu) elements.navMenu.classList.remove('active');
    if (elements.navToggle) elements.navToggle.setAttribute('aria-expanded', 'false');
}

function setupEventListeners() {
    if (elements.navToggle) {
        elements.navToggle.addEventListener('click', () => {
            if (!elements.navMenu) return;
            const isOpen = elements.navMenu.classList.toggle('active');
            elements.navToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    if (elements.langToggle) {
        elements.langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'fr' ? 'en' : 'fr', true);
        });
    }

    if (elements.navMenu) {
        elements.navMenu.addEventListener('click', (e) => {
            const link = e.target.closest('.nav-link');
            if (!link) return;
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
                setActiveNavLinks(link.getAttribute('data-section'));
                closeMobileMenu();
            }
        });
    }

    // Délégation filtres compétences
    const skillsCatContainer = document.querySelector('.skills-categories');
    if (skillsCatContainer) {
        skillsCatContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.category-btn');
            if (!btn) return;
            activeSkillCategory = btn.dataset.category || 'all';
            skillsCatContainer.querySelectorAll('.category-btn').forEach((b) => {
                const isActive = b === btn;
                b.classList.toggle('active', isActive);
                b.setAttribute('aria-pressed', String(isActive));
            });
            applySkillFilter();
        });
    }

    // Délégation filtres projets
    const projectsCatContainer = document.querySelector('.projects-categories');
    if (projectsCatContainer) {
        projectsCatContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.project-cat-btn');
            if (!btn) return;
            activeProjectCategory = btn.dataset.category || 'all';
            projectsCatContainer.querySelectorAll('.project-cat-btn').forEach((b) => {
                const isActive = b === btn;
                b.classList.toggle('active', isActive);
                b.setAttribute('aria-pressed', String(isActive));
            });
            applyProjectFilter();
        });
    }

    // Délégation ouverture étude de cas
    if (elements.projectsGrid) {
        elements.projectsGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.open-project-btn');
            if (!btn) return;
            lastFocusedElement = btn;
            openCaseStudyModal(btn.getAttribute('data-id'));
        });
    }

    // Délégation accordéon FAQ (un seul listener)
    if (elements.faqContainer) {
        elements.faqContainer.addEventListener('click', (e) => {
            const questionBtn = e.target.closest('.faq-question');
            if (!questionBtn) return;
            const faqItem = questionBtn.parentElement;
            const wasOpen = faqItem.classList.contains('active');

            elements.faqContainer.querySelectorAll('.faq-item').forEach((item) => {
                item.classList.remove('active');
                const q = item.querySelector('.faq-question');
                if (q) q.setAttribute('aria-expanded', 'false');
                const icon = item.querySelector('.faq-question i');
                if (icon) icon.className = 'fas fa-plus';
            });

            if (!wasOpen) {
                faqItem.classList.add('active');
                questionBtn.setAttribute('aria-expanded', 'true');
                const icon = questionBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-minus';
            }
        });
    }

    // Fermeture menu mobile avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.navMenu && elements.navMenu.classList.contains('active')) {
            closeMobileMenu();
            if (elements.navToggle) elements.navToggle.focus();
        }
    });
}

function setupScrollEffects() {
    const bar = document.getElementById('scroll-bar');
    let ticking = false;

    const update = () => {
        ticking = false;
        const scrollTop = window.scrollY;
        if (elements.navbar) {
            elements.navbar.classList.toggle('scrolled', scrollTop > 40);
        }
        if (bar) {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percent = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
            bar.style.width = `${percent}%`;
        }
    };

    window.addEventListener(
        'scroll',
        () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        },
        { passive: true }
    );
    update();
}

function setupActiveSectionObserver() {
    const sections = document.querySelectorAll('main > section[id]');
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveNavLinks(entry.target.id);
                }
            });
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
}

function setupRevealObserver() {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

    revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observeRevealItems();
}

function observeRevealItems() {
    const targets = document.querySelectorAll('.service-card, .project-card, .skill-card, .highlight-item, .faq-item');
    if (prefersReducedMotion || !revealObserver) {
        targets.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    targets.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
            el.classList.add('reveal-item');
            revealObserver.observe(el);
        }
    });
}

/* ==========================================================================
   Typing & Compteurs (respect strict de prefers-reduced-motion)
   ========================================================================== */
function setupTypingAnimation() {
    if (!elements.typingText) return;
    if (typingTimeoutId) clearTimeout(typingTimeoutId);

    const roles = portfolioData.profile.roles[currentLang];
    if (prefersReducedMotion) {
        elements.typingText.textContent = roles[0];
        return;
    }

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const tick = () => {
        const currentRole = roles[roleIdx];
        charIdx += isDeleting ? -1 : 1;
        elements.typingText.textContent = currentRole.substring(0, charIdx);

        let delay = isDeleting ? 45 : 85;
        if (!isDeleting && charIdx === currentRole.length) {
            delay = 2200;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            delay = 450;
        }
        typingTimeoutId = setTimeout(tick, delay);
    };

    tick();
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    if (!counters.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        counters.forEach((c) => {
            c.textContent = `${c.getAttribute('data-count')}+`;
        });
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'), 10);
                if (Number.isNaN(target)) return;

                const startTime = performance.now();
                const duration = 1100;
                const step = (now) => {
                    const progress = Math.min(1, (now - startTime) / duration);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const val = Math.round(eased * target);
                    el.textContent = progress < 1 ? String(val) : `${target}+`;
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
                observer.unobserve(el);
            });
        },
        { threshold: 0.3 }
    );

    counters.forEach((c) => observer.observe(c));
}

/* ==========================================================================
   Rendu des sections dynamiques (Compétences, Services, Projets, FAQ)
   ========================================================================== */
function generateSkills() {
    if (!elements.skillsGrid) return;
    elements.skillsGrid.innerHTML = '';

    const frag = document.createDocumentFragment();
    portfolioData.skills.forEach((skill) => {
        const card = document.createElement('div');
        card.className = `skill-card ${skill.category}`;
        card.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name[currentLang]}</span>
            </div>
            <div class="skill-bar" role="progressbar" aria-label="${skill.name[currentLang]}" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
        `;
        frag.appendChild(card);
    });

    elements.skillsGrid.appendChild(frag);
    applySkillFilter();
}

function applySkillFilter() {
    if (!elements.skillsGrid) return;
    elements.skillsGrid.querySelectorAll('.skill-card').forEach((card) => {
        const show = activeSkillCategory === 'all' || card.classList.contains(activeSkillCategory);
        card.classList.toggle('is-hidden', !show);
    });
}

function generateServices() {
    if (!elements.servicesGrid) return;
    elements.servicesGrid.innerHTML = '';

    const frag = document.createDocumentFragment();
    portfolioData.services.forEach((service) => {
        const card = document.createElement('article');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-card-top">
                <div class="service-icon-wrap" aria-hidden="true">
                    <i class="${service.icon}"></i>
                </div>
            </div>
            <h3 class="service-title">${service.title[currentLang]}</h3>
            <p class="service-description">${service.description[currentLang]}</p>
        `;
        frag.appendChild(card);
    });
    elements.servicesGrid.appendChild(frag);
}

function generateProjects() {
    if (!elements.projectsGrid) return;
    elements.projectsGrid.innerHTML = '';

    const btnText = currentLang === 'fr' ? "Lire l'étude de cas" : 'Read case study';
    const frag = document.createDocumentFragment();

    portfolioData.projects.forEach((project) => {
        const card = document.createElement('article');
        card.className = `project-card ${project.category}`;
        card.setAttribute('data-id', project.id);
        card.innerHTML = `
            <div>
                <div class="project-header">
                    <div class="project-icon-badge" aria-hidden="true">
                        <i class="${project.icon}"></i>
                    </div>
                    <span class="project-metric-badge">${project.metric[currentLang]}</span>
                </div>
                <h3 class="project-title">${project.title[currentLang]}</h3>
                <p class="project-summary">${project.summary[currentLang]}</p>
                <div class="project-tools">
                    ${project.tools.map((t) => `<span class="project-tool-tag">${t}</span>`).join('')}
                </div>
            </div>
            <div class="project-footer">
                <button type="button" class="btn btn-outline btn-sm open-project-btn" data-id="${project.id}">
                    <span>${btnText}</span>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>
                </button>
            </div>
        `;
        frag.appendChild(card);
    });

    elements.projectsGrid.appendChild(frag);
    applyProjectFilter();
}

function applyProjectFilter() {
    if (!elements.projectsGrid) return;
    elements.projectsGrid.querySelectorAll('.project-card').forEach((card) => {
        const show = activeProjectCategory === 'all' || card.classList.contains(activeProjectCategory);
        card.classList.toggle('is-hidden', !show);
    });
}

function generateFaq() {
    if (!elements.faqContainer) return;
    elements.faqContainer.innerHTML = '';

    const frag = document.createDocumentFragment();
    portfolioData.faq.forEach((item) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <button type="button" class="faq-question" aria-expanded="false">
                <span>${item.question[currentLang]}</span>
                <i class="fas fa-plus" aria-hidden="true"></i>
            </button>
            <div class="faq-answer">
                <p>${item.answer[currentLang]}</p>
            </div>
        `;
        frag.appendChild(faqItem);
    });
    elements.faqContainer.appendChild(frag);
}

/* ==========================================================================
   Modale Étude de Cas + Deep-linking (?project=...)
   ========================================================================== */
let closeProjectModalFn = null;

function setupProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('project-modal-close');
    const overlay = document.getElementById('project-modal-overlay');
    if (!modal) return;

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        try {
            const url = new URL(window.location.href);
            if (url.searchParams.has('project')) {
                url.searchParams.delete('project');
                const query = url.searchParams.toString();
                window.history.replaceState({}, '', url.pathname + (query ? `?${query}` : '') + (url.hash || ''));
            }
        } catch (_) {}

        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
    };

    closeProjectModalFn = closeModal;
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeModal();
        } else {
            handleModalFocusTrap(e, modal);
        }
    });
}

function openCaseStudyModal(projectId, updateUrl = true) {
    const modal = document.getElementById('project-modal');
    const badge = document.getElementById('project-modal-badge');
    const titleEl = document.getElementById('project-modal-title');
    const bodyEl = document.getElementById('project-modal-body');
    if (!modal || !bodyEl) return;

    const proj = portfolioData.projects.find((p) => p.id === projectId);
    if (!proj) return;

    const isFr = currentLang === 'fr';
    const categoryNames = {
        compliance: { fr: 'Conformité associative', en: 'NGO Legal Compliance' },
        writing: { fr: 'Rédaction & Contenu', en: 'Writing & Content' },
        automation: { fr: 'Automatisation n8n', en: 'n8n Automation' },
        webdev: { fr: 'Développement web', en: 'Web Development' }
    };

    if (badge) badge.textContent = (categoryNames[proj.category] && categoryNames[proj.category][currentLang]) || proj.category;
    if (titleEl) titleEl.textContent = proj.title[currentLang];

    bodyEl.innerHTML = `
        <div class="case-study-metric">
            <span class="metric-value">${proj.metric[currentLang]}</span>
        </div>

        <div class="case-study-section">
            <h4><i class="fas fa-flag" aria-hidden="true"></i> ${isFr ? 'Contexte & Enjeu' : 'Context & Challenge'}</h4>
            <p>${proj.challenge[currentLang]}</p>
        </div>

        <div class="case-study-section">
            <h4><i class="fas fa-compass" aria-hidden="true"></i> ${isFr ? 'Approche mise en œuvre' : 'Approach'}</h4>
            <p>${proj.solution[currentLang]}</p>
        </div>

        <div class="case-study-section">
            <h4><i class="fas fa-chart-line" aria-hidden="true"></i> ${isFr ? 'Résultats clés' : 'Key Outcomes'}</h4>
            <ul class="case-study-results">
                ${proj.results[currentLang].map((r) => `<li><i class="fas fa-check" aria-hidden="true"></i><span>${r}</span></li>`).join('')}
            </ul>
        </div>

        <div class="case-study-section">
            <h4><i class="fas fa-wrench" aria-hidden="true"></i> ${isFr ? 'Outils & Méthodes' : 'Tools & Methods'}</h4>
            <div class="project-tools">
                ${proj.tools.map((t) => `<span class="project-tool-tag">${t}</span>`).join('')}
            </div>
        </div>

        <div class="case-study-cta">
            <a href="#contact" class="btn btn-primary btn-full close-modal-navigate">
                <i class="fas fa-paper-plane" aria-hidden="true"></i>
                <span>${isFr ? 'Discuter d\'un projet similaire' : 'Discuss a similar project'}</span>
            </a>
            <button type="button" class="btn btn-outline btn-full copy-project-link-btn">
                <i class="fas fa-link" aria-hidden="true"></i>
                <span>${isFr ? 'Copier le lien direct' : 'Copy direct link'}</span>
            </button>
        </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('project-modal-close');
    if (closeBtn) closeBtn.focus();

    if (updateUrl) {
        try {
            const url = new URL(window.location.href);
            url.searchParams.set('project', proj.id);
            window.history.pushState({ project: proj.id }, '', `${url.pathname}?${url.searchParams.toString()}#projects`);
        } catch (_) {}
    }

    const ctaLink = bodyEl.querySelector('.close-modal-navigate');
    if (ctaLink) {
        ctaLink.addEventListener('click', (e) => {
            e.preventDefault();
            lastFocusedElement = null;
            if (closeProjectModalFn) closeProjectModalFn();
            const contactSec = document.getElementById('contact');
            if (contactSec) contactSec.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        });
    }

    const copyBtn = bodyEl.querySelector('.copy-project-link-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const langSuffix = currentLang === 'en' ? '&lang=en' : '';
            const shareUrl = `${window.location.origin}${window.location.pathname}?project=${encodeURIComponent(proj.id)}${langSuffix}#projects`;
            const btnSpan = copyBtn.querySelector('span');
            const originalText = btnSpan ? btnSpan.textContent : '';

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(shareUrl).then(() => {
                    if (btnSpan) {
                        btnSpan.textContent = isFr ? 'Lien copié' : 'Link copied';
                        setTimeout(() => { btnSpan.textContent = originalText; }, 2200);
                    }
                }).catch(() => {});
            }
        });
    }
}

function checkDeepLinkProject() {
    const projId = new URLSearchParams(window.location.search).get('project');
    if (projId && portfolioData.projects.some((p) => p.id === projId)) {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) projectsSection.scrollIntoView({ behavior: 'auto' });
        openCaseStudyModal(projId, false);
    }
}

/* ==========================================================================
   Thème Sombre / Clair
   ========================================================================== */
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;
    if (!themeToggle || !themeIcon) return;

    const applyTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        const themeMeta = document.querySelector('meta[name="theme-color"]');
        if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#0b0e14' : '#f7f5f0');
    };

    applyTheme(localStorage.getItem('portfolio-theme') || 'dark');

    themeToggle.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('portfolio-theme', next);
        applyTheme(next);
    });
}

/* ==========================================================================
   Helper Ouverture WhatsApp (encodage complet + zéro double redirection)
   ========================================================================== */
function buildWhatsAppUrl(plainText) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plainText)}`;
}

function openExternalSafely(url) {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    a.remove();
}

/* ==========================================================================
   Modale Réservation 15 min
   ========================================================================== */
function setupBookingModal() {
    const openBtn = document.getElementById('open-booking-btn');
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.getElementById('booking-modal-close');
    const overlay = document.getElementById('booking-modal-overlay');
    const bookingForm = document.getElementById('booking-form');
    const dateInput = document.getElementById('book-date');
    const bookingMessage = document.getElementById('booking-message');
    if (!modal) return;

    if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];
    }

    const openModal = () => {
        lastFocusedElement = document.activeElement;
        if (bookingMessage) {
            bookingMessage.className = 'form-message';
            bookingMessage.textContent = '';
        }
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const firstInput = document.getElementById('book-name');
        if (firstInput) firstInput.focus();
    };

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
    };

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeModal();
        } else {
            handleModalFocusTrap(e, modal);
        }
    });

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fields = [
                document.getElementById('book-name'),
                document.getElementById('book-phone'),
                document.getElementById('book-date'),
                document.getElementById('book-time')
            ];

            for (const field of fields) {
                if (field && !field.checkValidity()) {
                    field.reportValidity();
                    field.focus();
                    return;
                }
            }

            const name = fields[0].value.trim();
            const phone = fields[1].value.trim();
            const dateVal = fields[2].value;
            const timeVal = fields[3].value;

            const parts = dateVal.split('-');
            const formattedDate = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : dateVal;

            const isFr = currentLang === 'fr';
            const plainText = isFr
                ? `*Demande d'appel (15 min)*\n\n*Nom :* ${name}\n*Téléphone :* ${phone}\n*Date souhaitée :* ${formattedDate}\n*Créneau :* ${timeVal}\n\nBonjour, je souhaite confirmer ce créneau d'échange.`
                : `*15-Min Call Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Preferred date:* ${formattedDate}\n*Time slot:* ${timeVal}\n\nHello, I would like to confirm this call slot.`;

            const waURL = buildWhatsAppUrl(plainText);
            openExternalSafely(waURL);

            if (bookingMessage) {
                bookingMessage.className = 'form-message success';
                bookingMessage.innerHTML = isFr
                    ? `Votre demande est prête sur WhatsApp. <a href="${waURL}" target="_blank" rel="noopener noreferrer">Ouvrir WhatsApp si l'onglet ne s'est pas lancé</a>.`
                    : `Your request is ready on WhatsApp. <a href="${waURL}" target="_blank" rel="noopener noreferrer">Open WhatsApp if the tab did not launch</a>.`;
            }

            bookingForm.reset();
        });
    }
}

/* ==========================================================================
   Formulaire de contact multi-étapes (Netlify Forms + fallback mailto + WA)
   ========================================================================== */
function setupIntakeFormWizard() {
    const form = elements.contactForm;
    if (!form) return;

    const panels = form.querySelectorAll('.form-step-panel');
    const steps = document.querySelectorAll('.progress-step');
    const fill = document.getElementById('progress-bar-fill');
    const formMessage = document.getElementById('form-message');
    const emailSubmitBtn = document.getElementById('btn-submit-email');
    const waBtn = document.getElementById('btn-submit-whatsapp');

    let currentStep = 1;

    const validatePanel = (stepNum) => {
        const panel = form.querySelector(`.form-step-panel[data-step="${stepNum}"]`);
        if (!panel) return true;
        const requiredFields = panel.querySelectorAll('input[required], select[required], textarea[required]');
        for (const field of requiredFields) {
            if (!field.checkValidity()) {
                field.reportValidity();
                field.focus();
                return false;
            }
        }
        return true;
    };

    const goToStep = (step) => {
        if (step < 1 || step > panels.length) return;
        panels.forEach((p) => p.classList.remove('active'));
        const targetPanel = form.querySelector(`.form-step-panel[data-step="${step}"]`);
        if (targetPanel) targetPanel.classList.add('active');

        steps.forEach((s) => {
            const sNum = parseInt(s.getAttribute('data-step'), 10);
            s.classList.toggle('active', sNum === step);
            s.classList.toggle('complete', sNum < step);
            if (sNum === step) {
                s.setAttribute('aria-current', 'step');
            } else {
                s.removeAttribute('aria-current');
            }
        });

        if (fill) {
            const percent = ((step - 1) / (panels.length - 1)) * 76;
            fill.style.width = `${percent}%`;
        }
        currentStep = step;
    };

    form.querySelectorAll('.next-step').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (validatePanel(currentStep)) {
                goToStep(currentStep + 1);
            }
        });
    });

    form.querySelectorAll('.prev-step').forEach((btn) => {
        btn.addEventListener('click', () => {
            goToStep(currentStep - 1);
        });
    });

    // Touche Entrée sur les étapes 1 et 2 -> avance à l'étape suivante sans bloquer
    form.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && currentStep < panels.length) {
            e.preventDefault();
            if (validatePanel(currentStep)) {
                goToStep(currentStep + 1);
            }
        }
    });

    const getFormPayload = () => ({
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: (document.getElementById('phone') && document.getElementById('phone').value.trim()) || (currentLang === 'fr' ? 'Non fourni' : 'Not provided'),
        service: document.getElementById('project-service').value,
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
    });

    const buildMailtoUrl = (data) => {
        const subject = encodeURIComponent(`[Brief Portfolio] ${data.subject} — ${data.name}`);
        const body = encodeURIComponent(
            `Bonjour Mouhamadou Halissou,\n\n` +
            `Nom : ${data.name}\n` +
            `Email : ${data.email}\n` +
            `Téléphone : ${data.phone}\n` +
            `Service : ${data.service}\n` +
            `Sujet : ${data.subject}\n\n` +
            `Message :\n${data.message}\n`
        );
        return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    // Soumission principale : Netlify Forms (AJAX) avec fallback mailto fiable
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (currentStep < panels.length) {
            if (validatePanel(currentStep)) goToStep(currentStep + 1);
            return;
        }
        if (!validatePanel(1)) { goToStep(1); return; }
        if (!validatePanel(2)) { goToStep(2); return; }
        if (!validatePanel(3)) return;

        const data = getFormPayload();
        const isFr = currentLang === 'fr';
        const mailtoURL = buildMailtoUrl(data);

        if (emailSubmitBtn) emailSubmitBtn.disabled = true;

        try {
            const encoded = new URLSearchParams({
                'form-name': 'contact',
                name: data.name,
                email: data.email,
                phone: data.phone,
                service: data.service,
                subject: data.subject,
                message: data.message
            }).toString();

            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encoded
            });

            if (response.ok) {
                if (formMessage) {
                    formMessage.className = 'form-message success';
                    formMessage.textContent = isFr
                        ? 'Votre brief a bien été transmis. Je vous réponds sous 24 heures ouvrées.'
                        : 'Your brief has been sent. I will get back to you within 24 business hours.';
                }
                form.reset();
                goToStep(1);
            } else {
                throw new Error('Netlify form endpoint unavailable');
            }
        } catch (_) {
            // Fallback local / hors-ligne : préserve les données saisies et propose mailto direct
            if (formMessage) {
                formMessage.className = 'form-message error';
                formMessage.innerHTML = isFr
                    ? `Envoi direct indisponible pour le moment. <a href="${mailtoURL}">Ouvrir votre messagerie avec le brief pré-rempli</a> ou utilisez le bouton WhatsApp.`
                    : `Direct submission is currently unavailable. <a href="${mailtoURL}">Open your email client with the pre-filled brief</a> or use the WhatsApp button.`;
            }
        } finally {
            if (emailSubmitBtn) emailSubmitBtn.disabled = false;
        }
    });

    if (waBtn) {
        waBtn.addEventListener('click', () => {
            if (!validatePanel(1)) { goToStep(1); return; }
            if (!validatePanel(2)) { goToStep(2); return; }
            if (!validatePanel(3)) return;

            const data = getFormPayload();
            const isFr = currentLang === 'fr';
            const plainText = isFr
                ? `*Nouveau brief projet*\n\n*Nom :* ${data.name}\n*Email :* ${data.email}\n*Téléphone :* ${data.phone}\n*Service :* ${data.service}\n*Sujet :* ${data.subject}\n\n*Message :*\n${data.message}`
                : `*New Project Brief*\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Service:* ${data.service}\n*Subject:* ${data.subject}\n\n*Message:*\n${data.message}`;

            const waURL = buildWhatsAppUrl(plainText);
            openExternalSafely(waURL);

            if (formMessage) {
                formMessage.className = 'form-message success';
                formMessage.innerHTML = isFr
                    ? `Votre brief a été préparé pour WhatsApp. <a href="${waURL}" target="_blank" rel="noopener noreferrer">Ouvrir WhatsApp manuellement</a> si nécessaire.`
                    : `Your brief is ready for WhatsApp. <a href="${waURL}" target="_blank" rel="noopener noreferrer">Open WhatsApp manually</a> if needed.`;
            }
        });
    }
}

/* ==========================================================================
   Assistant Virtuel (Regex à frontières de mots, sans faux positifs)
   ========================================================================== */
function setupChatbotAssistant() {
    const trigger = document.getElementById('chatbot-trigger');
    const windowEl = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const inputForm = document.getElementById('chatbot-input-form');
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');
    const suggestionsContainer = document.getElementById('chatbot-suggestions');
    if (!trigger || !windowEl) return;

    const setChatOpen = (open) => {
        windowEl.classList.toggle('active', open);
        windowEl.setAttribute('aria-hidden', String(!open));
        trigger.setAttribute('aria-expanded', String(open));
        if (open) {
            const badge = trigger.querySelector('.chat-badge');
            if (badge) badge.classList.add('is-hidden');
            if (input) input.focus();
            scrollToBottom();
        }
    };

    trigger.addEventListener('click', () => {
        setChatOpen(!windowEl.classList.contains('active'));
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            setChatOpen(false);
            trigger.focus();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && windowEl.classList.contains('active')) {
            setChatOpen(false);
            trigger.focus();
        }
    });

    const botResponses = {
        fr: {
            rates: "Les tarifs dépendent du périmètre : en rédaction SEO à partir d'environ 0,06 €/mot, pour une automatisation n8n ou Make à partir de 150 € par scénario, et dès 400 € pour une application No-Code. Un devis précis est établi après un court brief.",
            avail: "Je suis disponible pour de nouvelles missions en rédaction, conformité associative ou automatisation. Réponse garantie sous 24 heures ouvrées via le formulaire ou WhatsApp.",
            ai: "J'intègre Claude, GPT-4 et Gemini de façon concrète : assistants documentaires, génération automatisée de PDF et structuration éditoriale — avec relecture et validation humaine systématiques.",
            n8n: "Avec n8n ou Make, je connecte vos outils existants (Notion, Gmail, CRM, WhatsApp) pour automatiser relances, notifications et rapports sans ressaisie manuelle.",
            compliance: "J'accompagne les associations, ONG et fondations au Bénin pour leur mise en conformité statutaire (Loi 2025-19) : révision des statuts, règlement intérieur et montage du dossier administratif.",
            contact: "Vous pouvez envoyer votre brief via le formulaire en 3 étapes sur cette page, planifier un appel de 15 min ou m'écrire par email à halissous1491@gmail.com.",
            hello: "Bonjour. Sur quel sujet souhaitez-vous en savoir plus : rédaction, conformité ONG, automatisation n8n, tarifs ou disponibilité ?",
            default: "Merci pour votre message. Pour un besoin précis ou un devis, utilisez le formulaire de brief ci-dessus ou contactez-moi directement sur WhatsApp."
        },
        en: {
            rates: "Indicative rates depend on scope: SEO writing around €0.06/word, n8n or Make workflows starting from €150 per scenario, and custom No-Code apps starting at €400. A tailored quote follows a short brief.",
            avail: "I am open to new freelance engagements in writing, NGO compliance, and automation, with replies within 24 business hours via the form or WhatsApp.",
            ai: "I integrate Claude, GPT-4, and Gemini into practical workflows—document assistants, automated PDF reports, and editorial prep—always paired with full human review.",
            n8n: "Using n8n or Make, I connect your existing tools (Notion, Gmail, CRM, WhatsApp) to automate follow-ups, alerts, and recurring reporting.",
            compliance: "I support associations, NGOs, and foundations in Benin with statutory alignment under Law 2025-19: bylaws revision, internal regulations, and administrative filing dossiers.",
            contact: "You can submit a short brief using the 3-step form on this page, book a 15-minute call, or email halissous1491@gmail.com directly.",
            hello: "Hello. What would you like to know about—writing, NGO compliance, n8n automation, indicative rates, or availability?",
            default: "Thanks for your question. For a tailored quote or specific project, use the contact brief form on this page or message me directly on WhatsApp."
        }
    };

    const normalize = (str) =>
        str
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');

    const matchIntent = (rawText) => {
        const text = normalize(rawText);
        if (/\b(tarifs?|prix|couts?|devis|budget|combien|rates?|pricing|price|cost|quote)\b/.test(text)) return 'rates';
        if (/\b(dispo|disponible|disponibilite|libre|calendrier|creneau|rdv|appel|availab\w*|schedule|book\w*|call)\b/.test(text)) return 'avail';
        if (/\b(n8n|make|zapier|automatis\w*|automat\w*|workflows?|notion)\b/.test(text)) return 'n8n';
        if (/\b(loi|2025-19|statuts?|ong|ngo|association|fondation|conformite|compliance|bylaws?)\b/.test(text)) return 'compliance';
        if (/\b(ia|ai|gpt|gpt-4|claude|gemini|prompt|chatbot|rag|llm|intelligence artificielle|artificial intelligence)\b/.test(text)) return 'ai';
        if (/\b(contact\w*|email|mail|whatsapp|telephone|phone|joindre)\b/.test(text)) return 'contact';
        if (/\b(bonjour|bonsoir|salut|hello|hi|hey|coucou)\b/.test(text)) return 'hello';
        return 'default';
    };

    if (suggestionsContainer) {
        suggestionsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.suggestion-btn');
            if (!btn) return;
            appendMessage(btn.textContent, 'user');
            triggerBotResponse(btn.getAttribute('data-question'));
        });
    }

    if (inputForm) {
        inputForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (!text) return;
            appendMessage(text, 'user');
            input.value = '';
            triggerBotResponse(matchIntent(text));
        });
    }

    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${sender}`;
        const safeText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        msgDiv.innerHTML = `<div class="message-content"><p>${safeText}</p></div>`;
        messagesContainer.appendChild(msgDiv);
        scrollToBottom();
    }

    function triggerBotResponse(key) {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot';
        typingDiv.innerHTML = `<div class="message-content"><div class="typing-dots" aria-label="..."><span ></span><span></span><span></span></div></div>`;
        messagesContainer.appendChild(typingDiv);
        scrollToBottom();

        const delay = prefersReducedMotion ? 150 : 650;
        setTimeout(() => {
            typingDiv.remove();
            const reply = (botResponses[currentLang] && botResponses[currentLang][key]) || botResponses[currentLang].default;
            appendMessage(reply, 'bot');
        }, delay);
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}
