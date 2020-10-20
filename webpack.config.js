const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'webpack', 'main'),
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'assets'),
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name]-bundle.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?[ac]ss$/,
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./webpack'), path.resolve('./node_modules')],
    extensions: ['.json', '.js'],
  },
};
