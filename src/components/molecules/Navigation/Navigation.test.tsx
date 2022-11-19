import { Navigation } from '../Navigation';
import { render } from '@testing-library/react';

describe('Navigation', () => {
	const defaultProps = {
		showIcons: true,
		showTitle: true,
		items: [
			{
				sortOrder: 0,
				icon: 'https://via.placeholder.com/24x24',
				title: 'Customer Search',
				href: '/',
			},
			{
				sortOrder: 1,
				icon: 'https://via.placeholder.com/24x24',
				title: 'Order Search',
				href: '/',
			},
		],
	};

	it('renders correctly', () => {
		const { container } = render(<Navigation {...defaultProps} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
