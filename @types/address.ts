import { CountryCode } from './countryCode';

export interface Address {
	addressDetails: {
		line1: string;
		line2: string | null;
		city: string;
		county: string | null;
		country: CountryCode;
		postCode: string;
		isDefaultAddress: boolean;
		addressType: string | null;
		addressNickName: string | null;
	};
	addressContactDetails: {
		firstName: string;
		lastName: string;
		mobileNumber: string | null;
	};
	addressMetadata: {
		addressId: string;
		datetimeCreated: Date | string;
		datetimeUpdated: Date | string;
		addressType: string | null;
	};
}
