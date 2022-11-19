import { Box } from '../Box';
import { render } from '@testing-library/react';

describe('Box', () => {
	it('renders correctly', () => {
		const { container } = render(<Box>I am a box</Box>);
		expect(container.firstChild).toMatchSnapshot();
	});
});
