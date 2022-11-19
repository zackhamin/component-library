import styled from 'styled-components';
import { typography } from 'Styles';

const StyledFormLabel = styled.label`
	display: inline-block;
	margin-bottom: 0.8rem;

	&.variant-body {
		font-size: ${typography.size.s2}rem;
	}

	&.variant-heading {
		font-size: ${typography.size.s4}rem;
		font-family: ${typography.type.heading};
	}
`;

export { StyledFormLabel };
