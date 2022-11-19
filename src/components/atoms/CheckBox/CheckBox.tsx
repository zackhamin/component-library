import { Check } from 'Atoms/Icons';
import { CheckBoxContext } from 'Molecules/CheckBoxGroup/CheckBoxGroup';
import { ReactInputProps } from '@Types/form';
import React, { forwardRef, useContext } from 'react';
import {
	StyledCheckBox,
	StyledCheckBoxLabel,
	StyledCheckIcon,
	StyledWrapper,
} from './CheckBox.styles';

export interface ICheckBoxProps extends Omit<ReactInputProps, 'ref'> {
	children: React.ReactNode;
	value: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isDisabled?: boolean;
	isChecked?: boolean;
	name?: string;
	id: string;
}

const CheckBox = forwardRef<HTMLInputElement, ICheckBoxProps>(
	(
		{ children, value, isDisabled, isChecked, onChange, name, id, ...rest },
		ref
	) => {
		const ctx = useContext(CheckBoxContext);
		const checkBoxCtx: any = {
			onChange: ctx?.handleOnChange || onChange,
		};

		return (
			<StyledWrapper>
				<StyledCheckBox
					type="checkbox"
					id={id}
					name={name}
					value={value}
					disabled={isDisabled}
					checked={isChecked}
					onChange={checkBoxCtx.onChange}
					ref={ref}
					{...rest}
				/>

				<StyledCheckBoxLabel htmlFor={id}>
					<StyledCheckIcon>
						<Check color={isDisabled ? 'rgba(0, 0, 0, 0.25)' : 'white'} />
					</StyledCheckIcon>
					{children}
				</StyledCheckBoxLabel>
			</StyledWrapper>
		);
	}
);

export { CheckBox };
