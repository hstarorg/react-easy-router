const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');

module.exports = webpackMerge(baseConf, {
  mode: 'development',
  devtool: 'cheap-source-map', //'source-map',
  devServer: {
    contentBase: './examples',
    historyApiFallback: true
  }
});
