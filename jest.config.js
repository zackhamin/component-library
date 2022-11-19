process.env.TZ = 'GMT';

module.exports = {
	roots: ['<rootDir>'],
	testMatch: [
		'**/tests/**/*.test.ts',
		'**/tests/**/*.test.tsx',
		'**/*.test.ts',
		'**/*.test.tsx',
	],
	setupFilesAfterEnv: [
		'@testing-library/jest-dom/extend-expect',
		'<rootDir>/jest.setup.js',
	],
	testEnvironment: 'jest-environment-jsdom',
	testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
	transformIgnorePatterns: ['node_modules/(?!(@HnBI/hnbicommon)/)'],
	transform: {
		'^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
	},
	moduleDirectories: ['node_modules'],
	moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less|sass)$': '<rootDir>/__mocks__/styleMock.js',
		// Components
		'^Atoms(.*)$': '<rootDir>/src/components/atoms$1',
		'^Molecules(.*)$': '<rootDir>/src/components/molecules$1',
		'^Organisms(.*)$': '<rootDir>/src/components/organisms$1',
		// Other folders
		'^@Types(.*)$': '<rootDir>/@types$1',
		'^Hooks(.*)$': '<rootDir>/src/hooks$1',
		'^MockData(.*)$': '<rootDir>/src/mocks$1',
		'^Utils(.*)$': '<rootDir>/src/utils$1',
		'^Theme(.*)$': '<rootDir>/src/theme$1',
		'^Styles(.*)$': '<rootDir>/src/styles$1',
		'^Icons(.*)$': '<rootDir>/src/components/icons$1',
	},
	collectCoverageFrom: [
		'**/src/**/*.+(js|ts|tsx)',
		'!**/node_modules/**',
		'!src/components/**/*.stories.+(js|ts|tsx)',
		'!**/index.ts',
	],
	coverageThreshold: {
		global: {
			statements: 75,
			branches: 75,
			functions: 75,
			lines: 75,
		},
	},
};
