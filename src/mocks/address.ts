import { Address } from '@Types/address';

export const mockAddress: Address = {
	addressDetails: {
		line1: '11 High Road',
		line2: null,
		city: 'London',
		county: null,
		country: 'GB',
		postCode: 'SW1 2AB',
		isDefaultAddress: false,
		addressType: null,
		addressNickName: null,
	},
	addressContactDetails: {
		firstName: 'John',
		lastName: 'Doe',
		mobileNumber: '07712345678',
	},
	addressMetadata: {
		addressId: '8d063d44-1e27-4a38-9602-552730b90552',
		datetimeCreated: '2022-01-01 00:00:00 UTC',
		datetimeUpdated: '2022-01-01 00:00:00 UTC',
		addressType: null,
	},
};
