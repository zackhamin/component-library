import { KEYBOARD_KEY } from '../../constants';
const { SPACE_KEY, ENTER_KEY } = KEYBOARD_KEY;

export const isEventValid = (event: any) =>
	event.type === 'click' || event.key === SPACE_KEY || event.key === ENTER_KEY;

export const hexToRGB = (hexColor: string, opacity?: number): string => {
	let r, g, b;

	// 3 digits
	if (hexColor.length === 4) {
		r = `0x${hexColor[1]}${hexColor[1]}`;
		g = `0x${hexColor[2]}${hexColor[2]}`;
		b = `0x${hexColor[3]}${hexColor[3]}`;
	}

	// 6 digits
	if (hexColor.length === 7) {
		r = `0x${hexColor[1]}${hexColor[2]}`;
		g = `0x${hexColor[3]}${hexColor[4]}`;
		b = `0x${hexColor[5]}${hexColor[6]}`;
	}

	return !!opacity
		? `rgba(${r && +r}, ${g && +g}, ${b && +b}, ${opacity})`
		: `rgb(${r && +r}, ${g && +g}, ${b && +b})`;
};
