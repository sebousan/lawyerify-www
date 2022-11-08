# Lawyerify website

## Table des matières

- [Preprod](#preprod)
- [Illustrations](#illustrations)
- [Git](#git)
- [Hugo](#hugo)

## Preprod
https://lawyerify-www.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/77934568-56cf-4711-a03f-5f8b59618eab/deploy-status)](https://app.netlify.com/sites/lawyerify-www/deploys)

## Illustrations
https://notioly.com/

## Git

### Submodules
Ce template est composé de deux submodules
* Theme: [Hugo theme](https://github.com/sebousan/hugo-theme)
* Admin: [Hugo Netlify CMS template](https://github.com/sebousan/hugo-netlify-cms-template)

### Installation
Pour cloner avec le template avec ses submodules
```
git clone git@github.com:sebousan/lawyerify-www.git --recurse-submodules
```

### Mettre à jour les submodules
```
git pull --recurse-submodules
```

### Mettre à jour son repo via le template

```
git remote add template git@github.com:sebousan/hugo-template.git
git fetch --all
git merge template/main --allow-unrelated-histories
```

## Hugo

### Install

* Pour installer Hugo : `brew install hugo`
* Mise à jour : `brew upgrade hugo`

### Commands

* Pour installer les packages : `yarn`
* Pour lancer Hugo en livereload : `yarn watch`
* Pour lancer Netlify CMS en localhost : `yarn cms`
