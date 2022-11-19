import classNames from 'classnames';
import { FormControlContext } from 'Molecules/FormControl';
import { useContext } from 'react';

interface FormInput {
	id?: string;
	name?: string;
	isInvalid?: boolean;
	isRequired?: boolean;
	isSuccess?: boolean;
	className?: string;
}

export const useInputContext = ({
	id,
	name,
	isInvalid,
	isRequired,
	isSuccess,
	className,
}: FormInput) => {
	const ctx = useContext(FormControlContext);

	const formCtx = {
		id: ctx?.id || id,
		name: ctx?.name || name,
		isInvalid: ctx?.isInvalid || isInvalid,
		isRequired: ctx?.isRequired || isRequired,
		isSuccess: ctx?.isSuccess || isSuccess,
	};

	const inputClasses = classNames(className, {
		'is-invalid': formCtx.isInvalid,
		'is-success': formCtx.isSuccess,
	});

	return {
		inputClasses,
		ctx: {
			id: formCtx.id,
			name: formCtx.name,
			isInvalid: formCtx.isInvalid,
			isRequired: formCtx.isRequired,
			isSuccess: formCtx.isSuccess,
		},
	};
};
