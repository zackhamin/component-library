import { RadioButton } from 'Atoms/RadioButton';
import { IRadioButtonGroupProps, RadioButtonGroup } from './RadioButtonGroup';
import { Meta, Story } from '@storybook/react';

export default {
	title: 'molecules/RadioButtonGroup',
	component: RadioButtonGroup,
	argTypes: { onChange: { action: 'changed' } },
} as Meta;

const options = [
	{
		children: 'Test',
		value: 'Value 1',
		id: 'idTest',
	},
	{
		children: 'Test 2',
		value: 'Value 2',
		id: 'idTest2',
	},
];

const Template: Story<IRadioButtonGroupProps> = (args) => (
	<RadioButtonGroup {...args}>
		{options.map(({ id, value, children }) => (
			<RadioButton key={id} value={value} id={id}>
				{children}
			</RadioButton>
		))}
	</RadioButtonGroup>
);

const defaultProps = {
	name: 'Radio Name',
	defaultValue: 'defaultValue',
	isVertical: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
	...defaultProps,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
	...defaultProps,
	isVertical: false,
};
