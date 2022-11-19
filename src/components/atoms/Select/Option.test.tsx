import { Option } from './Option';
import { render, screen } from '@testing-library/react';

const defaultProps = {
	value: '',
	children: 'Foo',
};

describe('Option', () => {
	it('renders correctly', () => {
		const { container } = render(<Option {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});

	it('should be disabled when disabled prop set', () => {
		render(<Option {...defaultProps} isDisabled />);
		expect(screen.getByRole('option')).toHaveAttribute('disabled');
	});
});
