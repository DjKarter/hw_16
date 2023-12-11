module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'xo',
		'plugin:react/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json', "vite.config.ts"]
	},
	plugins: [
		'react',
		'prettier'
	],
	rules: {
		"react/react-in-jsx-scope": ["off"],
		"react/jsx-uses-react": ["off"],
		"react/jsx-props-no-spreading": ["warn"],
		"react/no-unescaped-entities": ["off"]
	}
};
