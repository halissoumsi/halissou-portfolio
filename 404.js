(function () {
    const theme = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    const lang = localStorage.getItem('portfolio-lang') || 'fr';
    document.documentElement.setAttribute('lang', lang);

    const translations = {
        fr: {
            docTitle: "404 — Page introuvable | Mouhamadou Halissou",
            eyebrow: "Erreur 404",
            title: "Page introuvable",
            description: "La page demandée n'existe pas ou a été déplacée. Vous pouvez revenir directement à l'accueil du portfolio.",
            btn: "Retour à l'accueil"
        },
        en: {
            docTitle: "404 — Page Not Found | Mouhamadou Halissou",
            eyebrow: "Error 404",
            title: "Page Not Found",
            description: "The page you are looking for does not exist or has been moved. Return to the portfolio home page.",
            btn: "Back to Home"
        }
    };

    const dict = translations[lang] || translations.fr;
    document.title = dict.docTitle;
    document.querySelectorAll('[data-translate]').forEach((el) => {
        const key = el.getAttribute('data-translate');
        if (dict[key]) el.textContent = dict[key];
    });
})();
