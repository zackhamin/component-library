import cn from 'classnames';
import { FormControlContext } from 'Molecules/FormControl';
import { StyledFormLabel } from './FormLabel.styles';
import { useContext } from 'react';

export interface FormLabelProps {
	children: React.ReactNode;
	htmlFor?: string;
	isRequired?: boolean;
	variant?: 'body' | 'heading';
}

const FormLabel = ({
	children = 'Label',
	htmlFor,
	isRequired,
	variant = 'heading',
}: FormLabelProps) => {
	const ctx = useContext(FormControlContext);

	return (
		<StyledFormLabel
			className={cn({ [`variant-${variant}`]: variant })}
			htmlFor={ctx?.id || htmlFor}
		>
			{children}
			{(ctx?.isRequired || isRequired) && <span aria-label="required">*</span>}
		</StyledFormLabel>
	);
};

export { FormLabel };
