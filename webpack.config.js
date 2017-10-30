const path = require('path')

module.exports = {
	entry: {
		index: './src/index.ts'
	},
	output: {
		filename: 'index.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/'
	},
	devServer: {
		host: '192.168.245.130',
		port: 4000,
		contentBase: path.join(__dirname, 'examples')
	},
	resolve: {
		extensions: [".js", ".ts"]
	},
	module: {
		rules: [
			{ test: /\.ts/, use: 'ts-loader' }
		]
	}
}