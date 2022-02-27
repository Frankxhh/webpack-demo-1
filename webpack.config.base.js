const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { Template } = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'zxh',
            template: 'src/assets/index.html'
        })
    ],
    module: {
        rules: [
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            },
            {
                test:/\.styl$/,
                loader:['style-loader','css-loader','stylus-loader'],
            },
            {
                test:/\.less$/,
                loader:['style-loader','css-loader','less-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options: { implementation: require("dart-sass") }
                    }
                ],
            },
        ],
    },
}; 