# CLIC Numérique - Application Fullstack

Ce dépôt contient le code source complet de la plateforme web de **CLIC (Centre pour l'Inclusion et la Culture du Numérique)** en Côte d'Ivoire.

Il s'agit d'une application de type **MERN/SERN** (SQLite, Express, React, Node.js) comprenant un site public et un espace d'administration complet.

## Architecture

* **Frontend** : React.js (Vite), CSS Vanille (système de design et charte graphique CLIC).
* **Backend** : Node.js, Express.
* **Base de données** : SQLite (fichiers locaux).

---

## 🚀 Comment lancer l'application pour une Démo ?

Pour pouvoir faire une démo complète de bout en bout (site public + dashboard administrateur), vous devez démarrer les 2 serveurs (Backend et Frontend).

### Étape 1 : Lancer le Backend (API & Base de données)

Ouvrez un terminal et naviguez dans le dossier `backend` :
```bash
cd backend
npm install
npm run dev
```
*(Le serveur backend démarrera sur `http://localhost:3000` et créera la base de données automatiquement si elle n'existe pas).*

### Étape 2 : Lancer le Frontend (React)

Ouvrez un **deuxième terminal** à la racine du projet (le dossier contenant ce README) :
```bash
npm install
npm run dev
```
*(L'interface web démarrera sur `http://localhost:5173` ou `5174`).*

---

## 💡 Scénario de Démo Suggéré (De bout en bout)

Pour montrer la puissance de la plateforme à votre équipe, suivez ce flux :

1. **Visiteur public** : Allez sur la page **"S'engager" (Bénévolat)** et remplissez le formulaire avec un profil inventé. Validez la soumission.
2. **Espace Admin** : Cliquez sur le bouton "Espace Admin" dans le menu de navigation (en haut à droite).
3. **Validation** : Allez dans la rubrique **"Bénévoles"**. Vous verrez la candidature que vous venez de soumettre s'afficher en temps réel.
4. **Gestion de contenu** : Allez dans **"Actualités"**, rédigez un faux article et choisissez le statut "Publié".
5. **Résultat public** : Retournez sur le site public (page Actualités ou Accueil), l'article apparaîtra immédiatement.

Tout est entièrement connecté et géré de manière persistante par la base de données SQLite !
