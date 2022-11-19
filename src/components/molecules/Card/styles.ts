import { colors } from 'Styles';
import styled from 'styled-components';

const StyledCard = styled.figure`
	border-radius: 0.8rem;
	overflow: hidden;
	padding: 0;
	margin: 0;
	text-align: left;
	box-shadow: 0 0.2rem 0.6rem ${colors.offBlack}24;
	position: relative;
	transition: box-shadow 0.2s;

	&:hover {
		box-shadow: 0 0.8rem 1.6rem ${colors.offBlack}24;
	}

	.card-text {
		padding: 1.4rem;
		margin: 0;
		width: inherit;

		a {
			text-align: inherit !important;
			width: inherit;

			&:before {
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				content: '';
			}
		}
	}

	.card-image img {
		aspect-ratio: 314/154;
		object-fit: cover;
		object-position: center;
		position: relative;
		display: block;
		width: 100%;
	}
`;

export { StyledCard };
