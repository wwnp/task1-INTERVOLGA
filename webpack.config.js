const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.common.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,'css-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\.m?(js|ts)$/,
        exclude: '/node_modules/',
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader,'css-loader','less-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader'],
        exclude: '/node_modules/',
      }
    ]
  },
  optimization: {
    minimize:true,
    minimizer: [
      new CssMinimizerPlugin({}),
      new TerserPlugin({})
    ]
  },
  devServer: {
    contentBase: path.join(__dirname,'dist'),
    port: 3005
  },
  resolve : {
    extensions: ['.js','.ts']
  },
  mode:'development',
} 