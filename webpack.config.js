/* eslint-disable no-process-env */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { basename } = require('path');

// TODO: Find out what prod constants should be
module.exports = (env = {}, options = {}) => {
  const isDeployedBuild = options.mode === 'production';
  const environment = {
    PUBLIC_PATH: '/',
  };

  console.log('Environment');
  console.log(environment);

  if (isDeployedBuild) {
    for (let envKey in environment) {
      if (!environment[envKey]) {
        throw new Error(envKey + ' is missing!');
      }
    }
  } else {
    // Just for development
    environment.DEV_TOKEN = env.devToken || process.env.DEV_TOKEN;
  }

  return {
    entry: {
      index: 'src/index.js',
    },

    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: environment.PUBLIC_PATH,
      filename: '[name].[chunkhash].js',
    },

    devServer: {
      port: 8080,
      host: 'localhost',
      noInfo: false,
      stats: 'minimal',
      index: env.devServerIndex || 'index.html',
      historyApiFallback: true,
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        helpers: path.resolve(__dirname, 'src/helpers'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        modules: path.resolve(__dirname, 'src/modules'),
        models: path.resolve(__dirname, 'src/models'),
        styles: path.resolve(__dirname, 'src/styles'),
        src: path.resolve(__dirname, 'src'),
        store: path.resolve(__dirname, 'src/store'),
      },
    },

    module: {
      rules: [
        {
          test: [/\.sass$/, /\.scss$/, /\.css$/],
          exclude: /\.module\.scss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.module\.scss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  compileType: 'module',
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(js|jsx)$/,
          use: [{ loader: 'babel-loader' }],
          exclude: /(node_modules|bower_components)/,
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/html/root-index.html',
        chunks: ['index'],
        chunksSortMode: 'manual',
      }),
      new FaviconsWebpackPlugin({
        logo: 'src/assets/favicon.svg',
        mode: 'webapp',
        devMode: 'webapp',
        favicons: {
          background: '#fff',
          // eslint-disable-next-line camelcase
          theme_color: '#37BDF8',
        },
        inject: (htmlPlugin) =>
          basename(htmlPlugin.options.filename) === 'index.html',
      }),
      new CaseSensitivePathsPlugin(),
      new CleanWebpackPlugin({
        verbose: true,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
      new WebpackChunkHash({ algorithm: 'md5' }),
      new webpack.EnvironmentPlugin(environment),
      new CompressionPlugin(),
      new ESLintPlugin(),
    ],
  };
};