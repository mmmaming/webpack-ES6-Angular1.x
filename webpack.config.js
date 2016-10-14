/**
 * Created by ming on 2016/9/23.
 */
var webpack = require('webpack');
var HTMLPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map', //打包后的文件映射
    entry: {
        index: ['./src/index.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        publicPath: '/'
    },
    externals: [
        {
            'angular': 'angular'
        }
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.tpl\.html|\.partial\.html$/,
                loader: 'html',
                exclude: /node_modules/,
                include: __dirname + '/src'
            },
            {
                test: /\.css$/,
                // 注意 loader 而不是 loaders
                loader: ExtractTextPlugin.extract('style', 'css'),
                includes: __dirname + '/src'
            },
            {
                test: /\.(png|jpeg|gif)$/,
                loaders: ['file', "url?limit=1024"]
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            title: 'Eason',
            template: __dirname + '/src/index.html',
            inject: 'body',
        }),
        new ExtractTextPlugin('[name].css'),
    ],
    resolve: {
        extensions: ['', '.js']
    }

}