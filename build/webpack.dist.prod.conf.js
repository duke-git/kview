var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackBaseConfig = require('./webpack.dist.base.conf.js');

process.env.NODE_ENV = 'production';

var webpackConfig = merge(webpackBaseConfig, {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'kview.min.js',
        library: 'kview',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new ExtractTextPlugin({ 
            filename: 'kview.min.css', 
            disable: false, 
            allChunks: true 
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: function (module) {
        //         return module.context && module.context.indexOf('node_modules') !== -1;
        //     }
        // }),
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告  
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
});

module.exports = webpackConfig;
