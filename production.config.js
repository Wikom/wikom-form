/**
 * Created by rouven on 11.04.17.
 */

const path = require('path');
const webpack = require('webpack');

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
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: ["style", "css"]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true
            },
            output: {
                comments: false
            }
        })
    ],
    externals: {
        "moment": "moment",
        "prop-types": "prop-types",
        "query-string": "query-string",
        "react": "react",
        "react-dom": "react-dom",
        "react-redux": "react-redux",
        "react-router-redux": "react-router-redux",
        "react-datepicker": "react-datepicker",
        "react-select": "react-select",
        "react-tinymce": "react-tinymce",
        "react-virtualized-select": "react-virtualized-select",
        "redux": "redux",
        "redux-form": "redux-form",
        "wikom-data": "wikom-data"
    }
};
