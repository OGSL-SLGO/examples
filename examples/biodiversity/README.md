# Exemples de manipulations d'archives Darwin Core (DwC)

## Utilisation d'une archive DwC à des fins d'analyse

Le notebook [DwC_file_merge.ipynb](DwC_file_merge.ipynb)
présente comment procéder à l'agrégation des fichiers Darwin Core en un seul fichier afin de permettre la réalisation d'analyses et\ou de visualisations.
> Ce notebook est codé en R

## Validation d'archives DwC avec la librairie PyObis (librairie Python)

Cette séries d'exemples est composée des notebooks suivants:

- [Demonstration_PyObis_fonction_check_eventids.ipynb](Demonstration_PyObis_fonction_check_eventids.ipynb)
  > Validation des event ids
- [Demonstration_PyObis_fonction_check_fields.ipynb](Demonstration_PyObis_fonction_check_fields.ipynb)
  > Validation de la présence des champs obligatoires
- [Demonstration_PyObis_fonction_fonction_check_scientificname_and_ids.ipynb](Demonstration_PyObis_fonction_fonction_check_scientificname_and_ids.ipynb)
  > Validation de termes et identifiants scientifiques

## Exécuter localement

- Les outils nécessaires à l'exécutions de notebooks jupyter. (voir: https://code.visualstudio.com/ ou https://jupyter.org/)
- Installer les dépendances de **environment.yml**
  > - Installer Anaconda: `https://www.anaconda.com/products/distribution`
  > - Créer un environnement virtuel avec Conda: `conda env create -f environment.yml`

## Exécuter en ligne avec **mybinder.org**

- DwC_file_merge.ipynb: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/ogsl-slgo/examples/main?labpath=examples%2Fbiodiversity%2FDwC_file_merge.ipynb)

- Demonstration_PyObis_fonction_check_eventids.ipynb: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/ogsl-slgo/examples/main?labpath=examples%2Fbiodiversity%2FDemonstration_PyObis_fonction_check_eventids.ipynb)
- Demonstration_PyObis_fonction_check_fields.ipynb: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/ogsl-slgo/examples/main?labpath=examples%2F2Fbiodiversity%2FDemonstration_PyObis_fonction_check_fields.ipynb)
- Demonstration_PyObis_fonction_fonction_check_scientificname_and_ids.ipynb: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/ogsl-slgo/examples/main?labpath=examples%2Fbiodiersity%2FDemonstration_PyObis_fonction_fonction_check_scientificname_and_ids.ipynb)
