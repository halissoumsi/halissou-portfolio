// ===== PORTFOLIO DATA (Bilingual Support) =====
const portfolioData = {
    profile: {
        name: "Mouhamadou Halissou SEIDOU IBRAHIM",
        roles: {
            fr: [
                "Expert en Rédaction & IA",
                "No-Code & Automatisation",
                "Développeur Python IA & Web IA",
                "Consultant en Gestion de Projet",
                "Ghostwriter & Prompt Engineer"
            ],
            en: [
                "Writing & AI Expert",
                "No-Code & Automation",
                "Python AI & Web AI Developer",
                "Project Management Consultant",
                "Ghostwriter & Prompt Engineer"
            ]
        }
    },
    skills: [
        // ── Rédaction ──────────────────────────────────────────────────────
        { name: { fr: "Rédaction professionnelle", en: "Professional Writing" }, level: 95, category: "writing" },
        { name: { fr: "Ghostwriting", en: "Ghostwriting" }, level: 90, category: "writing" },
        { name: { fr: "SEO & Copywriting IA", en: "SEO & AI Copywriting" }, level: 88, category: "writing" },
        { name: { fr: "Rédaction bilingue (Français / Anglais)", en: "Bilingual Writing (French / English)" }, level: 82, category: "writing" },

        // ── Techniques (Dev & IA) ───────────────────────────────────────────
        { name: { fr: "Intelligence Artificielle (Claude, GPT-4, Gemini)", en: "Artificial Intelligence (Claude, GPT-4, Gemini)" }, level: 93, category: "technical" },
        { name: { fr: "Prompt Engineering avancé", en: "Advanced Prompt Engineering" }, level: 93, category: "technical" },
        { name: { fr: "HTML / CSS / JavaScript", en: "HTML / CSS / JavaScript" }, level: 85, category: "technical" },
        { name: { fr: "Génération documentaire (WeasyPrint, python-docx)", en: "Document Generation (WeasyPrint, python-docx)" }, level: 88, category: "technical" },
        { name: { fr: "Microsoft Office & Excel avancé", en: "Microsoft Office & Advanced Excel" }, level: 90, category: "technical" },
        { name: { fr: "Collecte et analyse des données", en: "Data Collection & Analysis" }, level: 78, category: "technical" },

        // ── No-Code & Automation ────────────────────────────────────────────
        { name: { fr: "n8n (automatisation avancée)", en: "n8n (Advanced Automation)" }, level: 90, category: "nocode" },
        { name: { fr: "Make.com / Integromat", en: "Make.com / Integromat" }, level: 88, category: "nocode" },
        { name: { fr: "Zapier", en: "Zapier" }, level: 88, category: "nocode" },
        { name: { fr: "Notion (espace de travail & automatisation)", en: "Notion (Workspace & Automation)" }, level: 92, category: "nocode" },

        // ── Gestion de projet ───────────────────────────────────────────────
        { name: { fr: "Gestion de projet opérationnel", en: "Operational Project Management" }, level: 90, category: "management" },
        { name: { fr: "Rédaction & suivi de dossiers institutionnels", en: "Drafting & Follow-up of Institutional Files" }, level: 92, category: "management" },
        { name: { fr: "Planification stratégique & chronogrammes", en: "Strategic Planning & Timelines" }, level: 88, category: "management" },
        { name: { fr: "Coordination multi-acteurs (ONG, PME, bailleurs)", en: "Multi-stakeholder Coordination (NGO, SME, Donors)" }, level: 86, category: "management" },

        // ── Soft Skills ─────────────────────────────────────────────────────
        { name: { fr: "Communication", en: "Communication" }, level: 92, category: "soft" },
        { name: { fr: "Organisation", en: "Organization" }, level: 94, category: "soft" },
        { name: { fr: "Adaptabilité et Créativité", en: "Adaptability & Creativity" }, level: 88, category: "soft" },
        { name: { fr: "Résolution de problèmes", en: "Problem Solving" }, level: 91, category: "soft" },
        { name: { fr: "Travail d'équipe & leadership", en: "Teamwork & Leadership" }, level: 91, category: "soft" },
        { name: { fr: "Pédagogie & formation", en: "Pedagogy & Training" }, level: 87, category: "soft" }
    ],
    services: [
        {
            title: { fr: "Rédaction professionnelle", en: "Professional Writing" },
            icon: "fa-solid fa-feather-pointed",
            color: "#6C63FF",
            description: {
                fr: "Création de contenus de qualité : articles, rapports, communications, documentation technique. Adaptation du style selon votre audience et vos objectifs pour un impact maximal.",
                en: "Creation of quality content: articles, reports, communications, technical documentation. Style adaptation according to your audience and objectives for maximum impact."
            }
        },
        {
            title: { fr: "Ghostwriting", en: "Ghostwriting" },
            icon: "fa-solid fa-user-pen",
            color: "#00D4FF",
            description: {
                fr: "Rédaction à votre nom de contenus authentiques et personnalisés. Respect total de votre voix et de votre style pour une cohérence parfaite avec votre image de marque.",
                en: "Writing in your name of authentic and personalized content. Total respect for your voice and style for perfect consistency with your brand image."
            }
        },
        {
            title: { fr: "Gestion de projet", en: "Project Management" },
            icon: "fa-solid fa-diagram-project",
            color: "#FF6B6B",
            description: {
                fr: "Planification, coordination et suivi de vos projets. Gestion des délais, ressources et communications pour assurer le succès de vos initiatives les plus ambitieuses.",
                en: "Planning, coordination and monitoring of your projects. Management of deadlines, resources and communications to ensure the success of your most ambitious initiatives."
            }
        },
        {
            title: { fr: "Accompagnement personnalisé", en: "Personalized Support" },
            icon: "fa-solid fa-handshake",
            color: "#FFD93D",
            description: {
                fr: "Support sur-mesure selon vos besoins spécifiques. Conseil, formation et assistance pour optimiser vos processus et atteindre vos objectifs avec efficacité.",
                en: "Customized support according to your specific needs. Consulting, training and assistance to optimize your processes and reach your goals effectively."
            }
        },
        {
            title: { fr: "Intégration d'intelligence artificielle", en: "Artificial Intelligence Integration" },
            icon: "fa-solid fa-microchip",
            color: "#4ECDC4",
            description: {
                fr: "Je transforme le potentiel de l'intelligence artificielle en résultats concrets et mesurables pour votre entreprise. Solutions personnalisées basées sur vos besoins réels.",
                en: "I transform the potential of artificial intelligence into concrete and measurable results for your business. Customized solutions based on your real needs."
            }
        },
        {
            title: { fr: "Audit et Analyse des besoins", en: "Audit & Needs Analysis" },
            icon: "fa-solid fa-magnifying-glass-chart",
            color: "#FF8C42",
            description: {
                fr: "J'analyse vos objectifs stratégiques, vos défis opérationnels et vos processus actuels pour identifier les opportunités où l'IA peut avoir le plus grand impact.",
                en: "I analyze your strategic goals, operational challenges and current processes to identify opportunities where AI can make the biggest impact."
            }
        },
        {
            title: { fr: "Automatisation No-Code & Workflows", en: "No-Code Automation & Workflows" },
            icon: "fa-solid fa-plug",
            color: "#A855F7",
            description: {
                fr: "Conception et déploiement de workflows automatisés sans écrire une seule ligne de code : n8n, Make, Zapier, Glide. Relances automatiques, rapports générés à la volée, alertes WhatsApp, CRM simplifié, votre entreprise tourne même quand vous dormez.",
                en: "Design and deployment of automated workflows without writing a single line of code: n8n, Make, Zapier, Glide. Automated follow-ups, reports generated on the fly, WhatsApp alerts, simplified CRM, your business runs even while you sleep."
            }
        },
        {
            title: { fr: "Applications No-Code sur mesure", en: "Custom No-Code Applications" },
            icon: "fa-solid fa-mobile-screen",
            color: "#10B981",
            description: {
                fr: "Développement d'applications mobiles et web fonctionnelles sans code (Glide, Bubble, FlutterFlow) en 1 à 3 semaines. Gestion de livraisons, tontines numériques, suivi de stock, portails clients — livrées clé en main, modifiables par vous-même.",
                en: "Development of functional mobile and web applications without code (Glide, Bubble, FlutterFlow) in 1 to 3 weeks. Delivery management, digital tontines, inventory tracking, customer portals — delivered turnkey, modifiable by yourself."
            }
        },
        {
            title: { fr: "Coordination multi-acteurs (ONG, PME, bailleurs)", en: "Multi-stakeholder Coordination (NGO, SME, Donors)" },
            icon: "fa-solid fa-people-arrows",
            color: "#F59E0B",
            description: {
                fr: "Facilitation et coordination entre parties prenantes multiples : ONG, PME, institutions publiques et bailleurs de fonds. Gestion des réunions, suivi des engagements, rédaction de rapports d'avancement et médiation pour garantir l'alignement de tous les actifs vers un objectif commun.",
                en: "Facilitation and coordination between multiple stakeholders: NGOs, SMEs, public institutions and donors. Management of meetings, tracking of commitments, drafting of progress reports and mediation to guarantee alignment towards a common goal."
            }
        },
        {
            title: { fr: "Développement Web IA", en: "AI Web Development" },
            icon: "fa-solid fa-code",
            color: "#3B82F6",
            description: {
                fr: "Création de sites web professionnels (Python Flask ou HTML/CSS/JS) avec fonctionnalités IA intégrées : chatbot, génération de documents automatique, formulaires intelligents, tableau de bord. Au-delà du site vitrine un outil qui travaille pour vous.",
                en: "Creation of professional websites (Python Flask or HTML/CSS/JS) with integrated AI features: chatbot, automatic document generation, smart forms, dashboard. Beyond the showcase site, a tool that works for you."
            }
        }
    ],
    projects: [
        {
            id: "proj-apple-store",
            category: "technical",
            icon: "fa-brands fa-apple",
            color: "#00D4FF",
            metric: "Déployé & En Ligne",
            title: {
                fr: "Plateforme Web E-Commerce — Apple Store",
                en: "E-Commerce Web Platform — Apple Store"
            },
            summary: {
                fr: "Conception, développement sur-mesure et déploiement d'une plateforme web e-commerce réactive et optimisée.",
                en: "Custom design, web development, and deployment of a responsive, optimized e-commerce web platform."
            },
            challenge: {
                fr: "Développer une interface web fluide, sécurisée et parfaitement optimisée pour présenter des produits haut de gamme avec une UX exemplaire.",
                en: "Develop a smooth, secure, and optimized web interface to showcase premium products with an outstanding UX."
            },
            solution: {
                fr: "Architecture web moderne, intégration réactive, parcours d'achat simplifié, chargement rapide et déploiement sécurisé en production.",
                en: "Modern web architecture, responsive layout, streamlined purchase path, fast loading, and secure production deployment."
            },
            results: {
                fr: ["Déploiement 100% réussi et opérationnel en ligne", "Expérience utilisateur (UX) fluide et design épuré sur mobile & desktop", "Performances et vitesse de chargement optimisées"],
                en: ["100% Successful online deployment", "Seamless user experience (UX) & sleek design across all devices", "Optimized performance and lightning-fast load times"]
            },
            tools: ["Développement Web", "HTML/CSS/JS", "UX/UI Design", "Déploiement Web"]
        },
        {
            id: "proj-fadama-water",
            category: "technical",
            icon: "fa-solid fa-bottle-water",
            color: "#10B981",
            metric: "Gestion & Suivi Web",
            title: {
                fr: "FADAMA — Application de Suivi & Gestion de Production d'Eau Minérale",
                en: "FADAMA — Mineral Water Production Tracking & Management App"
            },
            summary: {
                fr: "Développement web d'une application de suivi, de traçabilité et de gestion globale de la production d'eau minérale FADAMA.",
                en: "Web development of a dedicated tracking, traceability, and management application for FADAMA mineral water production."
            },
            challenge: {
                fr: "Digitaliser et centraliser le suivi des volumes de production d'eau minérale, la gestion des stocks et la traçabilité des lots sans perte d'information.",
                en: "Digitize and centralize mineral water production volumes, inventory tracking, and batch traceability without data loss."
            },
            solution: {
                fr: "Conception d'une application web métier ergonomique avec tableau de bord de production en temps réel, gestion des stocks et rapports d'activité.",
                en: "Designing a user-friendly web app featuring a real-time production dashboard, inventory tracking, and automated reporting."
            },
            results: {
                fr: ["Digitalisation à 100% du processus de suivi de production", "Traçabilité des lots et contrôle qualité optimisés en temps réel", "Réduction des écarts d'inventaire et fluidification du pilotage"],
                en: ["100% Digitized production tracking process", "Real-time batch traceability and quality control optimization", "Reduced inventory discrepancies and streamlined management"]
            },
            tools: ["Développement Web", "Gestion de Production", "Tableau de Bord", "UX/UI", "Base de Données"]
        },
        {
            id: "proj-aads-governance",
            category: "compliance",
            icon: "fa-solid fa-scale-balanced",
            color: "#FF6B6B",
            metric: "Conformité Statutaire",
            title: {
                fr: "AADS — Gouvernance Financière & Documents Statutaires",
                en: "AADS — Financial Governance & Statutory Documents"
            },
            summary: {
                fr: "Mise en conformité légale, rédaction des statuts et structuration de la gouvernance financière pour une association de développement social.",
                en: "Legal compliance alignment, drafting of bylaws, and financial governance structuring for a social development association."
            },
            challenge: {
                fr: "Besoin de structurer le cadre juridique, les statuts administratifs et la gestion financière conformément aux exigences réglementaires associatives.",
                en: "Need to structure legal framework, administrative bylaws, and financial management in compliance with NGO regulations."
            },
            solution: {
                fr: "Rédaction et révision des statuts officiels, élaboration du règlement intérieur et mise en place d'outils de suivi financier et comptable.",
                en: "Drafting official bylaws, establishing internal rules of procedure, and setting up financial and accounting tracking tools."
            },
            results: {
                fr: ["Conformité légale et statutaire intégralement validée", "Mise en place de procédures de gestion financière claires et transparentes", "Cadre de gouvernance structuré pour les assemblées et comités"],
                en: ["Full legal and statutory compliance validated", "Clear and transparent financial management procedures implemented", "Structured governance framework for general assemblies and committees"]
            },
            tools: ["Conformité Légale", "Gouvernance Associative", "Rédaction Statutaire", "Gestion Financière"]
        },
        {
            id: "proj-ab2s-compliance",
            category: "compliance",
            icon: "fa-solid fa-file-contract",
            color: "#FF6B6B",
            metric: "Loi 2025-19 Conforme",
            title: {
                fr: "AB2S — Mise en Conformité Légale (Loi 2025-19)",
                en: "AB2S — Legal Compliance Alignment (Law 2025-19)"
            },
            summary: {
                fr: "Mise en conformité statutaire et juridique d'une association de solidarité sociale selon les nouvelles exigences de la Loi 2025-19.",
                en: "Statutory and legal alignment of a social solidarity association under the new requirements of Law 2025-19."
            },
            challenge: {
                fr: "Adapter les statuts administratifs et le fonctionnement interne aux nouvelles obligations légales et réglementaires régissant les associations.",
                en: "Adapt administrative bylaws and internal governance to new legal obligations governing associations."
            },
            solution: {
                fr: "Audit juridique des documents existants, refonte des statuts, mise à jour du règlement intérieur et dépôt du dossier officiel de conformité.",
                en: "Legal audit of existing documents, overhaul of bylaws, internal rules update, and official compliance file filing."
            },
            results: {
                fr: ["Attestation de conformité réglementaire obtenue", "Statuts et règlement intérieur pleinement alignés sur la Loi 2025-19", "Sécurisation juridique des organes dirigeants"],
                en: ["Regulatory compliance certificate obtained", "Bylaws and internal rules fully aligned with Law 2025-19", "Legal securing of governing bodies"]
            },
            tools: ["Loi 2025-19", "Conformité Légale", "Droit Associatif", "Rédaction Juridique"]
        },
        {
            id: "proj-elide-ong-compliance",
            category: "compliance",
            icon: "fa-solid fa-hand-holding-heart",
            color: "#F59E0B",
            metric: "Conformité ONG Validée",
            title: {
                fr: "ELiDe — Mise en Conformité ONG (Loi 2025-19)",
                en: "ELiDe — NGO Legal Compliance (Law 2025-19)"
            },
            summary: {
                fr: "Accompagnement et mise en conformité juridique globale d'une ONG sous le cadre de la Loi 2025-19.",
                en: "Comprehensive legal compliance alignment for an NGO under the Law 2025-19 framework."
            },
            challenge: {
                fr: "Répondre aux contraintes renforcées de transparence, de gouvernance et de déclaration administrative imposées aux ONG par la Loi 2025-19.",
                en: "Address heightened requirements for transparency, governance, and administrative reporting imposed on NGOs by Law 2025-19."
            },
            solution: {
                fr: "Revue complète du cadre institutionnel, rédaction des chartes de gouvernance, révision des statuts et montage du dossier administratif d'agrément.",
                en: "Full review of institutional framework, drafting governance charters, revising bylaws, and assembling administrative accreditation files."
            },
            results: {
                fr: ["Dossier de mise en conformité validé par les autorités compétentes", "Alignement des procédures administratives et de transparence", "Pérennisation du statut légal de l'ONG"],
                en: ["Compliance application approved by competent authorities", "Alignment of administrative and transparency procedures", "Long-term legal status secured for the NGO"]
            },
            tools: ["Loi 2025-19", "Conformité ONG", "Droit Institutionnel", "Gouvernance ONG"]
        },
        {
            id: "proj-2a2s-compliance",
            category: "compliance",
            icon: "fa-solid fa-gavel",
            color: "#FF6B6B",
            metric: "Conformité 2025-19",
            title: {
                fr: "2A2S — Mise en Conformité Statutaire (Loi 2025-19)",
                en: "2A2S — Statutory Compliance Alignment (Law 2025-19)"
            },
            summary: {
                fr: "Mise à jour des statuts et alignement juridique des actes administratifs d'une association d'assistance sociale sous la Loi 2025-19.",
                en: "Bylaw updates and legal alignment of administrative acts for a social assistance association under Law 2025-19."
            },
            challenge: {
                fr: "Assurer l'actualisation des textes fondateurs et du registre des délibérations conformément à la réglementation associative en vigueur.",
                en: "Ensure updating of founding texts and deliberation records in accordance with current association regulations."
            },
            solution: {
                fr: "Audit de conformité des délibérations, révision des statuts administratifs et constitution du registre de conformité statutaire.",
                en: "Compliance audit of deliberations, administrative bylaws revision, and assembly of statutory compliance records."
            },
            results: {
                fr: ["Validation du dossier administratif de conformité statutaire", "Mise en conformité du registre des assemblées générales", "Sécurisation du fonctionnement des instances associatives"],
                en: ["Validation of administrative statutory compliance file", "General assembly register brought into full compliance", "Secured operation of association executive bodies"]
            },
            tools: ["Loi 2025-19", "Révision Statutaire", "Conformité Associative", "Audit Juridique"]
        },
        {
            id: "proj-fovideh-foundation",
            category: "compliance",
            icon: "fa-solid fa-building-ngo",
            color: "#10B981",
            metric: "Fondation Conforme",
            title: {
                fr: "FoViDéH — Conformité Légale pour Fondation de Développement",
                en: "FoViDéH — Legal Compliance for Development Foundation"
            },
            summary: {
                fr: "Montage des dossiers de conformité légale et structuration administrative pour une fondation axée sur le développement humain.",
                en: "Assembly of legal compliance documentation and administrative structuring for a human development foundation."
            },
            challenge: {
                fr: "Régulariser et consolider les actes d'existence légale et les conventions de fonctionnement d'une fondation d'utilité sociale.",
                en: "Regularize and consolidate legal existence acts and operating agreements for a social benefit foundation."
            },
            solution: {
                fr: "Rédaction des dossiers juridiques, mise en conformité des chartes institutionnelles et dépôt des documents auprès des autorités compétentes.",
                en: "Drafting legal documentation, bringing institutional charters into compliance, and filing with competent authorities."
            },
            results: {
                fr: ["Dossier de conformité légale de la fondation validé", "Reconnaissance institutionnelle et sécurisation du statut juridique", "Structure administrative clarifiée pour les partenariats"],
                en: ["Foundation legal compliance documentation approved", "Institutional recognition and legal status secured", "Administrative structure clarified for external partnerships"]
            },
            tools: ["Droit des Fondations", "Conformité Légale", "Développement Humain", "Gouvernance Institutionnelle"]
        },
        {
            id: "proj-ebook-whatsapp-ecommerce",
            category: "writing",
            icon: "fa-solid fa-book-open",
            color: "#10B981",
            metric: "eBook & Copywriting",
            title: {
                fr: "eBook \"Générer 100 000 FCFA par Mois avec son Smartphone\"",
                en: "eBook \"Generate 100,000 FCFA/Month with your Smartphone\""
            },
            summary: {
                fr: "Conception, rédaction intégrale et mise en page d'un guide pratique et pédagogique axé sur la monétisation et le commerce digital via WhatsApp.",
                en: "Design, full copywriting, and layout formatting of a practical guide focused on smartphone digital monetization and commerce via WhatsApp."
            },
            challenge: {
                fr: "Structurer un contenu éducatif accessible et captivant expliquant les méthodes concrètes de vente et de gestion commerciale sur smartphone.",
                en: "Structure accessible, engaging educational content explaining concrete smartphone sales and business management methods."
            },
            solution: {
                fr: "Rédaction persuasive (copywriting), découpage thématique pas à pas, conception d'exercices pratiques et mise en page visuelle attrayante.",
                en: "Persuasive copywriting, step-by-step thematic structure, practical exercises design, and visually appealing layout formatting."
            },
            results: {
                fr: ["eBook rédigé et mis en page prêt pour la distribution numérique", "Contenu pédagogique structuré facilitant l'apprentissage et le passage à l'action", "Guide adapté aux spécificités du marché mobile"],
                en: ["eBook written and formatted ready for digital distribution", "Structured educational content facilitating learning and immediate action", "Guide tailored to mobile commerce specifics"]
            },
            tools: ["Copywriting", "Rédaction Pédagogique", "Création d'eBook", "E-Commerce WhatsApp", "Mise en Page"]
        },
        {
            id: "proj-koborou-info-media",
            category: "writing",
            icon: "fa-solid fa-newspaper",
            color: "#3B82F6",
            metric: "Projet Média & Presse",
            title: {
                fr: "Koborou Info — Projet Média (Presse Écrite, Web & Audiovisuel)",
                en: "Koborou Info — Media Project (Print, Web & Audiovisual)"
            },
            summary: {
                fr: "Conception éditoriale, rédaction d'articles de presse et déploiement de la ligne de contenus d'un projet média multi-supports.",
                en: "Editorial design, press article writing, and content strategy deployment for a multi-platform media project."
            },
            challenge: {
                fr: "Structurer une ligne éditoriale cohérente et produire des contenus d'information réactifs et crédibles sur plusieurs canaux (presse écrite, web et audiovisuel).",
                en: "Structure a consistent editorial strategy and produce responsive, credible news content across multiple channels (print, web, audiovisual)."
            },
            solution: {
                fr: "Rédaction d'articles journalistiques, élaboration de la charte éditoriale, création de contenus multimédias et publication web.",
                en: "Journalistic article writing, editorial charter development, multimedia content creation, and web publishing."
            },
            results: {
                fr: ["Couverture médiatique multi-canal opérationnelle", "Production régulière d'articles de presse et de contenus d'actualité", "Ligne éditoriale structurée et crédible"],
                en: ["Operational multi-channel media coverage", "Regular production of press articles and news content", "Structured and credible editorial strategy"]
            },
            tools: ["Rédaction Journalistique", "Presse Web", "Ligne Éditoriale", "Production Audiovisuelle", "Médias"]
        },
        {
            id: "proj-orientabenin-platform",
            category: "webdev",
            icon: "fa-solid fa-graduation-cap",
            color: "#10B981",
            metric: "Plateforme EdTech Web",
            title: {
                fr: "OrientaBénin — Plateforme d'Orientation Académique",
                en: "OrientaBénin — Academic Orientation Platform"
            },
            summary: {
                fr: "Développement web d'une plateforme d'orientation académique centralisant les filières, universités et opportunités d'études au Bénin.",
                en: "Web development of an academic orientation platform centralizing majors, universities, and study opportunities in Benin."
            },
            challenge: {
                fr: "Offrir un accès clair, structuré et interactif aux informations d'orientation universitaire et professionnelle pour les étudiants et bacheliers béninois.",
                en: "Provide clear, structured, and interactive access to university and career guidance information for Beninese students and high school graduates."
            },
            solution: {
                fr: "Conception d'une plateforme web dynamique avec annuaire des filières, moteur de recherche d'établissements et guide d'orientation interactif.",
                en: "Designing a dynamic web platform with a directory of majors, an institution search engine, and an interactive guidance guide."
            },
            results: {
                fr: ["Centralisation des filières et établissements d'enseignement supérieur", "Interface web intuitive facilitant la recherche d'orientation", "Outil d'accompagnement accessible aux futurs étudiants"],
                en: ["Centralization of higher education majors and institutions", "Intuitive web interface facilitating orientation search", "Accessible guidance tool for prospective students"]
            },
            tools: ["Développement Web", "EdTech", "UX/UI Design", "Base de Données", "Orientation Académique"]
        },
        {
            id: "proj-tontinebj-app",
            category: "webdev",
            icon: "fa-solid fa-piggy-bank",
            color: "#F59E0B",
            metric: "FinTech & Web App",
            title: {
                fr: "TontineBJ — Application de Tontine Digitale",
                en: "TontineBJ — Digital Tontine Web Application"
            },
            summary: {
                fr: "Développement web d'une solution de tontine et d'épargne rotative sécurisée adaptée aux usages financiers locaux au Bénin.",
                en: "Web development of a secure digital tontine and rotating savings application tailored to local Beninese financial habits."
            },
            challenge: {
                fr: "Digitaliser et sécuriser le système traditionnel de tontine en offrant une traçabilité transparente des cotisations et des tirages.",
                en: "Digitize and secure traditional tontine systems by providing transparent payment and payout tracking."
            },
            solution: {
                fr: "Conception d'une web app intuitive avec gestion des cycles de cotisations, calcul automatisé des tours de table et notifications de rappel.",
                en: "Designing an intuitive web application managing contribution cycles, automated round calculations, and reminder alerts."
            },
            results: {
                fr: ["Gestion 100% numérisée des cycles de cotisations et des membres", "Traçabilité des versements et transparence des opérations", "Interface adaptée aux téléphones mobiles"],
                en: ["100% Digitized management of contribution cycles and members", "Complete payment traceability and transaction transparency", "Mobile-optimized web interface"]
            },
            tools: ["Développement Web", "FinTech", "Tontine Digitale", "UX/UI Design", "Base de Données"]
        },
        {
            id: "proj-n8n-lead-gen",
            category: "automation",
            icon: "fa-solid fa-paper-plane",
            color: "#A855F7",
            metric: "Workflow n8n",
            title: {
                fr: "Automatisation de Prospection & Relance Associations",
                en: "Outreach & Follow-up Automation for Associations"
            },
            summary: {
                fr: "Workflow n8n d'automatisation effectuant la recherche ciblée, la collecte d'emails, l'envoi personnalisé via Gmail et le suivi WhatsApp.",
                en: "n8n automation workflow handling targeted search, email scraping, personalized Gmail outreach, and WhatsApp follow-up."
            },
            challenge: {
                fr: "Processus manuel et chronophage de recherche d'associations, de collecte de coordonnées et de relance individuelle des partenaires.",
                en: "Time-consuming manual process of searching for associations, collecting contact details, and follow-ups."
            },
            solution: {
                fr: "Conception d'un scénario d'automatisation n8n interconnectant la collecte ciblée, l'envoi d'emails personnalisés et les relances WhatsApp.",
                en: "Designing an n8n automation scenario connecting targeted data collection, personalized email outreach, and WhatsApp alerts."
            },
            results: {
                fr: ["Automatisation intégrale du cycle de prospection et de qualification", "Envoi d'emails ciblés et suivi personnalisé sans intervention manuelle", "Gain de temps substantiel sur la gestion des campagnes associatives"],
                en: ["Full automation of outreach and qualification workflow", "Targeted email dispatch and personalized tracking without manual input", "Substantial time savings on association campaign management"]
            },
            tools: ["n8n", "Gmail API", "WhatsApp Business", "Automatisations", "Scraping"]
        },
        {
            id: "proj-seo-strategy",
            category: "writing",
            icon: "fa-solid fa-feather-pointed",
            color: "#10B981",
            metric: "+185% Trafic SEO",
            title: {
                fr: "Stratégie de Contenu & Rédaction SEO",
                en: "SEO Content Strategy & Writing"
            },
            summary: {
                fr: "Conception et rédaction d'une stratégie de contenus SEO bilingue (35+ articles de fond & guides de référence).",
                en: "Design and writing of a bilingual SEO content strategy (35+ deep articles & reference guides)."
            },
            challenge: {
                fr: "Absence de visibilité sur les mots-clés stratégiques et taux de rebond élevé sur les contenus existants.",
                en: "Lack of organic search visibility on key industry terms and high bounce rate on legacy content."
            },
            solution: {
                fr: "Audit sémantique complet, structuration en cocons sémantiques, génération de plans optimisés et rédaction de haute précision avec relecture humaine rigoureuse.",
                en: "Comprehensive semantic audit, topical cluster modeling, AI-assisted outline optimization, and high-precision copywriting."
            },
            results: {
                fr: ["+185% de trafic organique ciblé en 4 mois", "Top 3 Google sur 18 requêtes métiers clés", "Temps moyen passé sur les articles multiplié par 2.4"],
                en: ["+185% organic traffic within 4 months", "Top 3 Google rankings for 18 strategic terms", "Average time spent per article multiplied by 2.4"]
            },
            tools: ["SEO Copywriting", "Keyword Research", "GPT-4", "WordPress", "Analytics"]
        },
        {
            id: "proj-n8n-automation",
            category: "automation",
            icon: "fa-solid fa-gears",
            color: "#A855F7",
            metric: "25h/sem. économisées",
            title: {
                fr: "Automatisation n8n / Notion / WhatsApp",
                en: "n8n / Notion / WhatsApp Automation"
            },
            summary: {
                fr: "Automatisation intégrale du flux de relance prospect et de génération instantanée de factures PDF.",
                en: "End-to-end automation of lead follow-up and instant PDF invoice generation."
            },
            challenge: {
                fr: "Saisie manuelle répétitive des devis et oublis fréquents de relance des prospects par l'équipe commerciale.",
                en: "Repetitive manual quote generation and frequent missed lead follow-ups by the sales team."
            },
            solution: {
                fr: "Création d'un workflow n8n connecté à Notion, Stripe et WhatsApp API pour automatiser 100% des notifications et des comptes-rendus PDF.",
                en: "Building a custom n8n workflow connecting Notion, Stripe, and WhatsApp API to automate 100% of alerts and PDF reports."
            },
            results: {
                fr: ["25h de travail administratif économisées chaque semaine", "Temps de relance prospect réduit de 48h à 2 minutes", "100% de fiabilité sans aucune erreur d'inattention"],
                en: ["25 hours of admin work saved every week", "Lead response time reduced from 48h to 2 minutes", "100% reliability with zero human errors"]
            },
            tools: ["n8n", "Notion API", "WhatsApp Business", "WeasyPrint", "Make"]
        },
        {
            id: "proj-glide-app",
            category: "webdev",
            icon: "fa-solid fa-mobile-screen-button",
            color: "#3B82F6",
            metric: "Livré en 10 jours",
            title: {
                fr: "Web App No-Code de Suivi de Projets",
                en: "No-Code Project Tracking Web App"
            },
            summary: {
                fr: "Développement d'une application No-Code pour le suivi en temps réel des chantiers et la validation des jalons.",
                en: "Development of a No-Code application for real-time site tracking and milestone validation."
            },
            challenge: {
                fr: "Suivi éparpillé sur Excel sans centralisation ni accès sur le terrain pour les collaborateurs mobiles.",
                en: "Scattered Excel tracking without central data or mobile field access for remote teams."
            },
            solution: {
                fr: "Conception d'une web app No-Code PWA réactive avec tableau de bord administrateur et portail client sécurisé.",
                en: "Designing a responsive No-Code PWA with an admin dashboard and secure client portal."
            },
            results: {
                fr: ["Adoption immédiate par 100% des équipes de terrain", "Réduction de 40% des appels de demandes d'avancement", "Livraison clé en main en 10 jours seulement"],
                en: ["Immediate 100% adoption across field teams", "40% decrease in status inquiry phone calls", "Turnkey delivery completed in just 10 days"]
            },
            tools: ["Glide Apps", "Google Sheets API", "UI/UX", "No-Code"]
        },
        {
            id: "proj-ai-chatbot",
            category: "webdev",
            icon: "fa-solid fa-robot",
            color: "#F59E0B",
            metric: "94% Réponses Exactes",
            title: {
                fr: "Assistant IA & Chatbot de Base de Connaissances",
                en: "AI Assistant & Knowledge Base Chatbot"
            },
            summary: {
                fr: "Intégration d'un assistant virtuel RAG pour interroger instantanément des centaines de documents PDF internes.",
                en: "Integration of a RAG virtual assistant to instantly query hundreds of internal PDF documents."
            },
            challenge: {
                fr: "Perte de temps importante des équipes à chercher des procédures complexes dans des répertoires désorganisés.",
                en: "Substantial team time wasted searching for technical procedures across disorganized folders."
            },
            solution: {
                fr: "Indexation vectorielle de la documentation et déploiement d'un agent IA conversationnel avec garde-fous de confidentialité.",
                en: "Vector indexation of company docs and deployment of a conversational AI agent with privacy safeguards."
            },
            results: {
                fr: ["Temps de recherche d'information divisé par 10", "94% de réponses exactes dès la première requête", "Adoption immédiate par l'équipe Support"],
                en: ["Information lookup time reduced tenfold", "94% accuracy rate on first-try responses", "Immediate adoption by support team"]
            },
            tools: ["Python", "OpenAI API", "Prompt Engineering", "Vector DB", "HTML/CSS/JS"]
        },
        {
            id: "proj-ngo-funding",
            category: "compliance",
            icon: "fa-solid fa-list-check",
            color: "#FF6B6B",
            metric: "100% Subvention Accordée",
            title: {
                fr: "Coordination & Rédaction de Dossier Institutionnel",
                en: "Institutional Grant Writing & Coordination"
            },
            summary: {
                fr: "Pilotage opérationnel, rédaction du document cadre et coordination multi-acteurs pour la recherche de financements.",
                en: "Operational management, framework document drafting, and multi-stakeholder proposal coordination."
            },
            challenge: {
                fr: "Synthèse complexe des données de 4 entités partenaires avec un délai de soumission très contraint.",
                en: "Complex synthesis of data from 4 partner entities with an extremely tight submission window."
            },
            solution: {
                fr: "Mise en place d'un rétro-planning rigoureux, animation des comités de validation et harmonisation de la plume.",
                en: "Setting up a strict timeline, facilitating review sessions, and unifying writing style across sections."
            },
            results: {
                fr: ["Projet validé et subvention de 85 000 € accordée", "Dossier soumis 48h avant la date limite", "Alignement stratégique parfait des 4 organismes"],
                en: ["Project approved with €85,000 grant awarded", "Proposal submitted 48 hours ahead of deadline", "Perfect strategic alignment among 4 organizations"]
            },
            tools: ["Gestion de projet", "Rédaction institutionnelle", "Planification", "Leadership"]
        }
    ],
    testimonials: [
        {
            name: "B. Lawani",
            role: { fr: "CEO, Association", en: "CEO, Association" },
            avatar: "BL",
            rating: 5,
            text: {
                fr: "Halissou a transformé notre stratégie de contenu. Son expertise en rédaction et en IA nous a permis d'augmenter notre engagement de 150% en seulement 3 mois. Un professionnel exceptionnel !",
                en: "Halissou transformed our content strategy. His expertise in writing and AI allowed us to increase our engagement by 150% in just 3 months. An outstanding professional!"
            }
        },
        {
            name: "O. O. Barre",
            role: { fr: "CEO, IMS", en: "CEO, IMS" },
            avatar: "OBO",
            rating: 5,
            text: {
                fr: "La gestion de notre projet de transformation digitale par Halissou a été impeccable. Sa rigueur, sa créativité et sa maîtrise des outils modernes ont fait toute la différence. Je recommande vivement !",
                en: "The management of our digital transformation project by Halissou was impeccable. His rigor, creativity and mastery of modern tools made all the difference. I highly recommend!"
            }
        },
        {
            name: "Marie Paul",
            role: { fr: "Responsable RH", en: "HR Manager" },
            avatar: "MP",
            rating: 5,
            text: {
                fr: "L'intégration de solutions IA dans nos processus RH a été un succès total grâce à Halissou. Il a su comprendre nos besoins et livrer des résultats concrets qui ont révolutionné notre façon de travailler.",
                en: "The integration of AI solutions into our HR processes was a total success thanks to Halissou. He was able to understand our needs and deliver concrete results that revolutionized our way of working."
            }
        },
        {
            name: "Ahmed Diallo",
            role: { fr: "Fondateur, HubPlusAfrica", en: "Founder, HubPlusAfrica" },
            avatar: "AD",
            rating: 5,
            text: {
                fr: "Halissou est un véritable expert polyvalent. Que ce soit pour la rédaction, la gestion de projet ou l'IA, il apporte toujours des solutions innovantes et efficaces. Un partenaire de confiance !",
                en: "Halissou is a true multi-skilled expert. Whether for writing, project management or AI, he always brings innovative and effective solutions. A partner of trust!"
            }
        }
    ],
    faq: [
        {
            question: {
                fr: "Quels sont vos délais pour la création de contenus rédigés ?",
                en: "What are your lead times for written content creation?"
            },
            answer: {
                fr: "Les délais varient en fonction de la complexité et de la longueur du projet. En général, un article optimisé SEO ou un document technique prend entre 2 à 5 jours ouvrés. Pour les projets plus urgents, une livraison rapide peut être convenue selon mes disponibilités.",
                en: "Lead times vary depending on project complexity and length. Generally, an SEO-optimized article or technical document takes 2 to 5 business days. For urgent projects, fast delivery can be agreed based on my availability."
            }
        },
        {
            question: {
                fr: "Comment intégrez-vous l'Intelligence Artificielle dans vos projets ?",
                en: "How do you integrate Artificial Intelligence into your projects?"
            },
            answer: {
                fr: "L'IA est un assistant puissant. Je l'utilise pour structurer les recherches, générer des plans, automatiser la mise en page ou analyser des données. Cependant, tout le contenu final est entièrement révisé, affiné et réécrit par mes soins pour garantir une voix unique, humaine et authentique.",
                en: "AI is a powerful assistant. I use it to structure research, generate outlines, automate formatting, or analyze data. However, all final content is fully reviewed, refined, and rewritten by myself to ensure a unique, human, and authentic voice."
            }
        },
        {
            question: {
                fr: "En quoi consistent vos automatisations No-Code (n8n, Make) ?",
                en: "What do your No-Code automations (n8n, Make) consist of?"
            },
            answer: {
                fr: "L'automatisation No-Code permet de connecter vos outils quotidiens (Notion, Gmail, CRM, WhatsApp) pour supprimer les tâches répétitives. Par exemple : générer automatiquement un rapport PDF dès qu'un formulaire est soumis, envoyer une notification WhatsApp pour chaque prospect, ou synchroniser vos stocks.",
                en: "No-Code automation allows connecting your daily tools (Notion, Gmail, CRM, WhatsApp) to eliminate repetitive tasks. For example: automatically generating a PDF report when a form is submitted, sending a WhatsApp alert for every lead, or syncing inventory."
            }
        },
        {
            question: {
                fr: "Pouvons-nous collaborer à distance ?",
                en: "Can we collaborate remotely?"
            },
            answer: {
                fr: "Absolument. La quasi-totalité de mes collaborations se fait à distance. Nous communiquons via WhatsApp, e-mail, ou planifions des visioconférences sur Google Meet ou Zoom pour faire le point sur l'avancement.",
                en: "Absolutely. Almost all of my collaborations are done remotely. We communicate via WhatsApp, email, or schedule video calls on Google Meet or Zoom to discuss progress."
            }
        }
    ]
};

// ===== STATIC TRANSLATIONS =====
const staticTranslations = {
    fr: {
        "seo-title": "Mouhamadou Halissou SEIDOU IBRAHIM - Expert en Rédaction, IA & Gestion de Projet",
        "seo-descr": "Contactez Mouhamadou Halissou SEIDOU IBRAHIM, freelance expert en rédaction web optimisée IA, ghostwriting et gestion de projet à Parakou, Bénin. Transformons vos idées en succès.",
        "seo-keywords": "rédacteur web bénin, expert IA, freelance gestion de projet, ghostwriter français, consultant SEO parakou, Mouhamadou Halissou",
        "og-title": "Mouhamadou Halissou SEIDOU IBRAHIM | Rédacteur, IA Master & Gestion de Projet",
        "og-descr": "Freelancer expert en rédaction web, IA, outils informatique et gestion de projet. Contactez-moi pour vos projets.",
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-skills": "Compétences",
        "nav-services": "Services",
        "nav-projects": "Projets",
        "nav-testimonials": "Témoignages",
        "nav-faq": "FAQ",
        "nav-estimator": "Estimation",
        "nav-contact": "Contact",
        "projects-subtitle": "Portfolio",
        "projects-title": "Mes Réalisations & Études de Cas",
        "projects-descr": "Découvrez une sélection de projets récents et les résultats mesurables obtenus pour mes clients.",
        "hero-badge": "Disponible pour de nouveaux projets",
        "hero-greeting": "Bonjour, je suis",
        "hero-description": "Je transforme vos idées en réalité grâce à une expertise polyvalente en rédaction professionnelle, intelligence artificielle et gestion de projet. Ensemble, donnons vie à vos ambitions avec créativité, rigueur et innovation.",
        "stat-projects": "Projets réalisés",
        "stat-experience": "Années d'expérience",
        "stat-clients": "Clients satisfaits",
        "btn-start": "Démarrer un projet",
        "btn-services": "Découvrir mes services",
        "hero-follow": "Suivez-moi :",
        "hero-scroll": "Découvrir",
        "about-subtitle": "Qui suis-je ?",
        "about-title": "À propos de moi",
        "about-descr-sub": "Découvrez mon parcours et ma passion pour l'excellence",
        "about-exp-label": "Années d'expérience",
        "about-p1": "Passionné par l'innovation et l'excellence, je mets mon expertise polyvalente au service de vos projets. Fort de 7 années d'expérience et de plus de 369 projets réalisés, j'accompagne entreprises et particuliers dans la concrétisation de leurs ambitions.",
        "about-p2": "Ma force réside dans ma capacité à allier créativité, rigueur méthodologique et maîtrise des technologies émergentes. Que ce soit pour de la rédaction professionnelle, l'intégration d'intelligence artificielle ou la gestion de projets complexes, je m'engage à livrer des résultats qui dépassent vos attentes.",
        "highlight-writing-title": "Rédaction d'excellence",
        "highlight-writing-desc": "Contenus professionnels adaptés à votre audience",
        "highlight-ia-title": "Expertise IA",
        "highlight-ia-desc": "Solutions innovantes basées sur l'intelligence artificielle",
        "highlight-mgmt-title": "Gestion de projet",
        "highlight-mgmt-desc": "Coordination efficace pour des résultats garantis",
        "highlight-acc-title": "Accompagnement personnalisé",
        "highlight-acc-desc": "Support sur-mesure selon vos besoins spécifiques",
        "btn-chat": "Discutons de votre projet",
        "btn-cv": "Télécharger mon CV",
        "skills-subtitle": "Expertise",
        "skills-title": "Mes Compétences",
        "skills-descr": "Un ensemble de compétences diversifiées pour répondre à tous vos besoins",
        "cat-all": "Toutes",
        "cat-writing": "Rédaction",
        "cat-technical": "Techniques",
        "cat-nocode": "No-Code & Automation",
        "cat-management": "Gestion",
        "cat-soft": "Soft Skills",
        "services-subtitle": "Ce que je propose",
        "services-title": "Mes Services",
        "services-descr": "Des solutions professionnelles adaptées à vos besoins spécifiques",
        "services-cta-title": "Prêt à démarrer votre projet ?",
        "services-cta-desc": "Discutons de vos besoins et trouvons ensemble la meilleure solution pour votre réussite.",
        "services-cta-btn": "Contactez-moi maintenant",
        "testimonials-subtitle": "Avis clients",
        "testimonials-title": "Ce que disent mes clients",
        "testimonials-descr": "La satisfaction de mes clients est ma plus grande récompense",
        "contact-subtitle": "Parlons de votre projet",
        "contact-title": "Me Contacter",
        "contact-descr": "Vous avez un projet en tête ? N'hésitez pas à me contacter",
        "contact-info-title": "Restons en contact",
        "contact-info-desc": "Prêt à donner vie à votre projet ? Contactez-moi dès aujourd'hui et discutons de vos besoins. Je suis disponible pour répondre à toutes vos questions.",
        "contact-label-email": "Email",
        "contact-label-phone": "Téléphone",
        "contact-label-loc": "Localisation",
        "contact-label-avail": "Disponibilité",
        "contact-avail-desc": "7j/7 — Réponse sous 24h",
        "contact-loc-desc": "Parakou, Bénin",
        "contact-form-name": "Votre nom *",
        "contact-form-email": "Votre email *",
        "contact-form-phone": "Téléphone",
        "contact-form-subject": "Sujet *",
        "contact-form-msg": "Votre message *",
        "contact-form-btn": "Envoyer le message",
        "footer-tagline": "Transformons ensemble vos idées en succès",
        "footer-nav-title": "Navigation",
        "footer-services-title": "Services",
        "footer-contact-title": "Contact",
        "footer-rights": "Tous droits réservés.",
        "faq-subtitle": "FAQ",
        "faq-title": "Questions Fréquentes",
        "faq-descr": "Trouvez rapidement des réponses aux questions courantes sur mes services et ma méthodologie.",
        
        /* New keys */
        "estimator-subtitle": "Tarification",
        "estimator-title": "Estimateur de Projet",
        "estimator-descr": "Simulez le coût et le délai approximatifs de votre projet en quelques clics.",
        "estimator-service": "Type de service *",
        "est-label-words": "Volume de rédaction (mots)",
        "est-opt-seo": "Optimisation SEO avancée (Mots-clés, Meta tags)",
        "est-label-posts": "Nombre de publications/posts",
        "est-opt-research": "Recherche approfondie & interviews",
        "est-label-flows": "Nombre de flux d'automatisation",
        "est-opt-api": "Intégration d'API tierce complexe",
        "est-label-screens": "Complexité de l'application",
        "level-simple": "Simple (Glide)",
        "level-medium": "Moyenne (Intégrations)",
        "level-adv": "Avancée (Bubble/Custom)",
        "est-opt-db": "Synchronisation base de données externe",
        "est-label-duration": "Durée de l'accompagnement (semaines)",
        "est-opt-fulltime": "Disponibilité intensive / Réunions hebdo",
        "est-label-complexity": "Type de développement",
        "dev-vitrine": "Site Vitrine",
        "dev-ai": "Site + Chatbot IA",
        "dev-portal": "Web App Complète",
        "est-opt-custom": "Entraînement / Fine-tuning de modèle",
        "est-res-title": "Votre Estimation",
        "estimator-res-budget": "Budget indicatif :",
        "estimator-res-time": "Délai estimé :",
        "est-currency-conversion": "* Conversion indicative en FCFA incluse (Taux fixe 655.95)",
        "estimator-btn": "Envoyer ce brief sur WhatsApp",
        "btn-book": "Planifier un appel de 15 min",
        "booking-modal-title": "Réserver un créneau de discussion",
        "book-label-date": "Date de l'appel *",
        "book-select-time": "Heure souhaitée *",
        "book-submit-btn": "Confirmer et envoyer sur WhatsApp",
        "book-form-phone": "Téléphone *",
        "bot-online": "En ligne",
        "bot-welcome": "Bonjour ! Je suis l'assistant IA de Mouhamadou Halissou. Posez-moi vos questions sur son parcours, ses services de rédaction, d'IA, ou d'automatisation n8n/Make !",
        "sug-rates": "Quels sont tes tarifs ?",
        "sug-avail": "Es-tu disponible ?",
        "sug-ai": "Que fais-tu en IA ?",
        "sug-n8n": "Parle-moi de n8n",
        "chatbot-input-placeholder": "Posez une question...",
        "btn-next": "Suivant",
        "btn-prev": "Précédent",
        "form-select-service": "Choisir un service *",
        "form-select-budget": "Budget estimé *",
        "form-srv-writing": "Rédaction Professionnelle & SEO",
        "form-srv-ghost": "Ghostwriting",
        "form-srv-auto": "Automatisation (n8n, Make)",
        "form-srv-nocode": "Applications No-Code",
        "form-srv-mgmt": "Gestion de Projet / Consulting",
        "form-srv-dev": "Développement Web IA / Intégration IA",
        "form-srv-other": "Autre projet",
        "budget-1": "< 150 € (100 000 FCFA)",
        "budget-2": "150 € - 500 € (100 000 - 325 000 FCFA)",
        "budget-3": "500 € - 1 000 € (325 000 - 650 000 FCFA)",
        "budget-4": "> 1 000 € (650 000+ FCFA)"
    },
    en: {
        "seo-title": "Mouhamadou Halissou SEIDOU IBRAHIM - Writing, AI & Project Management Expert",
        "seo-descr": "Contact Mouhamadou Halissou SEIDOU IBRAHIM, freelance expert in AI-optimized web writing, ghostwriting, and project management in Parakou, Benin. Let's turn your ideas into success.",
        "seo-keywords": "web writer benin, AI expert, freelance project management, french ghostwriter, SEO consultant parakou, Mouhamadou Halissou",
        "og-title": "Mouhamadou Halissou SEIDOU IBRAHIM | Writer, AI Master & Project Management",
        "og-descr": "Freelancer expert in web writing, AI, IT tools and project management. Contact me for your projects.",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-services": "Services",
        "nav-projects": "Projects",
        "nav-testimonials": "Testimonials",
        "nav-faq": "FAQ",
        "nav-estimator": "Estimations",
        "nav-contact": "Contact",
        "projects-subtitle": "Portfolio",
        "projects-title": "My Projects & Case Studies",
        "projects-descr": "Discover a selection of recent projects and measurable results achieved for clients.",
        "hero-badge": "Available for new projects",
        "hero-greeting": "Hello, I am",
        "hero-description": "I turn your ideas into reality through a versatile expertise in professional writing, artificial intelligence, and project management. Together, let's bring your ambitions to life with creativity, rigor, and innovation.",
        "stat-projects": "Projects completed",
        "stat-experience": "Years of experience",
        "stat-clients": "Satisfied clients",
        "btn-start": "Start a project",
        "btn-services": "Discover my services",
        "hero-follow": "Follow me:",
        "hero-scroll": "Discover",
        "about-subtitle": "Who am I?",
        "about-title": "About me",
        "about-descr-sub": "Discover my background and my passion for excellence",
        "about-exp-label": "Years of experience",
        "about-p1": "Passionate about innovation and excellence, I put my versatile expertise at the service of your projects. With 7 years of experience and over 369 completed projects, I support companies and individuals in achieving their goals.",
        "about-p2": "My strength lies in my ability to combine creativity, methodological rigor, and mastery of emerging technologies. Whether for professional writing, artificial intelligence integration, or managing complex projects, I am committed to delivering results that exceed your expectations.",
        "highlight-writing-title": "Excellent Writing",
        "highlight-writing-desc": "Professional content tailored to your audience",
        "highlight-ia-title": "AI Expertise",
        "highlight-ia-desc": "Innovative solutions based on artificial intelligence",
        "highlight-mgmt-title": "Project Management",
        "highlight-mgmt-desc": "Effective coordination for guaranteed results",
        "highlight-acc-title": "Personalized Support",
        "highlight-acc-desc": "Tailored support according to your specific needs",
        "btn-chat": "Let's discuss your project",
        "btn-cv": "Download my CV",
        "skills-subtitle": "Expertise",
        "skills-title": "My Skills",
        "skills-descr": "A diverse set of skills to meet all your needs",
        "cat-all": "All",
        "cat-writing": "Writing",
        "cat-technical": "Technical",
        "cat-nocode": "No-Code & Automation",
        "cat-management": "Management",
        "cat-soft": "Soft Skills",
        "services-subtitle": "What I offer",
        "services-title": "My Services",
        "services-descr": "Professional solutions tailored to your specific needs",
        "services-cta-title": "Ready to start your project?",
        "services-cta-desc": "Let's discuss your needs and find the best solution together for your success.",
        "services-cta-btn": "Contact me now",
        "testimonials-subtitle": "Client reviews",
        "testimonials-title": "What my clients say",
        "testimonials-descr": "My clients' satisfaction is my greatest reward",
        "contact-subtitle": "Let's talk about your project",
        "contact-title": "Contact Me",
        "contact-descr": "Have a project in mind? Feel free to contact me",
        "contact-info-title": "Let's stay in touch",
        "contact-info-desc": "Ready to bring your project to life? Contact me today and let's discuss your needs. I am available to answer all your questions.",
        "contact-label-email": "Email",
        "contact-label-phone": "Phone",
        "contact-label-loc": "Location",
        "contact-label-avail": "Availability",
        "contact-avail-desc": "7d/7 — Reply within 24h",
        "contact-loc-desc": "Parakou, Benin",
        "contact-form-name": "Your name *",
        "contact-form-email": "Your email *",
        "contact-form-phone": "Phone",
        "contact-form-subject": "Subject *",
        "contact-form-msg": "Your message *",
        "contact-form-btn": "Send brief",
        "footer-tagline": "Let's turn your ideas into success together",
        "footer-nav-title": "Navigation",
        "footer-services-title": "Services",
        "footer-contact-title": "Contact",
        "footer-rights": "All rights reserved.",
        "faq-subtitle": "FAQ",
        "faq-title": "Frequently Asked Questions",
        "faq-descr": "Quickly find answers to common questions about my services and methodology.",
        
        /* New keys */
        "estimator-subtitle": "Pricing",
        "estimator-title": "Project Estimator",
        "estimator-descr": "Simulate the approximate cost and timeline of your project in a few clicks.",
        "estimator-service": "Service type *",
        "est-label-words": "Writing volume (words)",
        "est-opt-seo": "Advanced SEO optimization (Keywords, Meta tags)",
        "est-label-posts": "Number of publications/posts",
        "est-opt-research": "In-depth research & interviews",
        "est-label-flows": "Number of automation flows",
        "est-opt-api": "Complex API integration",
        "est-label-screens": "Application complexity",
        "level-simple": "Simple (Glide)",
        "level-medium": "Medium (Integrations)",
        "level-adv": "Advanced (Bubble/Custom)",
        "est-opt-db": "External database synchronization",
        "est-label-duration": "Support duration (weeks)",
        "est-opt-fulltime": "Intensive availability / Weekly syncs",
        "est-label-complexity": "Development Type",
        "dev-vitrine": "Showcase Site",
        "dev-ai": "Site + AI Chatbot",
        "dev-portal": "Web App / Portal",
        "est-opt-custom": "AI Model Training / Fine-tuning",
        "est-res-title": "Your Estimation",
        "estimator-res-budget": "Estimated Budget:",
        "estimator-res-time": "Estimated Timeline:",
        "est-currency-conversion": "* Approximate FCFA conversion included (Rate 655.95)",
        "estimator-btn": "Send this brief on WhatsApp",
        "btn-book": "Schedule a 15-min call",
        "booking-modal-title": "Book a meeting slot",
        "book-label-date": "Call Date *",
        "book-select-time": "Desired Time *",
        "book-submit-btn": "Confirm and send on WhatsApp",
        "book-form-phone": "Phone *",
        "bot-online": "Online",
        "bot-welcome": "Hello! I am Mouhamadou Halissou's AI assistant. Ask me questions about his skills, n8n automation, copy writing, or project management!",
        "sug-rates": "What are your rates?",
        "sug-avail": "Are you available?",
        "sug-ai": "What do you do in AI?",
        "sug-n8n": "Tell me about n8n",
        "chatbot-input-placeholder": "Ask a question...",
        "btn-next": "Next",
        "btn-prev": "Previous",
        "form-select-service": "Select a service *",
        "form-select-budget": "Estimated budget *",
        "form-srv-writing": "Professional Writing & SEO",
        "form-srv-ghost": "Ghostwriting",
        "form-srv-auto": "Automation (n8n, Make)",
        "form-srv-nocode": "No-Code Applications",
        "form-srv-mgmt": "Project Management / Consulting",
        "form-srv-dev": "AI Web Development & AI",
        "form-srv-other": "Other project",
        "budget-1": "< 150 € (100,000 FCFA)",
        "budget-2": "150 € - 500 € (100,000 - 325,000 FCFA)",
        "budget-3": "500 € - 1,000 € (325,000 - 650,000 FCFA)",
        "budget-4": "> 1,000 € (650,000+ FCFA)"
    }
};;

// ===== GLOBAL VARIABLES =====
let isLoaded = false;
let currentTestimonial = 0;
let currentLang = 'fr';
let autoPlayInterval = null;
let typingTimeoutId = null;

// ===== DOM ELEMENTS =====
const elements = {
    loadingScreen: document.getElementById('loading-screen'),
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

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio initialization started...');

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(function(registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(function(error) {
                console.error('Service Worker registration failed:', error);
            });
    }

    // Show loading screen
    showLoadingScreen();
    
    // Initialize after loading (reduced to 300ms for a brief animation and faster FCP)
    setTimeout(() => {
        hideLoadingScreen();
        initializeApp();
    }, 300);
});

function initializeApp() {
    setupThemeToggle();
    setupLanguage();
    setupEventListeners();
    generateSkills();
    generateServices();
    generateProjects();
    generateFaq();
    setupFaqAccordion();
    setupTypingAnimation();
    animateCounters();
    setupScrollAnimations();
    setupStaggerAnimations();
    setupHeroParallax();
    setupBookingModal();
    setupProjectModal();
    checkDeepLinkProject();
    setupIntakeFormWizard();
    setupChatbotAssistant();
    renderBottomNav();
    setupMagneticButtons();
    setupSpotlightHover();
    setupScrollProgressBar();
    
    isLoaded = true;
    console.log('✅ Portfolio initialization complete!');
}

function renderBottomNav() {
    if (document.querySelector('.bottom-nav')) return;

    const navContainer = document.createElement('nav');
    navContainer.className = 'bottom-nav';
    navContainer.setAttribute('aria-label', 'Navigation mobile basse');

    const items = [
        { id: 'home', translateKey: 'nav-home', icon: 'fa-solid fa-house' },
        { id: 'about', translateKey: 'nav-about', icon: 'fa-solid fa-user' },
        { id: 'services', translateKey: 'nav-services', icon: 'fa-solid fa-briefcase' },
        { id: 'projects', translateKey: 'nav-projects', icon: 'fa-solid fa-layer-group' },
        { id: 'contact', translateKey: 'nav-contact', icon: 'fa-solid fa-envelope' }
    ];

    navContainer.innerHTML = items.map((item, index) => {
        const isActive = index === 0 ? ' active' : '';
        const label = (staticTranslations[currentLang] && staticTranslations[currentLang][item.translateKey]) || '';
        return `
            <a href="#${item.id}" class="bottom-nav__item nav-link${isActive}" data-translate="${item.translateKey}">
                <div class="bottom-nav__icon-wrapper">
                    <i class="${item.icon}"></i>
                </div>
                <span class="bottom-nav__label">${label}</span>
            </a>
        `;
    }).join('');

    document.body.appendChild(navContainer);

    // Re-bind scroll click event for bottom navigation links
    const newLinks = navContainer.querySelectorAll('.nav-link');
    newLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('href');
            const targetSection = document.querySelector(section);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// ===== LOADING SCREEN =====
function showLoadingScreen() {
    if (elements.loadingScreen) {
        elements.loadingScreen.style.display = 'flex';
    }
}

function hideLoadingScreen() {
    if (elements.loadingScreen) {
        elements.loadingScreen.style.opacity = '0';
        setTimeout(() => {
            elements.loadingScreen.style.display = 'none';
        }, 500);
    }
}

// ===== LOCALIZATION LOGIC =====
function setupLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang');
    if (!lang || (lang !== 'fr' && lang !== 'en')) {
        lang = localStorage.getItem('portfolio-lang');
    }
    if (!lang || (lang !== 'fr' && lang !== 'en')) {
        const browserLang = navigator.language || navigator.userLanguage;
        lang = browserLang.startsWith('en') ? 'en' : 'fr';
    }
    setLanguage(lang, false);

    // Handle browser back/forward history navigation
    window.addEventListener('popstate', () => {
        const params = new URLSearchParams(window.location.search);
        const navLang = params.get('lang') === 'en' ? 'en' : 'fr';
        if (navLang !== currentLang) {
            setLanguage(navLang, false);
        }
    });
}

function setLanguage(lang, updateHistory = true) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    
    // Update URL cleanly without reloading page
    const url = new URL(window.location.href);
    if (lang === 'fr') {
        url.searchParams.delete('lang');
    } else {
        url.searchParams.set('lang', lang);
    }
    
    const newPath = url.pathname + (url.searchParams.toString() ? '?' + url.searchParams.toString() : '') + url.hash;
    if (updateHistory) {
        window.history.pushState({ lang }, '', newPath);
    } else {
        window.history.replaceState({ lang }, '', newPath);
    }
    
    // Update toggle button UI
    if (elements.langToggle) {
        elements.langToggle.querySelector('span').textContent = lang === 'fr' ? 'EN' : 'FR';
    }
    
    // Translate static content
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (staticTranslations[lang] && staticTranslations[lang][key]) {
            const translation = staticTranslations[lang][key];
            
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                const icon = el.querySelector('i');
                const span = el.querySelector('span');
                
                if (span) {
                    span.textContent = translation;
                } else if (icon) {
                    const iconHTML = icon.outerHTML;
                    el.innerHTML = iconHTML + ' ' + translation;
                } else {
                    el.textContent = translation;
                }
            }
        }
    });

    // Sophisticated SEO Dynamic Updates
    if (staticTranslations[lang]) {
        // Document Title
        if (staticTranslations[lang]['seo-title']) {
            document.title = staticTranslations[lang]['seo-title'];
        }
        
        // Meta description
        const metaDescr = document.querySelector('meta[name="description"]');
        if (metaDescr && staticTranslations[lang]['seo-descr']) {
            metaDescr.setAttribute('content', staticTranslations[lang]['seo-descr']);
        }
        
        // Meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords && staticTranslations[lang]['seo-keywords']) {
            metaKeywords.setAttribute('content', staticTranslations[lang]['seo-keywords']);
        }
        
        // Canonical Link
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute('href', lang === 'fr' ? 'https://www.halissoumsi.com/' : 'https://www.halissoumsi.com/?lang=en');
        }
        
        // Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && staticTranslations[lang]['og-title']) {
            ogTitle.setAttribute('content', staticTranslations[lang]['og-title']);
        }
        const ogDescr = document.querySelector('meta[property="og:description"]');
        if (ogDescr && staticTranslations[lang]['og-descr']) {
            ogDescr.setAttribute('content', staticTranslations[lang]['og-descr']);
        }
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', lang === 'fr' ? 'https://www.halissoumsi.com/' : 'https://www.halissoumsi.com/?lang=en');
        }
        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) {
            ogLocale.setAttribute('content', lang === 'fr' ? 'fr_FR' : 'en_US');
        }
        
        // Twitter
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        if (twTitle && staticTranslations[lang]['og-title']) {
            twTitle.setAttribute('content', staticTranslations[lang]['og-title']);
        }
        const twDescr = document.querySelector('meta[name="twitter:description"]');
        if (twDescr && staticTranslations[lang]['og-descr']) {
            twDescr.setAttribute('content', staticTranslations[lang]['og-descr']);
        }
        const twUrl = document.querySelector('meta[name="twitter:url"]');
        if (twUrl) {
            twUrl.setAttribute('content', lang === 'fr' ? 'https://www.halissoumsi.com/' : 'https://www.halissoumsi.com/?lang=en');
        }
        
        // Update Schema JSON-LD Structured Data
        const schemaScript = document.getElementById('schema-ld');
        if (schemaScript) {
            const knowsAboutList = lang === 'fr' 
                ? ["Rédaction web", "Intelligence Artificielle", "Gestion de projet", "Ghostwriting", "SEO", "Automatisation", "No-Code"]
                : ["Web Writing", "Artificial Intelligence", "Project Management", "Ghostwriting", "SEO", "Automation", "No-Code"];
            
            const serviceName = lang === 'fr'
                ? "Mouhamadou Halissou SEIDOU IBRAHIM - Services Freelance"
                : "Mouhamadou Halissou SEIDOU IBRAHIM - Freelance Services";
                
            const schemaData = {
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "Person",
                        "@id": "https://www.halissoumsi.com/#person",
                        "name": "Mouhamadou Halissou SEIDOU IBRAHIM",
                        "url": lang === 'fr' ? "https://www.halissoumsi.com/" : "https://www.halissoumsi.com/?lang=en",
                        "image": "https://www.halissoumsi.com/images/profile-hero.webp",
                        "sameAs": [
                            "https://x.com/HalissouMSI",
                            "https://instagram.com/halissoumsi",
                            "https://wa.me/22967576050"
                        ],
                        "jobTitle": staticTranslations[lang]['seo-title'].split(' - ')[1],
                        "knowsAbout": knowsAboutList,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Parakou",
                            "addressCountry": "BJ"
                        },
                        "email": "mailto:halissous1491@gmail.com",
                        "telephone": "+229-67-57-60-50"
                    },
                    {
                        "@type": "WebSite",
                        "@id": "https://www.halissoumsi.com/#website",
                        "url": lang === 'fr' ? "https://www.halissoumsi.com/" : "https://www.halissoumsi.com/?lang=en",
                        "name": "Mouhamadou Halissou SEIDOU IBRAHIM - Portfolio",
                        "publisher": {
                            "@id": "https://www.halissoumsi.com/#person"
                        },
                        "inLanguage": lang === 'fr' ? "fr-FR" : "en-US"
                    },
                    {
                        "@type": "WebPage",
                        "@id": "https://www.halissoumsi.com/#webpage",
                        "url": lang === 'fr' ? "https://www.halissoumsi.com/" : "https://www.halissoumsi.com/?lang=en",
                        "name": staticTranslations[lang]['seo-title'],
                        "isPartOf": {
                            "@id": "https://www.halissoumsi.com/#website"
                        },
                        "about": {
                            "@id": "https://www.halissoumsi.com/#person"
                        },
                        "description": staticTranslations[lang]['seo-descr'],
                        "inLanguage": lang === 'fr' ? "fr-FR" : "en-US"
                    },
                    {
                        "@type": "ProfessionalService",
                        "@id": "https://www.halissoumsi.com/#service",
                        "name": serviceName,
                        "image": "https://www.halissoumsi.com/images/profile-hero.webp",
                        "priceRange": "$$",
                        "telephone": "+229-67-57-60-50",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Parakou",
                            "addressCountry": "BJ"
                        },
                        "url": lang === 'fr' ? "https://www.halissoumsi.com/" : "https://www.halissoumsi.com/?lang=en",
                        "provider": {
                            "@id": "https://www.halissoumsi.com/#person"
                        }
                    }
                ]
            };
            schemaScript.textContent = JSON.stringify(schemaData, null, 2);
        }
    }
    
    // Regenerate sections if app is loaded
    if (isLoaded) {
        generateSkills();
        generateServices();
        generateProjects();
        generateFaq();
        setupFaqAccordion();
        setupTypingAnimation();
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Navigation toggle
    if (elements.navToggle) {
        elements.navToggle.addEventListener('click', toggleNav);
    }
    
    // Language toggle
    if (elements.langToggle) {
        elements.langToggle.addEventListener('click', () => {
            const nextLang = currentLang === 'fr' ? 'en' : 'fr';
            setLanguage(nextLang);
        });
    }
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('href');
            document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            if (elements.navMenu) {
                elements.navMenu.classList.remove('active');
            }
        });
    });
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    

    
    // Skills category filters
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterSkills(btn.dataset.category);
        });
    });
    
    // Project category filters
    document.querySelectorAll('.project-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.project-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProjects(btn.dataset.category);
        });
    });
}

function toggleNav() {
    if (elements.navMenu) {
        const isOpen = elements.navMenu.classList.toggle('active');
        if (elements.navToggle) {
            elements.navToggle.setAttribute('aria-expanded', isOpen);
        }
    }
}

function handleScroll() {
    if (elements.navbar) {
        if (window.scrollY > 100) {
            elements.navbar.classList.add('scrolled');
        } else {
            elements.navbar.classList.remove('scrolled');
        }
    }
    

    
    updateActiveNavLink();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== TYPING ANIMATION =====
function setupTypingAnimation() {
    if (!elements.typingText) return;
    
    if (typingTimeoutId) {
        clearTimeout(typingTimeoutId);
    }
    
    const roles = portfolioData.profile.roles[currentLang];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentRole = roles[currentRoleIndex];
        
        if (isDeleting) {
            elements.typingText.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            elements.typingText.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentCharIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typeSpeed = 500;
        }
        
        typingTimeoutId = setTimeout(type, typeSpeed);
    }
    
    type();
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        let started = false;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    counter.textContent = '0';
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(counter);
    });
}

// ===== GENERATE SKILLS =====
function generateSkills() {
    if (!elements.skillsGrid) return;
    
    elements.skillsGrid.innerHTML = '';
    
    portfolioData.skills.forEach(skill => {
        const name = typeof skill.name === 'string' ? skill.name : skill.name[currentLang];
        const skillCard = document.createElement('div');
        skillCard.className = `skill-card ${skill.category}`;
        skillCard.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${name}</span>
                <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%"></div>
            </div>
        `;
        elements.skillsGrid.appendChild(skillCard);
        
        setTimeout(() => {
            const progressBar = skillCard.querySelector('.skill-progress');
            if (progressBar) progressBar.style.width = `${skill.level}%`;
        }, 100);
    });
}

function filterSkills(category) {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// ===== GENERATE SERVICES =====
function generateServices() {
    if (!elements.servicesGrid) return;
    
    elements.servicesGrid.innerHTML = '';
    
    portfolioData.services.forEach(service => {
        const title = typeof service.title === 'string' ? service.title : service.title[currentLang];
        const description = typeof service.description === 'string' ? service.description : service.description[currentLang];
        const serviceCard = document.createElement('article');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon-wrap" style="--service-color: ${service.color}">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-title">${title}</h3>
            <p class="service-description">${description}</p>
        `;
        elements.servicesGrid.appendChild(serviceCard);
    });
}

// ===== GENERATE PROJECTS / REALIZATIONS =====
function generateProjects() {
    if (!elements.projectsGrid) return;
    
    elements.projectsGrid.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const title = project.title[currentLang];
        const summary = project.summary[currentLang];
        const btnText = currentLang === 'fr' ? "Voir l'étude de cas" : "View Case Study";
        
        const card = document.createElement('article');
        card.className = `project-card ${project.category}`;
        card.setAttribute('data-id', project.id);
        
        card.innerHTML = `
            <div class="project-header" style="--project-color: ${project.color}">
                <div class="project-icon-badge">
                    <i class="${project.icon}"></i>
                </div>
                <span class="project-metric-badge">${project.metric}</span>
            </div>
            <div class="project-body">
                <h3 class="project-title">${title}</h3>
                <p class="project-summary">${summary}</p>
                <div class="project-tools">
                    ${project.tools.map(t => `<span class="project-tool-tag">${t}</span>`).join('')}
                </div>
            </div>
            <div class="project-footer">
                <button class="btn btn-outline btn-sm open-project-btn" data-id="${project.id}">
                    <span>${btnText}</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        elements.projectsGrid.appendChild(card);
    });
    
    // Attach click listeners to open modal
    document.querySelectorAll('.open-project-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projId = btn.getAttribute('data-id');
            openCaseStudyModal(projId);
        });
    });
}

function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'flex';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

function setupProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('project-modal-close');
    const overlay = document.getElementById('project-modal-overlay');

    if (!modal) return;

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        // Clean URL searchParams if project parameter exists
        try {
            const url = new URL(window.location.href);
            if (url.searchParams.has('project')) {
                url.searchParams.delete('project');
                const cleanUrl = url.pathname + (url.search ? url.search : '') + (url.hash || '');
                window.history.pushState({}, '', cleanUrl);
            }
        } catch (e) {
            console.warn('Could not update history state on modal close', e);
        }
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openCaseStudyModal(projectId, updateUrl = true) {
    const modal = document.getElementById('project-modal');
    const badge = document.getElementById('project-modal-badge');
    const titleEl = document.getElementById('project-modal-title');
    const bodyEl = document.getElementById('project-modal-body');

    if (!modal || !bodyEl) return;

    const proj = portfolioData.projects.find(p => p.id === projectId);
    if (!proj) return;

    const title = proj.title[currentLang];
    const challenge = proj.challenge[currentLang];
    const solution = proj.solution[currentLang];
    const results = proj.results[currentLang];

    const challengeLabel = currentLang === 'fr' ? 'Le Challenge Client' : 'Client Challenge';
    const solutionLabel = currentLang === 'fr' ? 'La Solution Sur-Mesure' : 'Custom Solution';
    const resultsLabel = currentLang === 'fr' ? 'Résultats Obtenus' : 'Key Results';
    const toolsLabel = currentLang === 'fr' ? 'Outils & Technologies' : 'Tools & Tech';
    const ctaBtnText = currentLang === 'fr' ? 'Discuter d\'un projet similaire' : 'Discuss a Similar Project';
    const copyLinkText = currentLang === 'fr' ? 'Copier le lien direct' : 'Copy direct link';

    const categoryNames = {
        compliance: { fr: 'Conformité légale associative', en: 'Association Legal Compliance' },
        writing: { fr: 'Rédaction & Contenu', en: 'Writing & Content' },
        automation: { fr: 'Automatisation n8n', en: 'n8n Automation' },
        webdev: { fr: 'Développement web', en: 'Web Development' }
    };

    const catName = categoryNames[proj.category] ? categoryNames[proj.category][currentLang] : proj.category;

    if (badge) {
        badge.textContent = catName;
        badge.style.background = proj.color;
    }

    if (titleEl) titleEl.textContent = title;

    bodyEl.innerHTML = `
        <div class="case-study-metric" style="border-left: 4px solid ${proj.color};">
            <span class="metric-value">${proj.metric}</span>
        </div>
        
        <div class="case-study-section">
            <h4><i class="fas fa-exclamation-triangle" style="color: #f59e0b;"></i> ${challengeLabel}</h4>
            <p>${challenge}</p>
        </div>

        <div class="case-study-section">
            <h4><i class="fas fa-lightbulb" style="color: ${proj.color};"></i> ${solutionLabel}</h4>
            <p>${solution}</p>
        </div>

        <div class="case-study-section">
            <h4><i class="fas fa-chart-line" style="color: #10b981;"></i> ${resultsLabel}</h4>
            <ul class="case-study-results">
                ${results.map(r => `<li><i class="fas fa-check-circle"></i> <span>${r}</span></li>`).join('')}
            </ul>
        </div>

        <div class="case-study-section">
            <h4><i class="fas fa-tools"></i> ${toolsLabel}</h4>
            <div class="project-tools">
                ${proj.tools.map(t => `<span class="project-tool-tag">${t}</span>`).join('')}
            </div>
        </div>

        <div class="case-study-cta" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <a href="#contact" class="btn btn-primary btn-full close-modal-navigate">
                <i class="fab fa-whatsapp"></i>
                <span>${ctaBtnText}</span>
            </a>
            <button type="button" class="btn btn-outline btn-full copy-project-link-btn" style="justify-content: center; gap: 0.5rem; border-color: var(--primary-color); color: var(--primary-color);">
                <i class="fas fa-link"></i>
                <span>${copyLinkText}</span>
            </button>
        </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Update URL parameter cleanly for deep linking
    if (updateUrl) {
        try {
            const url = new URL(window.location.href);
            url.searchParams.set('project', proj.id);
            window.history.pushState({ project: proj.id }, '', url.pathname + url.search + '#projects');
        } catch (e) {
            console.warn('Could not update history state on modal open', e);
        }
    }

    // Click CTA to close modal & scroll to contact
    const ctaLink = bodyEl.querySelector('.close-modal-navigate');
    if (ctaLink) {
        ctaLink.addEventListener('click', () => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        });
    }

    // Copy project link button
    const copyBtn = bodyEl.querySelector('.copy-project-link-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const shareUrl = `${window.location.origin}${window.location.pathname}?project=${proj.id}#projects`;
            navigator.clipboard.writeText(shareUrl).then(() => {
                const btnSpan = copyBtn.querySelector('span');
                const originalText = btnSpan.textContent;
                btnSpan.textContent = currentLang === 'fr' ? '✓ Lien copié !' : '✓ Link copied!';
                setTimeout(() => {
                    btnSpan.textContent = originalText;
                }, 2500);
            }).catch(err => {
                console.error('Copy failed', err);
            });
        });
    }
}

function checkDeepLinkProject() {
    const urlParams = new URLSearchParams(window.location.search);
    const projId = urlParams.get('project');
    if (projId && portfolioData.projects.some(p => p.id === projId)) {
        setTimeout(() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
            openCaseStudyModal(projId, false);
        }, 450);
    }
}



// ===== FAQ ACCORDION GENERATION =====
function generateFaq() {
    if (!elements.faqContainer) return;
    
    elements.faqContainer.innerHTML = '';
    
    portfolioData.faq.forEach(item => {
        const question = item.question[currentLang];
        const answer = item.answer[currentLang];
        
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <button class="faq-question" aria-expanded="false">
                <span>${question}</span>
                <i class="fas fa-plus"></i>
            </button>
            <div class="faq-answer">
                <p>${answer}</p>
            </div>
        `;
        elements.faqContainer.appendChild(faqItem);
    });
}

function setupFaqAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isOpen = faqItem.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                const icon = item.querySelector('.faq-question i');
                if (icon) icon.className = 'fas fa-plus';
            });
            
            if (!isOpen) {
                faqItem.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
                const icon = question.querySelector('i');
                if (icon) icon.className = 'fas fa-minus';
            }
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    try {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.utils.toArray('.section').forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 1
                }
            });
        });

        // Section Header Animations (Title, Subtitle, Description)
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header.children, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        });
    } catch (e) {
        console.warn('⚠️ GSAP scroll animations failed to initialize:', e);
    }
}

// ===== STAGGERED FADE-IN ANIMATIONS =====
function setupStaggerAnimations() {
    const animatedElements = document.querySelectorAll('.skill-card, .service-card, .project-card, .highlight-item, .contact-item, .faq-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const siblings = entry.target.parentElement.children;
                const siblingIndex = Array.from(siblings).indexOf(entry.target);
                
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, siblingIndex * 80);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add animation stylesheet class
const styleSheet = document.createElement('style');
styleSheet.textContent = `.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(styleSheet);

// ===== HERO PARALLAX =====
function setupHeroParallax() {
    const hero = document.querySelector('.hero');
    const particles = document.querySelector('.hero-particles');
    const heroImage = document.querySelector('.hero-image-container');
    
    if (!hero || !particles) return;
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        particles.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        
        if (heroImage) {
            heroImage.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
        }
    });
    
    hero.addEventListener('mouseleave', () => {
        particles.style.transform = 'translate(0, 0)';
        particles.style.transition = 'transform 0.5s ease';
        if (heroImage) {
            heroImage.style.transform = 'translate(0, 0)';
            heroImage.style.transition = 'transform 0.5s ease';
        }
    });
    
    hero.addEventListener('mouseenter', () => {
        particles.style.transition = 'none';
        if (heroImage) heroImage.style.transition = 'none';
    });
}

// ===== THEME TOGGLE =====
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;
    
    if (!themeToggle || !themeIcon) return;
    
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(themeIcon, savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', next);
        localStorage.setItem('portfolio-theme', next);
        updateThemeIcon(themeIcon, next);
    });
}

function updateThemeIcon(icon, theme) {
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}



// ===== CALENDLY BOOKING MODAL SYSTEM =====
function setupBookingModal() {
    const openBtn = document.getElementById('open-booking-btn');
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.getElementById('booking-modal-close');
    const overlay = document.getElementById('booking-modal-overlay');
    const bookingForm = document.getElementById('booking-form');
    const dateInput = document.getElementById('book-date');

    if (!modal) return;

    // Set tomorrow's date as min date
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];
    }

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Stop page scrolling when modal open
        });
    }

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Re-enable page scrolling
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    // Escape key press to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Handle form submission to WhatsApp
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('book-name').value.trim();
            const phone = document.getElementById('book-phone').value.trim();
            const dateVal = document.getElementById('book-date').value;
            const timeVal = document.getElementById('book-time').value;

            if (!name || !phone || !dateVal || !timeVal) {
                return;
            }

            let title, nameLabel, phoneLabel, dateLabel, timeLabel, followUp;
            if (currentLang === 'fr') {
                title = "*Nouveau rendez-vous planifié*";
                nameLabel = "*Nom :*";
                phoneLabel = "*Téléphone :*";
                dateLabel = "*Date :*";
                timeLabel = "*Heure :*";
                followUp = "Je souhaite planifier cet appel avec vous.";
            } else {
                title = "*New Scheduled Call*";
                nameLabel = "*Name:*";
                phoneLabel = "*Phone:*";
                dateLabel = "*Date:*";
                timeLabel = "*Time:*";
                followUp = "I would like to schedule this call with you.";
            }

            // Format date to DD/MM/YYYY
            let formattedDate = dateVal;
            try {
                const parts = dateVal.split('-');
                if (parts.length === 3) {
                    formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
                }
            } catch (err) {
                console.error("Error formatting date", err);
            }

            const text = `${title}%0A%0A` +
                         `${nameLabel} ${encodeURIComponent(name)}%0A` +
                         `${phoneLabel} ${encodeURIComponent(phone)}%0A` +
                         `${dateLabel} ${encodeURIComponent(formattedDate)}%0A` +
                         `${timeLabel} ${encodeURIComponent(timeVal)}%0A%0A` +
                         `${encodeURIComponent(followUp)}`;

            const waNumber = '22967576050';
            const waURL = `https://wa.me/${waNumber}?text=${text}`;

            // Open WhatsApp link with fallback
            let popupOpened = false;
            try {
                const win = window.open(waURL, '_blank', 'noopener,noreferrer');
                if (win && !win.closed && typeof win.closed !== 'undefined') {
                    popupOpened = true;
                }
            } catch (err) {
                console.warn('Booking popup blocked');
            }
            if (!popupOpened) {
                window.location.href = waURL;
            }

            // Reset form and close modal
            bookingForm.reset();
            closeModal();
        });
    }
}

// ===== MULTI-STEP PROJECT INTAKE FORM WIZARD =====
function setupIntakeFormWizard() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const panels = form.querySelectorAll('.form-step-panel');
    const steps = document.querySelectorAll('.progress-step');
    const fill = document.getElementById('progress-bar-fill');
    
    let currentStep = 1;

    // Next step clicks
    form.querySelectorAll('.next-step').forEach(btn => {
        btn.addEventListener('click', () => {
            // Check validation of inputs on current step
            const currentPanel = form.querySelector(`.form-step-panel[data-step="${currentStep}"]`);
            const inputs = currentPanel.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.reportValidity();
                    isValid = false;
                }
            });

            if (isValid) {
                goToStep(currentStep + 1);
            }
        });
    });

    // Previous step clicks
    form.querySelectorAll('.prev-step').forEach(btn => {
        btn.addEventListener('click', () => {
            goToStep(currentStep - 1);
        });
    });

    function goToStep(step) {
        if (step < 1 || step > panels.length) return;

        // Hide active panel, show target panel
        panels.forEach(p => p.classList.remove('active'));
        const targetPanel = form.querySelector(`.form-step-panel[data-step="${step}"]`);
        if (targetPanel) targetPanel.classList.add('active');

        // Update progress indicators
        steps.forEach(s => {
            const sNum = parseInt(s.getAttribute('data-step'));
            s.classList.remove('active', 'complete');
            if (sNum === step) {
                s.classList.add('active');
            } else if (sNum < step) {
                s.classList.add('complete');
            }
        });

        // Update fill width (0% on step 1, 50% on step 2, 100% on step 3)
        const percent = ((step - 1) / (panels.length - 1)) * 80; // keep within 80% boundary
        if (fill) fill.style.width = `${percent}%`;

        currentStep = step;
    }

    // Submit form (Email default via submit button, WhatsApp via WA button)
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitFormData('email');
    });

    const waBtn = document.getElementById('btn-submit-whatsapp');
    if (waBtn) {
        waBtn.addEventListener('click', function() {
            // Validate required inputs on step 3 first
            const currentPanel = form.querySelector('.form-step-panel[data-step="3"]');
            const inputs = currentPanel ? currentPanel.querySelectorAll('textarea[required], input[required]') : [];
            let isValid = true;
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.reportValidity();
                    isValid = false;
                }
            });
            if (isValid) {
                submitFormData('whatsapp');
            }
        });
    }

    function submitFormData(targetType) {
        const formMessage = document.getElementById('form-message');
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone')?.value.trim() || (currentLang === 'fr' ? 'Non fourni' : 'Not provided');
        const service = document.getElementById('project-service').value;
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (targetType === 'email') {
            const mailSubject = encodeURIComponent(`[Brief Website] ${subject} - ${name}`);
            const mailBody = encodeURIComponent(
                `Bonjour Mouhamadou Halissou,\n\n` +
                `Voici mon brief de projet envoyé depuis votre site web :\n\n` +
                `• Nom: ${name}\n` +
                `• Email: ${email}\n` +
                `• Téléphone: ${phone}\n` +
                `• Service: ${service}\n` +
                `• Sujet: ${subject}\n\n` +
                `• Message / Brief:\n${message}\n\n` +
                `Cordialement,\n${name}`
            );
            const mailtoURL = `mailto:halissous1491@gmail.com?subject=${mailSubject}&body=${mailBody}`;
            window.location.href = mailtoURL;

            if (formMessage) {
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                formMessage.innerHTML = currentLang === 'fr' 
                    ? '✓ Votre message a été préparé dans votre application d\'email ! Merci.'
                    : '✓ Your message has been prepared in your email application! Thank you.';
            }
        } else {
            // WhatsApp route
            const whatsappTitle = currentLang === 'fr' ? '*Nouveau brief de projet depuis le site*' : '*New Project Brief from website*';
            const labelName = currentLang === 'fr' ? '*Nom:*' : '*Name:*';
            const labelEmail = currentLang === 'fr' ? '*Email:*' : '*Email:*';
            const labelPhone = currentLang === 'fr' ? '*Téléphone:*' : '*Phone:*';
            const labelService = currentLang === 'fr' ? '*Service demandé:*' : '*Requested Service:*';
            const labelSubject = currentLang === 'fr' ? '*Sujet:*' : '*Subject:*';
            const labelMessage = currentLang === 'fr' ? '*Message / Brief:*' : '*Message / Brief:*';

            const whatsappMessage = `${whatsappTitle}%0A%0A` +
                `${labelName} ${encodeURIComponent(name)}%0A` +
                `${labelEmail} ${encodeURIComponent(email)}%0A` +
                `${labelPhone} ${encodeURIComponent(phone)}%0A` +
                `${labelService} ${encodeURIComponent(service)}%0A` +
                `${labelSubject} ${encodeURIComponent(subject)}%0A%0A` +
                `${labelMessage}%0A${encodeURIComponent(message)}`;

            const whatsappNumber = '22967576050';
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

            let popupOpened = false;
            try {
                const win = window.open(whatsappURL, '_blank', 'noopener,noreferrer');
                if (win && !win.closed && typeof win.closed !== 'undefined') {
                    popupOpened = true;
                }
            } catch (e) {
                console.warn('Popup blocked, using fallback navigation');
            }

            if (!popupOpened) {
                window.location.href = whatsappURL;
            }

            if (formMessage) {
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                formMessage.innerHTML = currentLang === 'fr' 
                    ? '✓ Redirection vers WhatsApp...' 
                    : '✓ Redirecting to WhatsApp...';
            }
        }

        setTimeout(() => {
            form.reset();
            goToStep(1);
        }, 3000);
    }
}

// ===== AI ASSISTANT CHATBOT =====
function setupChatbotAssistant() {
    const trigger = document.getElementById('chatbot-trigger');
    const windowEl = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const inputForm = document.getElementById('chatbot-input-form');
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');
    const suggestionsContainer = document.getElementById('chatbot-suggestions');

    if (!trigger || !windowEl) return;

    // Open/Close toggle
    trigger.addEventListener('click', () => {
        const isOpen = windowEl.classList.toggle('active');
        windowEl.setAttribute('aria-hidden', !isOpen);
        
        // Hide badge on open
        const badge = trigger.querySelector('.chat-badge');
        if (badge) badge.style.display = 'none';

        if (isOpen) {
            input.focus();
            scrollToBottom();
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            windowEl.classList.remove('active');
            windowEl.setAttribute('aria-hidden', 'true');
        });
    }

    // Keyword chatbot responses
    const botResponses = {
        fr: {
            rates: "Mes tarifs dépendent de la nature du projet. En rédaction SEO, c'est environ 0,06 €/mot. Pour les automatisations n8n ou Make, à partir de 150 € par workflow. Pour les applications No-Code, cela démarre à 400 €. N'hésitez pas à me contacter via le formulaire ou sur WhatsApp pour obtenir un devis personnalisé !",
            avail: "Je suis disponible pour de nouvelles opportunités de projet en freelance à partir de cette semaine. Quel est votre projet ?",
            ai: "Je vous accompagne dans l'intégration d'outils d'IA (GPT-4, Claude, Gemini) : chatbots de support client personnalisés, génération de documents PDF automatisée et formations en Prompt Engineering.",
            n8n: "n8n est une solution d'automatisation surpuissante. Elle permet de connecter vos outils (Notion, Gmail, CRM, WhatsApp) pour éradiquer les tâches répétitives. J'ai réalisé de nombreux workflows de synchronisation et de relance automatique.",
            hello: "Bonjour ! Ravi de vous accueillir sur mon site. Posez-moi toutes vos questions sur mes compétences, mes tarifs ou ma disponibilité !",
            default: "Merci pour votre question ! Pour un brief détaillé ou une demande spécifique, vous pouvez m'envoyer un message via mon formulaire multi-étapes ou directement sur WhatsApp. Discutons de votre projet !"
        },
        en: {
            rates: "My rates vary based on your project. For copywriting, it is about €0.06/word. n8n/Make automation starts at €150 per flow. Custom No-Code apps start at €400. Feel free to contact me via the form or on WhatsApp to get a custom quote!",
            avail: "I am currently open to new freelance project collaborations starting this week. Tell me more about your requirements!",
            ai: "I integrate advanced AI models (GPT-4, Claude, Gemini) into business workflows. This includes custom customer support chatbots, automated document generation, and advanced Prompt Engineering training.",
            n8n: "n8n is a powerful workflow automation tool that connects Notion, Gmail, CRM, WhatsApp, etc. I use it to build robust, automated synchronization and notification systems that run 24/7.",
            hello: "Hello! Nice to meet you. Ask me anything about my experience, rates, or availability!",
            default: "Thanks for asking! For custom projects or quotes, feel free to contact me directly on WhatsApp. Let's make your project a success!"
        }
    };

    // Handle suggestion button clicks
    if (suggestionsContainer) {
        suggestionsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.suggestion-btn');
            if (!btn) return;

            const qKey = btn.getAttribute('data-question');
            const userMsgText = btn.textContent;
            
            // Send user message
            appendMessage(userMsgText, 'user');
            
            // Trigger bot response
            triggerBotResponse(qKey);
        });
    }

    // Submit input message
    if (inputForm) {
        inputForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (!text) return;

            appendMessage(text, 'user');
            input.value = '';

            // Analyze input for keyword matching
            let matchedKey = 'default';
            const lower = text.toLowerCase();

            if (lower.includes('tarif') || lower.includes('prix') || lower.includes('chiffre') || lower.includes('combien') || lower.includes('cout') || lower.includes('coût') || lower.includes('rate') || lower.includes('price') || lower.includes('budget') || lower.includes('argent') || lower.includes('pay')) {
                matchedKey = 'rates';
            } else if (lower.includes('dispo') || lower.includes('libre') || lower.includes('temps') || lower.includes('disponib') || lower.includes('avail') || lower.includes('calendar') || lower.includes('calendrier')) {
                matchedKey = 'avail';
            } else if (lower.includes('ia') || lower.includes('ai') || lower.includes('gpt') || lower.includes('chat') || lower.includes('claude') || lower.includes('gemini') || lower.includes('prompt') || lower.includes('intellig') || lower.includes('robot')) {
                matchedKey = 'ai';
            } else if (lower.includes('n8n') || lower.includes('make') || lower.includes('zapier') || lower.includes('automat') || lower.includes('workflow') || lower.includes('flux')) {
                matchedKey = 'n8n';
            } else if (lower.includes('bonjour') || lower.includes('salut') || lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('coucou')) {
                matchedKey = 'hello';
            }

            triggerBotResponse(matchedKey);
        });
    }

    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${sender}`;
        
        // Remplacement basique des astérisques markdown par des balises strong
        const formattedText = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
        
        msgDiv.innerHTML = `
            <div class="message-content">
                <p>${formattedText}</p>
            </div>
        `;
        messagesContainer.appendChild(msgDiv);
        scrollToBottom();
        return msgDiv;
    }

    function triggerBotResponse(key) {
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot';
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        scrollToBottom();

        // Delay response to simulate thinking
        setTimeout(() => {
            // Remove typing indicator
            typingDiv.remove();

            // Append bot response
            const responseText = botResponses[currentLang][key] || botResponses[currentLang]['default'];
            appendMessage(responseText, 'bot');
        }, 1200);
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// ===== UTILITY FUNCTIONS =====
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== MAGNETIC BUTTONS =====
function setupMagneticButtons() {
    if (typeof gsap === 'undefined') return;
    
    const magneticBtns = document.querySelectorAll('.btn, .social-link, .chatbot-trigger');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(btn, {
                x: x * 0.35,
                y: y * 0.35,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
}

// ===== SPOTLIGHT HOVER EFFECTS =====
function setupSpotlightHover() {
    const cards = document.querySelectorAll('.skill-card, .service-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// ===== SCROLL PROGRESS BAR =====
function setupScrollProgressBar() {
    const bar = document.getElementById('scroll-bar');
    if (!bar) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;
        const scrollPercent = (scrollTop / docHeight) * 100;
        bar.style.width = `${scrollPercent}%`;
    }, { passive: true });
}

console.log('📱 Portfolio by Mouhamadou Halissou SEIDOU IBRAHIM');
console.log('🌐 https://www.halissoumsi.com');
