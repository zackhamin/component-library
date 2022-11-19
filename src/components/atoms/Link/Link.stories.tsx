import { Error } from 'Atoms/Icons';
import { Link } from './Link';
import { ConditionalLinkProps, LinkProps } from './Link.types';
import { Meta, Story } from '@storybook/react';

export default {
	title: 'atoms/Link',
	component: Link,
	argTypes: {
		variant: {
			control: {
				type: 'select',
				options: ['button', 'link'],
			},
		},
		size: {
			control: {
				type: 'select',
				options: ['small', 'medium', 'large'],
			},
		},
		style: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'icon'],
			},
		},
		as: {
			control: {
				type: 'select',
				options: ['a'],
			},
		},
		block: {
			control: {
				type: 'boolean',
			},
		},
		disabled: {
			control: {
				type: 'boolean',
			},
		},
	},
} as Meta;

const defaultProps = {
	children: 'Link Text',
} as LinkProps;

const Template: Story<LinkProps & ConditionalLinkProps> = (args) => (
	<Link href="#" {...args} />
);

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};

export const PrimaryBtn = Template.bind({});
PrimaryBtn.args = {
	...defaultProps,
	variant: 'button',
	style: 'primary',
};

export const SecondaryBtn = Template.bind({});
SecondaryBtn.args = {
	...defaultProps,
	variant: 'button',
	style: 'secondary',
};

export const IconBtn = Template.bind({});
IconBtn.args = {
	...defaultProps,
	variant: 'button',
	style: 'icon',
	children: <Error color="#333333" fontSize="2.2rem" />,
};
