import { hexToRGB } from 'Utils/utils';
import styled from 'styled-components';
import { colors, typography } from 'Styles';

const height = 4.8;

const StyledTextArea = styled.textarea`
	min-height: ${height}rem;
	resize: vertical;
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
		box-shadow: 0 0 6px ${hexToRGB(colors.emerald, 0.4)};
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

const StyledTextAreaWrapper = styled.div`
	position: relative;
`;

const StyledTextAreaIcon = styled.div`
	position: absolute;
	top: ${height / 2}rem;
	right: 1.5rem;
	transform: translateY(-50%);
`;

export { StyledTextArea, StyledTextAreaWrapper, StyledTextAreaIcon };
