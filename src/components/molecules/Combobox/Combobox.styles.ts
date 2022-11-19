import { colors } from 'Styles';
import styled from 'styled-components';

export const InputGroup = styled.div`
	display: inline-flex;
	width: 100%;
	overflow: hidden;
	border-radius: 4px;
	position: relative;

	&:focus-within {
		box-shadow: 0 0 0 3px ${colors.lime};
	}
`;

export const StyledInput = styled.input`
	width: 100%;
	appearance: none;
	padding: 6px 8px;
	font-size: 1.6rem;
	border: 1px solid ${colors.darkGrey};
	border-right: none;
	border-radius: 4px 0 0 4px;
	height: 4.8rem;

	&:focus {
		outline: none;
	}
`;

export const StyledComboButton = styled.button`
	appearance: none;
	border: none;
	background: ${colors.emerald};
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${colors.white};
	width: 4.8rem;
`;

export const Wrapper = styled.div`
	position: relative;
`;

export const SpinnerWrapper = styled.span`
	position: absolute;
	right: 6rem;
	top: 50%;
	transform: translate(-50%, -50%);

	& > div {
		margin: 0;
	}
`;
