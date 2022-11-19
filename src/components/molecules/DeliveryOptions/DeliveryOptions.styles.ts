import { colors } from 'Styles';
import styled from 'styled-components';

const StyledList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	padding: 0;
	margin: 0;

	.free-option {
		margin-left: 1.6rem;
		color: ${colors.pomegranate};
	}
`;

export { StyledList };
