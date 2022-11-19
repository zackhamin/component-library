import { FormError } from 'Atoms/FormError';
import { FormLabel } from 'Atoms/FormLabel';
import { Story } from '@storybook/react';
import { TextInput } from 'Atoms/TextInput';
import { FormControl, FormControlProps } from './FormControl';

export default {
	title: 'molecules/FormControl',
	component: FormControl,
	argTypes: {
		isSuccess: {
			control: {
				type: 'boolean',
			},
		},
		isInvalid: {
			control: {
				type: 'boolean',
			},
		},
	},
};

const Template: Story<FormControlProps> = (args) => (
	<FormControl {...args}>
		<FormLabel>Label</FormLabel>
		<TextInput />
		<FormError>Error Message</FormError>
	</FormControl>
);
const defaultProps = {
	name: 'testName',
	id: 'testId',
};

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};

export const Invalid = Template.bind({});
Invalid.args = {
	...defaultProps,
	isInvalid: true,
};

export const Required = Template.bind({});
Required.args = {
	...defaultProps,
	isRequired: true,
};

export const Success = Template.bind({});
Success.args = {
	...defaultProps,
	isSuccess: true,
};
