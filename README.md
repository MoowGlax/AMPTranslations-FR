# CUBECODERS - AMPTranslations-FR
**Traduction française pour CubeCoders AMP Panel**

Bienvenue dans le projet **AMPTranslations-FR** ! Ce projet permet de traduire le panneau AMP Panel en français, en facilitant l'intégration d'une version française de l'interface utilisateur. Suivez les étapes ci-dessous pour installer et configurer correctement la traduction sur votre instance AMP.

---

### 🚀 Installation

#### 1. **Installer le fichier de traduction :**
Téléchargez le fichier `fr.json` et placez-le dans le répertoire suivant sur votre serveur AMP :

`.ampdata/instances/ADSO1/WebRoot/Locale/fr.json`

#### 2. **Changer la langue sur le panel :**
Une fois le fichier de traduction correctement installé dans le dossier `Locale`, il vous suffit d'ajouter `/?lang=fr` à la fin de l'URL de votre panneau AMP pour basculer en français :

Exemple : `http://panel.test.fr/?lang=fr`

Voilà, vous avez maintenant AMP en français ! 🎉

---

### ⚙️ Traduction des Statuts des Serveurs

AMP Panel est un peu capricieux et ne permet pas de traduire tous les éléments via le fichier de langue. Par exemple, les statuts des serveurs (En ligne, Hors ligne, etc.) ne sont pas traduits automatiquement.

Pour traduire ces statuts, suivez les étapes ci-dessous :

#### 1. **Téléchargez le fichier `custom-translation.js` :**
Placez le fichier `custom-translation.js` dans le répertoire suivant :

`.ampdata/instances/ADS01/WebRoot/Scripts/custom-translation.js`

#### 2. **Modifiez le fichier `Instances.html` :**
Ouvrez le fichier `Instances.html` situé ici :

`.ampdata/instances/ADS01/Plugins/ADSModule/Webroot/Instances.html`

#### 3. **Ajoutez le script pour appliquer les traductions personnalisées :**
Dans le fichier `Instances.html`, ajoutez la ligne suivante juste avant la fermeture de la balise `</body>` :
```html
<script type="text/javascript" src="/Scripts/custom-translation.js"></script>
