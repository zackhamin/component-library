import { mockAddress } from 'MockData/address';
import { render } from '@testing-library/react';

import { Address } from './Address';

describe('Address', () => {
	it('renders correctly', () => {
		const { container } = render(<Address address={mockAddress} />);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders multi line address correctly', () => {
		const { container } = render(
			<Address address={mockAddress} options={{ multipleLines: true }} />
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders address with name correctly', () => {
		const { container } = render(
			<Address
				address={mockAddress}
				options={{ showName: true, multipleLines: true }}
			/>
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders multi line address with mobile number correctly', () => {
		const { container } = render(
			<Address
				address={mockAddress}
				options={{
					showName: true,
					multipleLines: true,
					showMobileNumber: true,
				}}
			/>
		);

		expect(container.firstChild).toMatchSnapshot();
	});
});
