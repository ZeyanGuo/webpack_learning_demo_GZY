const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
	mode:"development",
	entry:{
		app:"./src/index.js",
		print:"./src/print.js"
	},
	devtool:'inline-source-map',
	devServer:{
		contentBase:path.resolve(__dirname,'../dist'),
		clientLogLevel:'none',
		info:false,
		open:true
	},
	output:{
		path:path.resolve(__dirname,'../dist'),
		filename:'[name].[chunkhash].js'
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
			title:'Output Management'
		})
	]
}
