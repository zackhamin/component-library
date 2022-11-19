import { colors } from 'Styles';
import { ReactNode } from 'react';
import { StyledBox } from './Box.styles';

export interface BoxProps {
	backgroundColor?: string;
	// not typing these as `Size` to allow for multiple values, e.g. `0 1.6rem 2.4rem 0
	margin?: string;
	padding?: string;
	children: ReactNode;
}

const Box = ({
	backgroundColor = colors.white,
	margin = '0',
	padding = '1.6rem',
	children,
}: BoxProps) => {
	return (
		<StyledBox
			backgroundColor={backgroundColor}
			padding={padding}
			margin={margin}
		>
			{children}
		</StyledBox>
	);
};

export { Box };
