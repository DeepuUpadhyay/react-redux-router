const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
 mode: "devlopment",
 target: "web",
 devtool: "cheap-module-source-map",
 entry: "./src/index",
 output: {
  path: path.resolve(__dirname, "build"),
  publicPath: "/",
  filename: "bundle.js"
 },
 devServer: {
  stats: "minimal",
  overlay: true,
  historyApiFallback: true,
  disableHostCheck: true,
  headers: { "Access-Control-Allow-Origin": "*" },
  https: false
 },
 plugin: [
  new HtmlWebpackPlugin({
   template: "src/index.html",
   favicon: "src/favicon.ico"
  })
 ],
 module: {
  rules: [
   {
    test: /\.(js|jsx)$/,
    exclude: /node_module/,
    use: ["bable-loader"]
   },
   {
    test: /(\.css)$/,
    use: ["style-loader", "css-loader"]
   }
  ]
 }
};
