import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
export const IconWhatsapp = ({
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
			d="M1 11.945C.982 6.128 5.604 1.289 11.463 1.014v-.001C17.9.709 23.195 5.896 22.994 12.26c-.186 5.936-5.177 10.651-11.165 10.56a11.022 11.022 0 0 1-4.727-1.138l-5.554 1.305a.427.427 0 0 1-.518-.5l1.167-5.622A10.791 10.791 0 0 1 1 11.945zm14.295 7.864a8.59 8.59 0 0 0 2.795-1.857v.001a8.521 8.521 0 0 0 2.523-6.041 8.45 8.45 0 0 0-2.523-6.04A8.59 8.59 0 0 0 12 3.368c-2.28.001-4.47.9-6.09 2.504a8.451 8.451 0 0 0-2.522 6.04 8.392 8.392 0 0 0 .935 3.876l.382.741-.717 3.451 3.406-.8.773.383a8.581 8.581 0 0 0 3.833.89 8.597 8.597 0 0 0 3.295-.645zm-.087-6.138 2.13.606a.786.786 0 0 1 .451 1.182c-.416.651-1.078 1.448-1.905 1.646-1.458.352-3.699.01-6.496-2.58-2.42-2.242-3.06-4.108-2.909-5.588.085-.841.791-1.599 1.386-2.098a.798.798 0 0 1 1.241.282l.896 2.01a.782.782 0 0 1-.098.801l-.455.584a.765.765 0 0 0-.062.853c.542.936 2.663 2.806 3.67 3.21a.78.78 0 0 0 .844-.176l.52-.527a.798.798 0 0 1 .787-.205z"
			fill="currentColor"
		/>
	</svg>
);
