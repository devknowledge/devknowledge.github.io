---
permalink: shell/my-bashrc-file
layout: post
title: 'My .bachrc file'
tags: shell
category: shell
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1597775861008-13fa328f39c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1166&q=80
---

Every time I change my laptop, I forgot to keep my .bashrc file. This time I'm going to keep it in my blog and I hope you find it helpful

```shell
PS1='${debian_chroot:+($debian_chroot)}'
PS1="$PS1"'\n'
PS1="$PS1"'\[\033[1;31m\]'
PS1="$PS1"'\u '
PS1="$PS1"'\[\033[1;35m\]'
PS1="$PS1"'in '
PS1="$PS1"'\[\033[1;32m\]'
PS1="$PS1"'localhost:\W'
PS1="$PS1"'\[\033[36m\]'
PS1="$PS1"'`__git_ps1`'
PS1="$PS1"'\n'
PS1="$PS1"'\[\033[1;35m\]'
PS1="$PS1"'> '
PS1="$PS1"'\[\033[0m\]'

alias ll='ls -alF'
alias gs='git status'
alias gl='git log --oneline'
alias ga='git commit -a --amend --no-edit'
alias gp='git pull --rebase && git push'
alias vim-bashrc='vim ~/.bashrc'
alias source-bashrc='source ~/.bashrc'
```
