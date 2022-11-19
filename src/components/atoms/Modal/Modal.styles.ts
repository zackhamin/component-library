import { colors } from 'Styles';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
	display: flex;
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	backdrop-filter: blur(1rem);
	background-color: rgba(255, 255, 255, 0.5);
	justify-content: center;
	align-items: center;
	z-index: 1;
`;

const StyledModal = styled.div`
	background: ${colors.white};
	border-radius: 0.8rem;
	box-shadow: 0px 2px 6px rgb(51 51 51 / 16%);
	width: 90rem;
	max-width: 90vw;
	min-height: 30rem;
	max-height: 90vh;
	overflow: scroll;
	padding: 2.4rem;
	position: relative;
	z-index: 2;

	button.close {
		color: ${colors.emerald};
		font-size: 2.4rem;
		padding: 0;
		margin: 0;
		border: 0;
		background: transparent;
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		z-index: 3;
	}
`;

export { StyledModal, StyledBackdrop };
