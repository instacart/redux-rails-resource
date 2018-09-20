module.exports = {
  mode: 'production',
  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  entry: {
    main: './src/index.js'
  },
  resolve: {
    modules: ['node_modules']
  },
  output: {
    filename: 'redux-rails-resource.js',
    library: 'redux-rails-resource',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  externals: {
    'react': 'react',
    'react-redux': 'react-redux',
    'prop-types': 'prop-types',
    'redux-rails': 'redux-rails'
  }
}
