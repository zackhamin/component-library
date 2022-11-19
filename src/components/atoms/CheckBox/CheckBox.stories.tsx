import { CheckBox, ICheckBoxProps } from './CheckBox';
import { Meta, Story } from '@storybook/react';

export default {
	title: 'atoms/CheckBox',
	component: CheckBox,
} as Meta;

const Template: Story<ICheckBoxProps> = (args) => {
	return <CheckBox {...args}>Child</CheckBox>;
};

export const defaultStory = Template.bind({});
defaultStory.args = {
	children: 'Test',
	value: 'Value 1',
	isDisabled: false,
	id: 'id3',
	name: 'name1',
};

export const disabledOption = Template.bind({});
disabledOption.args = {
	children: 'Test Disabled',
	value: 'Value 1',
	isDisabled: true,
	id: 'id4',
	name: 'name2',
};
