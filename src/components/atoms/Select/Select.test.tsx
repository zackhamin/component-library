import { Option } from './Option';
import { Select } from '.';
import { render, screen } from '@testing-library/react';

const defaultProps = {
	testId: 'selectTestId',
	id: 'select',
	class: 'class-prop',
	name: 'test-name',
	children: (
		<>
			<Option value="select-option">Select Option</Option>
			<Option value="wrong-item">Wrong Item in Parcel</Option>
		</>
	),
};

describe('Select', () => {
	it('renders correctly', () => {
		const { container } = render(<Select {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});

	it('should use options prop to populate dropdown', () => {
		render(<Select {...defaultProps} />);
		expect(screen.getByText('Select Option')).toBeInTheDocument();
		expect(screen.getByDisplayValue(/select option/i));
		expect(screen.getByText('Wrong Item in Parcel')).toBeInTheDocument();
	});

	it('adds ID, class and name to element', () => {
		const changeHandler = jest.fn();
		render(<Select {...defaultProps} onChange={changeHandler} />);
		expect(screen.getByRole('combobox')).toHaveAttribute('id', 'select');
		expect(screen.getByTestId('selectTestId')).toBeInTheDocument();
		expect(screen.getByText('Wrong Item in Parcel')).toBeInTheDocument();
		expect(screen.getByRole('combobox')).toHaveAttribute('name', 'test-name');
	});

	it('should display an SVG chevron', () => {
		render(<Select {...defaultProps} />);
		expect(screen.getAllByTestId('CHEVRON')).toHaveLength(1);
	});

	it('should have disabled attribute when prop passed', () => {
		render(<Select {...defaultProps} isDisabled={true} />);
		expect(screen.getByRole('combobox')).toHaveAttribute('disabled');
	});

	it('renders with placeholder option', () => {
		render(<Select {...defaultProps} placeholder="Please select an option" />);

		const placeholderOption = screen.getAllByRole('option')[0];

		expect(placeholderOption).toHaveTextContent('Please select an option');
		expect(placeholderOption).toHaveAttribute('disabled');
	});
});
