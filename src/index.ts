import webpack = require("webpack");

// Taken from https://github.com/webpack-contrib/raw-loader/blob/master/index.js
// 关于为什么要将 \u2028 和 \u2029 转义，参考
// https://www.web-tinker.com/article/21252.html
export default function rawLoader(
  this: webpack.loader.LoaderContext,
  source: string | Buffer
) {
  this.value = source;
  const json = JSON.stringify(source)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
  return `module.exports = ${json}`;
}
