import { FormControl } from 'Molecules/FormControl';
import { TextArea, TextAreaCombinedProps } from '../TextArea';
import { fireEvent, render, screen } from '@testing-library/react';

const defaultProps: TextAreaCombinedProps = {
	id: 'textareaID',
	name: 'textareaName',
	placeholder: 'Placeholder text',
	className: 'additional-class',
};

describe('TextArea', () => {
	it('renders correctly', () => {
		const { container } = render(<TextArea {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});

	it('adds ID, class, type & name to element', () => {
		render(
			<TextArea
				{...defaultProps}
				rows={10}
				minLength={10}
				maxLength={100}
				wrap={'hard'}
			/>
		);

		const textarea = screen.getByRole('textbox');

		expect(textarea).toHaveAttribute('id', 'textareaID');
		expect(textarea).toHaveAttribute('name', 'textareaName');
		expect(textarea).toHaveClass('additional-class');

		expect(textarea).toHaveAttribute('rows', '10');
		expect(textarea).toHaveAttribute('minLength', '10');
		expect(textarea).toHaveAttribute('maxLength', '100');
		expect(textarea).toHaveAttribute('wrap', 'hard');

		expect(textarea).not.toHaveAttribute('type');
		expect(textarea).not.toHaveAttribute('aria-invalid');
		expect(textarea).not.toHaveAttribute('aria-describedby');
	});
});

describe('Textarea has disabled state', () => {
	it('adds disabled attribute to element', () => {
		render(<TextArea {...defaultProps} isDisabled />);
		expect(screen.getByRole('textbox')).toHaveAttribute('disabled');
	});
});

describe('Textarea has invalid state', () => {
	it('renders with invalid class', () => {
		render(<TextArea {...defaultProps} isInvalid />);
		expect(screen.getByRole('textbox')).toHaveClass('is-invalid');
	});

	it('adds aria-invalid attribute to element', () => {
		render(<TextArea {...defaultProps} isInvalid />);
		expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
	});

	it('should have aria-describedby attribute based on id', () => {
		render(<TextArea {...defaultProps} isInvalid />);
		expect(screen.getByRole('textbox')).toHaveAttribute(
			'aria-describedby',
			'textareaID--feedback'
		);
	});

	it('should display an SVG error icon', () => {
		render(<TextArea {...defaultProps} isInvalid />);
		expect(screen.getAllByTestId('ERROR')).toHaveLength(1);
	});
});

describe('Textarea has success state', () => {
	it('renders with success class', () => {
		render(<TextArea {...defaultProps} isSuccess />);
		expect(screen.getByRole('textbox')).toHaveClass('is-success');
	});

	it('does not have aria-invalid & aria-describedby attributes', () => {
		render(<TextArea {...defaultProps} isSuccess />);
		expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
		expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-describedby');
	});

	it('should display an SVG error icon', () => {
		render(<TextArea {...defaultProps} isSuccess />);
		expect(screen.getAllByTestId('CHECK')).toHaveLength(1);
	});
});

describe('Textarea change handler', () => {
	it('should call onChange on user input', () => {
		const onChangeHandler = jest.fn();
		const inputValue = 'input value';

		render(<TextArea {...defaultProps} onChange={onChangeHandler} />);

		const input = screen.getByRole('textbox');

		fireEvent.change(input, { target: { value: inputValue } });

		expect(onChangeHandler).toHaveBeenCalled();
	});
});

describe('TextArea wrapped in FormControl', () => {
	it('should have the correct ID passed from Form Control', () => {
		render(
			<FormControl id="control">
				<TextArea />
			</FormControl>
		);

		const input = screen.getByRole('textbox');

		expect(input).toHaveAttribute('id', 'control');
	});

	it('should have required attr when isRequired is passed from Form Control', () => {
		render(
			<FormControl id="control" isRequired>
				<TextArea />
			</FormControl>
		);

		const input = screen.getByRole('textbox');

		expect(input).toHaveAttribute('required');
	});

	it('should have invalid attr and class when isInvalid passed from Form Control', () => {
		render(
			<FormControl id="control" isInvalid>
				<TextArea />
			</FormControl>
		);

		const textarea = screen.getByRole('textbox');

		expect(textarea).toHaveAttribute('aria-invalid', 'true');
		expect(textarea).toHaveClass('is-invalid');
	});

	it('should have correct class when isSuccess passed from Form Control', () => {
		render(
			<FormControl id="control" isSuccess>
				<TextArea />
			</FormControl>
		);

		const textarea = screen.getByRole('textbox');

		expect(textarea).toHaveClass('is-success');
	});
});
