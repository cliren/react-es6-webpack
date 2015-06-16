var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');

var plugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.ProvidePlugin({
    $: "jquery"
  })
];

var loaders = [
  {test: /\.js$/, exclude: /node_modules|bower_components/, loader: 'babel-loader'},
  {test: /\.jsx$/, exclude: /node_modules|bower_components/, loader: 'babel-loader'},
  {test: /\.less$/, loader: "style!css!less"},
  {test: /\.css$/, loader: "style!css"},
  {test: /\.(ttf)(\?)?$/, loader: "file-loader"},
  {test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
  {test: /\.eot$/, loader: "file-loader"},
  {test: /\.svg$/, loader: "file-loader"},
  {test: /\.(png|gif)/, loader: "file-loader"}
];

var output = {
  path: __dirname + "/dist",
  filename: 'main.js',
  library: 'ReactES6App',
  libraryTarget: 'umd'
};

module.exports = {
  entry: './src/app.jsx',
  output: output,
  module: {
    loaders: loaders,
    noParse: []
  },
  resolve: {
    root: [
      nodeModulesPath,
      bowerComponentsPath],
    alias: {},
    extensions: ['',
      '.js',
      '.css']
  },
  bail: true,
  plugins: plugins
};