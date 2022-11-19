import { Size } from '@Types/css';
import { StyledCounter } from './Counter.styles';

export interface CounterProps {
	current: number;
	max?: number;
	fontSize?: Size;
}

const Counter = ({ current, max, fontSize = '1.6rem' }: CounterProps) => {
	return (
		<StyledCounter fontSize={fontSize} current={current} max={max}>
			{current}
			{!!max && <span>/{max}</span>}
		</StyledCounter>
	);
};

export { Counter };
