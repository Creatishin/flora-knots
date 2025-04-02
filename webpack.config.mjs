import HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import Dotenv from 'dotenv-webpack';
import { printCompilationMessage } from './compilation.config.mjs';

const currentPort = process.env.DEVELOPMENT_PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default (_, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.tsx',
    mode: argv.mode || 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },
    devtool: isProduction ? false : 'source-map',
    devServer: {
      port: currentPort,
      open: true,
      allowedHosts: 'all',
      historyApiFallback: true,
      static: path.resolve(__dirname, 'dist'),
      hot: true,
      host: '0.0.0.0',
      watchFiles: [path.resolve(__dirname, 'src')],
      onListening: (devServer) => {
        const port = devServer.server.address().port;
        printCompilationMessage('compiling', port);
        devServer.compiler.hooks.done.tap('OutputMessagePlugin', (stats) => {
          setImmediate(() => {
            if (stats.hasErrors()) {
              printCompilationMessage('failure', port);
            } else {
              printCompilationMessage('success', port);
            }
          });
        });
      }
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          exclude: path.resolve(__dirname, 'public'),
          use: {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash].[ext]'
            }
          }
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    optimization: {
      splitChunks: false,
      runtimeChunk: false,
      minimize: isProduction,
      minimizer: ['...']
    },
    cache: {
      type: 'filesystem'
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        favicon: path.resolve(__dirname, 'src/assets/favicon.png'),
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true
            }
          : false
      }),
      new Dotenv()
    ]
  };
};
