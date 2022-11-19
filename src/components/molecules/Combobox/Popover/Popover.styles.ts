import { colors } from 'Styles';
import styled from 'styled-components';

export const StyledPopover = styled.div`
	z-index: 1;
	position: absolute;
	width: 100%;
	top: 100%;
	border: 1px solid ${colors.lightGrey};
	border-radius: 4px;
	margin-top: 4px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
	background: ${colors.white};
`;

export const StyledPopoverHeading = styled.div`
	margin-bottom: 0.5rem;
`;
