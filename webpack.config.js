var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const { Template } = require('webpack');

module.exports = {
    mode: 'development',
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'zxh',
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}; 