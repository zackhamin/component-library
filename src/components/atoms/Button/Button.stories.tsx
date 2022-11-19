import { Error } from 'Atoms/Icons';
import { Button, ButtonProps } from './Button';
import { Meta, Story } from '@storybook/react';

export default {
	title: 'Atoms/Button',
	component: Button,
	children: {
		description: 'Text displayed within the button',
		control: {
			type: 'text',
		},
	},
} as Meta;

const defaultProps = {
	children: 'Button Text',
} as ButtonProps;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};

export const Secondary = Template.bind({});
Secondary.args = {
	...defaultProps,
	style: 'secondary',
};

export const Block = Template.bind({});
Block.args = {
	...defaultProps,
	block: true,
};

export const Text = Template.bind({});
Text.args = {
	...defaultProps,
	style: 'text',
	children: 'Text Button',
};

export const IconStory = Template.bind({});
IconStory.args = {
	style: 'icon',
	children: <Error color="#333333" fontSize="2.2rem" />,
};

export const SizeSm = Template.bind({});
SizeSm.args = {
	...defaultProps,
	size: 'small',
};

export const SizeMd = Template.bind({});
SizeMd.args = {
	...defaultProps,
	size: 'medium',
};

export const SizeLg = Template.bind({});
SizeLg.args = {
	...defaultProps,
	size: 'large',
};
