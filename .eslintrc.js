module.exports = {
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
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-var-requires': ['error'],
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'prettier/prettier': [
            'error',
            {
                semi: true,
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 80,
                tabWidth: 4,
                endOfLine: 'auto',
            },
        ],
    },
};
