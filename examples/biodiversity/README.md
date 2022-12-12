# Exemples d'utilisation de la librairie pyOBIS pour la validation de jeux de données Darwin Core

Cette séries d'exemple est composée des notebooks suivants:
* [check_eventids.ipynb](check_eventids.ipynb)
  > Validation des event ids
* [check_fields.ipynb](check_fields.ipynb)
  >Validation de la présence des champs obligatoires
* [check_scientificname_and_ids.ipynb](check_scientificname_and_ids.ipynb)
  > Validation de termes et identifiants scientifiques 
  
## Exécuter localement

* Les outils nécessaires à l'exécutions de notebooks jupyter. (voir: https://code.visualstudio.com/ ou https://jupyter.org/)
* Installer les dépendences de **requirements.txt** 
> `pip install -r requirements.txt`
* Installer le module Pyobis en version pré-release sur Pypi (testé sur environnement Python 3.7.11)
> Façon plus simple: `pip install git+https://github.com/cioos-siooc/pyobistools@main#egg=pyobistools`
> Si façon simple ne fonctionne pas, 
> Installer Anaconda: `https://www.anaconda.com/products/distribution`
> Installer Pyobis en créant un environnement virtuel anaconda: `conda env create -f environment.yml`

## Exécuter en ligne avec **mybinder.org**

- check_eventids.ipynb: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/ogsl-slgo/examples/main?labpath=examples%2Fbiodiversity%2Fcheck_eventids.ipynb)
- check_fields.ipynb: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/ogsl-slgo/examples/main?labpath=examples%2F2Fbiodiversity%2Fcheck_fields.ipynb)
- check_scientificname_and_ids.ipynb: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/ogsl-slgo/examples/main?labpath=examples%2Fbiodiersity%2Fcheck_scientificname_and_ids.ipynb)

  
