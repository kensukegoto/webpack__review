const path = require('path');
const outputPath = path.resolve(__dirname,'dist');
console.log({outputPath});
module.exports = {
  entry: { 
    index: './src/index.js',
    index2: './src/index2.js'
  },
  output: {
    filename: '[name].js',
    path: outputPath
  }
}