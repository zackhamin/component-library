import styled from 'styled-components';

import { colors, shadows, typography } from 'Styles';

const StyledCalendarDay = styled.td`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const StyledCalendarDayButton = styled.button<{ isSelected: boolean }>`
	background-color: ${({ isSelected }) =>
		isSelected ? colors.emerald : 'white'};
	color: ${({ isSelected }) => (isSelected ? colors.white : colors.emerald)};
	border: none;
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	padding: 0;
	font-size: 2.2rem;
	font-weight: bold;
	font-family: ${typography.type.heading};
	margin: 0 0.6rem 0.3rem 0.6rem;
	cursor: pointer;
	box-shadow: ${shadows[1]};
	transition: background-color 0.15s ease-in-out;

	&:hover {
		background-color: ${({ isSelected }) =>
			isSelected ? colors.emerald : colors.kelp25};
	}

	&:focus-visible {
		outline: 2px solid ${colors.emerald};
		outline-offset: 4px;
	}

	&[aria-disabled='true'] {
		background-color: ${colors.grey200};
		color: ${colors.grey400};
		cursor: not-allowed;
	}
`;

const StyledCalendarDayHelperText = styled.div`
	height: 2.2rem;
`;

export {
	StyledCalendarDay,
	StyledCalendarDayHelperText,
	StyledCalendarDayButton,
};
