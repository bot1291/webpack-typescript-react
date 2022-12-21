module.exports = {
	plugins: ['jest-dom', 'testing-library'],
	root: true,
	env: {
		jest: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:testing-library/react',
		'plugin:jest-dom/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:eslint-comments/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['**/*.js'],
	rules: {
		'no-underscore-dangle': 'error',
		camelcase: 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/ban-types': 'error',
		'jest-dom/prefer-checked': 'error',
		'jest-dom/prefer-enabled-disabled': 'error',
		'jest-dom/prefer-required': 'error',
		'jest-dom/prefer-to-have-attribute': 'error',
		'testing-library/await-async-query': 'error',
		'testing-library/no-await-sync-query': 'error',
		'testing-library/no-debugging-utils': 'warn',
		'testing-library/no-dom-import': 'off',
	},
};
