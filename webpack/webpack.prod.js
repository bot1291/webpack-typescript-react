const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Codevolution'),
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/styles.[contenthash].css',
    }),
  ],
}
