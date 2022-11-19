import { PopoverProps } from './Popover';
import styled from 'styled-components';
import { colors, visuallyHiddenStyles } from 'Styles';

const StyledWrapper = styled.div<Partial<PopoverProps>>`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	align-items: ${({ align }) => {
		if (align === 'left') {
			return 'flex-start';
		}
		if (align === 'right') {
			return 'flex-end';
		}
		return 'center';
	}};
`;

const StyledPopover = styled.div<Partial<PopoverProps>>`
	position: absolute;
	top: 100%;
	background-color: ${colors.white};
	align-items: center;
	box-shadow: 0px 2px 6px rgba(51, 51, 51, 0.16);
	border-radius: 0.8rem;
	margin-top: ${({ gap }) => gap};
	padding: 1.6rem;
	min-width: 25rem;
	max-width: 90vw;
	width: ${({ width }) => width};
	z-index: 1;

	.visually-hidden {
		${visuallyHiddenStyles};
	}
`;

const StyledTrigger = styled.span`
	display: inline;
`;

export { StyledPopover, StyledTrigger, StyledWrapper };
