import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
export const IconTwitter1 = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 44 44"
		width="1em"
		height="1em"
		focusable="false"
		aria-hidden="true"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<circle cx={22} cy={22} r={22} fill="#1DA1F2" />
		<g clipPath="url(#icon-twitter-1_svg__a)">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M24.526 12.35a5.48 5.48 0 0 1 5.607 1.035 9.905 9.905 0 0 0 2.29-1.202L33 13l.972.237a8.721 8.721 0 0 1-1.995 3.774c.015.161.022.323.023.486v.003c0 6.1-2.937 10.575-7.155 12.82-4.194 2.233-9.554 2.208-14.33-.446a1 1 0 0 1 .525-1.873 10.64 10.64 0 0 0 4.875-.968c-1.503-.928-2.586-2.029-3.338-3.217-1.004-1.584-1.383-3.263-1.451-4.77-.068-1.504.17-2.857.421-3.828a13.06 13.06 0 0 1 .483-1.491l.039-.092.011-.027.003-.007a.913.913 0 0 1 .023-.048L13 14l.818-.575A9.661 9.661 0 0 0 21 17.506a5.48 5.48 0 0 1 3.526-5.156zm-11.121 3.694c-.184.801-.33 1.817-.281 2.91.056 1.243.365 2.564 1.143 3.792.773 1.222 2.049 2.411 4.14 3.34a1 1 0 0 1 .155 1.741 12.637 12.637 0 0 1-3.602 1.689c3.17.807 6.347.422 8.945-.961C27.436 26.675 30 22.9 30 17.502c0-.216-.022-.432-.062-.644a1 1 0 0 1 .28-.9c.223-.22.429-.454.618-.7-.227.083-.456.16-.688.23a1 1 0 0 1-1.043-.302A3.48 3.48 0 0 0 23 17.516v1.014a1 1 0 0 1-.974 1 11.66 11.66 0 0 1-8.621-3.486z"
				fill="#fff"
			/>
		</g>
		<defs>
			<clipPath id="icon-twitter-1_svg__a">
				<path fill="#fff" transform="translate(10 10)" d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);
