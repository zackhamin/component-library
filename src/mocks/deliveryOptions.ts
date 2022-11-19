import { Delivery } from '@Types/delivery';

export const mockDeliveryOptions: Delivery[] = [
	{
		id: 'NEXT_DAY_DELIVERY',
		optionId: '98a820f3-3f0c-431d-925a-b1bebb1c0bfd',
		name: 'Next Day Delivery',
		price: {
			amount: '4.99',
			currency: 'GBP',
		},
		cutoff: '2022-11-01T21:00:00.000Z',
		timeWindow: {
			from: '2022-11-02T08:00:00.000Z',
			to: '2022-11-02T21:00:00.000Z',
		},
	},
	{
		id: 'STANDARD_DELIVERY',
		optionId: 'fdd1b6db-1504-4667-b125-d4e59f62bb8e',
		name: 'Standard Delivery',
		price: {
			amount: '3.49',
			currency: 'GBP',
		},
		cutoff: '2022-11-01T20:00:00.000Z',
		timeWindow: {
			from: '2022-11-04T08:00:00.000Z',
			to: '2022-11-05T21:00:00.000Z',
		},
	},
	{
		id: 'NOMINATED_DAY',
		optionId: 'dad5be1f-6c5a-4f99-b768-9af0bdab566b',
		name: 'Nominated Day Delivery',
		price: {
			amount: '4.99',
			currency: 'GBP',
		},
		cutoff: '2022-11-02T20:00:00.000Z',
		timeWindow: {
			from: '2022-11-03T08:00:00.000Z',
			to: '2022-11-03T23:59:59.999Z',
		},
	},
	{
		id: 'NOMINATED_DAY',
		optionId: 'cc801e2d-bbfb-4289-8b8f-9d33959fd47e',
		name: 'Nominated Day Delivery',
		price: {
			amount: '4.99',
			currency: 'GBP',
		},
		cutoff: '2022-11-03T20:00:00.000Z',
		timeWindow: {
			from: '2022-11-04T08:00:00.000Z',
			to: '2022-11-04T23:59:59.999Z',
		},
	},
];
