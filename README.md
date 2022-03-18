# Facepass

Projet d'un gestionnaire de mot de passe dont la connexion peut se faire par reconnaissance faciale.

## Contexte


### Consignes

Dans le cadre d'un Hackathon, nous avions une semaine pour réaliser un projet dans lequel nous avons crée un outil de cybersécurité. Ce projet est un gestionnaire de mot de passe accompagné de nouvelles fonctionnalités.

Fait par Slimen, François, Yanis, Ilian, Jibril, Younes, Leila, Luca.
Du 14 au 18 mars 2022.

### Langages et outils utilisés

* Html, CSS, JS - Programmation web basique
* Vue.js - Partie front-end pour rendre la page dynamique
* Node.js - Partie back-end
* MongoDB - Gestion de la base de données
* Git - Partage et mise en ligne des fichiers
* Trello - Répartition des tâches

### A quoi peut servir le projet
Ce projet peut servir à stocker de manière sécurisée ses informations personnelles (mot de passes, numéros de carte de crédit...), avec une interface intuitive et ergonomique pour tous.

## Fonctionnalités
* Créer un compte et s'identifier
* Enregistrer des infos personnelles de type "identifiant - mot de passe" 
* Enregistrer des infos personnelles de type "carte de crédit
* Enregistrer des infos personnelles de type "notes sécurisées" 
* Modification et suppression des données déjà enregistrées
* Indicateur niveau de robustesse pour les mots de passe
 

### A venir
* Connexion par reconnaissance faciale
* Ajouter un mot de passe aux favorils


### Lancer le projet

``` bash
# Lancer le serveur (dossier back-end)
node server.js

# Lancer le site (dossier front-end)
npm install
npm run dev
```

