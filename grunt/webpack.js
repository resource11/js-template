'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  options: {
    entry: {
      bundle: './index.js',
      specs: './spec/_all.js',
      vendor: ['jquery', 'handlebars', 'lodash'],
    },

    output: {
      path: './',
      filename: '[name].js'
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],

    module: {
      loaders: [
        { test: /\.scss$/, loader: 'style!css!sass' },
        { test: /\.hbs$/, loader: 'handlebars' },
        { test: /\.html.hbs$/, loader: 'handlebars!html' }
      ]
    },

    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        fallback: path.join(__dirname, 'node_modules'),
        alias: {
          'handlebars': 'handlebars/runtime.js'
        }
      },

      // resolveLoader: {
      //   fallback: path.join(__dirname, 'node_modules'),
      //   alias: {
      //     'hbs': 'handlebars-loader'
      //   }
      // },

    stats: {
      colors: true,
      modules: true,
      reasons: true
    }
  },

  build: {
    failOnError: true,
    watch: false,
    keepalive: false
  }
};
