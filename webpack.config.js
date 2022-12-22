const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg/,
				use: ['svg-url-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.css', '.svg', '.html'],
		fallback: { path: require.resolve('path-browserify') },
	},
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'index_bundle.js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({ inject: true, template: './src/index.html' }),
	],
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		static: path.resolve(__dirname, './public'),
		hot: true,
	},
};
