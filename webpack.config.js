// var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://192.168.1.6:3000',
        'webpack/hot/only-dev-server',
        './flux/app'
    ],
    output: {
        // path: path.join(__dirname, '.'),
        path: __dirname + '/js/',
        publicPath: "/js/",
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js','.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        }, {
            test: /\.css?$/,
            loaders: ['style', 'raw']
        }, {
            test: /\.jsx?$/,
            loaders: ['jsx?harmony']
        }]
    }
};
