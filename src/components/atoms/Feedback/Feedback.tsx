import { colors } from 'Styles';
import { ReactNode } from 'react';
import { StyledFeedback } from './styles';

export interface FeedbackProps {
	formUrl: string;
	children: ReactNode;
	color?: string;
	background?: string;
	position?: 'left' | 'right';
}

const Feedback = ({
	formUrl,
	children,
	color = colors.white,
	background = colors.emerald,
	position = 'right',
}: FeedbackProps) => {
	return (
		<StyledFeedback
			href={formUrl}
			target="_blank"
			rel="noopener noreferrer"
			color={color}
			background={background}
			position={position}
		>
			{children}
		</StyledFeedback>
	);
};

export { Feedback };
