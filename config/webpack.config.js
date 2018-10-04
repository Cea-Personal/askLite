const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  watch:true,
  watchOptions:{
    ignored: ['node_modules','./build'],
    poll:1000
  },
  mode: 'development',
  entry: {
    commons:'./src/UI/js/shared.js',
    index:'./src/UI/js/index.js',
    home:'./src/UI/js/home.js',
    question:'./src/UI/js/question.js',
    login:'./src/UI/js/login.js',
    profile:'./src/UI/js/profile.js',
    questionnare:'./src/UI/js/questionnare.js',
    questionList:'./src/UI/js/questionList.js',
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      //babel to run on all .js file in src folder
      {
        test: /\.js$/,
        use: [
          {loader: 'babel-loader'},
        ],
        include: __dirname + '/src',
      },
      // take all our style.css and builds one styles.css for use in our pages
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // adds unique hash to implement modular css using BEM style
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:4]',
        ]
      },
      // compiles all images to the build images folder.
      {
        test: /\.(png|jp(e *)g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]',
              limit: 8000,
              },
            },
        ]
      }

    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:4].css",
    }),
    new HtmlWebpackPlugin({
      // create landing page
      filename:'index.html',
      inject:'body',
      hash: true,
      chunks: ['index','styles'],
      template: './src/UI/index.html',
    }),
    new HtmlWebpackPlugin({
      //create questionnare page
      filename:'questionnare.html',
      //inject js content in body of html
      inject:'body',
      //three chunks to be included
      chunks:['styles','commons','questionnare'],
      hash: true,
      //use as template index.html
      template: './src/UI/index.html',
    }),
    new HtmlWebpackPlugin({
      // create login page
      filename:'login.html',
      inject:'body',
      chunks:['commons','styles','login'],
      hash: true,
      template: './src/UI/index.html',
    }),
    new HtmlWebpackPlugin({
      // create question page
      filename:'question.html',
      inject:'body',
      chunks:['styles','commons','question'],
      hash: true,
      template: './src/UI/index.html',
    }),
    new HtmlWebpackPlugin({
      // create profile page
      filename:'profile.html',
      inject:'body',
      chunks:['styles','commons','profile'],
      hash: true,
      template: './src/UI/index.html',
    }),
    // create home page
    new HtmlWebpackPlugin({
      filename:'home.html',
      inject:'body',
      chunks:['styles','commons','home'],
      hash: true,
      template: './src/UI/index.html',
    }),
    // create questionList page
    new HtmlWebpackPlugin({
      filename:'questionList.html',
      inject:'body',
      chunks:['styles','commons','questionList'],
      hash: true,
      template: './src/UI/index.html',
    })
  ],
  stats:{ children: false },
  optimization:{
    splitChunks:{
      cacheGroups:{
      // cache a shared module for all part of the sites that are shared
        commons: {
          name: "commons",
          minChunks: 2,
          chunks: 'initial',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
				},
        vendor:{
          name:"vendor",
          test: /node_modules/,
          chunks:'all',
          priority: 20
      },
        // all styles to be compressed to a single css file
        styles:{
          name:"styles",
          test: /\.css$/,
          chunks: 'all',
          enforce:true
        }
      }
    }
  }
};