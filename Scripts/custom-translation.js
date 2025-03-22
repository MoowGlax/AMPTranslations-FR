(function () {
    // Dictionnaire des traductions
    const translations = {
        "Suspended": "Suspendu",
        "Running": "En cours",
        "Offline": "Hors ligne",
        "Starting": "Démarrage",
        "Stopping": "Arrêt",
        "Idle": "Inactif",
        "Restarting": "Redémarrage",
        "Updating": "Mise à jour",
        "Waiting": "En attente",
        "Installing": "Installation",
        "Error": "Erreur",
        "Unavailable": "Indisponible",
        "Sleeping": "Veille",
        "Configuring": "Configuration",
        "Waiting for user": "En attente de l'utilisateur",
        "CPU Usage": "CPU",
        "Memory Usage": "RAM",
        "Active Users": "UTILISATEURS",
        "TPS": "TPS",
        "Instance not running":"Instance Eteinte",
        "Click the green Start button to start this instance.":"Cliquez sur le bouton vert Démarrer pour lancer cette instance.",
        "Application Idle":"Instance inactive",
        "Manage this instance to start or configure the application.": "Gérez cette instance pour démarrer ou configurer l'application.",
        "Waiting for Metrics": "En attente de mesures",
        "Application is running but has not yet reported data": "L'application est en cours d'exécution mais n'a pas encore signalé de données",
        "Start": "Démarrer",
        "Manage": "Gérer"
    };

    function translateStatus() {
        // Sélectionne tous les éléments où les statuts sont affichés
        document.querySelectorAll('.ServerEntryStatus span[data-bind="text: shortStateText()"]').forEach(span => {
            let originalText = span.textContent.trim();
            if (translations[originalText]) {
                span.textContent = translations[originalText]; // Remplace par la traduction
            }
        });

        // Traduction des titres dans les balises <h3>
        document.querySelectorAll('h3[data-bind="text: $root.listView() ? shortName : name"]').forEach(h3 => {
            let originalText = h3.textContent.trim();
            if (translations[originalText]) {
                h3.textContent = translations[originalText]; // Remplace le nom par la traduction
            }
        });

        // Traduction combinée pour les balises <h2> et <h4> dans .Notice
        document.querySelectorAll('.Notice h2, .Notice h4').forEach(element => {
            let originalText = element.textContent.trim();
            if (translations[originalText]) {
                element.textContent = translations[originalText]; // Remplace le nom par la traduction
            }
        });

        // Traduction des boutons avec texte à côté du span
        document.querySelectorAll('button[data-bind]').forEach(button => {
            // On récupère le texte après l'icône, sans toucher à l'icône elle-même
            let iconSpan = button.querySelector('.mat-icon'); // Sélectionne l'icône
            let buttonText = button.textContent.trim();

            // Enlève le texte de l'icône pour ne traduire que le texte
            buttonText = buttonText.replace(iconSpan ? iconSpan.textContent.trim() : '', '').trim();

            if (translations[buttonText]) {
                // On remplace uniquement le texte, sans toucher à l'icône
                button.querySelector('.mat-icon').textContent = iconSpan ? iconSpan.textContent.trim() : ''; // Garde l'icône inchangée
                button.innerHTML = button.innerHTML.replace(buttonText, translations[buttonText]); // Remplace le texte par la traduction
            }
        });
    }

    // Observer les changements dans la page (au cas où AMP recharge dynamiquement)
    const observer = new MutationObserver(translateStatus);
    observer.observe(document.body, { childList: true, subtree: true });

    // Exécuter la traduction immédiatement après le chargement
    document.addEventListener("DOMContentLoaded", translateStatus);
})();
