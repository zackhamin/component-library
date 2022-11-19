import { fireEvent, render } from '@testing-library/react';

import { DeliveryOptions } from './DeliveryOptions';
import { mockDeliveryOptions } from 'MockData/deliveryOptions';

jest.spyOn(console, 'error').mockImplementation(jest.fn);

describe('DeliveryOptions', () => {
	const mockSelectHandler = jest.fn();

	afterEach(() => {
		jest.resetAllMocks();
	});

	it('renders options correctly', () => {
		const { container } = render(
			<DeliveryOptions
				handleSelect={mockSelectHandler}
				deliveryOptions={mockDeliveryOptions}
				selectedDeliveryOption={mockDeliveryOptions[0]}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('updates selected address option', () => {
		const { container } = render(
			<DeliveryOptions
				handleSelect={mockSelectHandler}
				deliveryOptions={mockDeliveryOptions}
			/>
		);

		const optionToSelect = container.getElementsByTagName('li')[1];
		expect(optionToSelect).not.toHaveClass('active');
		fireEvent.click(optionToSelect);
		setTimeout(() => {
			expect(optionToSelect).toHaveClass('active');
		});
	});

	it('calls the select handler correctly', () => {
		const { container } = render(
			<DeliveryOptions
				handleSelect={mockSelectHandler}
				deliveryOptions={mockDeliveryOptions}
				selectedDeliveryOption={mockDeliveryOptions[0]}
			/>
		);

		const methodToSelect = container.getElementsByTagName('li')[1];

		fireEvent.click(methodToSelect);

		expect(mockSelectHandler).toHaveBeenCalled();
	});
});
