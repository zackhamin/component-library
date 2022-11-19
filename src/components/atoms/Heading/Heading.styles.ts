import { FontFamily } from './Heading.types';
import styled from 'styled-components';
import type { TextAlign } from '@Types/css';
import { typography } from 'Styles';

const StyledHeaderText = styled.p<{
	align?: TextAlign;
	family: FontFamily;
	colour: string;
	textSize: string;
}>`
	margin: 0;
	font-family: ${({ family }) => typography.type[family]};
	text-align: ${({ align }) => align};
	color: ${({ colour }) => colour};
	font-size: ${({ textSize }) => textSize};
	line-height: ${({ textSize }) => (textSize === '1.6rem' ? '160%' : '140%')};
	font-weight: ${({ family }) => (family === 'heading' ? '450' : '700')};
`;

export { StyledHeaderText };
