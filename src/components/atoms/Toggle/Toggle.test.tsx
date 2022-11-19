import { Toggle } from '../Toggle';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { render, screen } from '@testing-library/react';

const defaultProps = {
	id: 'toggle',
	name: 'toggle',
};

const ControlledToggle = ({ onChange }: any) => {
	const [checked, setChecked] = useState(false);
	return (
		<Toggle
			{...defaultProps}
			isChecked={checked}
			onChange={(e) => {
				onChange();
				setChecked(e.target.checked);
			}}
		>
			Toggle
		</Toggle>
	);
};

describe('Toggle', () => {
	it('renders correctly', () => {
		const { container } = render(<Toggle {...defaultProps}>Toggle</Toggle>);
		expect(container).toMatchSnapshot();
	});

	it('adds ID & name to element', () => {
		render(<Toggle {...defaultProps}>Toggle</Toggle>);

		const input = screen.getByRole('checkbox');

		expect(input).toHaveAttribute('id', 'toggle');
		expect(input).toHaveAttribute('name', 'toggle');
		expect(input).not.toHaveAttribute('required');
	});
});

describe('Toggle has disabled state', () => {
	it('adds disabled attribute to element', () => {
		render(
			<Toggle {...defaultProps} isDisabled>
				Toggle
			</Toggle>
		);
		expect(screen.getByRole('checkbox')).toHaveAttribute('disabled');
	});

	it('should not check if disabled (uncontrolled)', () => {
		render(
			<Toggle {...defaultProps} isDisabled>
				Toggle
			</Toggle>
		);

		const toggle = screen.getByRole('checkbox');

		expect(toggle).toBeDisabled();
		expect(toggle).not.toBeChecked();

		userEvent.click(toggle);

		expect(toggle).not.toBeChecked();
	});
});

describe('Toggle required state', () => {
	it('should have required attribute', () => {
		render(
			<Toggle {...defaultProps} isRequired>
				Toggle
			</Toggle>
		);

		const toggle = screen.getByRole('checkbox');

		expect(toggle).toHaveAttribute('required');
	});

	it('should have required asterisk', () => {
		render(
			<Toggle {...defaultProps} isRequired>
				Toggle
			</Toggle>
		);

		const toggle = screen.getByLabelText('required');

		expect(toggle).toBeInTheDocument();
	});
});

describe('Toggle change handler', () => {
	it('should check and uncheck (controlled)', () => {
		const onChangeHandler = jest.fn();

		render(<ControlledToggle onChange={onChangeHandler} />);

		const toggle = screen.getByRole('checkbox');

		userEvent.click(toggle);

		expect(onChangeHandler).toHaveBeenCalled();
		expect(toggle).toBeChecked();
	});
});
