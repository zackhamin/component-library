import { CalendarState } from '@react-stately/calendar';
import { colors } from 'Styles';
import { Heading } from 'Atoms/Heading';
import { Text } from 'Atoms/Text';
import { useCalendarCell } from '@react-aria/calendar';
import { useRef } from 'react';

import { CalendarDate, isToday } from '@internationalized/date';
import { dateToDay, dateToWeekday, intToMonth } from 'Utils/date';
import {
	StyledCalendarDay,
	StyledCalendarDayButton,
	StyledCalendarDayHelperText,
} from './CalendarDay.styles';

interface CalendarDayProps {
	state: CalendarState;
	date: CalendarDate;
	i18n: {
		locale: string;
		strings: {
			todayString: string;
		};
	};
}

const CalendarDay = ({ state, date, i18n }: CalendarDayProps) => {
	const ref = useRef<HTMLButtonElement>(null);
	const { cellProps, buttonProps } = useCalendarCell({ date }, state, ref);

	const isSelected = state.isSelected(date);
	const dateIsToday = isToday(date, state.timeZone);
	const firstVisibleDate = state.visibleRange.start;

	// Show the month if the date is the start of the month but is not the first visible date in the list
	const startOfMonthNotFirstVisible =
		date.day === 1 && firstVisibleDate.day !== 1;

	return (
		<StyledCalendarDay {...cellProps}>
			<StyledCalendarDayHelperText>
				{dateIsToday && (
					<Text size="1.4rem" align="center" aria-hidden="true">
						{i18n.strings.todayString}
					</Text>
				)}

				{startOfMonthNotFirstVisible && !dateIsToday && (
					<Text size="1.4rem" align="center" aria-hidden="true">
						{intToMonth(date.month)}
					</Text>
				)}
			</StyledCalendarDayHelperText>

			<StyledCalendarDayButton
				isSelected={isSelected}
				ref={ref}
				{...buttonProps}
			>
				{dateToDay(date.toDate(state.timeZone), i18n.locale)}
			</StyledCalendarDayButton>

			<Heading
				level={3}
				size="1.8rem"
				family="heading"
				align="center"
				aria-hidden="true"
				colour={colors.emerald}
			>
				{dateToWeekday(date.toDate(state.timeZone), i18n.locale)}
			</Heading>
		</StyledCalendarDay>
	);
};

export { CalendarDay };
