import { FormControl } from 'Molecules/FormControl';
import { TextInput } from '../TextInput';

import { fireEvent, render, screen } from '@testing-library/react';

const defaultProps = {
	id: 'inputID',
	name: 'inputName',
	placeholder: 'Placeholder text',
	className: 'additional-class',
};

describe('TextInput', () => {
	it('renders correctly', () => {
		const { container } = render(<TextInput {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});

	it('adds ID, class, type & name to element', () => {
		render(<TextInput {...defaultProps} type="email" />);

		const input = screen.getByRole('textbox');

		expect(input).toHaveAttribute('id', 'inputID');
		expect(input).toHaveAttribute('name', 'inputName');
		expect(input).toHaveAttribute('type', 'email');
		expect(input).toHaveClass('additional-class');
		expect(input).not.toHaveAttribute('aria-invalid');
		expect(input).not.toHaveAttribute('aria-describedby');
	});
});

describe('Text input has disabled state', () => {
	it('adds disabled attribute to element', () => {
		render(<TextInput {...defaultProps} isDisabled />);
		expect(screen.getByRole('textbox')).toHaveAttribute('disabled');
	});
});

describe('Text input has invalid state', () => {
	it('renders with invalid class', () => {
		render(<TextInput {...defaultProps} isInvalid />);
		expect(screen.getByRole('textbox')).toHaveClass('is-invalid');
	});

	it('adds aria-invalid attribute to element', () => {
		render(<TextInput {...defaultProps} isInvalid />);
		expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
	});

	it('should have aria-describedby attribute based on id', () => {
		render(<TextInput {...defaultProps} isInvalid />);
		expect(screen.getByRole('textbox')).toHaveAttribute(
			'aria-describedby',
			'inputID--feedback'
		);
	});

	it('should display an SVG error icon', () => {
		render(<TextInput {...defaultProps} isInvalid />);
		expect(screen.getAllByTestId('ERROR')).toHaveLength(1);
	});
});

describe('Text input has success state', () => {
	it('renders with success class', () => {
		render(<TextInput {...defaultProps} isSuccess />);
		expect(screen.getByRole('textbox')).toHaveClass('is-success');
	});

	it('does not have aria-invalid & aria-describedby attributes', () => {
		render(<TextInput {...defaultProps} isSuccess />);
		expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
		expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-describedby');
	});

	it('should display an SVG error icon', () => {
		render(<TextInput {...defaultProps} isSuccess />);
		expect(screen.getAllByTestId('CHECK')).toHaveLength(1);
	});
});

describe('Text input change handler', () => {
	it('should call onChange on user input', () => {
		const onChangeHandler = jest.fn();
		const inputValue = 'input value';

		render(<TextInput {...defaultProps} onChange={onChangeHandler} />);

		const input = screen.getByRole('textbox');

		fireEvent.change(input, { target: { value: inputValue } });

		expect(onChangeHandler).toHaveBeenCalled();
	});
});

describe('TextArea wrapped in FormControl', () => {
	it('should have the correct ID passed from Form Control', () => {
		render(
			<FormControl id="control">
				<TextInput />
			</FormControl>
		);

		const input = screen.getByRole('textbox');

		expect(input).toHaveAttribute('id', 'control');
	});

	it('should have required attr when isRequired is passed from Form Control', () => {
		render(
			<FormControl id="control" isRequired>
				<TextInput />
			</FormControl>
		);

		const input = screen.getByRole('textbox');

		expect(input).toHaveAttribute('required');
	});

	it('should have invalid attr and class when isInvalid passed from Form Control', () => {
		render(
			<FormControl id="control" isInvalid>
				<TextInput />
			</FormControl>
		);

		const input = screen.getByRole('textbox');

		expect(input).toHaveAttribute('aria-invalid', 'true');
		expect(input).toHaveClass('is-invalid');
	});

	it('should have correct class when isSuccess passed from Form Control', () => {
		render(
			<FormControl id="control" isSuccess>
				<TextInput />
			</FormControl>
		);

		const input = screen.getByRole('textbox');

		expect(input).toHaveClass('is-success');
	});
});
