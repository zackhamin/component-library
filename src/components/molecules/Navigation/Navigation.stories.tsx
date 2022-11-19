import { CustomerSearch, Orders, Subscriptions } from 'Atoms/Icons';
import { Navigation, NavigationProps } from './Navigation';

export default {
	title: 'molecules/Navigation',
	component: Navigation,
};

export const NavigationStory = (args: NavigationProps) => (
	<Navigation {...args} />
);

NavigationStory.storyName = 'Navigation';
NavigationStory.args = {
	showIcons: true,
	showTitle: true,
	items: [
		{
			sortOrder: 0,
			icon: <CustomerSearch />,
			title: 'Customer Search',
			href: '/',
			isActive: true,
		},
		{
			sortOrder: 1,
			icon: <Orders />,
			title: 'Orders',
			href: '/',
		},
		{
			sortOrder: 2,
			icon: <Subscriptions />,
			title: 'Subscriptions',
			href: '/',
		},
	],
};
