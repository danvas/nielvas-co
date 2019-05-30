// var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
  entry: './src/index.js', 
  output: {
    path: __dirname + '/dist', 
    // path: path.resolve(__dirname, 'dist'),
    publicPath: '/', 
    filename: 'bundle.js'  }, 
  devServer: {
    contentBase: './dist', 
    historyApiFallback: true,
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/, 
      exclude: /node_modules/, 
      use: ['babel-loader']    
      }]
  },
};


console.log("###############", __dirname + '/dist')