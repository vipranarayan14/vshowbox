const path = require('path');
const filename = 'vshowbox';
const library = 'vShowBox';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = {
  entry: './src/index.js',
  module: {
    loaders: [

      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },

      {
        loader: ExtractTextPlugin.extract([
          'css-loader',
          'less-loader'
        ]),
        test: /\.(css|less)$/
      }

    ]
  },
  plugins: [
    new ExtractTextPlugin(`${filename}.css`)
  ]
};

const browserConfig = Object.assign({}, baseConfig, {

  output: {
    filename: `${filename}.js`,
    library,
    libraryExport: library,
    libraryTarget: 'window',
    path: path.join(__dirname, 'dist')
  }

});

const npmConfig = Object.assign({}, baseConfig, {

  output: {
    filename: `${filename}.npm.js`,
    library,
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist')
  }

});

module.exports = [
  browserConfig,
  npmConfig
];
