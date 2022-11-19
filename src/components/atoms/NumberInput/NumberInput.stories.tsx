import { Story } from '@storybook/react';
import { NumberInput, NumberInputProps } from './NumberInput';

export default {
	title: 'atoms/NumberInput',
	component: NumberInput,
	argTypes: { onChange: { action: 'changed' } },
};

const Template: Story<NumberInputProps> = (args) => <NumberInput {...args} />;

const defaultProps = {
	min: 1,
	max: 10,
	value: 1,
	id: 'numberId',
};

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};

export const Disabled = Template.bind({});
Disabled.args = {
	...defaultProps,
	disabled: true,
};
