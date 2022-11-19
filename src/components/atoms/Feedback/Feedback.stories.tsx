import { Feedback, FeedbackProps } from './Feedback';

export default {
	title: 'atoms/Feedback',
	component: Feedback,
};

export const FeedbackStory = (args: FeedbackProps) => <Feedback {...args} />;

FeedbackStory.storyName = 'Feedback';
FeedbackStory.args = {
	formUrl: 'https://feedback.form',
	children: 'Feedback',
};
