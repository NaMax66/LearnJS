const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: ['@babel/polyfill','./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js"
    },
    //mode: 'development' //make package as fast as possible можем указать это в package.json
    devServer:{
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({ //we want to copy index.html from src to dist
            filename: "index.html",
            template: "./src/index.html" //it also can generate on the fly
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, //исключаем эту папку
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};