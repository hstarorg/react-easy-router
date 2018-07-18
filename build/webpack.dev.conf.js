const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');

module.exports = webpackMerge(baseConf, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './examples',
    historyApiFallback: true
  }
});
