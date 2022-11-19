import styled from 'styled-components';
import { colors, truncateStyles } from 'Styles';

const StyledSelectWrapper = styled.div`
	background: ${colors.white};
	box-sizing: border-box;
	font-size: 1rem;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	justify-content: space-between;
	position: relative;

	&.select-large {
		width: 100%;
	}

	&.select-small {
		width: 70px;
	}
`;

const StyledSelectIcon = styled.div<{
	disabled?: boolean;
}>`
	position: absolute;
	right: 15px;
	top: 50%;
	z-index: 3;
	transform: translateY(-50%);
	display: flex;

	${({ disabled }) =>
		disabled &&
		`  {
			svg {
				color: ${colors.grey400}
			}
		}`}
`;

const StyledSelect = styled.select<{
	disabled?: boolean;
}>`
	box-sizing: border-box;
	background: ${colors.transparent};
	display: block;
	appearance: none;
	border-radius: 4px;
	border: 1px solid ${colors.offBlack};
	font-size: 1.6rem;
	color: ${colors.offBlack};
	padding: 0.8rem 1.5rem;
	z-index: 2;
	${truncateStyles};
	opacity: 1;

	&.select-large {
		padding: 1.45rem 1.5rem;
		width: 100%;
	}

	&.select-small {
		width: 70px;
	}

	&.is-invalid {
		border-color: ${colors.error};
	}

	&:focus-visible {
		outline: 1px auto ${colors.emerald};
	}

	${({ disabled }) =>
		disabled &&
		`  {
			background: ${colors.lightGrey};
			cursor: default;
			border: 1px solid ${colors.grey500};
			color: ${colors.grey400}
		}`}
`;

export { StyledSelect, StyledSelectWrapper, StyledSelectIcon };
