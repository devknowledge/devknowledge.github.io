---
permalink: linux/manage-users-in-linux
layout: post
title: Manage users in Linux
tags: linux
category: linux
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1565449469297-7303f601bd66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80
---

In this post, I'm going to share with you the commands that I use to manage users in Linux

## Create new user

```
sudo useradd <username>
```

To be able to login with this newly created user, we should set a password to this user

## Set user password

```
sudo passwd <username>
```
