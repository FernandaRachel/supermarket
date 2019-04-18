const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ServiceWorkerWepbackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
    // mode: 'development',
    // context: path.resolve(__dirname, 'app'),
    entry: '../src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-app.bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: '../public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    module: {
        rules: [{
                test: /\.js[x]?$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /\.css$/,
                use: [
                    // style-loader
                    { loader: 'style-loader' },
                    // css-loader
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            // },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: ['file-loader']
            // },
            {
                test: /\.woff|.woff2|.tff|.eot|.svg*.*$/,
                use: 'file'
            }
        ],
        // eslint-disable-next-line no-undef
        plugins: [
            new ExtractTextPlugin('app.css'),
            // new ServiceWorkerWepbackPlugin({
            //     entry: path.join(__dirname, '/src/index.jsx'),
            // }),
        ]
    }
}