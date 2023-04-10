const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		script: path.resolve(__dirname, 'src/assets/scripts/script.js'),
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: 'images/[hash][ext]',
	},
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.scss$/i,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
		],
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		port: 9000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	plugins: [
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new HTMLWebpackPlugin({
			filename: 'thankyou.html',
			template: './src/thankyou.html',
		}),
		new MiniCssExtractPlugin({
			linkType: 'text/css',
			filename: 'style.[contenthash].css',
		}),
	],
};
