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
      }
    ]
  },
};