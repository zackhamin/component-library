import classNames from 'classnames';
import { StyledOrientationWrapper } from './CheckBoxGroup.styles';
import React, { createContext } from 'react';
import { useState } from 'react';

export interface ICheckBoxGroupProps {
	isVertical?: boolean;
	children: React.ReactNode;
	onChange: (values: string[]) => void;
}

export interface ICheckBoxContext {
	handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBoxContext = createContext<ICheckBoxContext | undefined>(
	undefined
);

const CheckBoxGroup = ({
	children,
	isVertical,
	onChange,
}: ICheckBoxGroupProps) => {
	const [selectedValues, setSelectedValues] = useState<string[]>([]);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			const nextValues = [...selectedValues, e.target.value];
			setSelectedValues(nextValues);
			onChange(nextValues);
		} else {
			const nextValues = selectedValues.filter(
				(value) => value !== e.target.value
			);
			setSelectedValues(nextValues);
			onChange(nextValues);
		}
	};
	return (
		<CheckBoxContext.Provider value={{ handleOnChange }}>
			<div role="group">
				<StyledOrientationWrapper
					className={classNames({
						vertical: isVertical,
					})}
				>
					{children}
				</StyledOrientationWrapper>
			</div>
		</CheckBoxContext.Provider>
	);
};

export { CheckBoxGroup };
