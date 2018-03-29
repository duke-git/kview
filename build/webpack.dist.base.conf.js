/**
 * 公共配置
 */
var path = require('path');
var webpack = require('webpack');
var vueLoaderConfig = require('./vue-loader.conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 加载器
    module: {
        rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: vueLoaderConfig
            },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              include: [resolve('src'), resolve('test')]
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader?minimize" 
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader?minimize'
            //     ]
            // },
            {
              test: /\.styl$/,
              loader: 'stylus-loader'
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=10000'}
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'src': resolve('src')
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            _:"underscore",
            $: "jquery"
        })
    ],
};
