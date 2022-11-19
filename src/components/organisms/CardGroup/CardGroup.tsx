import { StyledCardGroup } from './styles';
import { ReactElement } from 'react';

export type CardGroupProps = {
	children: ReactElement | ReactElement[];
};

const CardGroup = ({ children }: CardGroupProps) => {
	return <StyledCardGroup>{children}</StyledCardGroup>;
};

export { CardGroup };
