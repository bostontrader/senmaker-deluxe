var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/root'
    ],
    output: {
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ["es2015"],
                }
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader?insertAt=top',
                    'css-loader?modules&-autoprefixer&importLoaders=1&localIdentName=rst__[local]',
                    'sass-loader'
                ]

            }
        ]

    },
    devServer: {
        compress: true,
        disableHostCheck: true
    }
}