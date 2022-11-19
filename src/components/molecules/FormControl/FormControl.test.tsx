import { FormControl } from '.';
import { render } from '@testing-library/react';

describe('FormControl', () => {
	it('renders correctly', () => {
		const { container } = render(
			<FormControl id="testId">Children</FormControl>
		);
		expect(container).toMatchSnapshot();
	});
});
