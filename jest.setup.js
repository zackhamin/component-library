import 'jest-styled-components';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
}));

// Mock to ensure React Aria random uuids remain consistent in tests
jest.mock('@react-aria/ssr/dist/main', () => ({
	...jest.requireActual('@react-aria/ssr/dist/main'),
	useSSRSafeId: () => 'react-aria-generated-id',
}));

export default undefined; // otherwise ts will throw "Cannot compile namespaces when the '--isolatedModules' flag is provided." See note in https://facebook.github.io/create-react-app/docs/running-tests
