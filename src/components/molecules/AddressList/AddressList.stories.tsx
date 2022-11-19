import { Address } from '@Types/address';
import { mockAddress } from 'MockData/address';
import { AddressList, AddressListProps } from './AddressList';

export default {
	title: 'Molecules/AddressList',
	component: AddressList,
};

export const AddressListStory = (args: AddressListProps) => (
	<AddressList {...args} />
);

const addresses: Address[] = [
	{
		...mockAddress,
		addressDetails: {
			...mockAddress.addressDetails,
			line1: '123 Main St',
		},
		addressMetadata: {
			...mockAddress.addressMetadata,
			addressId: 'f8d4e485-3b52-4e79-8ab6-fbdf88b6bd96',
		},
	},
	mockAddress,
	{
		...mockAddress,
		addressContactDetails: {
			...mockAddress.addressContactDetails,
			firstName: 'Jonathan',
			lastName: 'Doesfield',
		},
		addressDetails: {
			...mockAddress.addressDetails,
			line1: '123 Other St',
			line2: 'Top Floor Flat',
			city: 'Llanfairpwllgwyngyll',
			postCode: 'LL61 1AA',
			county: 'Gwynedd',
			country: 'GB',
		},
		addressMetadata: {
			...mockAddress.addressMetadata,
			addressId: 'f8d4e485-3b52-4e79-8ab6-fbdf88b6bd96',
		},
	},
];

AddressListStory.storyName = 'AddressList';
AddressListStory.args = {
	addresses,
	selectedAddress: mockAddress,
};
AddressListStory.argTypes = {
	handleSelect: { action: 'selected' },
};
