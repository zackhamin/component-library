import {
	dateToCalendarDate,
	dateToDay,
	dateToWeekday,
	dateToWeekdayWithMonth,
	intToMonth,
	dateToDayWithTime,
} from '../date';

describe('intToMonth()', () => {
	it('correctly returns month name by int', () => {
		expect(intToMonth(1)).toEqual('January');
	});
});

describe('dateToDay()', () => {
	it('correctly returns day based on date object', () => {
		const inputDate = new Date('2022/01/01');

		expect(dateToDay(inputDate)).toEqual('1');
	});
});

describe('dateToWeekday()', () => {
	it('correctly returns weekday based on date object', () => {
		const inputDate = new Date('2022/01/01');

		expect(dateToWeekday(inputDate)).toEqual('Sat');
	});
});

describe('dateToWeekdayWithMonth()', () => {
	it('correctly returns weekday based on date object', () => {
		const inputDate = new Date('2022-11-03T23:59:59.999Z');

		expect(dateToWeekdayWithMonth(inputDate)).toEqual('Thu, 3 Nov');
	});
	it('correctly sets locale', () => {
		const inputDate = new Date('2022-11-03T23:59:59.999Z');

		expect(dateToWeekdayWithMonth(inputDate, 'en-US')).toEqual('Thu, Nov 3');
	});
});

describe('dateToDayWithAMPM()', () => {
	it('correctly returns weekday based on date object', () => {
		const inputDate = new Date('2022-11-03T23:59:59.999Z');

		expect(dateToDayWithTime(inputDate)).toEqual('11 pm');
	});
});

describe('dateToCalendarDate()', () => {
	it('correctly returns react aria calendarDate based on date object', () => {
		const inputDate = new Date('2022/01/01');

		expect(dateToCalendarDate(inputDate)).toEqual({
			calendar: { identifier: 'gregory' },
			day: 1,
			era: 'AD',
			month: 1,
			year: 2022,
		});
	});
});
