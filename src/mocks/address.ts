import { Address } from '@Types/address';

export const mockAddress: Address = {
	addressDetails: {
		line1: '22 some street',
		line2: null,
		city: 'Never land',
		county: null,
		country: 'GB',
		postCode: 'DS2 3CD',
		isDefaultAddress: false,
		addressType: null,
		addressNickName: null,
	},
	addressContactDetails: {
		firstName: 'Zack',
		lastName: 'Amin',
		mobileNumber: '0789892323',
	},
	addressMetadata: {
		addressId: '8d063d44-1e27-4a38-9602-552730b90552',
		datetimeCreated: '2022-01-01 00:00:00 UTC',
		datetimeUpdated: '2022-01-01 00:00:00 UTC',
		addressType: null,
	},
};
