import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
export const Error = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		viewBox="0 0 20 20"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
		height="1em"
		focusable="false"
		aria-hidden="true"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d="M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM.833 10a9.167 9.167 0 1 1 18.334 0A9.167 9.167 0 0 1 .833 10ZM10 5.833c.46 0 .833.373.833.834V10a.833.833 0 0 1-1.666 0V6.667c0-.46.373-.834.833-.834Zm0 6.667a.833.833 0 0 0 0 1.667h.008a.833.833 0 1 0 0-1.667H10Z"
			fill="currentColor"
		/>
	</svg>
);
