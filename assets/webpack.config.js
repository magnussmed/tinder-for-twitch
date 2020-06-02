const path										= require( 'path' );
const StyleLintPl							= require( 'stylelint-webpack-plugin' );
const MiniCssExtractPlugin		= require( 'mini-css-extract-plugin' );
const CopyWebpackPl						= require( 'copy-webpack-plugin' );
const TerserPlugin						= require( 'terser-webpack-plugin' );
const OptimizeCSSAssetsPlugin	= require( 'optimize-css-assets-webpack-plugin' );

const projectConfig					= require( './project.config' );

module.exports = {
	devtool: 'source-map',
	entry: projectConfig.files,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {}
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: true,
							url: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							sourceMap: true,
							config: {
								path: 'postcss.config.js'
							}
						}
					},
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]'
	},
	plugins: [
		new CopyWebpackPl(
			[
				{
					from: 'node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.min.js',
					to: 'js'
				},
				{
					from: 'node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.min.js.map',
					to: 'js'
				}
			]
		),
		new StyleLintPl({
			configFile: 'stylelint.config.js',
			files: [
				'css/**/*.css'
			]
		}),
		new MiniCssExtractPlugin({
			filename: '[name].min.css',
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					ecma: undefined,
					warnings: false,
					parse: {},
					compress: {
						drop_console: true // strips out console.log declarations.
					},
					mangle: {},
					module: false,
					output: null,
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: false,
					safari10: false,
				},
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
};
