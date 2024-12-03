const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    path: path.resolve(__dirname, "lib", "cjs"),
    filename: "index.js",
    globalObject: "this",
    library: {
      type: "umd",
    },
    clean: true,
  },
  externals: {
    vue: "vue",
  },
  mode: "production",
};
