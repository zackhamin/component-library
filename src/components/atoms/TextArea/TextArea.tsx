import { colors } from 'Styles';
import { useInputContext } from 'Hooks/useInputContext';
import { BaseInputProps, ConditionalFormProps, Wrap } from '@Types/form';
import { ChangeEvent, forwardRef } from 'react';
import { Check, Error } from 'Atoms/Icons';
import {
	StyledTextArea,
	StyledTextAreaIcon,
	StyledTextAreaWrapper,
} from './TextArea.styles';

export interface TextAreaProps extends BaseInputProps<HTMLTextAreaElement> {
	placeholder?: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	wrap?: Wrap;
	rows?: number;
}

export type TextAreaCombinedProps = TextAreaProps & ConditionalFormProps;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaCombinedProps>(
	(
		{
			name,
			id,
			isDisabled,
			isInvalid,
			isRequired,
			isSuccess,
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
			<StyledTextAreaWrapper>
				<StyledTextArea
					className={inputClasses}
					name={ctx.name}
					id={ctx.id}
					ref={ref}
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
					<StyledTextAreaIcon>
						<Error fontSize="1.8rem" color={colors.error} data-testid="ERROR" />
					</StyledTextAreaIcon>
				)}

				{ctx.isSuccess && !isDisabled && (
					<StyledTextAreaIcon>
						<Check
							fontSize="1.8rem"
							color={colors.emerald75}
							data-testid="CHECK"
						/>
					</StyledTextAreaIcon>
				)}
			</StyledTextAreaWrapper>
		);
	}
);

export { TextArea };
