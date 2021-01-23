---
permalink: frontend/starter-project-using-react-scss-typescript-and-webpack
layout: post
title: 'Starter Project using React, Scss, Typescript and Webpack'
excerpt: 'In this post you can find a starter project using React, Scss, Typescript and Webpack'
tags:
  - react
  - scss
  - typescript
  - webpack
category: frontend
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80
---

In this post you can find a starter project using React, Scss, Typescript and Webpack

<p class="code-tabs"></p>

- package.json

  ```json
  {
    "name": "starter-project-using-react-scss-typescript-and-webpack",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "build": "webpack",
      "start": "webpack-dev-server"
    },
    "dependencies": {
      "react": "16.7.0",
      "react-dom": "16.7.0"
    },
    "devDependencies": {
      "@types/react": "16.8.1",
      "@types/react-dom": "16.0.11",
      "typescript": "3.3.1",
      "awesome-typescript-loader": "3.2.0",
      "html-webpack-plugin": "4.5.0",
      "node-sass": "4.12.0",
      "sass-loader": "7.1.0",
      "css-loader": "3.0.0",
      "mini-css-extract-plugin": "1.2.0",
      "webpack": "4.29.0",
      "webpack-cli": "3.2.1",
      "webpack-dev-server": "3.1.14"
    }
  }
  ```

- tsconfig.json

  ```json
  {
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "jsx": "react",
      "outDir": "./dist/"
    },
    "include": ["./src/**/*"]
  }
  ```

- webpack.config.js

  ```js
  const path = require('path');
  const HtmlWebPackPlugin = require('html-webpack-plugin');
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  module.exports = {
    entry: './src/index.ts',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.[chunkhash].js',
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'bundle.[chunkhash].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      modules: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')],
      extensions: ['.ts', '.tsx', '.js', '.jsx', 'scss'],
    },
  };
  ```

- index.ts

  ```ts
  import './index.scss';

  import * as React from 'react';
  import * as ReactDom from 'react-dom';
  import Hello from './hello';

  ReactDom.render(React.createElement(Hello), document.querySelector('body'));
  ```

- hello.tsx

  ```ts
  import * as React from 'react';

  export interface IHelloProps {}

  export interface IHelloState {}

  export default class Hello extends React.Component<IHelloProps, IHelloState> {
    constructor(props: IHelloProps) {
      super(props);

      this.state = {};
    }

    public render() {
      return <div>Hello world!</div>;
    }
  }
  ```

You can also find the source code in my github [repository](https://github.com/ahenteti/starter-project-using-react-scss-typescript-and-webpack)

I hope you find it useful
