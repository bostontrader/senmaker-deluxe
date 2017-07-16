var path = require("path");

 module.exports = {
	devtool: 'eval-source-map',
	entry: './src/root.js',
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},
	module: {

		// loaders is deprecated.  See rules.
		loaders: [

			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders:[
					//'remove-comments-loader',
					'babel-loader'
				]
			},

			{
				test: /\.scss$/,
				loaders: [
					'style-loader?insertAt=top',
					'css-loader?modules&-autoprefixer&importLoaders=1&localIdentName=rst__[local]',
					'sass-loader',
				],
				include: path.join(__dirname, 'src'),
			},

			{
				test: /\.css$/,
				loaders: [
					'style-loader?insertAt=top',
					'css-loader?-autoprefixer'
				],
			},

			{
				test: /\.(jpe?g|png|gif|ico|svg)$/,
				loaders: ['file-loader?name=static/[name].[ext]'],
				include: path.join(__dirname, 'src'),
			}
		]
	}
}
