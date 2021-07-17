[![Openclassrooms](https://1to1progress.fr/wp-content/uploads/2019/05/openclassrooms-e1557761236158.png)](https://openclassrooms.com)

## Parcours Développeur Web - Projet 6 : Construisez une API sécurisée pour une application d'avis gastronomiques

## Scénario
Développement d'une application web nommée "Piquante" dans laquelle les utilisateurs pourront ajouter leurs sauces préférées et liker ou disliker les sauces proposées par les autres utilisateurs.

Le but est de créer le backend de l'application, le frontend étant déjà codé et fourni.


## Livrables
* le lien vers votre dépôt Git public contenant le code de l’API.

## :warning: Prérecquis
 - Avoir installé NodeJS : https://nodejs.org.

 
### :computer: Partie Front 
- Ouvrez un terminal et placez-vous dans le repertoire ou vous souhaitez télécharger l'application,
- Téléchargez la partie front de l'application :
  - `git clone https://github.com/OpenClassrooms-Student-Center/dwj-projet6.git frontend`
- Déplacez vous à l'intérieur du dossier crée :
  - `cd frontend`
- Installez les librairies nécessaires pour faire fonctionner le serveur front :
  - `npm install`
  - `npm install -g npm@latest`
  - `npm install -g @angular/cli@7.0.2`
  - `npm install node-sass@4.12.0 --no-save --unsafe-perm`
- Lancez le serveur :
  - `npm start`
  
### :floppy_disk: Partie Back
- Ouvrez un nouveau terminal à la racine de l'application,
- Téléchargez la partie back de l'application :
  - `git clone https://github.com/lifeae/OC_WD_P6 backend`
- Déplacez vous à l'intérieur du dossier crée :
  - `cd backend`
- Installez les librairies nécessaires pour faire fonctionner le serveur front :
  - `npm install`
- Lancez le serveur
  - `node server`
#### Bonne visite sur : http://localhost:4200/ ! :rocket:


Mesures de sécurité mises en place
- Hashage du mot de passe utilisateur avec **bcrypt**
