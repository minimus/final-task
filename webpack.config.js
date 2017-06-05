const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')

module.exports = {
  entry: {
    app: './client-src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.gif$/, loader: 'url-loader?mimetype=image/gif' },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client-src/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new BabiliPlugin(true),
    /*new webpack.optimize.UglifyJsPlugin({
      compress: process.env.NODE_ENV === 'production',
    }),*/
  ],
}
