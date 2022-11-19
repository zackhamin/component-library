import { RadioButtonGroupContext } from 'Molecules/RadioButtonGroup/RadioButtonGroup';
import { ReactInputProps } from '@Types/form';
import React, { forwardRef, useContext } from 'react';
import {
	StyledItemDiv,
	StyledRadioButton,
	StyledRadioButtonLabel,
} from './RadioButton.styles';

export interface IRadioButtonProps extends Omit<ReactInputProps, 'ref'> {
	children: React.ReactNode;
	name?: string;
	value: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isDisabled?: boolean;
	id: string;
	isChecked?: boolean;
	isRequired?: boolean;
}

const RadioButton = forwardRef<HTMLInputElement, IRadioButtonProps>(
	(
		{
			children,
			name,
			value,
			isDisabled,
			id,
			isChecked,
			onChange,
			isRequired,
			...rest
		},
		ref
	) => {
		const ctx = useContext(RadioButtonGroupContext);
		const radioCtx = {
			name: ctx?.name || name,
			onChange: ctx?.handleOnChange || onChange,
			isSelected: isChecked || ctx?.isSelected === value,
			isRequired: ctx?.isRequired || isRequired,
		};
		return (
			<StyledItemDiv>
				<StyledRadioButton
					id={id}
					type="radio"
					name={radioCtx.name}
					value={value}
					onChange={radioCtx.onChange}
					disabled={isDisabled}
					{...(!ctx && !isChecked ? {} : { checked: radioCtx.isSelected })}
					required={isRequired}
					ref={ref}
					{...rest}
				/>
				<StyledRadioButtonLabel htmlFor={id}>{children}</StyledRadioButtonLabel>
			</StyledItemDiv>
		);
	}
);

export { RadioButton };
