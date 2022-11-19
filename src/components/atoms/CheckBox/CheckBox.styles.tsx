import { colors } from 'Styles';
import styled from 'styled-components';
import { typography } from 'Styles';
import { visuallyHiddenStyles } from 'Styles';

const StyledWrapper = styled.div`
	position: relative;
`;

const StyledCheckBoxLabel = styled.label`
	font-family: ${typography.type.body};
	font-weight: 500;
	font-size: ${typography.size.s3 + 'rem'};
	margin-left: 2.8rem;
	margin-right: 1.8rem;
	display: inline-block;
	cursor: pointer;
	margin-top: 3rem;
	&::before {
		content: '';
		position: absolute;
		display: inline-block;
		border-radius: 25%;
		border: 1px solid ${colors.mediumGrey};
		left: -1.75rem;
		top: 50%;
		border-radius: 22%;
		width: 2.1rem;
		height: 2.1rem;
		background: transparent;
		transform: translateY(-50%);
		margin-left: 1.5rem;
		margin-top: 1.5rem;
	}
`;

const StyledCheckIcon = styled.div`
	position: absolute;
	width: 2rem;
	height: 2rem;
	display: none;
	top: 5px;
	left: 0.5px;
	margin-top: 2.7rem;
`;

const StyledCheckBox = styled.input`
	${visuallyHiddenStyles}
	&:checked ~ label {
		& > div {
			display: block;
		}

		&::before {
			content: '';
			border-radius: 22%;
			background: ${colors.blue};
			border: 1px solid ${colors.cobaltBlue};
		}
	}

	&:focus {
		+ ${StyledCheckBoxLabel}::before {
			outline: 1px solid ${colors.neonBlue};
			outline-offset: 2px;
		}
	}

	&:disabled ~ ${StyledCheckBoxLabel} {
		cursor: default;
		&::before {
			background: ${colors.lightGrey};
			cursor: default;
			border: 1px solid ${colors.grey400};
		}
	}
`;

export { StyledWrapper, StyledCheckIcon, StyledCheckBox, StyledCheckBoxLabel };
