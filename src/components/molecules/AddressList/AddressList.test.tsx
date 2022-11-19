import { Address } from '@Types/address';
import { fireEvent, render } from '@testing-library/react';

import { AddressList } from './AddressList';
import { mockAddress } from 'MockData/address';

jest.spyOn(console, 'error').mockImplementation(jest.fn);

const addresses: Address[] = [
	mockAddress,
	{
		...mockAddress,
		addressDetails: {
			...mockAddress.addressDetails,
			line1: '12 High Road',
			line2: 'Flat 1',
		},
		addressMetadata: {
			...mockAddress.addressMetadata,
			addressId: '485ce2f8-ccf3-4719-99a0-4f47ce63253a',
		},
	},
];

export const mocki18n = { strings: { noAddresses: '' } };

describe('AddressList', () => {
	const mockSelectHandler = jest.fn();

	afterEach(() => {
		jest.resetAllMocks();
	});

	it('renders card option correctly', () => {
		const { container } = render(
			<AddressList
				handleSelect={mockSelectHandler}
				addresses={addresses}
				selectedAddress={addresses[0]}
				i18n={mocki18n}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('ensures selected address has an active state', () => {
		const { container } = render(
			<AddressList
				handleSelect={mockSelectHandler}
				addresses={addresses}
				selectedAddress={addresses[1]}
				i18n={mocki18n}
			/>
		);

		const option = container.getElementsByTagName('li')[1];

		expect(option).toHaveClass('active');
	});

	it('updates selected address option', () => {
		const { container } = render(
			<AddressList
				handleSelect={mockSelectHandler}
				addresses={addresses}
				i18n={mocki18n}
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
			<AddressList
				handleSelect={mockSelectHandler}
				addresses={addresses}
				selectedAddress={addresses[0]}
				i18n={mocki18n}
			/>
		);

		const methodToSelect = container.getElementsByTagName('li')[1];

		fireEvent.click(methodToSelect);

		expect(mockSelectHandler).toHaveBeenCalled();
	});
});
