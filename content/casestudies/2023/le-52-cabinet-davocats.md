---
isIndex: false
draft: false
date: 2023-01-02T19:34:08.410Z
title: Le 52, cabinet d’avocats
description: Cabinet exclusivement dédié à la défense pénale à Paris
image:
  src: /images/uploads/le52-logo.svg
hero:
  surtitle: Étude de cas
  title: "Le 52, Migration d’un site Wordpress vers Lawyerify"
  image:
    src: /images/uploads/le52-logo.svg
blocks:
  - type: paragraph
    title: Quelques mots sur le cabinet
    text: >-
      « Le 52 » est un cabinet exclusivement dédié à la défense pénale.


      Tous formés aux côtés de pénalistes de renom et animés d’une passion commune pour la défense, Morgane Le Hir, Joseph Hazan, Sophie Rey-Gascon et Margot Pugliese, ont souhaité fonder une structure qui se consacre quotidiennement à tous les domaines du droit pénal.
    grid: medium
    align: center
    offset: center
  - align: start
    grid: small
    text: >-
      La précédente version du site a été créé grâce au système de gestion de
      contenu Wordpress. Ce logiciel écrit en PHP repose sur une base de données
      MySQL. Cela implique un hébergement sur serveur Apache et une maintenance
      quotidienne du système, de wordpress et de ses plugins.


      Sans mise à jour de ces solutions, vous vous exposez grandement au piratage de votre site web.
    background: false
    offset: start
    title: État des lieux
    type: editorial
    image:
      src: /images/uploads/logo-wordpress.png
    direction: rtl
  - align: start
    grid: small
    text: >-
      La précédente version du site a été piratée, des données ont été ajoutées
      sans que les administrateur du site l’autorise.


      Ici, capture d’écran ci-contre, des catégories. 
    background: false
    offset: start
    title: Le wordpress piraté
    type: editorial
    image:
      src: /images/uploads/le52-screenshot-category-wordpress.png
    direction: ltr
  - type: quote
    text: « L’insécurité et les spams de notre ancienne solution nous permettaient pas de garantir un contenu sérieux en ligne  »
    author:
      title: Me Sophie Rey-Gascon
      text: Cabinet d’avocats Le 52
      image:
        src: /images/uploads/le52-sophie-rey-gascon.jpg
  - type: datas
    title: Analyse de l’ancien site du cabinet
    text: Grâce à Google Lighthouse qui est un outil open source permettant de mesurer la qualité des pages Web. Voici, ci-dessous, le test de la page d’accueil sur mobile.
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        value: 81
        suffix: "%"
        limit: 100
      - title: Accessibilité
        value: 63
        suffix: "%"
        limit: 100
      - title: Meilleures pratiques
        value: 92
        suffix: "%"
        limit: 99
      - title: Référencement (SE0)
        value: 100
        suffix: "%"
        limit: 100
  - type: datas
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
    background: false
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
  - type: quote
    text: « Lawyerify nous a permis de simplifier et de rendre plus agréable la mise
      à jour du contenu de notre site Internet »
    author:
      title: Me Joseph Hazan
      text: Cabinet d’avocats Le 52
      image:
        src: /images/uploads/le52-joseph-hazan.jpg
  - type: images
    title: Comparaison des espaces d’administration
    text: D’un côté un admin compliqué et parasité par des fonctionnalités inutiles
      au cabinet. De l’autre coté un admin dédié et simplifié pour le cabinet Le
      52.
    background: false
    images:
      - src: /images/uploads/le52-screenshot-home-wordpress.png
        legend: Admin Wordpress de l’ancien site
        half: true
      - src: /images/uploads/le52-screenshot-home-lawyerify.png
        legend: Admin Lawyerify dédié au cabinet Le 52
        half: true
  - type: title
    title: Comparaison des deux sites
    text: Pour sensiblement les mêmes besoins et design, voici la comparaison chiffrée des deux sites grâce aux données de Google Lighthouse et Website carbon calculator
  - type: chart
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
              data: [443, 40.8, 402, 1200],
              fill: true,
              backgroundColor: '#0675c4'
            }, {
              label: 'Lawyerify',
              data: [68.3, 16.4, 323, 779],
              fill: true,
              backgroundColor: '#060C84'
            }]
          };
    grid: medium
  - type: chart
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
              'requêtes à l’arirvée',
              'requêtes au total'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [16, 8, 19, 78],
              backgroundColor: '#0675c4'
            }, {
              label: 'Lawyerify',
              data: [3, 2, 10, 28],
              backgroundColor: '#060C84'
            }]
          };
    grid: medium
  - type: chart
    text: Vitesse de chargement sur mobile (en seconde)
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'Temps de chargement',
              'Temps de chargement total'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [2.23,7.88],
              backgroundColor: '#0675c4'
            }, {
              label: 'Lawyerify',
              data: [1.41,3.70],
              backgroundColor: '#060C84'
            }]
          };
    grid: small
  - type: chart
    text: Empreinte carbone (sur 1 an, avec 10000 pages vues par mois)
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
  - type: quote
    text: « Un cas d’étude simple qui nous permet de constater qu'avec Lawyerify on a un site deux fois plus rapide et deux fois moins énergivore tout en gardant le même design et contenu »
    author:
      title: Sébastien Moulène
      text: Lawyerify
      image:
        src: /images/uploads/sebastien-moulene.jpg
  - type: cta
    title: Bonne visite !
    cta:
      text: Découvrez le site web du cabinet 52
      url: https://www.le52-avocats.com/
      blank: true
---
