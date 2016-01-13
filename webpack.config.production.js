var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        './flux/app'
    ],
    output: {
        path: __dirname + '/js/',
        publicPath: "/js/",
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
            test: /\.css?$/,
            loaders: ['style', 'raw']
        }]
    }
};
