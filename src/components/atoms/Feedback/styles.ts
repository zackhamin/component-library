import { FeedbackProps } from './Feedback';
import styled from 'styled-components';

const StyledFeedback = styled.a<Partial<FeedbackProps>>`
	color: ${({ color }) => color};
	background: ${({ background }) => background};
	display: block;
	font-size: 1.2rem;
	margin: 0;
	padding: 0.4rem 1.6rem;
	position: absolute;
	right: ${({ position }) => (position === 'right' ? '-3.2rem' : 'auto')};
	left: ${({ position }) => (position === 'left' ? '-3.2rem' : 'auto')};
	top: 50vh;
	transform: ${({ position }) =>
		position === 'right' ? 'rotate(-90deg)' : 'rotate(90deg)'};
`;

export { StyledFeedback };
