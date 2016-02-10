var path = require('path');

module.exports = {
	entry: {
		'index': path.join(__dirname, 'src', 'index.js')
	},
	output: {
		filename: '[name].js',
		publicPath: '',
		path: path.resolve('./dist')
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel?presets[]=es2015'
			}
		]
	}
};