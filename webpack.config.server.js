const browserConfig = require('./webpack.config')[0];

browserConfig.output.publicPath = './dist';
browserConfig.devtool = 'source-map';
browserConfig.devServer = {
  contentBase: '.',
  host: '0.0.0.0',
  port: 9000
};

module.exports = browserConfig;
