const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("../config");

module.exports = {
  target: "web",
  entry: {
    app: path.join(config.path_base, "/" + config.dir_client + "/client.js"),
  },
  output: {
    path: path.join(config.path_base + "/dist"),
    filename: "[name].[hash].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/node_modules/],
        use: ["react-hot-loader/webpack", "babel-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"' + process.env.NODE_ENV + '"',
      },
    }),
    new HtmlWebpackPlugin({
      templateContent:
        "" +
        "<!DOCTYPE html>" +
        "<html>" +
        " <head>" +
        '   <meta charset="utf-8">' +
        "   <title>Use Persisted Reducer</title>" +
        '   <meta name="viewport" content="width=device-width, initial-scale=1">' +
        " </head>" +
        " <body>" +
        '   <div id="app"></div>' +
        " </body>" +
        "</html>",
      inject: "body",
    }),
  ],
};
