const path = require('path')
const webpack = require('webpack')

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  entry: {
    main: './src/index.js'
  },
  resolve: {
    alias: {
      'redux-rails': path.resolve(__dirname, 'lib/redux-rails')
    },
    modules: ['node_modules']
  },
  output: {
    library: 'resource-hoc',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-redux': 'react-redux',
    'prop-types': 'prop-types',
    'redux-rails': 'redux-rails'
  },
  devtool: 'cheap-module-eval-source-map'
}
