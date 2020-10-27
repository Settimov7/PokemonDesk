const path = require('path');

const HTMLWebpackPlugins = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	mode: NODE_ENV,
	entry: path.resolve(__dirname, 'src/index.js'),
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: ['ts-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.(s*)css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]__[hash:base64:5]',
								auto: /\.modules\.\w+$/i,
							},
						},
					},
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugins({
			template: path.resolve(__dirname, 'public/index.html'),
		}),
	],
	devServer: {
		port: 3000,
		open: true,
		hot: true,
	},
	devtool: 'source-map',
};
