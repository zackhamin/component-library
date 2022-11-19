import { mockRegions } from 'MockData/regions';
import { UserMenu } from '../UserMenu';
import { fireEvent, render } from '@testing-library/react';

describe('UserMenu', () => {
	it('renders correctly', () => {
		const { container } = render(
			<UserMenu
				onSignOut={jest.fn}
				setSelectedRegion={jest.fn}
				regions={mockRegions}
				selectedRegion="10"
			/>
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('disables region buttons if disabled prop is passed', () => {
		const { getByText, getByRole } = render(
			<UserMenu
				onSignOut={jest.fn}
				setSelectedRegion={jest.fn}
				regions={mockRegions}
				selectedRegion="10"
				disableRegionSelection
			/>
		);

		fireEvent.click(getByRole('button'));
		const regionButton = getByText('Belgium');

		expect(regionButton).toBeDisabled();
	});
});
