import { colors } from 'Styles';
import styled from 'styled-components';

export const StyledTrigger = styled.button`
	display: flex;
	border: 0;
	align-items: center;
	justify-content: center;
	background: ${colors.emerald5};
	padding: 1.2rem;
	cursor: pointer;
	border-radius: 0.8rem;
	transition: 0.2s;

	&:hover,
	&:focus {
		background: ${colors.emerald10};
	}
`;

export const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	padding: 0;
	margin-bottom: 1.4rem;
	border-bottom: 1px solid ${colors.grey500};

	li {
		padding: 0.8rem 0;
		font-size: 1.4rem;

		&.disabled {
			pointer-events: none;
		}
	}
`;
