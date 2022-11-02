const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        hot: true,
        open: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Vishwas'),
        }),
        new ReactRefreshWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/styles.css',
        }),
    ],
};
