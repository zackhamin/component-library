interface OptionProps {
	children: React.ReactNode;
	value: string | number;
	isDisabled?: boolean;
}

const Option = ({ children, value, isDisabled }: OptionProps) => {
	return (
		<option value={value} disabled={isDisabled}>
			{children}
		</option>
	);
};

export { Option };
