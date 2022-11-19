import { colors } from 'Styles';
import { Notification, NotificationProps } from './Notification';

export default { title: 'Atoms/Notification' };
export const NotificationStory = (args: NotificationProps) => (
	<Notification {...args} />
);

NotificationStory.storyName = 'Notification';
NotificationStory.args = {
	children: 'Customer has been updated successfully',
	color: colors.emerald,
	backgroundColor: colors.white,
	hasBorder: true,
	isDismissible: true,
};
