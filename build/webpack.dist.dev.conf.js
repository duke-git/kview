var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackBaseConfig = require('./webpack.dist.base.conf.js');
//var nodeExternals = require('webpack-node-externals');

process.env.NODE_ENV = 'production';

var webpackConfig = merge(webpackBaseConfig, {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'kview.js',
        library: 'kview',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    //externals: [nodeExternals()],
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new ExtractTextPlugin({ 
            filename: 'kview.min.css', 
            disable: false, 
            allChunks: true 
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
});

module.exports = webpackConfig;