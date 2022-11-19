import { colors } from 'Styles';
import { Size } from '@Types/css';
import { StyledLoader } from './Loading.styles';

export interface LoadingProps {
	children?: React.ReactNode;
	color?: string;
	size?: Size;
}

const Loading = ({
	children = 'Loading',
	color = colors.emerald,
	size = '6.4rem',
}: LoadingProps) => {
	return (
		<StyledLoader color={color} size={size}>
			{children}
		</StyledLoader>
	);
};

export { Loading };
