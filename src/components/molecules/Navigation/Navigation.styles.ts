import { colors } from '../../../styles/colors';
import styled from 'styled-components';

const StyledNavigation = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	width: 100%;

	a {
		font-family: 'BrandonGrotesque-Bold';
		font-size: 2rem;
		padding: 1.6rem;
		background: ${colors.emerald5};
		border-radius: 0.8rem;
		display: flex;
		align-items: center;
		gap: 1.6rem;
		transition: 0.2s;

		&.active,
		&:hover {
			background: #fcfdff; // no variable for this color
		}
	}
`;

export { StyledNavigation };
