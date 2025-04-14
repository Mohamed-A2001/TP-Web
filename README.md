# Portfolio Web de ALLA Mohamed

## À propos

Ce portfolio web complet a été développé en utilisant:
- **Frontend**: React
- **Backend**: Node.js + Express
- **Base de données**: SQLite

Cette solution permet d'afficher dynamiquement une liste de projets, d'ajouter de nouveaux projets avec une protection par mot de passe, et utilise une base de données SQLite légère et portable.

## Installation

### Prérequis
- Node.js et npm installés
- Git (pour cloner le repository)

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/ton-compte/portfolio.git
   cd portfolio
   ```

2. **Installer les dépendances**

   Frontend:
   ```bash
   cd client
   npm install
   ```

   Backend:
   ```bash
   cd ../server
   npm install
   ```

3. **Configuration**

   Créez un fichier `.env` dans le dossier `server` pour définir le mot de passe:
   ```
   PROJECT_PASSWORD=motdepasse
   ```

## Lancement du projet

1. **Démarrer le backend**
   ```bash
   cd server
   node index.js
   ```
   Le serveur sera accessible à l'adresse http://localhost:5000

2. **Démarrer le frontend**
   ```bash
   cd client
   serve -s build
   ```
   L'application sera disponible à l'adresse http://localhost:3000

## Structure du projet

```
portfolio/
├── client/              # Frontend React
│   ├── public/          # Fichiers statiques
│   ├── src/             
│   │   └── App.js       # Composant principal
│   └── package.json     # Dépendances du frontend
│
├── server/              # Backend Node.js + Express + SQLite
│   ├── database.db      # Base de données SQLite (auto-créée)
│   ├── index.js         # Fichier principal du serveur
│   ├── .env             # Configuration (mot de passe)
│   └── package.json     # Dépendances du backend
│
└── README.md            # Documentation
```

## Fonctionnalités

- **Affichage des projets**: Récupération et affichage des projets depuis le backend
- **Ajout sécurisé de projets**: Protection par mot de passe pour l'ajout de nouveaux projets
- **Base de données SQLite**: Stockage léger et portable des données

## Build et déploiement

### Build du frontend
```bash
cd client
serve -s build
```
Cette commande génère un dossier `build` contenant les fichiers statiques optimisés.

### Déploiement
Le backend peut être déployé sur diverses plateformes comme Heroku, AWS, ou DigitalOcean.

## Technologies utilisées

- **React**: Interface utilisateur
- **Node.js**: Backend
- **Express**: Framework web backend
- **SQLite**: Base de données
- **dotenv**: Gestion des variables d'environnement

## Auteur

ALLA Mohamed – Développeur principal du projet