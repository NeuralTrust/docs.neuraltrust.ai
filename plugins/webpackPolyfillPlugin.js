const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'webpack-polyfill-plugin',
    configureWebpack(config, isServer) {
      if (!isServer) {
        return {
          resolve: {
            fallback: {
              process: require.resolve('process/browser.js'),
              util: require.resolve('util/'),
              buffer: require.resolve('buffer/'),
              stream: false,
              path: false,
            },
            alias: {
              process: 'process/browser.js',
            },
          },
          plugins: [
            new webpack.DefinePlugin({
              'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }),
            new webpack.ProvidePlugin({
              process: 'process/browser.js',
              Buffer: ['buffer', 'Buffer'],
            }),
            new NodePolyfillPlugin({
              includeAliases: ['process', 'buffer', 'util']
            })
          ],
        };
      }
      return {};
    },
  };
};