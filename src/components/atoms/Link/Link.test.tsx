import { Link } from '../Link';
import { render } from '@testing-library/react';

describe('Link', () => {
	it('renders correctly', () => {
		const { container } = render(<Link>Link Text</Link>);
		expect(container).toMatchSnapshot();
	});

	it('renders as a span when disabled as button', () => {
		const { container } = render(
			<Link variant="button" disabled>
				Link Text
			</Link>
		);

		const span = container.querySelector('span');

		expect(span).toBeInTheDocument();
	});

	it('correctly handles polymorphism', () => {
		// Intended to be used with link components - this is just to test polymorphism
		const { container } = render(<Link as="span">Link Text</Link>);

		const span = container.querySelector('span');

		expect(span).toBeInTheDocument();
	});
});
