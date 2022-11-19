import classNames from 'classnames';
import { ReactNode } from 'react';

import { StyledNavigation } from './Navigation.styles';

export interface NavigationItem {
	sortOrder: number;
	icon: ReactNode;
	title: string;
	href: string;
	isActive?: boolean;
}

export interface NavigationProps {
	showIcons?: boolean;
	showTitle?: boolean;
	items: NavigationItem[];
}

const Navigation = ({
	showIcons = false,
	showTitle = true,
	items,
}: NavigationProps) => {
	return (
		<StyledNavigation>
			{items.map(({ sortOrder, icon, title, href, isActive }) => (
				<li key={sortOrder}>
					{/* TODO: Use polymorphic link component */}
					<a
						href={href}
						className={classNames({ active: isActive })}
						title={title}
					>
						{showIcons && icon}
						{showTitle && title}
					</a>
				</li>
			))}
		</StyledNavigation>
	);
};

export { Navigation };
