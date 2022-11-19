import { Feedback } from '../Feedback';
import { render } from '@testing-library/react';

describe('Feedback', () => {
	it('renders correctly', () => {
		const { container } = render(
			<Feedback formUrl="https://feedback.form">Feedback</Feedback>
		);
		expect(container).toMatchSnapshot();
	});
});
