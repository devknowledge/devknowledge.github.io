const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  watch: true,
  entry: {
    home: path.join(__dirname, 'webpack/home.ts'),
    post: path.join(__dirname, 'webpack/post.ts'),
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '_includes/webpack'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-bundle.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./webpack'), path.resolve('./node_modules')],
    extensions: ['.js', '.ts'],
  },
};
