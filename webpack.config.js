const path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
  },
  entry: './src/renderer/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
    modules: [path.resolve(__dirname, 'src/renderer'), 'node_modules'],
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    publicPath: 'http://localhost:3000/',
    filename: 'bundle.js',
  },
  target: 'electron-renderer',
};
