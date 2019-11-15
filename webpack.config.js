const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",

  entry: {
    main: "./front-end/src/index.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },

  devServer: {
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", 
          "sass-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin(
      {
        title: "test",
        template: "front-end/index.html"
      }
    ),
    new MiniCssExtractPlugin(
      {
        filename: "[name].css"
      }
    )
  ]
}
 