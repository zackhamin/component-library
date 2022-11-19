import { Chip } from '../Chip';
import { render, screen } from '@testing-library/react';

describe('Chip', () => {
	it('renders correctly', () => {
		const { container } = render(<Chip>Chip</Chip>);
		expect(container).toMatchSnapshot();
	});

	it('correctly renders default variant type', () => {
		render(<Chip>Chip</Chip>);

		expect(screen.getByRole('button')).toHaveClass('variant-default');
	});

	it('correctly renders topic variant type', () => {
		render(<Chip variant="topic">Chip</Chip>);

		expect(screen.getByRole('button')).toHaveClass('variant-topic');
	});

	it('correctly handles polymorphism', () => {
		render(
			<Chip as="a" href="/" variant="topic">
				Chip
			</Chip>
		);

		expect(screen.getByRole('link')).toBeInTheDocument();
	});
});
