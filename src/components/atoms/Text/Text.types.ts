import type { Size, TextAlign } from '@Types/css';

export type FontWeight = 'regular' | 'bold';

export interface TextProps {
	children: React.ReactNode;
	align?: TextAlign;
	colour?: string;
	as?: 'p' | 'span';
	weight?: FontWeight;
	size?: Size;
}
