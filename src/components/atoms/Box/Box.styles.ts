import styled from 'styled-components';

const StyledBox = styled.div<{
	backgroundColor: string;
	margin: string;
	padding: string;
}>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: 0.8rem;
	margin: ${({ margin }) => margin};
	padding: ${({ padding }) => padding};
`;

export { StyledBox };
