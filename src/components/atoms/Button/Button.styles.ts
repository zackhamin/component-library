import { colors } from 'Styles';
import styled from 'styled-components';

const SharedStyles = `
  background: ${colors.neonBlue};
  border-radius: 0.8rem;
  border: 2px solid ${colors.lightGrey};
  color: ${colors.white};
  cursor: pointer;
  font-weight: 700;
  min-width: 18rem;
  padding: 1.8rem 3.2rem;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  transition: 0.2s;
  white-space: nowrap;
	line-height: 1;

  &:hover, &:hover:not([disabled]) {
		background: ${colors.blue};
		text-decoration: none;
  }

  &.secondary {
		background: ${colors.white};
		border: 2px solid ${colors.darkGrey};
		border-radius: 6px;
		color: ${colors.darkGrey};
		text-shadow: none;
	}
	&.secondary:hover {
    background: ${colors.white} !important;
		border: 2px solid ${colors.black};
		color: ${colors.black};
		text-decoration: none;
	}

	&.icon {
		background: none;
		border: none;
		padding: 0.8rem;
		text-decoration: none;
		min-width: 0;
		text-shadow: none;

		&:hover {
			background: none;
		}

		&:focus {
			outline-color: ${colors.emerald}
		}
	}

  &.btn-medium {
    font-size: 1.6rem;
    min-width: 16rem;
    padding: 1.2rem 2.4rem;
  }

  &.btn-small {
		font-size: 1.4rem;
    min-width: 15rem;
		padding: 0.8rem 2.4rem;
	}

  &.block {
		display: block;
	}
`;

const StyledButton = styled.button`
	${SharedStyles}
	font-size: 1.6rem;
	display: flex;
	gap: 1rem;
	justify-content: center;

	&[disabled] {
		cursor: not-allowed !important;
		opacity: 0.5;
	}

	&.text {
		background: transparent;
		border: 0;
		border-radius: 0;
		border-bottom: 1px solid transparent;
		color: ${colors.grey};
		cursor: pointer;
		font-size: 1.6rem;
		font-weight: normal;
		min-width: auto;
		padding: 0;
		text-shadow: none;

		&:hover {
			background: transparent !important;
			border-bottom: 1px solid ${colors.darkGrey};
			color: ${colors.black};
		}

		&.btn-small {
			font-size: 1.4rem;
		}
		&.btn-medium {
			font-size: 1.6rem;
		}
		&.btn-large {
			font-size: 1.8rem;
		}
	}

	&.block {
		width: 100%;
	}
`;

export { StyledButton, SharedStyles };
