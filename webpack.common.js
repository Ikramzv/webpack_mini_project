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
exports.__esModule = true;
var path = __importStar(require("path"));
exports["default"] = {
    entry: {
        index: "./src/index.ts",
        print: "./src/print.ts",
        "./components/a": {
            "import": "./src/components/a.ts"
        },
        "./components/b": {
            "import": "./src/components/b.ts"
        },
        "./components/hello": {
            "import": "./src/components/hello.ts"
        }
    },
    output: {
        assetModuleFilename: "assets/[name].[ext]"
    },
    module: {
        rules: [
            {
                test: /.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.tsx?$/i,
                use: {
                    loader: "ts-loader",
                    options: {
                        happyPackMode: true
                    }
                },
                include: path.resolve(__dirname, "src")
            },
            {
                test: /\.(png|jpg|svg|webp)$/i,
                type: "asset/resource",
                include: path.resolve(__dirname, "src/**/*")
            },
        ]
    },
    resolve: {
        extensions: ['.ts', ".js", ".jsx", ".tsx"],
        modules: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "node_modules")
        ]
    }
};
