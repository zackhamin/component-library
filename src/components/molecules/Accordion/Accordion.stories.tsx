import { Story } from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';

export default {
	title: 'molecules/Accordion',
	component: Accordion,
};

const content = (
	<>
		<h1>Accordion content</h1>
		<p> Paragraph here</p>
	</>
);

const Template: Story<AccordionProps> = (args) => (
	<Accordion {...args} content={content} />
);

const defaultProps = {
	title: 'standard title as a string',
	subtitle: '',
	content: 'content can be components',
	expanded: false,
	disabled: false,
	testId: 'accordion',
	id: '',
	class: '',
	style: {},
} as AccordionProps;

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};

export const Disabled = Template.bind({});
Disabled.args = {
	...defaultProps,
	disabled: true,
};
export const Expanded = Template.bind({});
Expanded.args = {
	...defaultProps,
	expanded: true,
};

export const Subtitle = Template.bind({});
Subtitle.args = {
	...defaultProps,
	title: 'Title',
	subtitle: ' - Subtitle',
};
