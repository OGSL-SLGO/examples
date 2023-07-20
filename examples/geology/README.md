# Utilisation d'exemples de données géologiques avec ERDDAP et Python

## Description du projet

Ce projet contient un notebook Python illustrant l'utilisation des technologies ERDDAP pour l'analyse de données géologiques. Il se base sur un ensemble de données accessible via un serveur ERDDAP. Le but principal de ce notebook est de visualiser plusieurs variables dans des graphiques et tableaux.

## Contenu du notebook

Le notebook débute par une description détaillée des objectifs et des données. Ensuite, il importe les données depuis le serveur ERDDAP, les traite pour faciliter la visualisation, et crée un graphique composé de quatre graphiques verticaux.

Les trois premiers graphiques affichent les teneurs en Ti, Fe et Mn sous forme de lignes reliant les points de données. Le quatrième graphique montre la couleur Munsell du prélèvement, ce qui nécessite une manipulation spécifique des données.

## Comment exécuter le notebook

### Localement

1. Assurez-vous d'avoir installé les outils nécessaires pour l'exécution de notebooks Jupyter. Vous pouvez les obtenir ici : [Visual Studio Code](https://code.visualstudio.com/) ou [Jupyter](https://jupyter.org/).

2. Clonez le dépôt et naviguez vers le répertoire contenant le notebook.

3. Installez les dépendances du projet. Un fichier **requirement.txt** devrait être disponible dans le répertoire du projet avec toutes les dépendances requises.  
   `pip install -r requirements.txt`

4. Ouvrez le notebook et exécutez les cellules.

## Contact et contribution

Si vous avez des questions ou souhaitez contribuer à ce projet, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.
