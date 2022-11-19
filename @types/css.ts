export type Unit = 'px' | 'rem' | 'em' | '%' | 'vh' | 'vw';
export type AngleUnit = 'deg' | 'rad' | 'grad' | 'turn';
export type TextAlign = 'left' | 'center' | 'right';

export type Size = `${number}${Unit}` | '0';

export type Rotation = `${number}${AngleUnit}`;
