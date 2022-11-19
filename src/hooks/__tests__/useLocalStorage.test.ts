import { useLocalStorage } from '../useLocalStorage';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useLocalStorage', () => {
	it('returns the initialState', () => {
		const initialState = 'initial value';

		const { result } = renderHook(() =>
			useLocalStorage('mystorage', initialState)
		);

		expect(result.current[0]).toEqual(initialState);
	});

	it('returns a setValue function that can reset local storage', () => {
		const key = 'mystorage';
		const initialState = 'initial value';

		const { result } = renderHook(() => useLocalStorage(key, initialState));

		const newValue = 'new value';
		act(() => {
			result.current[1](newValue);
		});
		expect(result.current[0]).toEqual(newValue);
		expect(localStorage.getItem(key)).toEqual(JSON.stringify(newValue));
	});
});
