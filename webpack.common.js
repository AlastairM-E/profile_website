const HtmlWebpackPlugin = require('html-webpack-plugin');
//npm install --save-dev style-loader css-loader node-sass sass-loader html-loader file-loader
//npm install --save-dev  webpack webpack-cli webpack-merge webpack-dev-server
//npm install --save-dev mini-css-extract-plugin clean-webpack-plugin  html-webpack-plugin
//npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
//npm install react react-dom
module.exports = {
    entry : {
        main : './src/index.js',
        vendor : './src/vendor.js',
    },
    plugins : [
        new HtmlWebpackPlugin({ template : './src/template.html', }),
    ],
    module : {
        rules : [
            {
                test : /\.html$/,
                use : ['html-loader'],
            },
            {
                test : /\.(svg|png|jpg|gif)$/,
                use : {
                    loader : 'file-loader',
                    options : {
                        name : '[name].[hash].[ext]',
                        outputPath : 'assets',
                    },
                },
            },
        ],
    },
};