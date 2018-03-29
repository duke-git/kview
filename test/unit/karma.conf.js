// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf');

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.

    // 启动的测试浏览器, PhantomJS > 命令行，Chrome > chrome浏览器
    browsers: ['PhantomJS'], //['Chrome']
    //测试框架
    frameworks: ['mocha', 'sinon-chai'],
    //测试报告处理
    reporters: ['spec', 'coverage'],
    //测试的目标文件
    files: ['./index.js'],
    //忽略文件
    exclude: [],
    //预处理器
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    //测试时的webpack配置
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    //coverage option
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    // 文件匹配的起始路径
    // basePath: '',
    // 服务器端口
    // port: 9876,
    // 输出着色
    // colors: true,
    // 日志级别
    // LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    // logLevel: config.LOG_INFO,
    // 监控文件更改
    // autoWatch: true,
    // 超时处理，6s内没有捕获浏览器将终止进程
    // captureTimeout: 6000
  })
};
