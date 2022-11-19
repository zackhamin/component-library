import { VisuallyHiddenSpan } from '.';
import { render, screen } from '@testing-library/react';

describe('VisuallyHiddenSpan renders correctly', () => {
	it('renders correctly', () => {
		const { container } = render(
			<VisuallyHiddenSpan>Hidden Span</VisuallyHiddenSpan>
		);
		expect(container).toMatchSnapshot();
	});
	it('Hidden span is not visible', () => {
		render(<VisuallyHiddenSpan>Hidden Span</VisuallyHiddenSpan>);
		const span = screen.queryByText('Hidden Span');
		expect(span).toBeVisible();
	});
});
