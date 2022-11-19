import { renderHook } from '@testing-library/react-hooks';
import { useInputContext } from 'Hooks/useInputContext';

const defaultValues = {
	id: 'testId',
	name: 'testName',
	isInvalid: false,
	isRequired: false,
	isSuccess: false,
	className: 'custom-class',
};

describe('useInputContext', () => {
	it('returns correct values', () => {
		const { result } = renderHook(() => useInputContext(defaultValues));

		expect(result.current).toEqual({
			inputClasses: 'custom-class',
			ctx: {
				id: 'testId',
				name: 'testName',
				isInvalid: false,
				isRequired: false,
				isSuccess: false,
			},
		});
	});
});
