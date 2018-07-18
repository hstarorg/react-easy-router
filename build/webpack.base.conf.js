const util = require('./util');

const demo = 'basic';
module.exports = {
  entry: util.root('examples', demo, 'index.js'),
  output: {
    path: util.root('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.js$/, use: ['babel-loader'] }]
  }
};
