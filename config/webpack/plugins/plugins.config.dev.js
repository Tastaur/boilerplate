const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin({}),
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), 'src/index.html'),
            minify: {
                collapseWhitespace: false,
            },
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(process.cwd(), 'src/favicon.ico'),
                    to: path.join(process.cwd(), './build')
                },
            ],
        }),
    ],
};
