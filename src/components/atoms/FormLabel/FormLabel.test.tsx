import { FormControl } from 'Molecules/FormControl';
import { FormLabel } from '../FormLabel';
import { render, screen } from '@testing-library/react';

describe('FormLabel', () => {
	it('renders correctly', () => {
		const { container } = render(<FormLabel htmlFor="test">Label</FormLabel>);
		expect(container).toMatchSnapshot();
	});

	it('adds ID, class, type & name to element', () => {
		render(<FormLabel htmlFor="test">Label</FormLabel>);

		const label = screen.getByText('Label');

		expect(label).toHaveAttribute('for', 'test');
	});

	it('should have required asterisk when isRequired', () => {
		render(
			<FormLabel htmlFor="test" isRequired>
				Label
			</FormLabel>
		);

		const required = screen.getByLabelText('required');

		expect(required).toBeInTheDocument();
	});
});

describe('FormLabel within FormControl', () => {
	it('should have required asterisk when isRequired is passed from parent FormControl', () => {
		render(
			<FormControl id="testId" isRequired>
				<FormLabel>Label</FormLabel>
			</FormControl>
		);

		const required = screen.getByLabelText('required');

		expect(required).toBeInTheDocument();
	});

	it('should have correct for attr when ID is passed from parent FormControl', () => {
		render(
			<FormControl id="testId">
				<FormLabel>Label</FormLabel>
				<input type="text" id="testId" />
			</FormControl>
		);

		const label = screen.getByText('Label');

		expect(label).toHaveAttribute('for', 'testId');
	});
});
