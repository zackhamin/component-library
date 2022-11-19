import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
export const User = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 22 26"
		width="1em"
		height="1em"
		focusable="false"
		aria-hidden="true"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d="M13.357 15.357H8.643A8.643 8.643 0 0 0 0 24c0 .868.704 1.571 1.571 1.571H20.43c.867 0 1.571-.703 1.571-1.571a8.643 8.643 0 0 0-8.643-8.643ZM2.406 23.214a6.292 6.292 0 0 1 6.237-5.5h4.714c3.2 0 5.849 2.404 6.237 5.5H2.406ZM11 13A6.286 6.286 0 1 0 11 .428 6.286 6.286 0 0 0 11 13Zm0-10.214a3.933 3.933 0 0 1 3.929 3.928A3.933 3.933 0 0 1 11 10.643a3.934 3.934 0 0 1-3.929-3.929A3.933 3.933 0 0 1 11 2.786Z"
			fill="currentColor"
		/>
	</svg>
);
