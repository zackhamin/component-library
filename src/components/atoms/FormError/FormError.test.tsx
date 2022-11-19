import { FormControl } from 'Molecules/FormControl';
import { FormError } from '../FormError';

import { render, screen } from '@testing-library/react';

describe('FormError', () => {
	it('renders correctly', () => {
		const { container } = render(
			<FormError id="error">Error message</FormError>
		);
		expect(container).toMatchSnapshot();
	});

	it('renders empty live region by default', () => {
		render(<FormError id="error">Error message</FormError>);

		const alert = screen.getByTestId('input-error');

		expect(alert).toBeInTheDocument();
		expect(alert).toHaveAttribute('aria-live', 'polite');
		expect(alert).toHaveAttribute('id', 'error--feedback');
		expect(screen.queryByText('Error message')).not.toBeInTheDocument();
	});

	it('renders error message when isInvalid is directly set', () => {
		render(
			<FormError id="error" isInvalid>
				Error message
			</FormError>
		);

		expect(screen.getByTestId('input-error')).toBeInTheDocument();
		expect(screen.getByText('Error message')).toBeInTheDocument();
	});

	it('renders error message when invalid is set via form control', () => {
		render(
			<FormControl id="error" isInvalid>
				<FormError>Error message</FormError>
			</FormControl>
		);

		expect(screen.getByTestId('input-error')).toBeInTheDocument();
		expect(screen.getByText('Error message')).toBeInTheDocument();
	});

	it('correctly passes id to error message when set in form control', () => {
		render(
			<FormControl id="error" isInvalid>
				<FormError>Error message</FormError>
			</FormControl>
		);

		expect(screen.getByTestId('input-error')).toHaveAttribute(
			'id',
			'error--feedback'
		);
	});
});
