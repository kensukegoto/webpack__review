const path = require('path');
const outputPath = path.resolve(__dirname,'dist');
module.exports = {
  entry: { 
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  }
}