/**
 * Created by Vienyame on 09/06/2016.
 */
module.exports = {
  devtool: 'sourcemap',
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel-loader' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.scss$/, loader: ['style', 'css', 'scss'] }
    ],
    preLoaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)$/,
      loader: 'jshint-loader'
    }],
  },
  output: {
    filename: 'bundle.js'
  },
  watch: false
};