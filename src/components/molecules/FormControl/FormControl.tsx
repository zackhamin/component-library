import { ConditionalFormProps } from '@Types/form';
import { createContext } from 'react';

interface FormControlContext {
	name?: string;
	id: string;
	isRequired?: boolean;
	isInvalid?: boolean;
	isSuccess?: boolean;
}

interface BaseFormControlProps extends FormControlContext {
	children: React.ReactNode;
	className?: string;
}

export type FormControlProps = BaseFormControlProps & ConditionalFormProps;

export const FormControlContext = createContext<FormControlContext | undefined>(
	undefined
);

const FormControl = ({
	children,
	name,
	id,
	isInvalid,
	isRequired,
	isSuccess,
	className,
}: FormControlProps) => {
	return (
		<FormControlContext.Provider
			value={{ name, id, isRequired, isInvalid, isSuccess }}
		>
			<div className={className}>{children}</div>
		</FormControlContext.Provider>
	);
};

export { FormControl };
