const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/time-picker.js",
    output: {
        library: {
            type: "umd"
        },
        filename: "time-picker.js",
        path: path.resolve(__dirname, "./dist"),
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader'],
            },

            {
                test: /\.svg$/i,
                type: 'asset/inline',
            }
        ]

    }
}