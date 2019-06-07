var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {  
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', 
    filename: 'bundle.js'  }, 
  devServer: {
    contentBase: './dist', 
    historyApiFallback: true,
    host: '0.0.0.0' // for running on other devices on the same network
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: ['babel-loader']    
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            plugins: function () { // postcss plugins, can be exported to postcss.config.js
              return [
                autoprefixer,
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.(ttf|eot|svg|woff2|gif|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // include: path.resolve(__dirname, 'scss'),
        exclude: /node_modules/, 
        use: [{
            loader: 'file-loader'
        }]
      }
    ]
  },
};