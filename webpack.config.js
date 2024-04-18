const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
              test: /\.html$/,
              use: ['html-loader'],
            },
            { test: /\.svg$/, loader: 'svg-inline-loader' }  
          ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'), 
        compress: true,
        port: 9000,
        open: false, 
        hot: true,
        liveReload: false,
    }
};
