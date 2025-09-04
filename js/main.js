document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        fr: {
            pageTitle: "Candice Vialette | Portfolio",
            infoTitle: "Informations",
            location: "<strong>Lieu:</strong> Valence",
            skillsTitle: "Compétences",
            softSkillsTitle: "Soft Skills",
            hardSkillsTitle: "Hard Skills",
            skillSoft1: "Communicative",
            skillSoft2: "Rigoureuse",
            skillSoft3: "Dynamique",
            skillHard1: "Windows",
            skillHard2: "Cisco Packet Tracer",
            skillHard3: "Python",
            skillHard4: "Debian",
            interestsTitle: "Centres d'intérêt",
            interest1: "Lecture",
            interest2: "Voyage",
            interest3: "Sport",
            heroName: "Candice Vialette",
            heroSubtitle: "Étudiante en informatique",
            heroButton: "Télécharger mon CV",
            profileTitle: "Profil",
            profileText: "Dynamique et motivée, je recherche un job d'été afin de développer mes compétences professionnelles et acquérir une expérience enrichissante. Rigoureuse et organisée, j'aime le travail en équipe et m'adapte facilement à différents environnements. Sérieuse et polyvalente, je suis prête à m'investir dans diverses missions pour apporter mon aide et apprendre de nouvelles compétences.",
            educationTitle: "Formations",
            edu1_title: "BTS SIO SISR",
            edu1_date: "En cours",
            edu2_title: "Bac général",
            experienceTitle: "Expériences Professionnelles",
            exp1_title: "Mégao (Stage) - 2025",
            exp1_desc: "Développement de compétences en administration des systèmes et réseaux. Apprentissage des bonnes pratiques en entreprise et mise en application des connaissances acquises en formation.",
            exp2_title: "Ramassage de petits fruits (2021-2024)",
            exp2_desc: "GAEC de la chataigneraie. Ce travail m'a appris la patience et la minutie.",
            exp3_title: "Dépannage informatique (Bénévolat)",
            exp3_desc: "Résolution de problèmes de connectivité et configuration de PC sous Windows.",
            certificationsTitle: "Certifications",
            cert1: "<strong>Cisco:</strong> CCNA, Introduction à la cybersécurité, Sécurité des terminaux",
            cert2: "<strong>Pix</strong> (500 points)",
            cert3: "<strong>PSC1</strong> (Premiers Secours Civiques niveau 1)",
            aboutMeTitle: "Qui suis-je ?",
            aboutMeText: "...",
            coverLetterTitle: "Lettre de Motivation",
            coverLetterText: "...",
            futureTitle: "Ce que je veux faire plus tard",
            futureText: "...",
            footerText: "© 2025 - Candice Vialette. Tous droits réservés."
        },
        en: {
            pageTitle: "Candice Vialette | Portfolio",
            infoTitle: "Contact Info",
            location: "<strong>Location:</strong> Valence",
            skillsTitle: "Skills",
            softSkillsTitle: "Soft Skills",
            hardSkillsTitle: "Hard Skills",
            skillSoft1: "Communicative",
            skillSoft2: "Meticulous",
            skillSoft3: "Dynamic",
            skillHard1: "Windows",
            skillHard2: "Cisco Packet Tracer",
            skillHard3: "Python",
            skillHard4: "Debian",
            interestsTitle: "Interests",
            interest1: "Reading",
            interest2: "Traveling",
            interest3: "Sports",
            heroName: "Candice Vialette",
            heroSubtitle: "IT Student",
            heroButton: "Download my Resume",
            profileTitle: "Profile",
            profileText: "Dynamic and motivated, I am looking for a summer job to develop my professional skills and gain an enriching experience. Meticulous and organized, I enjoy teamwork and adapt easily to different environments. Serious and versatile, I am ready to get involved in various missions to bring my help and learn new skills.",
            educationTitle: "Education",
            edu1_title: "HND in IT (SISR Specialization)",
            edu1_date: "In progress",
            edu2_title: "General Baccalaureate",
            experienceTitle: "Professional Experience",
            exp1_title: "Mégao (Internship) - 2025",
            exp1_desc: "Developed skills in systems and network administration. Learned best practices in a corporate environment and applied knowledge from my studies.",
            exp2_title: "Berry Picking (2021-2024)",
            exp2_desc: "GAEC de la Chataigneraie. This job taught me patience and attention to detail.",
            exp3_title: "IT Support (Volunteer)",
            exp3_desc: "Resolved connectivity issues and configured PCs running Windows.",
            certificationsTitle: "Certifications",
            cert1: "<strong>Cisco:</strong> CCNA, Introduction to Cybersecurity, Endpoint Security",
            cert2: "<strong>Pix</strong> (500 points)",
            cert3: "<strong>PSC1</strong> (First Aid Certification)",
            aboutMeTitle: "Who I am",
            aboutMeText: "...",
            coverLetterTitle: "Cover Letter",
            coverLetterText: "...",
            futureTitle: "Future Goals",
            futureText: "...",
            footerText: "© 2025 - Candice Vialette. All rights reserved."
        }
    };

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                // Utilise innerHTML pour interpréter les balises comme <strong>
                element.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');
        document.getElementById('lang-en').classList.toggle('active', lang === 'en');
        localStorage.setItem('preferredLanguage', lang);
    };

    document.getElementById('lang-fr').addEventListener('click', () => setLanguage('fr'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'fr';
    setLanguage(preferredLanguage);
});
