---
permalink: java/how-to-install-java-on-windows-machine
layout: post
title: Comment installer Java sur une machine Windows
excerpt: 'Dans cet article, je vais partager avec vous comment jai installé Java sur ma machine de DEV Windows'
tags:
  - java
category: java
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80
---

Dans cet article, je vais partager avec vous comment j'ai installé Java sur ma machine de DEV Windows

En java, on a le choix entre installer Java depuis **[Oracle](https://www.oracle.com)** ou depuis **[OpenJDK](https://openjdk.java.net)** et perso, j'utilise OpenJDK pour la simple raison: c'est l'implémentation **open-source** de la **[plateforme Java SE](https://www.oracle.com/java/technologies/java-se-glance.html)** :)

Au moment de la rédaction de cet article, la dernière version GA du JDK est la version **15** et voici les étapes
que j'ai suivi pour installé cette version sur ma machine windows:

- Aller vers le [**site officiel**](https://jdk.java.net/15/) et télécharger le format zip du JDK pour Windows
  ![download-jdk.png](/assets/how-to-install-java-on-windows-machine/download-jdk.png)
- Dézipper le zip dans un endroit à votre choix sur votre machine
  <br/>Par exemple, je l'ai dézippé dans `C:\dev\tools\java\jdk-15.0.2`
  <div style="height: .5rem"></div>
  ```shell
  > ls -l C:\dev\tools\java\jdk-15.0.2
  total 124
  drwxr-xr-x 1 ahenteti 197121    0 Jan 23 17:23 bin/
  drwxr-xr-x 1 ahenteti 197121    0 Jan 23 17:23 conf/
  drwxr-xr-x 1 ahenteti 197121    0 Jan 23 17:23 include/
  drwxr-xr-x 1 ahenteti 197121    0 Jan 23 17:24 jmods/
  drwxr-xr-x 1 ahenteti 197121    0 Jan 23 17:24 legal/
  drwxr-xr-x 1 ahenteti 197121    0 Jan 23 17:24 lib/
  -rw-r--r-- 1 ahenteti 197121 1210 Jan 23 17:23 release
  ```
- Ajouter ces 2 variables d'environnement (ou les mettre à jour si elles existent déjà):

  - `JAVA_HOME`
    ![java-home-env-variable](/assets/how-to-install-java-on-windows-machine/java-home-env-variable.png)

  - `Path`
    ![path-env-variable](/assets/how-to-install-java-on-windows-machine/path-env-variable.png)

- Pour tester cette installation, ouvrir un terminal (personnellement, j'utilise [**git-bash**](https://gitforwindows.org/)) et vérifier la version du Java installé sur notre machine:

  ```shell
  > java -version
  openjdk version "15.0.2" 2021-01-19
  OpenJDK Runtime Environment (build 15.0.2+7-27)
  OpenJDK 64-Bit Server VM (build 15.0.2+7-27, mixed mode, sharing)
  ```

Voilà, on a installé Java sur notre machine :)

J'espère que cela était utile pour vous et à très bientôt dans un autre article :)
