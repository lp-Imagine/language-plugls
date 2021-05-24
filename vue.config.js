/*
 * @Descripttion: 
 * @version: 
 * @Author: peng
 * @Date: 2021-05-24 14:59:12
 * @LastEditors: peng
 * @LastEditTime: 2021-05-24 16:11:55
 */
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

// Generate pages object
const pagesObj = {};

const chromeName = ["popup", "options"];

chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/index.js`,
    template: "public/index.html",
    filename: `${name}.html`
  };
});

const plugins = [
        {
          from: path.resolve("src/manifest.json"),
          to: `${path.resolve("dist")}/manifest.json`
        }
]

module.exports = {
  pages: pagesObj,
  configureWebpack: {
    plugins: [CopyWebpackPlugin(plugins)],
    entry: {
      'background': './src/background.js',
      'jquery': './src/jquery.js'
    },
    output: {
      filename: 'js/[name].js'
    }
  }
};
