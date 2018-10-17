module.exports = {
	title: 'Documentation FAS',
	version: '0.0.1',
	pagePerSection: true,
	exampleMode: 'expand',
	usageMode: 'expand',
	/* ribbon: {
		url: 'http://example.com/',
		text: 'Fork me on GitHub'
	}, */
	sections: [
		{
			name: 'Introduction',
			content: 'pages/docs/intro.md'
		},
		{
			name: 'Signalétique',
			content: 'pages/docs/signage.md',
			components: 'components/signage/*.vue'
		},
		{
			name: 'Objets pédagogiques',
			content: 'pages/docs/index.md',
			components: 'components/lo/*.vue'
		},
		{
			name: "Éléments d'interface",
			sections: [
				{
					name: 'Installation',
					// content: 'pages/docs/index.md',
					description: 'A venir'
				},
				{
					name: 'MuseUI',
					external: true,
					href: 'https://muse-ui.org/#/en-US'
				},
				{
					name: 'Element',
					external: true,
					href: 'https://element.eleme.io/#/en-US'
				}
			]
		}
	],

	webpackConfig: {
		module: {
			rules: [{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader'
			},
			// For js or css files:
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
			]
		}
	},
	components: 'components/**/*.vue'
}
