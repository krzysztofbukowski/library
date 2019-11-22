/* eslint-disable */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    main: './front-end/src/index.tsx',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  output: {
    filename: '[name].[contenthash:5].js',
    path: path.resolve(__dirname, 'build'),
  },

  devServer: {
    open: true,
    port: process.env.WEBPACK_PORT || 9000,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 0,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]',
              },
            },
          },
          'sass-loader',
        ],
      },

      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash:5].[ext]',
        },
      },

      {
        test: /\.(tsx?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      title: 'test',
      template: 'front-end/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:5].css',
    }),
  ],
};
