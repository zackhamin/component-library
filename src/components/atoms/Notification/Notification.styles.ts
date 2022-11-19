import { NotificationProps } from './Notification';
import styled from 'styled-components';

export const StyledNotification = styled.div<Partial<NotificationProps>>`
	background: ${({ backgroundColor }) => backgroundColor};
	border-left: ${({ hasBorder, color }) =>
		hasBorder ? `0.8rem solid ${color}` : `none`};
	color: ${({ color }) => color};
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.4rem;
	padding: 1rem;
	max-height: 6.8rem;
	margin: ${({ margin }) => margin};

	&.dismissed {
		opacity: 0;
		max-height: 0;
		overflow: hidden;
		transition: all 0.2s ease-in-out;
		padding: 0;
	}

	button {
		border: none;
		background: transparent;
		font-size: 2.4rem;
		color: ${({ color }) => color};
		padding: 0;
		line-height: 0;
		margin-right: 1.4rem;
	}
`;
