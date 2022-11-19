import styled from 'styled-components';
import { colors, typography } from 'Styles';

const StyledItemDiv = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	margin-bottom: 2rem;
`;

const StyledRadioButtonLabel = styled.label`
	font-family: ${typography.type.body};
	font-weight: 500;
	font-size: ${typography.size.s3 + 'rem'};
	padding: 1rem;
	margin-right: 1.3rem;
`;

const StyledRadioButton = styled.input`
	background-color: white;
	cursor: pointer;
	appearance: unset;
	border: 1px solid ${colors.mediumGrey};
	border-radius: 50%;
	width: 2.2rem;
	height: 2.2rem;
	&:checked {
		border: 1px solid ${colors.emerald};
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2.8' fill='%2300594C'/%3e%3c/svg%3e");
	}

	& + ${StyledRadioButtonLabel} {
		position: relative;
		display: inline-block;
		cursor: pointer;
	}
	${(props) =>
		props.disabled &&
		` 
    &:disabled {
		cursor: default;
			background: ${colors.disabled};
			cursor: default;

      }
  `}
`;

export { StyledItemDiv, StyledRadioButton, StyledRadioButtonLabel };
