const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: [ '.js', '.vue' ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  output: {
    path: path.resolve(__dirname, "lib", "cjs"),
    filename: "index.js",
    globalObject: "this",
    libraryTarget: "umd",
  },
  externals: {
    vue: "vue",
  },
  mode: "production",
}