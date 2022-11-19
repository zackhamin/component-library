import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { StyledNumberInput, StyledNumberWrapper } from './NumberInput.styles';

export interface NumberInputProps {
	min?: number;
	max?: number;
	value?: number;
	id: string;
	testId?: string;
	disabled?: boolean;
	onChange: (qty: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
	min = 0,
	max = 30,
	value,
	onChange,
	id,
	testId,
	disabled,
}: NumberInputProps) => {
	const [numberValue, setNumberValue] = useState(value || min);
	const firstRender = useRef(true);

	useLayoutEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}

		onChange(numberValue);
	}, [numberValue]);

	useEffect(() => {
		if (value !== undefined) {
			setNumberValue(value);
		}
	}, [value]);

	const handleDecrease = () => setNumberValue((prev) => prev - 1);
	const handleIncrease = () => setNumberValue((prev) => prev + 1);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = Number(e.target.value);
		if (isNaN(inputValue)) {
			setNumberValue((prev) => prev);
		} else if (inputValue > max) {
			setNumberValue(max);
		} else if (inputValue < min) {
			setNumberValue(min);
		} else {
			setNumberValue(inputValue);
		}
	};

	return (
		<StyledNumberWrapper>
			<button
				aria-describedby={id}
				type="button"
				role="button"
				onClick={handleDecrease}
				disabled={disabled || numberValue === min}
			>
				&#8211;
			</button>
			<StyledNumberInput
				type="number"
				disabled={disabled}
				role="input"
				data-testid={testId}
				min={min}
				max={max}
				id={id}
				value={numberValue}
				onChange={handleChange}
			/>
			<button
				aria-describedby={id}
				type="button"
				role="button"
				onClick={handleIncrease}
				disabled={disabled || numberValue === max}
			>
				+
			</button>
		</StyledNumberWrapper>
	);
};

export { NumberInput };
