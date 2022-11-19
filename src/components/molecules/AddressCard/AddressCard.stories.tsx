import { mockAddress } from 'MockData/address';
import { AddressCard, AddressCardProps } from './AddressCard';

export default {
	title: 'molecules/AddressCard',
	component: AddressCard,
};

export const AddressCardStory = (args: AddressCardProps) => (
	<AddressCard {...args} />
);

AddressCardStory.storyName = 'AddressCard';
AddressCardStory.args = {
	address: mockAddress,
};
AddressCardStory.argTypes = {
	editHandler: { action: 'editing' },
	deleteHandler: { action: 'deleted' },
	setDefaultHandler: { action: 'default set' },
};
