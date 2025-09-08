// Éléments du sélecteur de langue
const langFrButton = document.querySelector('#lang-fr');
const langEnButton = document.querySelector('#lang-en');

// Fonction pour changer la langue
const setLanguage = (lang) => {
    // Sélectionne tous les éléments avec un attribut 'data-key'
    const elementsToTranslate = document.querySelectorAll('[data-key]');
    
    // Parcourt chaque élément
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        // Vérifie si la traduction existe pour cette clé et cette langue
        if (translations[lang] && translations[lang][key]) {
            // Remplace le contenu de l'élément par la traduction
            element.innerHTML = translations[lang][key];
        }
    });

    // Met à jour l'attribut lang de la balise <html>
    document.documentElement.lang = lang;

    // Sauvegarde la langue choisie dans le stockage local
    localStorage.setItem('language', lang);
};

// Écouteurs d'événements pour les boutons
langFrButton.addEventListener('click', () => setLanguage('fr'));
langEnButton.addEventListener('click', () => setLanguage('en'));
