import { mockDeliveryOptions } from 'MockData/deliveryOptions';
import { DeliveryOptions, DeliveryOptionsProps } from './DeliveryOptions';

export default {
	title: 'Molecules/DeliveryOptions',
	component: DeliveryOptions,
};

export const DeliveryOptionsStory = (args: DeliveryOptionsProps) => (
	<DeliveryOptions {...args} />
);

DeliveryOptionsStory.storyName = 'DeliveryOptions';
DeliveryOptionsStory.args = {
	deliveryOptions: mockDeliveryOptions,
	selectedDeliveryOption: mockDeliveryOptions[0],
};
DeliveryOptionsStory.argTypes = {
	handleSelect: { action: 'selected' },
};
