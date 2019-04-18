/**
 * Created by rouven on 11.04.17.
 */

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'wikomForm',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devtool: 'source-map',
    externals: {
        "prop-types": "prop-types",
        "query-string": "query-string",
        "react": "react",
        "react-dom": "react-dom",
        "react-redux": "react-redux",
        "react-router-redux": "react-router-redux",
        "react-select": "react-select",
        "react-tinymce": "react-tinymce",
        "react-virtualized-select": "react-virtualized-select",
        "redux": "redux",
        "redux-form": "redux-form",
        "wikom-data": "wikom-data"
    }
};
