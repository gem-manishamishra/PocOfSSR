const path = require('path');
const merge = require('webpack-merge');
const baseConfig=require('./webpack.base.js');

const clientConfig = {
  entry: './src/client/client.js',
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
};
module.exports =merge(baseConfig,clientConfig)