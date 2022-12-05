"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var path = __importStar(require("path"));
var webpack_merge_1 = __importDefault(require("webpack-merge"));
var webpack_common_1 = __importDefault(require("./webpack.common"));
exports["default"] = (0, webpack_merge_1["default"])(webpack_common_1["default"], {
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        compareBeforeEmit: true,
        clean: true
    },
    module: {
        rules: [
            {
                test: /.s?css$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devtool: "inline-source-map",
    devServer: {
        watchFiles: {
            paths: path.resolve(__dirname, "src/**/*")
        },
        port: 3000,
        open: true,
        hot: true,
        onListening: function (devServer) {
            if (!devServer)
                throw new Error("devServer is undefinede");
            console.log("Server is listening on port :  3000 ");
        },
        setupMiddlewares: function (middlewares, devServer) {
            return middlewares;
        },
        client: {
            overlay: true,
            logging: "verbose",
            reconnect: Infinity
        }
    },
    plugins: [
        new html_webpack_plugin_1["default"]({
            title: "Titled by HtmlWebpackPlugin",
            cache: true,
            template: path.resolve(__dirname, "./src/main.html")
        }),
    ]
});
