const path = require('path')

module.exports = {
	stories: [ '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)' ],
	addons: [ '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app' ],
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		config.module.rules.push({
			test: /\.scss$/,
			use: [ 'style-loader', 'css-loader', 'sass-loader' ],
			include: path.resolve(__dirname, '../')
		})

		// Return the altered config
		return config
	}
}
ack