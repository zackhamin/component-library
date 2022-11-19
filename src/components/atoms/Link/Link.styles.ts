import { colors } from 'Styles';
import { SharedStyles } from 'Atoms/Button/Button.styles';
import styled from 'styled-components';

const StyledLink = styled.a`
	&.variant-link {
		font-size: 1.6rem;
		display: inline-block;
		text-align: center;

		&:hover {
			text-decoration: underline;
		}

		&:focus-visible {
			outline: solid 2px ${colors.emerald75};
			outline-offset: 3px;
			border-radius: 1px;
		}
	}

	&.variant-button {
		${SharedStyles}
		font-size: 1.6rem;
		display: inline-flex;
		gap: 1rem;
		justify-content: center;
		text-align: center;
		text-decoration: none;

		&.block {
			width: 100%;
		}

		&[disabled] {
			cursor: not-allowed !important;
			opacity: 0.5;
			flex-grow: 1;
		}
	}
`;

export { StyledLink };
