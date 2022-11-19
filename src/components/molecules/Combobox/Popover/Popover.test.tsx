import { Popover } from './Popover';
import { fireEvent, render } from '@testing-library/react';

const defaultProps = {
	children: <p>Popover Content</p>,
	onClose: () => null,
};

describe('Popover', () => {
	it('opens popover on trigger click', () => {
		const { getAllByRole, getByText } = render(<Popover {...defaultProps} />);
		const trigger = getAllByRole('button')[0];
		fireEvent.click(trigger);

		const popover = getByText('Popover Content');
		expect(popover).toBeInTheDocument();
	});
	it('renders correctly', () => {
		const { container } = render(<Popover {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
