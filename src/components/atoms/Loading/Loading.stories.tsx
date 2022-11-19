import { colors } from 'src/styles';
import { Size } from '@Types/css';
import { Loading, LoadingProps } from './Loading';
import { Meta, Story } from '@storybook/react';

export default {
	title: 'atoms/Loading',
	component: Loading,
	argTypes: {
		children: {
			description: 'text read out by screen reader',
			control: {
				type: 'text',
			},
		},
		color: {
			control: {
				type: 'color',
			},
		},
		size: {
			control: {
				type: 'text',
			},
		},
	},
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

const defaultProps = {
	children: 'Loading',
	color: colors.emerald,
	size: '6.4rem' as Size,
};

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};
