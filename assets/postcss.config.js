module.exports = {
	plugins: {
		'postcss-reporter': {
			clearReportedMessages: true
		},
		'postcss-import': {},
		'postcss-simple-vars': {},
		'autoprefixer': {
			grid: true,
			overrideBrowserslist: ['last 2 versions', '> 5% in DK'],
		},
		'postcss-preset-env': {
			stage: 4,
			features: {
				'custom-media-queries': true,
				'nesting-rules': true,
			}
		},
	},
};
