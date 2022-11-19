import { Card } from './index';
import { Image } from 'Atoms/Image';
import TestSvg from 'Atoms/Image/assets/TestSvg';
import { Text } from 'Atoms/Text';
import { render, screen } from '@testing-library/react';

describe('Card', () => {
	it('Renders a card with an img component correctly', () => {
		const { container } = render(
			<Card
				image={
					<Image
						src="https://picsum.photos/640/360"
						alt={'alt'}
						title={'title'}
					/>
				}
			>
				<Text>Figure Caption</Text>
			</Card>
		);

		const image = screen.getByRole('img');

		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('alt', 'alt');
		expect(image).toHaveAttribute('title', 'title');
		expect(screen.getByRole('figure')).toBeInTheDocument();
		expect(screen.getByText('Figure Caption')).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	it('Renders a card with an svg tag correctly', () => {
		const { container } = render(
			<Card
				image={
					<Image
						as={'svg'}
						role={'img'}
						aria-label={'Description of your SVG image'}
					>
						{TestSvg}
					</Image>
				}
			>
				<Text>Figure Caption</Text>
			</Card>
		);

		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(
			screen.getByLabelText('Description of your SVG image')
		).toBeInTheDocument();
		expect(screen.getByText('Figure Caption')).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	it('Renders a card without an image correctly', () => {
		const { container } = render(
			<Card>
				<Text>Figure caption with no image</Text>
			</Card>
		);

		expect(screen.queryByRole('img')).not.toBeInTheDocument();

		expect(
			screen.getByText('Figure caption with no image')
		).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
