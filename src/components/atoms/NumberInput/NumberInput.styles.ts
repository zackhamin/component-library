import styled from 'styled-components';
import { colors, disabledStyles } from '../../../styles';

const StyledNumberWrapper = styled.div<{
	disabled?: boolean;
}>`
	button {
		background-color: ${colors.white};
		color: ${colors.emerald};
		line-height: 2;
		padding: 0 14px;
		font-weight: 800;
		font-size: 1.6rem;
		border: 1px solid ${colors.lightGrey};
		border-radius: 4px;

		:disabled {
			${disabledStyles}
		}
	}
`;

const StyledNumberInput = styled.input<{
	disabled?: boolean;
}>`
	padding: 0.7rem 1.5rem;
	margin: 0 5px 0;
	border: none;
	border-radius: 4px;
	text-align: center;
	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	-moz-appearance: textfield;
	${({ disabled }) => disabled && ` ${disabledStyles}`}
`;

export { StyledNumberInput, StyledNumberWrapper };
