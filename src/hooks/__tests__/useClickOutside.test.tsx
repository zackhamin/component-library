import { createRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, screen } from '@testing-library/react';

import { useClickOutside } from '../useClickOutside';
import userEvent from '@testing-library/user-event';

describe('useClickOutside', () => {
	it('calls handler when click is outside element', () => {
		const handler = jest.fn();
		const ref = createRef<HTMLDivElement>();

		const { getByTestId } = render(
			<div data-testid="outside">
				<div ref={ref}></div>
			</div>
		);

		const outside = getByTestId('outside');

		renderHook(() => useClickOutside(ref, handler));
		userEvent.click(outside);

		expect(handler).toHaveBeenCalled();
	});

	it(`doesn't calls handler when click is within element`, () => {
		const handler = jest.fn();
		const ref = createRef<HTMLDivElement>();
		render(<div ref={ref} data-testid="element-testid"></div>);

		renderHook(() => useClickOutside(ref, handler));
		fireEvent.click(screen.getByTestId('element-testid'));

		expect(handler).not.toBeCalled();
	});
});
