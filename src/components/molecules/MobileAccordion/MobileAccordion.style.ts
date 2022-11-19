import styled from 'styled-components';
import { baseStyles, colors } from 'Styles';

export const StyledMobileAccordion = styled.div`
	${baseStyles};
	display: flex;
	flex-direction: column;
	overflow: hidden;
	box-shadow: 0px 8px 24px rgba(51, 51, 51, 0.16);
	border-radius: 8px 8px 0px 0px;
	padding: 2.4rem;

	@media screen and (min-width: 768px) {
		border-radius: 8px;
	}
`;

export const StyledMobileAccordionTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${colors.transparent};
	padding-bottom: 0.4rem;
	border: 0;
	margin: 0.125rem;
	position: relative;

	h2 {
		margin: 0;
		color: ${colors.offBlack};
		font-size: 1.6rem;
		line-height: 160%;
	}
`;

export const StyledMobileAccordionIcon = styled.button`
	width: 1.6rem;
	height: 1.6rem;
	background: none;
	border: none;
	color: ${colors.offBlack};
	padding: 0;
	position: static;
	cursor: pointer;

	&:before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

export const StyledMobileAccordionContent = styled.div<{
	isExpanded?: boolean;
}>`
	height: 0;
	overflow: auto;
	visibility: hidden;
	padding: 0;

	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	${({ isExpanded }) =>
		isExpanded &&
		`padding: 0.4rem 0;
      height: 100%;  
	  display:block;
	  visibility: visible;
      `}
`;

export const StyledMobileAccordionFooter = styled.div`
	padding-top: 0.8rem;
`;
