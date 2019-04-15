const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: '../src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-app.bundle.js'
    },
    modules: {
        rules: [{
            test: /\.css$/,
            use: 'css-loader'
        }]
    }
}