import { colors } from './colors';
import { css } from 'styled-components';
import { typography } from './typography';

export const baseStyles = css`
	font-family: ${typography.type.body};
	font-size: 1rem;
	line-height: 1.2rem;

	margin: 0;
	padding: 0;

	:focus:not(:focus-visible) {
		outline: none;
	}

	:focus-visible {
		outline: 0.125rem solid ${colors.highlight};
	}

	h1 {
		color: #333;
		font-size: 3.2rem;
		line-height: 1.75;
		margin: 0 0 1rem;
	}

	h2 {
		color: #00594c;
		font-size: 2.4rem;
		line-height: 1.75;
		margin: 0 0 1rem;
	}

	p {
		font-size: 1.6rem;
	}
`;

export const disabledStyles = css`
	opacity: 0.3;
	pointer-events: none;
	user-select: none;
	cursor: default;
`;

export const truncateStyles = css`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const visuallyHiddenStyles = css`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
	white-space: nowrap;
	word-wrap: normal;
`;
