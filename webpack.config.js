const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
	entry: ['./src/index.js', './src/styling/index.scss'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	devtool: 'inline-source-map',
	devServer: {
	  historyApiFallback: true,
	  hot: true,
	  inline: true,
	  open: true,
	  progress: true,
	  contentBase: path.resolve(__dirname, 'dist'),
	  publicPath: '/',
	  compress: true,
	  overlay: true,
	  port: 3001,
	},

	target: 'web',

	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
			  loader: 'babel-loader',
			  options: {
			    presets: [ 
			    	"@babel/preset-env", 
			    	"@babel/preset-react" 
			    ],
			    "plugins": [
			    	"@babel/plugin-proposal-class-properties"
			    ]
			  }
			}
		},
		{
			test: /\.scss$/,
			exclude: /node_modules/,
			use: [
				devMode ? "style-loader" : MiniCssExtractPlugin.loader,
				"css-loader",
				"sass-loader"
			]
		}
		],
	},

	plugins: [
		// Hot Modules Replacement
		new Webpack.HotModuleReplacementPlugin(),
		new Webpack.NamedModulesPlugin(),

		new CleanWebpackPlugin(['dist/*.*'], {
			exclude: ['assets']
		}),
		new HtmlWebpackPlugin({ 
			template: 'src/index.html', 
			filename: 'index.html',
			inject: true 
		}),
		new CopyWebpackPlugin([{ from: './assets', to: 'assets' }]),
		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		})
	]
}
