import { Story } from '@storybook/react';
import { FormLabel, FormLabelProps } from './FormLabel';

export default {
	title: 'atoms/FormLabel',
	component: FormLabel,
};

const Template: Story<FormLabelProps> = (args) => <FormLabel {...args} />;
const defaultProps = {
	children: 'Label',
};

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};

export const Required = Template.bind({});
Required.args = {
	...defaultProps,
	isRequired: true,
};
