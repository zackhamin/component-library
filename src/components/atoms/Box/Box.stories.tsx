import { colors } from 'Styles';
import { Box, BoxProps } from './Box';

export default {
	title: 'atoms/Box',
	component: Box,
};

export const BoxStory = (args: BoxProps) => <Box {...args} />;

BoxStory.storyName = 'Box';
BoxStory.args = {
	backgroundColor: colors.darkGrey,
	padding: '2.4rem',
	children: 'I am a box',
};
