import { Text } from './Text';
import { Story } from '@storybook/react';
import { TextProps } from './Text.types';

export default {
	title: 'atoms/Text',
	component: Text,
	argTypes: {
		size: {
			description: 'text size',
			control: {
				type: 'text',
			},
		},
	},
};

const Template: Story<TextProps> = (args) => <Text {...args} />;
const defaultProps = {
	children: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
	galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
	but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
	with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
	software like Aldus PageMaker including versions of Lorem Ipsum.'`,
};

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};

export const Paragraph = Template.bind({});
Paragraph.args = {
	...defaultProps,
	as: 'p',
	size: '3.6rem',
};
