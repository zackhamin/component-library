import { AddressCard } from '../AddressCard';
import { mockAddress } from 'MockData/address';
import { fireEvent, render } from '@testing-library/react';

export const mocki18n = {
	strings: {
		defaultAddress: 'general.default_address',
		edit: 'general.edit',
		remove: 'general.remove',
		setDefault: 'general.set_default',
	},
};

describe('AddressCard', () => {
	it('renders correctly', () => {
		const { container } = render(
			<AddressCard
				address={mockAddress}
				editHandler={jest.fn}
				deleteHandler={jest.fn}
				setDefaultHandler={jest.fn}
				i18n={mocki18n}
			/>
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders default address correctly', () => {
		const { getByText } = render(
			<AddressCard
				address={{
					...mockAddress,
					addressDetails: {
						...mockAddress.addressDetails,
						isDefaultAddress: true,
					},
				}}
				editHandler={jest.fn}
				deleteHandler={jest.fn}
				setDefaultHandler={jest.fn}
				i18n={mocki18n}
			/>
		);
		expect(getByText(/general.default_address/i)).toBeInTheDocument();
	});

	it('calls event handlers', () => {
		const editHandler = jest.fn();
		const removeHandler = jest.fn();
		const setDefaultHandler = jest.fn();

		const { getByText } = render(
			<AddressCard
				address={mockAddress}
				editHandler={editHandler}
				deleteHandler={removeHandler}
				setDefaultHandler={setDefaultHandler}
				i18n={mocki18n}
			/>
		);

		const editButton = getByText(/general.edit/i);
		const removeButton = getByText(/general.remove/i);
		const setDefaultButton = getByText(/general.set_default/i);

		fireEvent.click(editButton);
		expect(editHandler).toHaveBeenCalledTimes(1);

		fireEvent.click(removeButton);
		expect(removeHandler).toHaveBeenCalledTimes(1);

		fireEvent.click(setDefaultButton);
		expect(setDefaultHandler).toHaveBeenCalledTimes(1);
	});
});
