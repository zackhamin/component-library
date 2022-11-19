import styled from 'styled-components';
import { typography } from 'Styles';
import { FontWeight } from './Text.types';
import type { TextAlign } from '@Types/css';

const StyledBodyText = styled.p<{
	weight: FontWeight;
	align?: TextAlign;
	colour: string;
	textSize: string;
}>`
	margin: 0;
	font-weight: ${({ weight }) => typography.weight[weight]};
	font-family: ${typography.type.body};
	text-align: ${({ align }) => align};
	color: ${({ colour }) => colour};
	font-size: ${({ textSize }) => textSize};
	line-height: ${({ textSize }) => (textSize === '1.6rem' ? '160%' : '140%')};
`;

export { StyledBodyText };
