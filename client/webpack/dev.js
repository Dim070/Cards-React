const path = require('path');
const { merge } = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');

require('dotenv').config();

const common = require('./common');

module.exports = merge(common, {
  mode: 'development',
  stats: 'minimal',
  optimization: {
    moduleIds: 'named',
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  },
  devServer: {
    hot: true,
    historyApiFallback: {
      index: '/'
    },
    open: true,
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new Dotenv(),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        enabled: true,
        files: path.resolve(__dirname, '../src')
      },
      issue: {
        scope: 'all'
      }
    })
  ]
});
