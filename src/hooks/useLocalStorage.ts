import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: string) => {
	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === 'undefined') {
			return initialValue;
		}
		try {
			const item = window.localStorage.getItem(key);

			return item ? JSON.parse(item) : initialValue;
		} catch (err) {
			console.error(err);
			return initialValue;
		}
	});

	const setValue = (value: string | ((str: string) => void)) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;

			setStoredValue(valueToStore);

			if (typeof window !== 'undefined') {
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}
		} catch (error) {
			console.error(error);
		}
	};

	return [storedValue, setValue];
};
