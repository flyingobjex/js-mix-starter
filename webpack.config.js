var path = require("path");

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve('./dist'),
        filename: "bundle.js",
        libraryTarget: 'var',
        library: 'jslib',
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};