---
permalink: linux/how-to-create-large-files-in-linux
layout: post
title: 'How to create large files in linux'
tags:
  - linux
category: linux
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1587397070638-81d3cce10435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
---

In this post I'm going to share with you the command I used to create **1G** file for test purposes

```shell
fallocate -l 1G test.img
```

I hope you find it useful :)
