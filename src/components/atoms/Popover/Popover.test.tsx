import { Popover } from './Popover';
import { fireEvent, render } from '@testing-library/react';

describe('Popover', () => {
	const defaultProps = {
		children: <p>Popover Content</p>,
		id: 'popover-id',
		title: 'Popover Title',
		trigger: <button>Trigger</button>,
		defaultOpen: true,
	};

	it('renders correctly', () => {
		const { container } = render(<Popover {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});

	it('opens popover on trigger click', () => {
		const { getAllByRole, getByText } = render(
			<Popover {...defaultProps} defaultOpen={false} />
		);
		const trigger = getAllByRole('button')[0];
		fireEvent.click(trigger);

		const popover = getByText('Popover Content');
		expect(popover).toBeInTheDocument();
	});

	it('closes popover on escape press', () => {
		const { getByText } = render(<Popover {...defaultProps} />);
		expect(getByText('Popover Content')).toBeInTheDocument();

		fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

		expect(() => getByText('Popover Content')).toThrow();
	});
});
