import { colors } from 'Styles';
import { mockRegions } from 'MockData/regions';
import { Notification } from 'Atoms/Notification';
import { UserMenu, UserMenuProps } from './UserMenu';

export default {
	title: 'molecules/UserMenu',
	component: UserMenu,
};

export const UserMenuStory = (args: UserMenuProps) => (
	<>
		<Notification
			backgroundColor={colors.grey200}
			hasBorder
			color={colors.pomegranate}
			margin="0 0 1.6rem"
		>
			This component was implemented for Aurora and might not work as intended
			when used in other apps.
		</Notification>
		<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
			<UserMenu {...args} />
		</div>
		<p>
			This component can be used together with the <code>useLocalStorage</code>{' '}
			hook. we export from the <code>hooks</code> directory.
		</p>
		<h2>Example usage</h2>
		<pre style={{ fontSize: '1.6rem', margin: 0 }}>
			{`import { useLocalStorage } from 'Hooks/useLocalStorage';
import { UserMenu } from 'Molecules/UserMenu';

const Layout = () => {
	const [selectedRegion, setSelectedRegion] = useLocalStorage('region', '10');

	return (
		<div>
			<UserMenu
				onSignOut={signOut}
				regions={regions}
				selectedRegion={selectedRegion}
				setSelectedRegion={setSelectedRegion}
			/>
		</div>
	);
};

export { Layout };`}
		</pre>
	</>
);

UserMenuStory.storyName = 'UserMenu';
UserMenuStory.args = {
	regions: mockRegions,
	selectedRegion: '10',
};
UserMenuStory.argTypes = {
	onSignOut: { action: 'signed out' },
	setSelectedRegion: { action: 'selected region' },
};
