---
permalink: git/my-git-aliases
layout: post
title: 'My GIT aliases'
tags: git
category: git
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80
---

In this post I'm going to share with you my git aliases that I use every at work and I hope you find it useful

```shell
git config --global alias.ch checkout
git config --global alias.br branch
git config --global alias.co commit
git config --global alias.st status
git config --global alias.glog 'log --oneline --graphe --decorate --all'
git config --global alias.amend 'commit -a --amend --no-edit'
git config --global alias.re 'reset HEAD --hard'
```
