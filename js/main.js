// Attend que le contenu de la page soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DÉFINITION DES TRADUCTIONS ---
    // C'est ici que vous gérez tout le texte de votre site.
    // Pour ajouter du texte, ajoutez une clé ici (ex: "newText") et l'attribut data-key="newText" dans le HTML.
    const translations = {
        fr: {
            pageTitle: "Mon Portfolio Personnel",
            navAbout: "À propos",
            navExperience: "Parcours",
            navSkills: "Compétences",
            navGoals: "Objectifs",
            navContact: "Contact",
            heroName: "Prénom Nom", // Remplacez par votre nom
            heroSubtitle: "Étudiante en développement web et passionnée par les nouvelles technologies.",
            experienceTitle: "Mon parcours",
            exp1_title: "Bac général (2024)",
            exp2_title: "Truc rayon (2025)",
            exp3_title: "Stage de première année (2025)",
            exp4_title: "Ramassage de petits fruits (2021-2024)",
            skillsTitle: "Compétences",
            skillsSubTitle: "Langages de programmation",
            goalsTitle: "Mes réflexions et objectifs",
            goal1_title: "Ce que j'ai aimé",
            goal1_text: "Ici, décrivez les expériences passées, les matières ou les projets que vous avez particulièrement appréciés et pourquoi.",
            goal2_title: "Ce que je veux creuser",
            goal2_text: "Mentionnez ici les domaines, technologies ou sujets que vous souhaitez approfondir.",
            goal3_title: "Ce que je veux faire plus tard",
            goal3_text: "Parlez de vos aspirations professionnelles, du type de métier ou de secteur qui vous attire.",
            goal4_title: "Objectifs de soft skills",
            goal4_text: "Listez les compétences humaines (communication, travail d'équipe, etc.) que vous souhaitez développer.",
            goal5_title: "Parcours de certifications",
            goal5_text: "Indiquez ici les certifications que vous visez pour enrichir votre profil.",
            contactTitle: "Me contacter",
            contactText: "N'hésitez pas à me contacter pour toute opportunité ou simplement pour échanger.",
            contactButton: "Envoyez-moi un email",
            footerText: "© 2025 - Prénom Nom. Tous droits réservés."
        },
        en: {
            pageTitle: "My Personal Portfolio",
            navAbout: "About",
            navExperience: "Experience",
            navSkills: "Skills",
            navGoals: "Goals",
            navContact: "Contact",
            heroName: "Firstname Lastname", // Replace with your name
            heroSubtitle: "Web development student and passionate about new technologies.",
            experienceTitle: "My journey",
            exp1_title: "General Baccalaureate (2024)",
            exp2_title: "Shelf stocking (2025)",
            exp3_title: "First-year internship (2025)",
            exp4_title: "Berry picking (2021-2024)",
            skillsTitle: "Skills",
            skillsSubTitle: "Programming Languages",
            goalsTitle: "My Reflections and Goals",
            goal1_title: "What I Liked",
            goal1_text: "Describe past experiences, subjects, or projects you particularly enjoyed and why.",
            goal2_title: "What I Want to Explore",
            goal2_text: "Mention the fields, technologies, or topics you want to delve into.",
            goal3_title: "What I Want to Do Later",
            goal3_text: "Talk about your career aspirations, the type of job or industry that attracts you.",
            goal4_title: "Soft Skills Goals",
            goal4_text: "List the soft skills (communication, teamwork, etc.) you want to develop.",
            goal5_title: "Certification Path",
            goal5_text: "Indicate the certifications you are aiming for to enhance your profile.",
            contactTitle: "Contact Me",
            contactText: "Feel free to contact me for any opportunities or just to connect.",
            contactButton: "Send me an email",
            footerText: "© 2025 - Firstname Lastname. All rights reserved."
        }
    };

    // --- 2. LOGIQUE DE CHANGEMENT DE LANGUE ---

    const langFrButton = document.getElementById('lang-fr');
    const langEnButton = document.getElementById('lang-en');

    // Fonction pour appliquer les traductions
    const setLanguage = (lang) => {
        // Met à jour le texte de tous les éléments avec un attribut `data-key`
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Met à jour la balise `lang` de la page
        document.documentElement.lang = lang;

        // Gère la classe 'active' sur les boutons
        if (lang === 'fr') {
            langFrButton.classList.add('active');
            langEnButton.classList.remove('active');
        } else {
            langEnButton.classList.add('active');
            langFrButton.classList.remove('active');
        }
        
        // Sauvegarde le choix de la langue dans le navigateur
        localStorage.setItem('preferredLanguage', lang);
    };

    // Ajoute les écouteurs d'événements sur les boutons
    langFrButton.addEventListener('click', () => setLanguage('fr'));
    langEnButton.addEventListener('click', () => setLanguage('en'));

    // --- 3. INITIALISATION AU CHARGEMENT DE LA PAGE ---

    // Vérifie si une langue a été sauvegardée, sinon utilise la langue du navigateur, ou le français par défaut
    const preferredLanguage = localStorage.getItem('preferredLanguage') || (navigator.language.split('-')[0] === 'fr' ? 'fr' : 'en');
    setLanguage(preferredLanguage);
});
