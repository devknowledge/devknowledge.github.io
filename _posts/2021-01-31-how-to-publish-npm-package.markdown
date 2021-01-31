---
permalink: npm/how-to-publish-npm-package
layout: post
title: How to publish your first NPM package
excerpt: 'In this article, I will share with you how I have published my first NPM package'
tags:
  - npm
keywords:
  - publish npm package
category: npm
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1596461009523-7d647a4e2399?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80
---

In this article, I will share with you how I have published my first NPM package.

But, first of all, what is NPM ?

Here is the definition in [Wikipedia](<https://en.wikipedia.org/wiki/Npm_(software)>)

> NPM is the default **package manager for the JavaScript runtime environment Node.js**. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry

Nowadays, in software engineering, when we what to add a feature in our software, most of the time we find that we have already a library/package that we can reuse and help us achieve our needs. And this is very wonderful in our domain :)

Today, we are going to publish our first NPM package, so other people can be reused and here the steps that I have followed to achieve that:

- Create an account on the NPM public registry. Here is the NPM [documentation](https://docs.npmjs.com/creating-a-new-npm-user-account) on how to create your account

- Create a folder with the following files:

  <p class="code-tabs"></p>

  - package.json

    ```json
    {
      "name": "@ahenteti/hello-npm",
      "version": "1.0.0",
      "description": "Hello NPM from @ahenteti",
      "main": "index.js",
      "type": "module",
      "keywords": ["hello-npm"],
      "author": "Ahmed HENTETI (https://ahenteti.github.io)",
      "license": "MIT",
      "scripts": {},
      "repository": {
        "type": "git",
        "url": "https://github.com/ahenteti/hello-npm.git"
      }
    }
    ```

  - index.js

    ```js
    const helloNpm = () => {
      console.log('hello npm!');
    };

    export default helloNpm;
    ```

  - README.md

    ```md
    ## Hello NPM from @ahenteti

    ## Installation

    Run `npm install @ahenteti/hello-npm`

    ## Usage

    \`\`\`

    import hello from @ahenteti/hello-npm

    hello();

    \`\`\`
    ```

  The `package.json` file is the entry point of our package where we define properties like the **name**, **description**, ... of the package

  For instance, the property **main** points to the file **index.js** where we define the logic of our package.

- When ready, run the command `npm publish --access=public` to publish your package

Voilà, now you can check your NPM account and verify your package
![npm-registry.png](/assets/how-to-publish-npm-package/npm-registry.png)

I hope you find it useful
