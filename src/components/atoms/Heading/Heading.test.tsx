import { Heading } from '.';
import { render, screen } from '@testing-library/react';

describe('Text', () => {
	it('renders correctly', () => {
		const { container } = render(<Heading level={1}>Text</Heading>);
		expect(container).toMatchSnapshot();
	});

	it('renders correct HTML tag based on prop', () => {
		render(<Heading level={2}>Heading</Heading>);
		expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
	});
});
