import { Text } from '../Text';
import { Price, PriceProps } from './Price';

export default {
	title: 'Atoms/Price',
	component: Price,
};

export const PriceStory = (args: PriceProps) => (
	<Text>
		<Price {...args} />
	</Text>
);

PriceStory.storyName = 'Price';
PriceStory.args = {
	amount: 9.99,
	currency: 'GBP',
	locale: 'en-GB',
};
PriceStory.argTypes = {
	currency: {
		options: ['GBP', 'EUR', 'USD'],
		control: { type: 'select' },
	},
	locale: {
		options: ['en-GB', 'en-IE', 'nl-NL', 'de-DE', 'fr-FR', 'nl-BE'],
		control: { type: 'select' },
	},
};
