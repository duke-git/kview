var path = require('path')
var utils = require('./utils')
var config = require('../config')
var webpack = require('webpack');
var vueLoaderConfig = require('./vue-loader.conf')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './demo/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath :
      config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('src'),
      resolve('demo'),
      resolve('node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': resolve('src'),
      'demo': resolve('demo'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components')
    }
  },
  plugins:[
      new webpack.ProvidePlugin({
          _:"underscore",
          $: "jquery"
      })
  ],
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
        include: [resolve('src'), resolve('demo'), resolve('test')]
      },
      // {
      //   test: /\.css$/,
      //   use: [{
      //     loader: 'css-loader',
      //     options: {
      //       modules: true,
      //       localIdentName: '[path][name]__[local]--[hash:base64:5]'
      //     }
      //   }]
      // },
      {
        test: /\.styl$/,
        loader: 'stylus-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
