/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
};
