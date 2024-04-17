// babel.config.cjs

/* eslint-disable no-undef */
module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: { esmodules: true },
			},
		],
	],
	plugins: [
		"@babel/plugin-transform-modules-commonjs",
		function () {
			return {
				visitor: {
					MetaProperty(path) {
						path.replaceWithSourceString("process");
					},
				},
			};
		},
	],
};
