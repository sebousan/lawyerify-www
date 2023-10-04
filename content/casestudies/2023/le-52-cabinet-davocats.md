---
isIndex: false
draft: false
date: 2023-07-02T19:34:08.410Z
title: Le 52, cabinet d’avocats
description: Migration d’un site Wordpress vers Lawyerify
seo:
  image: /images/uploads/le52-share.png
image:
  src: /images/uploads/le52-logo.svg
hero:
  surtitle: Étude de cas
  title: Le 52, Migration d’un site Wordpress vers Lawyerify
  image:
    src: /images/uploads/le52-logo.svg
blocks:
  - type: paragraph
    title: Quelques mots sur le cabinet
    text: >-
      « Le 52 » est un cabinet exclusivement dédié à la défense pénale à Paris.


      Tous formés aux côtés de pénalistes de renom et animés d’une passion commune pour la défense, Morgane Le Hir, Joseph Hazan, Sophie Rey-Gascon et Margot Pugliese, ont souhaité fonder une structure qui se consacre quotidiennement à tous les domaines du droit pénal.
    grid: medium
    align: center
    offset: center

  - type: informations
    heading:
      title: État des lieux
      text: La précédente version du site a été créé grâce au système de gestion de contenu Wordpress. 
      

        Ce logiciel écrit en PHP repose sur une base de données MySQL. Cela implique un hébergement sur serveur Apache et une maintenance quotidienne du système, de wordpress et de ses plugins.
    column: 4
    items:
      - title: Sécurité
        icon: shield-slash
        text: Sans mise à jour de ces solutions, le site Web s’expose grandement aux
          piratages.
      - title: Chronophage
        icon: hourglass
        text: Maintenance quotidienne du système, de Wordpress, du thème et de ses
          plugins.
      - title: Espace admin
        icon: kanban
        text: Non personnalisé et parasité par de nombreuses options inutiles.
  - type: quote
    quote: « 42% des sites Wordpress ont des problèmes de sécurité en 2022 »
    author:
      title: Patchstack
      text: State of WordPress Security In 2022
      url: https://patchstack.com/whitepaper/wordpress-security-stats-2022/
    background: true
  
  - align: start
    background: true
    grid: small
    text: >-
      La précédente version du site a été piratée, des données ont été ajoutées sans que les administrateur du site l’autorise.


      Ci-contre, une capture d’écran des catégories enregistrées. 
    offset: start
    title: Le wordpress piraté
    type: editorial
    image:
      src: /images/uploads/le52-screenshot-category-wordpress.png
    direction: ltr
#  - type: quote
#    background: true
#    quote: « L’insécurité et les spams de notre ancienne solution ne nous permettaient pas de garantir un contenu sérieux en ligne  »
#    author:
#      title: Me Sophie Rey-Gascon
#      text: Cabinet d’avocats Le 52
#      image:
#        src: /images/uploads/le52-sophie-rey-gascon.jpg
  - type: datas
    heading:
      title: Analyse de l’ancien site du cabinet
      text: Grâce à Google Lighthouse qui est un outil open source permettant de mesurer la qualité des pages Web. Voici, ci-dessous, le test de la page d’accueil sur mobile en connexion 4G lente.
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        value: 87
        suffix: "%"
        limit: 100
      - title: Accessibilité
        value: 62
        suffix: "%"
        limit: 100
      - title: Meilleures pratiques
        value: 100
        suffix: "%"
        limit: 100
      - title: Référencement (SE0)
        value: 100
        suffix: "%"
        limit: 100
  - type: datas
    heading:
      title: Et son impact environnemental ?
      text: En se basant sur une année pour 10000 pages vues par mois (provenant de website carbon calculator)
    column: 4
    show_color: false
    show_gauge: false
    items:
      - title: CO2
        text: autant que l'eau bouillante pour 2954 tasses de thé
        limit: 100
        suffix: "kg"
        value: 21.8
      - title: Énergie
        text: soit l’équivalent de 364km en voiture électrique
        value: 57
        suffix: "kWh"
        limit: 100
  - type: informations
    column: 3
    background: true
    heading:
      title: Pourquoi améliorer ces critères ?
    items:
      - icon: people
        title: Pour vos utilisateurs
        text: "Un site plus léger, c'est une meilleure expérience : les pages se
          chargent rapidement, même sur mobile et même si le réseau n'est pas
          très bon."
      - icon: graph-up-arrow
        title: Pour votre activité
        text: Un site web plus rapide, c'est une meilleure performance business. Cela a
          aussi de nombreux autres impacts positifs.
      - title: Pour votre empreinte carbone
        icon: globe-europe-africa
        text: En ayant un site web non énergivore vous réduirez considérablement votre
          impact environnemental.
  - type: datas
    heading:
      title: Analyse du nouveau site du cabinet
      text: Grâce à Lawyerify, tous les voyants sont au vert !
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        limit: 100
        suffix: "%"
        value: 100
      - title: Accessibilité
        value: 100
        suffix: "%"
        limit: 100
      - title: Meilleures pratiques
        value: 100
        suffix: "%"
        limit: 100
      - title: Référencement (SE0)
        value: 100
        limit: 100
        suffix: "%"
  - type: datas
    heading:
      title: Et son impact environnemental 
      text: Même critère de test que pour l'ancien site
    column: 4
    show_color: false
    show_gauge: false
    items:
      - title: CO2
        text: autant que l'eau bouillante pour 1298 tasses de thé
        limit: 100
        suffix: "kg"
        value: 9.58
      - title: Énergie
        text: soit l’équivalent de 160km en voiture électrique
        value: 25
        suffix: "kWh"
        limit: 100
  - type: images
    heading:
      title: Comparaison des espaces d’administration
      text: D’un côté un admin compliqué et parasité par des fonctionnalités inutiles
        au cabinet. De l’autre coté un admin dédié et simplifié pour le cabinet Le 52.
    background: true
    images:
      - src: /images/uploads/le52-screenshot-home-wordpress.png
        legend: Admin Wordpress de l’ancien site
        half: true
      - src: /images/uploads/le52-screenshot-home-lawyerify.png
        legend: Admin Lawyerify dédié au cabinet Le 52
        half: true
#  - type: quote
#    quote: « Lawyerify nous a permis de simplifier et de rendre plus agréable la mise
#      à jour du contenu de notre site Internet. »
#    background: true
#    author:
#      title: Me Joseph Hazan
#      text: Cabinet d’avocats Le 52
#      image:
#        src: /images/uploads/le52-joseph-hazan.jpg
  - type: title
    heading:
      title: Comparaison technique des deux sites
      text: Pour sensiblement les mêmes besoins et design, voici la comparaison chiffrée des deux sites grâce aux données de Google Lighthouse et Website carbon calculator.
  - type: chart
    heading:
      text: Octets téléchargés (en Ko), à chaque visite.
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'JS chargé',
              'CSS chargé',
              'transférés à l’arrivée',
              'transférés au total'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [443, 40.8, 784, 1880],
              fill: true,
              backgroundColor: '#0675c4'
            }, {
              label: 'Lawyerify',
              data: [22.8, 14, 266, 483],
              fill: true,
              backgroundColor: '#060C84'
            }]
          };
    grid: medium
  - type: chart
    heading:
      text: Nombre de fichiers et de requêtes, à chaque visite.
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'fichiers JS chargés',
              'fichiers CSS chargés',
              'requêtes à l’arrivée',
              'requêtes au total'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [16, 8, 19, 78],
              backgroundColor: '#0675c4'
            }, {
              label: 'Lawyerify',
              data: [2, 2, 10, 28],
              backgroundColor: '#060C84'
            }]
          };
    grid: medium
  - type: chart
    heading:
      title: Deux fois moins énergivore
      text: Empreinte carbone (sur 1 an, avec 10000 pages vues par mois).
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'CO2',
              'Kwh'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [21.8,57],
              backgroundColor: '#0675c4'
            }, {
              label: 'Lawyerify',
              data: [9.58,25],
              backgroundColor: '#060C84'
            }]
          };
    grid: small
  - type: chart
    heading:
      title: Plus rapide
      text: Vitesse de chargement en seconde (Speed index).
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'Mobile',
              'Desktop'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [3.9,1.5],
              backgroundColor: '#0675c4'
            }, {
              label: 'Lawyerify',
              data: [2.1,1.3],
              backgroundColor: '#060C84'
            }]
          };
    grid: small
  - type: quote
    quote: « Un cas d’étude simple qui nous permet de constater qu'avec Lawyerify on a un site **deux fois plus rapide** et **deux fois moins énergivore** tout en gardant le même design et contenu »
    author:
      title: Sébastien Moulène
      text: Lawyerify
      image:
        src: /images/uploads/sebastien-moulene.jpg
  - type: cta
    heading:
      title: Bonne visite !
    cta:
      text: Découvrez le site web du cabinet 52
      url: https://www.le52-avocats.com/
      blank: true
---
