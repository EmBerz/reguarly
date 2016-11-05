module.exports = {
  entry: ["./app.js"],
  output: {
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        }
      },
    ]
  },
  resolve: {
    extensions: ['','.js','.jsx']
  }
}
