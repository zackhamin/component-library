import { Size } from '@Types/css';
import styled from 'styled-components';

const StyledContainer = styled.div<{
	centered: boolean;
	marginTop: Size;
	marginBottom: Size;
	width: Size;
}>`
	width: ${({ width }) => width};
	max-width: 100%;
	margin: ${({ marginTop, marginBottom, centered }) =>
		`${marginTop} ${centered ? 'auto' : '0'} ${marginBottom}`};
`;

export { StyledContainer };
