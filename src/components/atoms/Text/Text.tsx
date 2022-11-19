import { colors } from '../../../styles';
import { StyledBodyText } from './Text.styles';
import { TextProps } from './Text.types';

const Text = ({
	as = 'p',
	children,
	weight = 'regular',
	align,
	colour = colors.offBlack,
	size = '1.6rem',
	...rest
}: TextProps) => {
	return (
		<StyledBodyText
			as={as}
			weight={weight}
			align={align}
			colour={colour}
			textSize={size}
			{...rest}
		>
			{children}
		</StyledBodyText>
	);
};

export { Text };
