import { Story } from '@storybook/react';
import { FormError, FormErrorProps } from './FormError';

export default {
	title: 'atoms/FormError',
	component: FormError,
};

const Template: Story<FormErrorProps> = (args) => <FormError {...args} />;
const defaultProps = {
	children: 'Text',
};

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
	isInvalid: true,
};
