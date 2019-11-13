const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'production',
	// mode: 'development',
	entry: {
		main: path.join(__dirname, 'src', 'main.js'),
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						"presets": [
							["@babel/preset-env", {
								"targets": {
									"browsers": ["last 1 chrome versions"]
								}
							}],
						],
						plugins: ['babel-plugin-brahmos', '@babel/plugin-proposal-class-properties'],
					}
				}
			]
		}]
	},
	// optimization: {
	// 	minimize: false,
	// },
	plugins: [
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify('production') }
		}),
	],
};
