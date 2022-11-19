import { CheckBoxGroup } from './CheckBoxGroup';
import { CheckBox } from 'Atoms/CheckBox';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const defaultProps = {
	isVertical: false,
	name: 'Radio1',
	children: 'Option 1',
	value: 'opt1',
	id: 'opt1',
	onChange: jest.fn(),
};

describe('CheckboxGroup', () => {
	it('renders horizontally correctly', () => {
		const { container } = render(<CheckBoxGroup {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
	it('renders vertically correctly', () => {
		const horizontalOptions = { ...defaultProps, isVertical: true };
		const { container } = render(<CheckBoxGroup {...horizontalOptions} />);
		expect(container).toMatchSnapshot();
	});
});

describe('CheckboxGroup returns value', () => {
	const options: any[] = [
		{
			children: 'Test CheckBox',
			value: 'Value 1',
			id: '1',
		},
		{
			children: 'Test CheckBox2',
			value: 'Value 2',
			id: '2',
		},
	];
	it('returns value', () => {
		const onChangeHandler = jest.fn();
		render(
			<CheckBoxGroup {...defaultProps} onChange={onChangeHandler}>
				{options.map(({ value, children, id }) => (
					<CheckBox key={id} value={value} id={id}>
						{children}
					</CheckBox>
				))}
			</CheckBoxGroup>
		);
		userEvent.click(screen.getByLabelText('Test CheckBox2'));
		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toBeCalledWith(['Value 2']);
	});
	it('returns an empty array when the checkbox is not checked.', () => {
		const onChangeHandler = jest.fn();
		render(
			<CheckBoxGroup {...defaultProps} onChange={onChangeHandler}>
				{options.map(({ value, children, id }) => (
					<CheckBox key={id} value={value} id={id}>
						{children}
					</CheckBox>
				))}
			</CheckBoxGroup>
		);
		userEvent.dblClick(screen.getByLabelText('Test CheckBox2'));
		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toBeCalledWith([]);
	});
});
