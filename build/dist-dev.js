// https://github.com/shelljs/shelljs
require('./check-versions')();

process.env.NODE_ENV = 'production';
var ora = require('ora');
var path = require('path');
var chalk = require('chalk');
var shell = require('shelljs');
var webpack = require('webpack');
var config = require('../config');
var webpackConfig = require('./webpack.dist.dev.conf');

var spinner = ora('disting for dev...');
spinner.start();

var assetsPath = path.join(config.dist.assetsRoot, config.dist.assetsSubDirectory);
shell.rm('-rf', assetsPath);
shell.mkdir('-p', assetsPath);
shell.config.silent = true;
//shell.cp('-R', 'static/*', assetsPath);
shell.config.silent = false;

webpack(webpackConfig, function (err, stats) {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');

  console.log(chalk.cyan('  Dist dev complete.\n'));
});
