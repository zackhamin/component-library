import styled from 'styled-components';
import { colors, typography } from 'Styles';

const StyledFormErrorMessage = styled.span`
	color: ${colors.error};
	font-size: ${typography.size.s2}rem;
	margin-top: 0.8rem;
	display: inline-block;
`;

export { StyledFormErrorMessage };
