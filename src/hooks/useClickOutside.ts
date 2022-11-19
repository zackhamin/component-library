import { RefObject, useEffect } from 'react';

export const useClickOutside = (
	ref: RefObject<HTMLElement>,
	handler: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			let containedToRef = false;

			if (ref?.current?.contains(e.target as Node)) {
				containedToRef = true;
			}

			if (!containedToRef) {
				handler();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, handler]);
};
