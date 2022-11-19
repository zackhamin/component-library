import styled from 'styled-components';
import { baseStyles, colors, disabledStyles } from '../../../styles';

export const StyledAccordion = styled.div`
	${baseStyles};
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export const StyledAccordionTitle = styled.div<{
	isExpanded?: boolean;
	disabled?: boolean;
}>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${colors.transparent};
	padding: 0.4rem 1rem;
	border: 0;
	border-bottom: 1px solid ${colors.lightGrey};
	cursor: pointer;
	z-index: 1;
	margin: 0.125rem;
	h2 {
		font-size: 2.4rem;
		color: ${colors.offBlack};
	}
	h2 span {
		color: ${colors.darkGrey};
	}

	${({ disabled }) => disabled && ` ${disabledStyles}`}
`;

export const StyledAccordionArrow = styled.div<{ isExpanded?: boolean }>`
	width: 14px;
	height: 8px;
	margin-left: 0.5rem;
	filter: ${colors.emerald};
	transition: transform 0.5s ease-in-out;

	${({ isExpanded }) => isExpanded && `transform: rotate(180deg);`}
`;

export const StyledAccordionContent = styled.div<{ isExpanded?: boolean }>`
	height: 0;
	overflow: auto;
	visibility: hidden;
	padding: 0 1rem;

	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
	${({ isExpanded }) =>
		isExpanded &&
		`border-bottom: 1px solid ${colors.lightGrey};
      padding: 0.4rem 1rem 2rem;
      height: 100%;  
	  display:block;
	  visibility: visible;
      `}
`;
