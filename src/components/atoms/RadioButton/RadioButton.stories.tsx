import { IRadioButtonProps, RadioButton } from './RadioButton';
import { Meta, Story } from '@storybook/react';

export default {
	title: 'atoms/RadioButton',
	component: RadioButton,
	argTypes: { onChange: { action: 'changed' } },
} as Meta;

const Template: Story<IRadioButtonProps> = (args) => {
	return <RadioButton {...args}>Child</RadioButton>;
};

export const defaultStory = Template.bind({});
defaultStory.args = {
	children: 'Test',
	name: 'name Test',
	value: 'Value 1',
	isDisabled: false,
	id: 'idTest',
	isChecked: false,
};

export const disabledOption = Template.bind({});
disabledOption.args = {
	children: 'Test Disabled',
	name: 'Disabled Test',
	value: 'Value 1',
	isDisabled: true,
	id: 'idTest',
	isChecked: false,
};

export const requiredOption = Template.bind({});
requiredOption.args = {
	children: 'Test Required',
	name: 'Required Test',
	value: 'Value 1',
	isDisabled: false,
	id: 'idTest',
	isChecked: false,
	isRequired: true,
};
