import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
export const IconYoutube = ({
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
		<g clipPath="url(#icon-youtube_svg__a)">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 4V3h-.08a96.464 96.464 0 0 0-1.033.007c-.676.007-1.596.022-2.572.05-.974.03-2.011.074-2.918.14-.88.064-1.722.154-2.255.297l-.014.004A3.78 3.78 0 0 0 .476 6.283 30 30 0 0 0 0 11.749a30 30 0 0 0 .476 5.508.996.996 0 0 0 .022.097 3.78 3.78 0 0 0 2.638 2.61l.006.002c.533.143 1.375.233 2.255.297.907.066 1.944.11 2.918.14a138.662 138.662 0 0 0 3.605.057H12v-1 1h.08a117.506 117.506 0 0 0 1.033-.007c.676-.008 1.596-.022 2.572-.05a70.541 70.541 0 0 0 2.918-.14c.88-.064 1.722-.154 2.255-.297l.014-.004a3.78 3.78 0 0 0 2.652-2.785c.323-1.79.482-3.606.476-5.426a29.997 29.997 0 0 0-.476-5.509l-.984.178.97-.243a3.78 3.78 0 0 0-2.673-2.728c-.526-.129-1.36-.211-2.24-.27-.905-.06-1.941-.1-2.915-.126A151.104 151.104 0 0 0 12.08 3H12v1zm0 0v1h.295a146.465 146.465 0 0 1 3.333.052c.961.026 1.968.065 2.836.123.879.058 1.54.132 1.88.212a1.78 1.78 0 0 1 1.218 1.247c.302 1.686.449 3.397.438 5.11v.01a28.008 28.008 0 0 1-.438 5.032 1.78 1.78 0 0 1-1.227 1.25c-.33.086-.989.168-1.877.233-.867.063-1.872.105-2.833.134a136.735 136.735 0 0 1-3.55.057h-.37a140.377 140.377 0 0 1-3.33-.057 68.467 68.467 0 0 1-2.833-.134c-.892-.066-1.554-.147-1.88-.234a1.78 1.78 0 0 1-1.228-1.186A28 28 0 0 1 2 11.756v-.01a28 28 0 0 1 .438-5.072 1.78 1.78 0 0 1 1.227-1.25c.33-.086.989-.168 1.877-.233a68.551 68.551 0 0 1 2.833-.134A136.043 136.043 0 0 1 11.925 5h.073L12 4zm-1.756 3.61a1 1 0 0 0-1.494.87v6.54a1 1 0 0 0 1.494.87l5.75-3.27a1 1 0 0 0 0-1.74l-5.75-3.27zm3.233 4.14L10.75 13.3v-3.1l2.727 1.55z"
				fill="currentColor"
			/>
		</g>
		<defs>
			<clipPath id="icon-youtube_svg__a">
				<path fill="#fff" d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);