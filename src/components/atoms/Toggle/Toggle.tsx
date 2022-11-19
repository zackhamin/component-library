import cn from 'classnames';
import React from 'react';
import {
	StyledToggleInput,
	StyledToggleLabel,
	StyledToggleSpan,
} from './Toggle.styles';

export interface ToggleProps {
	id: string;
	name?: string;
	children: React.ReactNode;
	isChecked?: boolean;
	isDisabled?: boolean;
	isRequired?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
	(
		{ id, name, onChange, children, isDisabled, isChecked, isRequired },
		ref
	) => {
		return (
			<StyledToggleLabel htmlFor={id}>
				<StyledToggleInput
					type="checkbox"
					name={name}
					id={id}
					ref={ref}
					disabled={isDisabled}
					onChange={onChange}
					checked={isChecked}
					required={isRequired}
				/>
				<StyledToggleSpan className={cn({ 'is-disabled': isDisabled })} />
				{children} {isRequired && <span aria-label="required">*</span>}
			</StyledToggleLabel>
		);
	}
);

export { Toggle };
