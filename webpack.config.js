const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const development = process.env.development === "development";
const mode = development ? "development" : "production";
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: development ? "[name].[contenthash].js" : "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    mode,
    target: "web",
    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx", ".json"] },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.(s*)css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                exclude: /node_modules/gi,
                loader: "url-loader",
                options: {
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new FaviconsWebpackPlugin({
            logo: path.join(__dirname, "public", "favicon.png"),
            cache: true,
        }),
    ],
    devServer: {
        port: 5000,
        hot: true,
        open: true,
        liveReload: true,
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        historyApiFallback: true,
    },
    performance: {
        maxEntrypointSize: 5120000,
        maxAssetSize: 5120000,
    },
};
