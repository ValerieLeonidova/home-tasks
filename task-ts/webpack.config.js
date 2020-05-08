// var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
    mode: 'development',
    entry: './src/script.ts',
    resolve: {
        extensions: ['.js', '.ts'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
});
