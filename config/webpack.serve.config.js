const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { baseConfig, projectRootDir } = require('./webpack.base.config.js');

const prodConfig = require('./webpack.prod.config.js');

const serveConfig = merge({
  customizeArray(_, b, key) {
    if (key === 'plugins') return baseConfig.plugins.concat(b);
  }
})(prodConfig, {
  output: {
    publicPath: './'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CleanWebpackPlugin(['dist'], { root: projectRootDir }),
    new ExtractTextPlugin('style.css')
  ]
});

module.exports = serveConfig;
