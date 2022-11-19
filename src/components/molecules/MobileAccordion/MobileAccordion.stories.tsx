import { Button } from 'Atoms/Button';
import { Heading } from 'Atoms/Heading';
import { Story } from '@storybook/react';
import { MobileAccordion, MobileAccordionProps } from './MobileAccordion';

export default {
	title: 'molecules/MobileAccordion',
	component: MobileAccordion,
};

const content = (
	<>
		<Heading level={3} size="1.6rem">
			Mobile accordion content
		</Heading>
		<Button size="small">Button</Button>
	</>
);

const Template: Story<MobileAccordionProps> = (args) => (
	<MobileAccordion {...args} />
);

const defaultProps = {
	title: 'standard title as a string',
	content: content,
	expanded: false,
	testId: 'MobileAccordion',
	id: '',
	className: '',
} as MobileAccordionProps;

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};

export const Expanded = Template.bind({});
Expanded.args = {
	...defaultProps,
	expanded: true,
};

export const WithFooterContent = Template.bind({});
WithFooterContent.args = {
	...defaultProps,
	content: <div>Content</div>,
	footer: <Button size="small">Footer Content</Button>,
};
