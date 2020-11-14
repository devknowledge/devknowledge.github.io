---
permalink: linux/how-to-copy-all-files-except-one-directory
layout: post
title: 'How to copy all files except one directory'
tags:
  - linux
category: linux
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1056&q=80
---

In this post I'm going to share with you the commands I used to copy a directory and all its inner files and directories except one directory

```shell
mkdir -p /the/path/to/the/new/directory
cd /the/path/to/the/new/directory
cp -r $(ls -A  | grep -v directory-to-exclude) /the/path/to/the/new/directory
```

I hope you find it useful :)
