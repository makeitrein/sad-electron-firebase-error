var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css")
    }
  },
  babel: {
    "presets": ["es2015", "stage-0"],
    "plugins": ["transform-runtime"]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.ExternalsPlugin('commonjs2', [
      'electron',
    ])
  ]
}
