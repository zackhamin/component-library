import { colors } from 'Styles';
import React from 'react';
import { useInputContext } from 'Hooks/useInputContext';
import { BaseInputProps, ConditionalFormProps } from '@Types/form';
import { Check, Error } from 'Atoms/Icons';
import {
	StyledTextInput,
	StyledTextInputIcon,
	StyledTextInputWrapper,
} from './TextInput.styles';

export interface TextInputProps extends BaseInputProps<HTMLInputElement> {
	type?: 'text' | 'email' | 'tel';
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type TextInputCombinedProps = TextInputProps & ConditionalFormProps;

const TextInput = React.forwardRef<HTMLInputElement, TextInputCombinedProps>(
	(
		{
			name,
			id,
			isDisabled,
			isInvalid,
			isRequired,
			isSuccess,
			type = 'text',
			placeholder,
			className,
			value,
			onChange,
			...rest
		},
		ref
	) => {
		const { inputClasses, ctx } = useInputContext({
			id,
			name,
			isInvalid,
			isRequired,
			isSuccess,
			className,
		});

		return (
			<StyledTextInputWrapper>
				<StyledTextInput
					className={inputClasses}
					name={ctx.name}
					id={ctx.id}
					ref={ref}
					type={type}
					placeholder={placeholder}
					aria-invalid={ctx.isInvalid}
					aria-describedby={ctx.isInvalid ? `${ctx.id}--feedback` : undefined}
					required={ctx.isRequired}
					disabled={isDisabled}
					value={value}
					onChange={onChange}
					{...rest}
				/>

				{ctx.isInvalid && !isDisabled && (
					<StyledTextInputIcon>
						<Error fontSize="1.8rem" color={colors.error} data-testid="ERROR" />
					</StyledTextInputIcon>
				)}

				{ctx.isSuccess && !isDisabled && (
					<StyledTextInputIcon>
						<Check
							fontSize="1.8rem"
							color={colors.emerald75}
							data-testid="CHECK"
						/>
					</StyledTextInputIcon>
				)}
			</StyledTextInputWrapper>
		);
	}
);

export { TextInput };
