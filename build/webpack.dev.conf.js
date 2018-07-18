const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');

module.exports = webpackMerge(baseConf, {
  mode: 'development',
  devServer: {
    contentBase: './examples'
  }
});
