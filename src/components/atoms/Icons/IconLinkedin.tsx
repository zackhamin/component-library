import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
export const IconLinkedin = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="1em"
		height="1em"
		focusable="false"
		aria-hidden="true"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm12 8a5 5 0 0 0-5 5v6h2v-6a3 3 0 0 1 6 0v6h2v-6a5 5 0 0 0-5-5zm0-2a7 7 0 0 0-7 7v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a7 7 0 0 0-7-7zM1 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm2 1v10h2V10H3z"
			fill="currentColor"
		/>
	</svg>
);
