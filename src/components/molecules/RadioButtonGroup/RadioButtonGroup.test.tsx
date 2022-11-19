import { RadioButtonGroup } from '../../molecules/RadioButtonGroup/RadioButtonGroup';
import { render } from '@testing-library/react';

const defaultProps = {
	isVertical: false,
	name: 'Radio1',
	children: 'Option 1',
	value: 'opt1',
	isDisabled: false,
	id: 'opt1',
	defaultValue: 'opt1',
	onChange: jest.fn(),
};

describe('RadioButtonGroup', () => {
	it('renders horizontally correctly', () => {
		const { container } = render(<RadioButtonGroup {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
	it('renders vertically correctly', () => {
		const horizontalOptions = { ...defaultProps, isVertical: true };
		const { container } = render(<RadioButtonGroup {...horizontalOptions} />);
		expect(container).toMatchSnapshot();
	});
});
