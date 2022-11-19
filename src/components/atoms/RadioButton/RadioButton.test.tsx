import { RadioButton } from './RadioButton';
import { fireEvent, render, screen } from '@testing-library/react';

const defaultProps = {
	name: 'Radio1',
	value: 'opt1',
	isDisabled: false,
	id: 'opt1',
	onChange: jest.fn(),
	children: 'label1',
};

describe('RadioButton', () => {
	it('renders  correctly', () => {
		const { container } = render(<RadioButton {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
	it('renders with disabled state', () => {
		const withDisabled = { ...defaultProps, isDisabled: true };
		render(<RadioButton {...withDisabled} />);
		expect(screen.getByRole('radio')).toBeDisabled();
	});
});

describe('button click handlers', () => {
	it('fires change events on change of value', () => {
		render(<RadioButton {...defaultProps} />);
		const input = screen.getByDisplayValue('opt1');
		fireEvent.click(input, { target: { value: 'opt1' } });
		expect({ ...defaultProps.onChange }).toHaveBeenCalled();
	});
});
