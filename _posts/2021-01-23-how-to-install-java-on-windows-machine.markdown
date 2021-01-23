---
permalink: java/how-to-install-java-on-windows-machine
layout: post
title: How to install Java on Windows machine
excerpt: 'In this article, I will share with you how I installed Java on my Windows DEV machine'
tags:
  - java
keywords:
  - install java 15
  - install java on windows
category: java
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80
---

In this article, I will share with you how I installed Java on my Windows DEV machine

In java, we have the choice between installing Java from **[Oracle](https://www.oracle.com)** or **[OpenJDK](https://openjdk.java.net)** and personally, I use OpenJDK for the simple reason: it's an **open-source** implementation of the [**Java Platform, Standard Edition**](https://www.oracle.com/java/technologies/java-se-glance.html) :)

At the time of writing this article, the latest GA version of the JDK is **15** and here are the steps that I followed to install this version on my windows machine:

- Go to the [**official website**](https://jdk.java.net/15/) and download the zip format of the JDK for Windows
  ![download-jdk.png](/assets/how-to-install-java-on-windows-machine/download-jdk.png)
- Unzip the downloaded file in any location of your choice
  <br/>For example, I unzipped it in `C:\dev\tools\java\jdk-15.0.2`
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
- Add these 2 environment variables (or update them if they already exist):

  - `JAVA_HOME`
    ![java-home-env-variable](/assets/how-to-install-java-on-windows-machine/java-home-env-variable.png)

  - `Path`
    ![path-env-variable](/assets/how-to-install-java-on-windows-machine/path-env-variable.png)

- To test this installation, open a terminal (personally, I use [**Git-Bash**](https://gitforwindows.org/) terminal) and check the version of Java installed on our machine using `java -version` command:

  ```shell
  > java -version
  openjdk version "15.0.2" 2021-01-19
  OpenJDK Runtime Environment (build 15.0.2+7-27)
  OpenJDK 64-Bit Server VM (build 15.0.2+7-27, mixed mode, sharing)
  ```

Voilà, Java is installed on your machine and you are ready to start programming with the most programming language used by Software Engineer in the world :)

I hope you find it useful
