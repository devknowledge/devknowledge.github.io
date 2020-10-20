const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'webpack', 'main'),
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'assets/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js'],
  },
};
