import { colors } from 'Styles';
import styled from 'styled-components';

const StyledAddressCard = styled.div`
	border: 1px solid ${colors.grey200};
	border-radius: 4px;
	padding: 1.6rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1.6rem;
`;

const StyledButtonList = styled.div`
	display: flex;
	gap: 1.6rem;
`;

export { StyledAddressCard, StyledButtonList };
