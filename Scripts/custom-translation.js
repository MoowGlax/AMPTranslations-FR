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
        "Waiting for user": "En attente de l'utilisateur"
    };

    function translateStatus() {
        // Sélectionne tous les éléments où les statuts sont affichés
        document.querySelectorAll('.ServerEntryStatus span[data-bind="text: shortStateText()"]').forEach(span => {
            let originalText = span.textContent.trim();
            if (translations[originalText]) {
                span.textContent = translations[originalText]; // Remplace par la traduction
            }
        });
    }

    // Observer les changements dans la page (au cas où AMP recharge dynamiquement)
    const observer = new MutationObserver(translateStatus);
    observer.observe(document.body, { childList: true, subtree: true });

    // Exécuter la traduction immédiatement après le chargement
    document.addEventListener("DOMContentLoaded", translateStatus);
})();
