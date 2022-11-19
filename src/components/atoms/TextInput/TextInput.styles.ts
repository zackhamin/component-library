import { hexToRGB } from 'Utils/utils';
import styled from 'styled-components';
import { colors, typography } from 'Styles';

const StyledTextInput = styled.input`
	height: 4.8rem;
	width: 100%;
	padding: 1.6rem;
	font-size: ${typography.size.s3}rem;
	font-family: ${typography.type.body};
	color: ${colors.offBlack};
	border: 1px solid ${colors.offBlack};
	border-radius: 0.4rem;

	&::placeholder {
		color: ${colors.grey500};
	}

	&:disabled {
		background-color: ${colors.lightGrey};
		border-color: ${colors.grey500};
	}

	&:focus-visible {
		outline: none;
		border-color: ${colors.emerald};
		box-shadow: 0px 0px 6px ${hexToRGB(colors.emerald, 0.4)};
	}

	&.is-invalid {
		border-color: ${colors.error};
		// Compensation for icon
		padding-right: 5rem;
	}

	&.is-success {
		// Compensation for icon
		padding-right: 5rem;
	}
`;

const StyledTextInputWrapper = styled.div`
	position: relative;
`;

const StyledTextInputIcon = styled.div`
	position: absolute;
	top: 50%;
	right: 1.5rem;
	transform: translateY(-50%);
`;

export { StyledTextInput, StyledTextInputWrapper, StyledTextInputIcon };
