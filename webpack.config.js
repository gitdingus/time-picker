const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/time-picker.js",
    output: {
        filename: "time-picker.js",
        path: path.resolve(__dirname, "./dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader'],
            },

            {
                test: /\.png$/i,
                type: 'asset/resource',

            }
        ]

    }
}