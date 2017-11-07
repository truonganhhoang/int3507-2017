var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'babel-polyfill','./src/app.js'
    ],
    output: {
        filename: 'public/build/bundle.js',
        sourceMapFilename: 'public/build/bundle.map'
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    devtool: '#source-map',
    watch: true,
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1'],
                "plugins": ["transform-decorators-legacy"],
            }
        }]
    }
}