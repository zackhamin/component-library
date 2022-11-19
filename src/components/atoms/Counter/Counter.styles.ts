import { colors } from 'Styles';
import { CounterProps } from './Counter';
import styled from 'styled-components';

const StyledCounter = styled.div<CounterProps>`
	font-size: ${({ fontSize }) => fontSize};
	color: ${({ current, max }) => {
		if (max && current > max) {
			return colors.error;
		}
		return colors.grey500;
	}};

	span {
		color: ${colors.offBlack};
	}
`;

export { StyledCounter };
