import { colors } from 'Styles';
import styled from 'styled-components';

const StyledOption = styled.li`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	list-style: none;
	border: 1px solid ${colors.lightGrey};
	background: ${colors.white};
	border-radius: 8px;
	padding: 1.6rem;
	cursor: pointer;

	&.active {
		border: 1px solid ${colors.emerald50};
		background: rgba(3, 134, 120, 0.1);

		.radio {
			border: 1px solid ${colors.emerald};
		}

		.radio > span {
			background: ${colors.emerald};
		}
	}

	.details {
		margin-left: 2.6rem;
	}

	.radio {
		display: block;
		border: 1px solid ${colors.mediumGrey};
		border-radius: 50%;

		& > span {
			display: block;
			width: 10px;
			height: 10px;
			margin: 3px;
			border-radius: 50%;
			background: transparent;
		}
	}
`;

export { StyledOption };
