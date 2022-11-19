import { Check } from 'Atoms/Icons';
import { Story } from '@storybook/react';

import { Chip, PolymorphicChipProps } from './Chip';

export default {
	title: 'atoms/Chip',
	argTypes: {
		children: {
			description: 'text displayed within the chip',
			control: {
				type: 'text',
			},
		},
		as: {
			control: {
				type: 'select',
				options: ['a', 'button'],
			},
		},
		icon: {
			control: {
				type: 'select',
				options: ['CHECK', 'CHEVRON', 'ERROR'],
			},
		},
		variant: {
			control: {
				type: 'select',
				options: ['default', 'topic'],
			},
		},
	},
};

const Template: Story<PolymorphicChipProps<'button'>> = (args) => (
	<Chip {...args} />
);
export const Default = Template.bind({});
Default.args = {
	children: '8:00',
};

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
	icon: <Check />,
	children: '8:00',
};

export const Topic = Template.bind({});
Topic.args = {
	variant: 'topic',
	children: 'Clean Beauty',
};

export const TopicIcon = Template.bind({});
TopicIcon.args = {
	variant: 'topic',
	icon: <Check />,
	children: 'Clean Beauty',
};
