import { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { Size, TextAlign } from '@Types/css';

type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
export type FontFamily = 'heading' | 'body';

export interface HeadingProps
	extends Omit<
		DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
		'ref'
	> {
	children?: React.ReactNode;
	align?: TextAlign;
	colour?: string;
	level?: HeadingLevels;
	size?: Size;
	family?: FontFamily;
	id?: string;
}
