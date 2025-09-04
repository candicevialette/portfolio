document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        fr: {
            pageTitle: "Candice Vialette | Portfolio",
            heroName: "Candice Vialette",
            heroSubtitle: "Étudiante en informatique",
            heroButtonCV: "Télécharger mon CV",
            heroButtonLM: "Lettre de Motivation",
            infoTitle: "Informations",
            linkedin: "LinkedIn",
            github: "GitHub",
            aboutMeTitle: "Qui suis-je ?",
            aboutMeText1: `Je suis dynamique et motivée, j'aime apprendre et me dépasser. Je m'oriente petit à petit vers les systèmes et les réseaux.`,
            aboutMeText2: `L'année dernière, j'ai aimé découvrir l'informatique, créer des réseaux virtuels (sur Cisco Packet Tracer et sur la ferme des serveurs), paramétrer des serveurs, des logiciels… J'ai moins aimé le travail en groupe avec des personnes qui ne travaillaient pas beaucoup, une grosse charge de travail en début d'année et des professeurs qui nous laissent nous débrouiller sans lecon ni avec la certitude que ca marche.`,
            skillsTitle: "Compétences",
            softSkillsTitle: "Soft Skills",
            hardSkillsTitle: "Hard Skills",
            skillSoft1: "Organisée", skillSoft2: "Rigoureuse", skillSoft3: "Dynamique",
            skillHard1: "Windows 10, 11", skillHard2: "Cisco Packet Tracer", skillHard3: "Stormshield", skillHard4: "Debian",
            certificationsTitle: "Certifications",
            certCol1Title: "AUTRES :", certCol1Item1: "RGPD (CNIL)", certCol1Item2: "Pix (500 points)", certCol1Item3: "PSC1",
            certCol2Title: "RÉSEAU :", certCol2Item1: "CCNA 1",
            certCol3Title: "CYBERSÉCURITÉ :", certCol3Item1: "Sécurité des terminaux", certCol3Item2: "Introduction à la Cybersécurité", certCol3Item3: "CyberOps",
            experienceTitle: "Formations & Expériences",
            edu1_title: "BTS SIO SISR", edu1_date: "En cours",
            edu2_title: "Bac général",
            exp1_title: "Mégao (Stage) - 2025", exp1_desc: "Développement de compétences en administration des systèmes et réseaux...",
            exp2_title: "GAEC de la chataigneraie (Saisonnier) (2021-2024)", exp2_desc: "Ramassage de petits fruits. Ce travail m'a appris la patience et la minutie.",
            exp3_title: "Dépannage informatique (Bénévolat)", exp3_desc: "Résolution de problèmes de connectivité et configuration de PC sous Windows.",
            futureTitle: "Ce que je veux faire plus tard",
            futureText: `J'aimerais continuer mes études en troisième année orientée systèmes et réseaux...`,
            footerText: "© 2025 - Candice Vialette. Tous droits réservés."
        },
        en: {
            // ... traductions anglaises
            pageTitle: "Candice Vialette | Portfolio",
            heroName: "Candice Vialette",
            heroSubtitle: "IT Student",
            heroButtonCV: "Download my Resume",
            heroButtonLM: "Cover Letter",
            infoTitle: "Contact Info",
            linkedin: "LinkedIn",
            github: "GitHub",
            aboutMeTitle: "About Me",
            aboutMeText1: `I am dynamic and motivated, I enjoy learning and challenging myself. I am gradually focusing on systems and networks.`,
            aboutMeText2: `Last year, I enjoyed discovering IT...`,
            skillsTitle: "Skills",
            softSkillsTitle: "Soft Skills",
            hardSkillsTitle: "Hard Skills",
            skillSoft1: "Organized", skillSoft2: "Meticulous", skillSoft3: "Dynamic",
            skillHard1: "Windows 10, 11", skillHard2: "Cisco Packet Tracer", skillHard3: "Stormshield", skillHard4: "Debian",
            certificationsTitle: "Certifications",
            certCol1Title: "OTHER:", certCol1Item1: "GDPR (CNIL)", certCol1Item2: "Pix (500 points)", certCol1Item3: "First Aid (PSC1)",
            certCol2Title: "NETWORK:", certCol2Item1: "CCNA 1",
            certCol3Title: "CYBERSECURITY:", certCol3Item1: "Endpoint Security", certCol3Item2: "Introduction to Cybersecurity", certCol3Item3: "CyberOps",
            experienceTitle: "Education & Experience",
            edu1_title: "HND in IT (SISR Specialization)", edu1_date: "In progress",
            edu2_title: "General Baccalaureate",
            exp1_title: "Mégao (Internship) - 2025", exp1_desc: "Developed skills in systems and network administration...",
            exp2_title: "GAEC de la chataigneraie (Seasonal Worker) (2021-2024)", exp2_desc: "Berry picking. This job taught me patience and attention to detail.",
            exp3_title: "IT Support (Volunteer)", exp3_desc: "Resolved connectivity issues and configured PCs running Windows.",
            futureTitle: "Future Goals",
            futureText: `I would like to continue my studies in a third year focused on systems and networks...`,
            footerText: "© 2025 - Candice Vialette. All rights reserved."
        }
    };

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
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
