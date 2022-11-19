import { Price } from './Price';
import { render } from '@testing-library/react';

describe('Price', () => {
	it('renders correctly', () => {
		const { container } = render(<Price amount={9.99} currency="GBP" />);
		expect(container.firstChild).toMatchSnapshot();
	});
	it('Should format an float string correctly', () => {
		const { container } = render(<Price amount={'9.99'} currency="GBP" />);

		expect(container.textContent).toBe('£9.99');
	});

	it('Should format an int string correctly', () => {
		const { container } = render(<Price amount={'9'} currency="GBP" />);

		expect(container.textContent).toBe('£9.00');
	});

	it('Should format a float number correctly', () => {
		const { container } = render(<Price amount={9.99} currency="GBP" />);

		expect(container.textContent).toBe('£9.99');
	});

	it('Should format an int number correctly', () => {
		const { container } = render(<Price amount={9} currency="GBP" />);

		expect(container.textContent).toBe('£9.00');
	});
});
