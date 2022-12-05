import * as path from 'path';
import { Configuration } from 'webpack';

export default {
  entry: {
    index: "./src/index.ts",
    print: "./src/print.ts",
    "./components/a": {
      import: "./src/components/a.ts",
    },
    "./components/b": {
      import: "./src/components/b.ts"
    },
    "./components/hello": {
      import: "./src/components/hello.ts"
    }
  },
  output: {
    assetModuleFilename: "assets/[name].[ext]",
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
        include: path.resolve(__dirname , "src"),
      },
      {
        test: /\.(png|jpg|svg|webp)$/i,
        type: "asset/resource",
        include: path.resolve(__dirname , "src/**/*"),
      },
    ],
  },
  resolve: {
    extensions: ['.ts' , ".js" , ".jsx" , ".tsx"],
    modules: [
      path.resolve(__dirname , "src"),
      path.resolve(__dirname , "node_modules")
    ]
  },
} as Configuration;
