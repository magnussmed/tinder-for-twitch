module.exports = {
	"extends": "stylelint-config-standard",
	rules: {
		"max-nesting-depth": 4,
		"indentation": ["tab", {
			"except": ["value"]
		}],
		"no-descending-specificity": null
	}
};
