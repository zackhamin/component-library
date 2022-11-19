import { colors } from 'Styles';
import styled from 'styled-components';

const StyledLoader = styled.div<{
	color: string;
	size: string;
}>`
		font-size: 10px;
		margin: 5rem auto;
		text-indent: -9999em;
		width: ${({ size }) => size};
		height: ${({ size }) => size};
		border-radius: 50%;
		background: ${({ color }) => color};
		background: linear-gradient(
			to right,
			${({ color }) => color} 10%,
			rgba(255, 255, 255, 0) 42%
		);
		position: relative;
		animation: load 1.4s infinite linear;
		transform: translateZ(0);
	}

	:before {
		width: 50%;
		height: 50%;
		background: ${({ color }) => color};
		border-radius: 100% 0 0 0;
		position: absolute;
		top: 0;
		left: 0;
		content: '';
	}

	:after {
		background: ${colors.white};
		width: 75%;
		height: 75%;
		border-radius: 50%;
		content: '';
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}

	@keyframes load {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
`;

export { StyledLoader };
