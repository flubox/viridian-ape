var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    rules: [
        {
            "test": /\.js?$/,
            "include": [
                path.resolve(__dirname, "src")
            ],
            "use": "babel-loader",
        }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
      path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },
  plugins: [
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
