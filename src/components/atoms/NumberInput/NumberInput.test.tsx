import { NumberInput } from '../NumberInput';
import { fireEvent, render, screen } from '@testing-library/react';

const defaultProps = {
	id: 'idProp',
	onChange: jest.fn(),
};

describe('NumberInput', () => {
	it('renders correctly', () => {
		const { container } = render(<NumberInput {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
	it('has increment and decrement buttons', () => {
		render(<NumberInput {...defaultProps} />);
		expect(screen.getByText('+')).toBeInTheDocument();
		expect(screen.getByText('–')).toBeInTheDocument();
		expect(screen.getAllByRole('button')).toHaveLength(2);
	});
	it('has input with "0" default value', () => {
		render(<NumberInput {...defaultProps} />);
		expect(screen.getByRole('input')).toBeInTheDocument();
		expect(screen.getByRole('input')).toHaveDisplayValue('0');
	});
	it('has default id prop', () => {
		render(<NumberInput {...defaultProps} />);
		const id = screen.getByRole('input').getAttribute('id');
		expect(id).toBe('idProp');
	});
});

describe('props', () => {
	it('can add additional prop', () => {
		render(
			<NumberInput
				{...defaultProps}
				value={10}
				max={20}
				min={1}
				testId={'testId'}
			/>
		);
		const maxProps = screen.getByRole('input').getAttribute('max');
		const minProps = screen.getByRole('input').getAttribute('min');
		expect(maxProps).toBe('20');
		expect(minProps).toBe('1');
		expect(screen.getByRole('input')).toHaveDisplayValue('10');
	});
});

describe('Number Input to have a disabled state', () => {
	it('renders with disabled state', () => {
		render(<NumberInput {...defaultProps} disabled={true} />);
		expect(screen.getByRole('input')).toHaveAttribute('disabled');
	});
	it('renders max button with disabled state', () => {
		render(<NumberInput {...defaultProps} max={10} value={10} />);
		expect(screen.getAllByRole('button')[1]).toHaveAttribute('disabled');
	});
	it('renders min button with disabled state', () => {
		render(<NumberInput {...defaultProps} min={10} value={10} />);
		expect(screen.getAllByRole('button')[0]).toHaveAttribute('disabled');
	});
});

describe('button click handlers', () => {
	it('fires change events on change of value', () => {
		const handleOnChange = jest.fn();

		render(<NumberInput {...defaultProps} onChange={handleOnChange} />);
		const input = screen.getByRole('input');
		fireEvent.change(input, { target: { value: '23' } });
		expect(handleOnChange).toHaveBeenCalled();
	});
});
