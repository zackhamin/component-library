import { Story } from '@storybook/react';
import { TextInput, TextInputCombinedProps } from './TextInput';

export default {
	title: 'atoms/TextInput',
	component: TextInput,
};

const Template: Story<TextInputCombinedProps> = (args) => (
	<TextInput {...args} />
);

const defaultProps = {
	id: 'inputID',
	name: 'inputName',
	placeholder: 'Placeholder text',
};

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};

export const Disabled = Template.bind({});
Disabled.args = {
	...defaultProps,
	isDisabled: true,
	placeholder: '',
};

export const Invalid = Template.bind({});
Invalid.args = {
	...defaultProps,
	isInvalid: true,
};

export const Success = Template.bind({});
Success.args = {
	...defaultProps,
	isSuccess: true,
};
