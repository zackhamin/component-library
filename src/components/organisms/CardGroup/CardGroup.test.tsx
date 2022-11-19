import { CardGroup } from '../CardGroup';
import { render } from '@testing-library/react';
import { Card } from 'Molecules/Card';
import { Image } from 'Atoms/Image';

describe('CardGroup', () => {
	it('renders a card group correctly', () => {
		const { container } = render(
			<CardGroup>
				<Card image={<Image as={'img'} />}>Child</Card>
				<Card>child</Card>
				<Card>child</Card>
				<Card image={<Image as={'img'} />}>Child</Card>
			</CardGroup>
		);
		expect(container).toMatchSnapshot();
	});
});
