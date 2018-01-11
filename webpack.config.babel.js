import path from 'path';

module.exports = {
  entry: './example/js/index.js',
  output: {
    filename: 'example/app.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    compress: true,
    port: 9000,
    open: true,
  },
};
