import { FormControlContext } from 'Molecules/FormControl';
import { StyledFormErrorMessage } from './FormError.styles';
import { useContext } from 'react';

export interface FormErrorProps {
	children: React.ReactNode;
	id?: string;
	isInvalid?: boolean;
}

const FormError = ({ children, id, isInvalid }: FormErrorProps) => {
	const ctx = useContext(FormControlContext);
	const formCtx = {
		id: ctx?.id || id,
		isInvalid: ctx?.isInvalid || isInvalid,
	};

	return (
		<div
			aria-live="polite"
			id={`${formCtx.id}--feedback`}
			data-testid="input-error"
		>
			{formCtx.isInvalid && (
				<StyledFormErrorMessage>{children}</StyledFormErrorMessage>
			)}
		</div>
	);
};

export { FormError };
