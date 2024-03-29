const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:{
		app: './src/index.js',
		print: './src/print.js'
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				use:[
					'file-loader'
				]
			},
			{
				test:/\.(woff|woff2|eot|ttf)$/,
				use:[
					'file-loader'
				]
			},
			{
				test:/\.xml$/,
				use:[
					'xml-loader'
				]
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Production'
		})
	],
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'../dist')
	}
}
