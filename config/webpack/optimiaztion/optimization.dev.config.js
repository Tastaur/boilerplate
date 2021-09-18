const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    optimization: {
        runtimeChunk: 'single',
        noEmitOnErrors: true,
        minimizer: [new TerserPlugin({
            test: /\.(ts|js)x(\?.*)?$/i,
            parallel: true
        })],
        minimize: true
    },
}