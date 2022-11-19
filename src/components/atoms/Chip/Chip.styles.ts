import { ReactNode } from 'react';
import styled from 'styled-components';

import { colors, typography } from 'Styles';

const StyledChip = styled.button<{
	icon?: ReactNode;
}>`
	background-color: white;
	border: none;
	transition: background-color 0.15s ease-in-out;
	font-family: ${typography.type.heading};
	font-size: 1.8rem;
	cursor: pointer;
	display: inline-flex;
	align-items: center;

	&:focus-visible {
		outline: solid 2px ${colors.emerald};
		outline-offset: 4px;
	}

	&.variant-default {
		padding: ${(p) => (p.icon ? '1.6rem 2.65rem' : '0.8rem')};
		box-shadow: 0px 2px 6px rgba(51, 51, 51, 0.16);
		border-radius: 0.8rem;
		color: ${colors.emerald};

		.icon-wrapper {
			display: flex;
			margin-right: 1rem;
		}

		&:hover {
			background-color: ${colors.grey300};
			color: ${colors.emerald};
			text-decoration: none;
		}
	}

	&.variant-topic {
		padding: ${(p) =>
			p.icon ? '1.2rem 1.8rem 1.2rem 1.2rem' : '1.2rem 1.6rem'};
		border-radius: 3rem;
		background-color: ${colors.grey200};
		color: ${colors.offBlack};

		.icon-wrapper {
			width: 3.6rem;
			height: 3.6rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			background-color: ${colors.emerald25};
			margin-right: 0.6rem;
		}

		&:hover {
			color: ${colors.offBlack};
			text-decoration: none;
		}
	}
`;

export { StyledChip };
