import { ReactNode } from 'react';
import { Size } from '@Types/css';
import { StyledContainer } from './Container.styles';

export interface ContainerProps {
	children: ReactNode;
	centered?: boolean;
	marginTop?: Size;
	marginBottom?: Size;
	width?: Size;
}

const Container = ({
	children,
	centered = true,
	marginTop = '0',
	marginBottom = '0',
	width = '114rem',
}: ContainerProps) => {
	return (
		<StyledContainer
			centered={centered}
			marginTop={marginTop}
			marginBottom={marginBottom}
			width={width}
		>
			{children}
		</StyledContainer>
	);
};

export { Container };
