const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig=require('./webpack.base.js')

const serverConfig = {
  entry: './src/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js'
  },
};

module.exports =merge(baseConfig,serverConfig)
 
