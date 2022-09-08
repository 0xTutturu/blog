const webpack = require("webpack");
module.exports = function override(config, env) {
	config.resolve.fallback = {
		util: require.resolve("util/"),
		url: require.resolve("url"),
		assert: require.resolve("assert"),
		buffer: require.resolve("buffer"),
	};
	config.plugins.push(
		new webpack.ProvidePlugin({
			process: "process/browser",
			Buffer: ["buffer", "Buffer"],
		})
	);
	/* 	config.resolve.alias = {
		"react/jsx-dev-runtime.js": "react/jsx-dev-runtime",
		"react/jsx-runtime.js": "react/jsx-runtime",
	}; */

	config.module = {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: /node_modules/,
				type: "javascript/auto",
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-react",
							"@babel/preset-env",
							"react",
							"es2015",
						],
					},
				},
				resolve: {
					fullySpecified: false,
				},
			},
		],
	};

	return config;
};
