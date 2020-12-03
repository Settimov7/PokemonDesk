const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: NODE_ENV,
  target: 'node',
  entry: path.resolve(__dirname, 'src/server/server.js'),
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: [/\.global\.scss/],
        use: [
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                exportLocalsConvention: 'camelCaseOnly',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.global\.scss$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: [/\.jpe?g$/, /\.png$/],
        use: ['url-loader'],
      },
      {
        test: /\.woff2$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
};
