import { mockAddress } from 'MockData/address';
import { Meta, Story } from '@storybook/react';

import { Address, AddressProps } from './Address';

export default {
	title: 'Atoms/Address',
	component: Address,
} as Meta;

const Template: Story<AddressProps> = (args) => <Address {...args} />;

export const Default = Template.bind({});
Default.args = {
	address: mockAddress,
	options: {
		multipleLines: false,
	},
};

export const DefaultWithNames = Template.bind({});
DefaultWithNames.args = {
	address: mockAddress,
	options: {
		showName: true,
	},
};

export const MultipleLines = Template.bind({});
MultipleLines.args = {
	address: mockAddress,
	options: {
		multipleLines: true,
	},
};

export const MultipleLinesWithNames = Template.bind({});
MultipleLinesWithNames.args = {
	address: mockAddress,
	options: {
		multipleLines: true,
		showName: true,
	},
};

export const WithMobileNumber = Template.bind({});
WithMobileNumber.args = {
	address: mockAddress,
	options: {
		multipleLines: true,
		showMobileNumber: true,
	},
};
