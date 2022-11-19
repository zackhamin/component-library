import { CheckBox } from './CheckBox';
import { fireEvent, render, screen } from '@testing-library/react';

const defaultProps = {
	value: 'opt1',
	isDisabled: false,
	onChange: jest.fn(),
	children: 'label1',
	id: '1',
};

describe('CheckBox', () => {
	it('renders  correctly', () => {
		const { container } = render(<CheckBox {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
	it('renders with disabled state', () => {
		render(<CheckBox {...defaultProps} isDisabled={true} />);
		expect(screen.getByRole('checkbox')).toBeDisabled();
	});
});

describe('Checkbox change handlers', () => {
	it('fires change events on change of value', () => {
		render(<CheckBox {...defaultProps} />);
		const input = screen.getByRole('checkbox');
		fireEvent.click(input, { target: { value: 'opt1' } });
		expect({ ...defaultProps.onChange }).toHaveBeenCalled();
	});
});

describe('Checkbox checked state', () => {
	it('should render unchecked', () => {
		render(<CheckBox {...defaultProps}>Checkbox</CheckBox>);

		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).not.toBeChecked();
	});
	it('should be checked on check', () => {
		render(<CheckBox {...defaultProps}>Checkbox</CheckBox>);

		const input = screen.getByRole('checkbox');
		fireEvent.click(input, { target: { value: 'opt1' } });
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeChecked();
	});
	it('should be checked on render if isChecked is true', () => {
		render(
			<CheckBox {...defaultProps} isChecked={true}>
				Checkbox
			</CheckBox>
		);

		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeChecked();
	});
});
