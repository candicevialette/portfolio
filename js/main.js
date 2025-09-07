document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        fr: {
            // --- Titre & Navigation ---
            pageTitle: "Candice Vialette | Portfolio",
            nav_about: "Qui suis-je",
            nav_future: "Ce que je veux faire plus tard",
            nav_info: "Infos",
            nav_skills: "Compétences",
            nav_certs: "Certifications",
            nav_projects: "Mes projets",
            nav_exp: "Formations & Expériences",

            // --- Héro ---
            heroName: "Candice Vialette",
            heroSubtitle: "Étudiante en systèmes et réseaux",
            heroButtonCV: "Télécharger mon CV",
            heroButtonLM: "Télécharger ma lettre de Motivation",

            // --- Informations ---
            infoTitle: "Informations",
            linkedin: "LinkedIn",
            github: "GitHub",

            // --- Qui suis-je ? ---
            aboutMeTitle: "Qui suis-je ?",
            aboutMeText2: `Je suis une étudiante curieuse et déterminée, et ma première année en BTS SIO a confirmé ma passion naissante pour les systèmes et les réseaux.<br>
J'ai particulièrement apprécié les aspects pratiques de la formation : concevoir des architectures sur Cisco Packet Tracer, déployer des services sur des serveurs et donner vie à une infrastructure. C'est en pratiquant et faisant des erreurs que j'apprends le plus.<br>
Cette première année a aussi été riche en défis. Face à une charge de travail importante ou à des projets où il fallait être totalement autonome, j'ai appris à m'organiser, à chercher les solutions par moi-même et à faire pour deux le travail. Ces situations, bien que parfois difficiles, m'ont surtout rendue plus efficace et plus débrouillarde.`,
            
            // --- Ce que je veux faire plus tard ---
            futureTitle: "Ce que je veux faire plus tard",
            futureText: `J'aimerai continuer mes études en troisième année orienter système et réseaux, j'ai vu qu'intégrer le BUT RT 3° année était une très belle opportunité mais j'ai pas plus chercher. À plus long terme, je vise un diplôme de niveau Bac+5. Mon projet est encore en construction, mais je suis convaincue de vouloir évoluer vers des postes à plus haute technicité ou à responsabilités. Je m'informe grace à aux missions et aux personnes d'Ingé +.`,

            // --- Compétences ---
            skillsTitle: "Compétences",
            softSkillsTitle: "Soft Skills",
            skillSoft1: "Organisée", skillSoft2: "Rigoureuse", skillSoft3: "Dynamique",
            hardSkillsTitle: "Hard Skills",
            skillCat1: "Système",
            skillSys1: "Windows Server (AD, GPO)", skillSys2: "Linux (Debian, Ubuntu)", skillSys3: "VMware, VirtualBox",
            skillCat2: "Réseau",
            skillNet1: "Cisco Packet Tracer", skillNet2: "Adressage IPv4/IPv6", skillNet3: "VLANs, Routage (OSPF, RIP, Static)", skillNet4: "Analyse (Wireshark)", skillNet5: "DNS, DHCP, email...",
            skillCat3: "Cybersécurité",
            skillCyber1: "Stormshield", skillCyber2: "Pare-feu (Pfsense, ACLs)", skillCyber3: "Analyse de logs", skillCyber4: "Audit de sécurité", skillCyber5: "Nmap",
            skillCat4: "Codage",
            skillCode1: "Python", skillCode2: "HTML / CSS / JavaScript",
            skillCat5: "Autre",
            skillOther1: "RGPD", skillOther2: "Gemini", skillOther3: "Chat GPT", skillOther4: "Github",

            // --- Certifications ---
            certificationsTitle: "Certifications",
            certCol1Title: "AUTRES :", certCol1Item1: "RGPD (CNIL)", certCol1Item2: "Pix (500 points)", certCol1Item3: "PSC1",
            certCol2Title: "RÉSEAU :", certCol2Item1: "CCNA 1",
            certCol3Title: "CYBERSÉCURITÉ :", certCol3Item1: "Sécurité des terminaux", certCol3Item2: "Introduction à la Cybersécurité", certCol3Item3: "CyberOps",

            // --- Projets ---
            projectsTitle: "Mes projets",
            project1_title: "Montage d’un pare‑feu",
            project1_desc: "....",
            project_link_text: "Voir le projet sur GitHub <i data-feather='external-link'></i>",
            project2_title: "Site internet (en cours de réalisation)",
            project2_desc: "Le but de cette AP est de fournir au client un developpement de son entreprise en créant un site internet pour que des nouveaux client tombent dessus, bien sur a revoir cette reformulation.",
            project_link_site: "Voir le site internet <i data-feather='external-link'></i>",
            project3_title: "Windows Server 2008 R2",
            project3_desc: "Le but de ce TP était de découvrir comment parametrer un serveur et ses fonctionnalitées de base. C'est sur un serveur de 2008 car ca suffisait a ma professeur pour l'utilisation qu'on allait faire.",
            project4_title: "Analyse de risques",
            project4_desc: "Le but de ce TP est d'apprendre à réaliser une analyse des différents facteurs de riques de piratage dans une entreprise.",
            project5_title: "Création d'un réseau entier sous Cisco Packet Tracert",
            project5_desc: "Le but de ce tp est de nous apprendre à créer un réseau type assez complet de a à z.",
            
            // --- Formations & Expériences ---
            experienceTitle: "Formations & Expériences",
            edu1_title: "BTS SIO SISR", edu1_date: "En cours",
            edu2_title: "Bac général",
            exp1_title: "Mégao (Stage) - 2025", exp1_desc: "Découvrir le métier de technicien IT en participant aux missions quotidiennes de l'équipe. Mettre en application mes connaissances en systèmes et réseaux.",
            exp2_title: "GAEC de la chataigneraie (Saisonnier) (2021-2024)", exp2_desc: "Un travail saisonnier qui demande beaucoup de rigueur, de patience et de concentration.",
            exp3_title: "Dépannage informatique (Bénévolat)", exp3_desc: "Une première expérience pratique où j'ai appris à diagnostiquer et à résoudre les problèmes de connectivité et les pannes logicielles sur des ordinateurs Windows."
        },
        en: {
            // --- Title & Navigation ---
            pageTitle: "Candice Vialette | Portfolio",
            nav_about: "About Me",
            nav_future: "Future Goals",
            nav_info: "Info",
            nav_skills: "Skills",
            nav_certs: "Certifications",
            nav_projects: "My Projects",
            nav_exp: "Education & Experience",

            // --- Hero ---
            heroName: "Candice Vialette",
            heroSubtitle: "Systems and Networks Student",
            heroButtonCV: "Download my Resume",
            heroButtonLM: "Download my Cover Letter",

            // --- Info ---
            infoTitle: "Information",
            linkedin: "LinkedIn",
            github: "GitHub",

            // --- About Me ---
            aboutMeTitle: "About Me",
            aboutMeText2: `I am a curious and determined student, and my first year in an IT program confirmed my growing passion for systems and networks.<br>
I particularly enjoyed the practical aspects of the course: designing architectures in Cisco Packet Tracer, deploying services on servers, and bringing an infrastructure to life. I learn the most by doing and making mistakes.<br>
This first year was also full of challenges. Faced with a heavy workload or projects requiring complete autonomy, I learned to organize myself, find solutions on my own, and do the work of two. These situations, though sometimes difficult, ultimately made me more efficient and resourceful.`,

            // --- Future Goals ---
            futureTitle: "Future Goals",
            futureText: `I would like to continue my studies in a third year focused on systems and networks. I saw that joining the 3rd year of a BUT RT is a great opportunity, but I haven't researched it further. In the long term, I aim for a Master's level degree (Bac+5). My plan is still developing, but I am convinced I want to move towards more technical or responsible positions. I am gathering information through missions and contacts from Ingé +.`,

            // --- Skills ---
            skillsTitle: "Skills",
            softSkillsTitle: "Soft Skills",
            skillSoft1: "Organized", skillSoft2: "Meticulous", skillSoft3: "Dynamic",
            hardSkillsTitle: "Hard Skills",
            skillCat1: "System",
            skillSys1: "Windows Server (AD, GPO)", skillSys2: "Linux (Debian, Ubuntu)", skillSys3: "VMware, VirtualBox",
            skillCat2: "Network",
            skillNet1: "Cisco Packet Tracer", skillNet2: "IPv4/IPv6 Addressing", skillNet3: "VLANs, Routing (OSPF, RIP, Static)", skillNet4: "Analysis (Wireshark)", skillNet5: "DNS, DHCP, email...",
            skillCat3: "Cybersecurity",
            skillCyber1: "Stormshield", skillCyber2: "Firewall (Pfsense, ACLs)", skillCyber3: "Log Analysis", skillCyber4: "Security Audit", skillCyber5: "Nmap",
            skillCat4: "Coding",
            skillCode1: "Python", skillCode2: "HTML / CSS / JavaScript",
            skillCat5: "Other",
            skillOther1: "GDPR", skillOther2: "Gemini", skillOther3: "Chat GPT", skillOther4: "Github",

            // --- Certifications ---
            certificationsTitle: "Certifications",
            certCol1Title: "OTHER:", certCol1Item1: "GDPR (CNIL)", certCol1Item2: "Pix (500 points)", certCol1Item3: "First Aid (PSC1)",
            certCol2Title: "NETWORK:", certCol2Item1: "CCNA 1",
            certCol3Title: "CYBERSECURITY:", certCol3Item1: "Endpoint Security", certCol3Item2: "Introduction to Cybersecurity", certCol3Item3: "CyberOps",

            // --- Projects ---
            projectsTitle: "My Projects",
            project1_title: "Firewall Setup",
            project1_desc: "....",
            project_link_text: "View project on GitHub <i data-feather='external-link'></i>",
            project2_title: "Website (in progress)",
            project2_desc: "The goal of this AP is to help a client grow their business by creating a website to attract new customers. Wording to be reviewed.",
            project_link_site: "View the website <i data-feather='external-link'></i>",
            project3_title: "Windows Server 2008 R2",
            project3_desc: "The purpose of this lab was to learn how to configure a server and its basic features. It was on a 2008 server because it was sufficient for my teacher's intended use.",
            project4_title: "Risk Analysis",
            project4_desc: "The goal of this lab is to learn how to perform an analysis of a company's various hacking risk factors.",
            project5_title: "Full Network Creation in Cisco Packet Tracer",
            project5_desc: "The purpose of this lab is to teach us how to create a fairly complete network from A to Z.",

            // --- Education & Experience ---
            experienceTitle: "Education & Experience",
            edu1_title: "HND in IT (SISR Specialization)", edu1_date: "In progress",
            edu2_title: "General Baccalaureate",
            exp1_title: "Mégao (Internship) - 2025", exp1_desc: "Discover the IT technician profession by participating in the team's daily tasks. Apply my knowledge in systems and networks.",
            exp2_title: "GAEC de la chataigneraie (Seasonal) (2021-2024)", exp2_desc: "A seasonal job that requires a lot of rigor, patience, and concentration.",
            exp3_title: "IT Support (Volunteer)", exp3_desc: "A first practical experience where I learned to diagnose and resolve connectivity problems and software failures on Windows computers."
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
        
        // On doit relancer Feather Icons après avoir changé le HTML des icônes
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    };

    document.getElementById('lang-fr').addEventListener('click', () => setLanguage('fr'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'fr';
    setLanguage(preferredLanguage);
});
