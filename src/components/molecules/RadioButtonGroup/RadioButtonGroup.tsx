import classNames from 'classnames';
import { StyledOrientationWrapper } from './RadioButtonGroup.styles';
import React, { createContext } from 'react';
import { useEffect, useState } from 'react';

export interface IRadioButtonGroupProps {
	isVertical?: boolean;
	isRequired?: boolean;
	children: React.ReactNode;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	defaultValue: string;
}

export interface IRadioButtonContext {
	handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	isSelected: string;
	isRequired?: boolean;
}

export const RadioButtonGroupContext = createContext<
	IRadioButtonContext | undefined
>(undefined);

const RadioButtonGroup = ({
	children,
	isVertical,
	onChange,
	name,
	defaultValue,
	isRequired,
}: IRadioButtonGroupProps) => {
	const [isSelected, setIsSelected] = useState('');

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsSelected(e.target.value);
		onChange(e);
	};
	useEffect(() => {
		setIsSelected(defaultValue);
	}, [defaultValue]);

	return (
		<RadioButtonGroupContext.Provider
			value={{ name, handleOnChange, isSelected, isRequired }}
		>
			<div role="radiogroup">
				<StyledOrientationWrapper
					className={classNames({
						vertical: isVertical,
					})}
				>
					{children}
				</StyledOrientationWrapper>
			</div>
		</RadioButtonGroupContext.Provider>
	);
};

export { RadioButtonGroup };
