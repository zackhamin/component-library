import { CalendarDate } from '@internationalized/date';

// Convert integer to localised month name. The range should not be zero based i.e. expecting 1-12.
export const intToMonth = (int: number, locale = 'en-GB'): string => {
	return Intl.DateTimeFormat(locale, { month: 'long' }).format(
		new Date(new Date().getFullYear(), int - 1)
	);
};

export const dateToDay = (date: Date, locale = 'en-GB'): string => {
	return Intl.DateTimeFormat(locale, { day: 'numeric' }).format(
		new Date(date.toString())
	);
};

export const dateToDayWithTime = (
	date: Date,
	locale = 'en-GB',
	hourFormat12 = true
): string => {
	return Intl.DateTimeFormat(locale, {
		hour12: hourFormat12,
		hour: 'numeric',
	}).format(date);
};

export const dateToWeekday = (date: Date, locale = 'en-GB'): string => {
	return Intl.DateTimeFormat(locale, { weekday: 'short' }).format(
		new Date(date.toString())
	);
};

export const dateToWeekdayWithMonth = (
	date: Date,
	locale = 'en-GB'
): string => {
	return Intl.DateTimeFormat(locale, {
		weekday: 'short',
		day: 'numeric',
		month: 'short',
	}).format(new Date(date.toString()));
};

// Convert date to react-aria CalendarDate
export const dateToCalendarDate = (date: Date): CalendarDate => {
	return new CalendarDate(
		date.getFullYear(),
		date.getMonth() + 1,
		date.getDate()
	);
};
