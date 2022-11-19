import { Text } from '.';
import { render, screen } from '@testing-library/react';

describe('Text', () => {
	it('renders correctly', () => {
		const { container } = render(<Text>Text</Text>);
		expect(container).toMatchSnapshot();
	});

	it('renders as a span', () => {
		const { container } = render(<Text as="span">Text</Text>);

		const span = container.querySelector('span');

		expect(span).toBeInTheDocument();
	});
});
