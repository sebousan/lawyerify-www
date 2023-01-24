---
isIndex: false
draft: true
date: 2023-01-02T19:34:08.410Z
title: Le 52, cabinet d’avocats
description: Cabinet exclusivement dédié à la défense pénale à Paris
image:
  src: /images/uploads/le52-logo.svg
hero:
  title: "Étude de cas : Le 52, Migration d’un site Wordpress vers Lawyerify"
  image:
    src: /images/uploads/le52-logo.svg
blocks:
  - type: paragraph
    title: Quelques mots sur le cabinet
    text: >-
      « Le 52 » est un cabinet exclusivement dédié à la défense pénale.


      Tous formés aux côtés de pénalistes de renom et animés d’une passion commune pour la défense, Morgane Le Hir, Joseph Hazan, Sophie Rey-Gascon et Margot Pugliese, ont souhaité fonder une structure qui se consacre quotidiennement à tous les domaines du droit pénal : droit pénal général, droit pénal des affaires, droit pénal fiscal, droit pénal international, droit pénal de l’environnement, droit de la presse…
    grid: medium
    align: center
    offset: center
  - align: start
    grid: small
    text: >-
      La précédente version du site a été créé grâce au système de gestion de
      contenu Wordpress. Ce logiciel écrit en PHP repose sur une base de données
      MySQL. Cela implique un hébergement sur serveur Apache et une maintenance
      quotidienne du système et de ses plugins.


      Sans mise à jour constante de votre wordpress, vous vous exposez grandement au hacking de votre site web.
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
    text: « L’insécuritué chronique de notre ancienne solution nous pesait »
    author:
      title: Me Sophie Rey-Gascon
      text: Cabinet d’avocats Le 52
      image:
        src: /images/uploads/le52-sophie-rey-gascon.jpg
  - type: datas
    title: Analyse de l’ancien site du cabinet
    text: Grâce à Google Lighthouse qui est un outil open source permettant de mesurer la qualité des pages Web. Voici, ci-dessous, le test de la page d’accueil.
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
    column: 4
    show_color: false
    show_gauge: false
    text: De nombreux fichiers chargés et trop lourd.
    items:
      - title: fichiers JS chargés
        value: 16
      - title: JS chargés
        value: 443
        suffix: Ko
      - title: fichiers CSS chargés
        value: 8
      - title: CSS chargés
        value: 40.8
        suffix: Ko
  - type: datas
    column: 4
    show_color: false
    show_gauge: false
    text: Donc trop long à charger
    items:
      - title: requêtes au total
        value: 78
      - title: transférés au total
        value: 1.2
        suffix: Mo
      - title: Temps de chargement (mobile)
        value: 2.23
        suffix: s
      - title: Temps de chargement total (mobile)
        value: 7.88
        suffix: s
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
        text: Un site plus rapide, c'est une meilleure performance business. Cela a
          aussi de nombreux autres impacts positifs.
      - title: Pour votre empreinte carbone
        icon: globe-europe-africa
        text: En ayant un site web non énergivore vous réduirez considérablement votre
          impact environnemental.
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
  - type: quote
    text: « Lawyerify nous a permis de simplifier et de rendre plus agréable la mise
      à jour du contenu de notre site Internet »
    author:
      title: Me Joseph Hazan
      text: Cabinet d’avocats Le 52
      image:
        src: /images/uploads/le52-joseph-hazan.jpg
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
    column: 4
    show_color: false
    show_gauge: false
    title: Un site optimisé et deux fois plus rapide !
    text: Les images et les assets sont optimisées pour peser le moins lourd possible.
    items:
      - title: fichiers JS chargés
        value: 3
      - title: JS chargés
        value: 68.3
        suffix: Ko
      - title: fichiers CSS chargés
        value: 2
      - title: CSS chargés
        value: 16.4
        suffix: Ko
      - title: requêtes au total
        value: 28
      - title: transférés au total
        value: 779
        suffix: Ko
      - title: Temps de chargement à l’arrivée (mobile)
        value: 1.41
        suffix: s
      - title: Temps de chargement total (mobile)
        value: 3.70
        suffix: s
  - type: figure
    grid: small
    figure:
      src: /images/uploads/le52-screenshot-website.png
  - type: cta
    cta:
      text: Découvrez le site web du cabinet 52
      url: https://www.le52-avocats.com/
      blank: true
---
