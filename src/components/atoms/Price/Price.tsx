import { Locale, Price as PriceType } from '@Types';

export interface PriceProps extends PriceType {
	locale?: Locale;
}

export const Price = ({ currency, amount, locale = 'en-GB' }: PriceProps) => {
	const parsedAmount = typeof amount !== 'number' ? parseFloat(amount) : amount;

	return (
		<>
			{new Intl.NumberFormat(locale, {
				style: 'currency',
				currency,
				minimumFractionDigits: 2,
			}).format(parsedAmount)}
		</>
	);
};
