const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { Template } = require('webpack');

const base=require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'production',
    plugins: [
        ...base.plugins,
        new HtmlWebpackPlugin({
            title: 'zxh',
            template: 'src/assets/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false,
        }),
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ],
            }
        ]
    }
}; 