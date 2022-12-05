import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import webpack_common_config from './webpack.common';

export default merge (webpack_common_config , {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    compareBeforeEmit: true,
    clean: true,   
  },
  module: {
    rules: [
      {
        test: /.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },  
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new HtmlWebpackPlugin({
      title: "Titled by HtmlWebpackPlugin",
      cache: true,
      minify: {
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      template: path.resolve(__dirname , "./src/main.html")
    }),
  ],
  optimization: {
    moduleIds: "deterministic",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    usedExports: true,
    runtimeChunk: "single",
  },
} as Configuration);
