import { Heading } from './Heading';
import { HeadingProps } from './Heading.types';
import { Story } from '@storybook/react';

export default {
	title: 'atoms/Heading',
	component: Heading,
	argTypes: {
		size: {
			description: 'text size',
			control: {
				type: 'text',
			},
		},
	},
};

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;
const defaultProps = {
	children: 'Text',
};

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};

export const HeadingStory = Template.bind({});
HeadingStory.args = {
	...defaultProps,
	level: 1,
	family: 'heading',
	size: '3.6rem',
};
