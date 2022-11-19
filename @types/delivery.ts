import { Price } from './price';

export interface Delivery {
	id: string;
	optionId: string;
	name: string;
	price: Price;
	cutoff: string;
	freeOption?: Price;
	timeWindow: {
		from: string;
		to: string;
	};
}
