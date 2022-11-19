import { Button } from 'Atoms/Button';
import { Heading } from 'Atoms/Heading';
import { Popover } from 'Atoms/Popover';
import { User } from 'Atoms/Icons';

import { colors } from 'Styles';
import { StyledList, StyledTrigger } from './UserMenu.styles';

import { Region } from '@Types/region';

export interface UserMenuProps {
	onSignOut: () => void;
	regions: Region[];
	selectedRegion: Region['siteId'];
	setSelectedRegion: (region: string) => void;
	disableRegionSelection?: boolean;
}

const UserMenu = ({
	onSignOut,
	regions,
	selectedRegion,
	setSelectedRegion,
	disableRegionSelection = false,
}: UserMenuProps) => {
	return (
		<Popover
			id="user"
			title="User Settings"
			align="right"
			trigger={
				<StyledTrigger className="user-icon">
					<User color={colors.emerald} fontSize="2.2rem" />
				</StyledTrigger>
			}
		>
			<Heading level={3} size="1.6rem">
				Regions
			</Heading>
			<StyledList>
				<li className="disabled">
					<strong>
						{regions.find(({ siteId }) => siteId === selectedRegion)?.name}
					</strong>
				</li>
				{regions
					.filter(({ siteId }) => siteId !== selectedRegion)
					.map(({ name, siteId }) => (
						<li key={siteId}>
							<Button
								onClick={() => setSelectedRegion(siteId)}
								disabled={disableRegionSelection}
								style="text"
								size="small"
							>
								{name}
							</Button>
						</li>
					))}
			</StyledList>
			<Button size="small" style="text" onClick={onSignOut}>
				Sign out
			</Button>
		</Popover>
	);
};

export { UserMenu };
