import { VisuallyHiddenProps, VisuallyHiddenSpan } from './VisuallyHidden';
import { Meta, Story } from '@storybook/react';
import { Children } from 'react';

export default {
	title: 'atoms/VisuallyHiddenComponent',
	component: VisuallyHiddenSpan,
} as Meta;

const Template: Story<VisuallyHiddenProps> = (args) => {
	return (
		<>
			<p>This is not hidden </p>
			<VisuallyHiddenSpan>I am hidden</VisuallyHiddenSpan>
		</>
	);
};

export const defaultStory = Template.bind({});
defaultStory.args = {
	children: 'This should be hidden',
};
