const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    target : "web",
    mode: "development",

    entry :  "./hairday-template/src/main.js",

    output : {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer:{
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 8080,
        open: true,
        liveReload: true,

    },

    plugins : [
        new HtmlWebpackPlugin({
            template: './hairday-template/index.html',
            favicon: './hairday-template/src/assets/scissors.svg'
    }),

        new CopyWebpackPlugin({
            patterns: [
                {

                    from:'./hairday-template/src/assets',
                    to: path.resolve(__dirname,"dist", "src", "assets")

                },

            ],
        }),

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
}