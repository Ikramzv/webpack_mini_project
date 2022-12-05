import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import { Configuration } from 'webpack';
import Server from 'webpack-dev-server';
import merge from 'webpack-merge';
import webpack_common_config from "./webpack.common";

export default merge(webpack_common_config, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    compareBeforeEmit: true,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.s?css$/i,
        use: ["style-loader" ,"css-loader" , "sass-loader"]
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    watchFiles: {
      paths: path.resolve(__dirname , "src/**/*"),
    },
    port: 3000,
    open: true,
    hot: true,
    onListening(devServer) {
      if(!devServer) throw new Error("devServer is undefinede")
      console.log("Server is listening on port :  3000 ")
    },
    setupMiddlewares(middlewares: Server.Middleware[], devServer: Server) {
      return middlewares
    },
    client: {
      overlay: true,
      logging: "verbose",
      reconnect: Infinity,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Titled by HtmlWebpackPlugin",
      cache: true,
      template: path.resolve(__dirname , "./src/main.html")
    }),
  ]
} as Configuration);
