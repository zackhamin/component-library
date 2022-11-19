import { Chevron } from 'Atoms/Icons/Chevron';
import classNames from 'classnames';
import { colors } from 'Styles';
import { forwardRef } from 'react';
import { Option } from './Option';
import { useInputContext } from 'Hooks/useInputContext';
import { BaseInputProps, ConditionalFormProps } from '@Types/form';
import {
	StyledSelect,
	StyledSelectIcon,
	StyledSelectWrapper,
} from './Select.styles';

export interface SelectProps
	extends Omit<BaseInputProps<HTMLSelectElement>, 'size' | 'disabled'> {
	children: React.ReactNode;
	testId?: string;
	size?: 'large' | 'medium' | 'small';
}

export type SelectCombinedProps = SelectProps & ConditionalFormProps;

const Select = forwardRef<HTMLSelectElement, SelectCombinedProps>(
	(
		{
			children,
			placeholder,
			id,
			name,
			isRequired,
			isDisabled,
			isSuccess,
			isInvalid,
			className,
			value,
			onChange,
			size = 'large',
			testId,
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

		const classes = classNames(inputClasses, `select-${size}`);

		return (
			<StyledSelectWrapper className={`select-${size}`}>
				<StyledSelectIcon disabled={isDisabled}>
					<Chevron
						fontSize="1.4rem"
						data-testid="CHEVRON"
						color={colors.emerald}
					/>
				</StyledSelectIcon>
				<StyledSelect
					className={classes}
					ref={ref}
					name={ctx.name}
					id={ctx.id}
					placeholder={placeholder}
					defaultValue=""
					aria-invalid={ctx.isInvalid}
					aria-describedby={ctx.isInvalid ? `${ctx.id}--feedback` : undefined}
					required={ctx.isRequired}
					disabled={isDisabled}
					value={value}
					onChange={onChange}
					data-testid={testId}
					{...rest}
				>
					{placeholder && (
						<Option value="" isDisabled>
							{placeholder}
						</Option>
					)}
					{children}
				</StyledSelect>
			</StyledSelectWrapper>
		);
	}
);

export { Select };
