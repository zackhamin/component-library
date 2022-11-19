import classNames from 'classnames';
import { ReactNode } from 'react';

import { StyledOption } from './ListOption.styles';

export interface ListOptionProps {
	children: ReactNode;
	isSelected: boolean;
	handleSelect: () => void;
}

export const ListOption = ({
	children,
	isSelected,
	handleSelect,
}: ListOptionProps) => {
	return (
		<StyledOption
			className={classNames({ active: isSelected })}
			onClick={handleSelect}
		>
			<div className="radio">
				<span />
			</div>
			<div className="details">{children}</div>
		</StyledOption>
	);
};
