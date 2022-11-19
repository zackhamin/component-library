import styled from 'styled-components';
import { colors, typography, visuallyHiddenStyles } from 'Styles';

const StyledToggleLabel = styled.label`
	display: inline-flex;
	align-items: center;
	flex-wrap: wrap;
	position: relative;
	user-select: none;
	font-size: ${typography.size.s3}rem;
	font-family: ${typography.type.heading};
`;

const StyledToggleInput = styled.input`
	${visuallyHiddenStyles}

	&:focus + span {
		outline: 2px solid ${colors.emerald75};
		outline-offset: 2px;
	}

	&:checked:not(:disabled) + span {
		background-color: ${colors.emerald};
		border-color: ${colors.emerald};

		&:before {
			transform: translate(1.6rem, -50%);
		}
	}
`;

const StyledToggleSpan = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: space-around;
	width: 4rem;
	height: 2.4rem;
	border-radius: 1.6rem;
	position: relative;
	background-color: ${colors.grey500};
	border: 1px solid ${colors.grey500};
	cursor: pointer;
	transition: transform 250ms;
	margin-right: 1.7rem;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:before {
		content: '';
		width: 2.2rem;
		height: 2.2rem;
		border-radius: 50%;
		background-color: ${colors.white};
		position: absolute;
		z-index: 2;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		transition: inherit;
	}

	&.is-disabled {
		background-color: ${colors.lightGrey};
		border-color: ${colors.lightGrey};
		cursor: not-allowed;

		&:before {
			background-color: ${colors.secondary};
		}
	}
`;

export { StyledToggleLabel, StyledToggleSpan, StyledToggleInput };
