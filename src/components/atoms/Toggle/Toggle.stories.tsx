import { Story } from '@storybook/react';
import { Toggle, ToggleProps } from './Toggle';

export default {
	title: 'atoms/Toggle',
	component: Toggle,
};

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

const defaultProps = {
	children: 'Toggle',
	id: 'toggle',
};

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};

export const Disabled = Template.bind({});
Disabled.args = {
	...defaultProps,
	isDisabled: true,
};

export const ToggleChecked = Template.bind({});
ToggleChecked.args = {
	...defaultProps,
	isChecked: true,
};

export const ToggleRequired = Template.bind({});
ToggleRequired.args = {
	...defaultProps,
	isRequired: true,
};
