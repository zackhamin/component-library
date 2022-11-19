import { CheckBox } from 'Atoms/CheckBox';
import { CheckBoxGroup, ICheckBoxGroupProps } from './CheckBoxGroup';
import { Meta, Story } from '@storybook/react';

export default {
	title: 'molecules/CheckBoxGroup',
	component: CheckBoxGroup,
} as Meta;

const Template: Story<ICheckBoxGroupProps> = (args) => {
	const options: any[] = [
		{
			children: 'Test CheckBox',
			value: 'Value 1',
			id: '1',
		},
		{
			children: 'Test CheckBox2',
			value: 'Value 2',
			id: '2',
		},
	];

	return (
		<CheckBoxGroup {...args}>
			{options.map(({ value, children, id }) => (
				<CheckBox key={id} value={value} id={id}>
					{children}
				</CheckBox>
			))}
		</CheckBoxGroup>
	);
};

const defaultProps = {
	value: 'defaultValue',
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
