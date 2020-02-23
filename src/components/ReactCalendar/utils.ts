import { MonthDay, WeekDays } from './types';
import { CalendarDate } from '../../hooks';
import { DayTypes } from '../Day/dayConfig';

export const WeekDayNames = {
  [WeekDays.sunday]: 'SUN',
  [WeekDays.monday]: 'MON',
  [WeekDays.tuesday]: 'TUE',
  [WeekDays.wednesday]: 'WED',
  [WeekDays.thursday]: 'THU',
  [WeekDays.friday]: 'FRI',
  [WeekDays.saturday]: 'SAT',
};

const getDaysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();

export const getMonthDays = (year: number, month: number): MonthDay[] => {
  const daysInMonth = getDaysInMonth(year, month);
  const monthDays = Array(daysInMonth)
    .fill(null)
    .map((v, i) => ({
      day: i + 1,
      year,
      month,
      date: new Date(`${year}-${month}-${i + 1} 00:00`).toJSON().split('T')[0],
      weekDay: WeekDays[new Date(`${year}-${month}-${i + 1} 00:00`).getDay()],
      weekDayInt: new Date(`${year}-${month}-${i + 1} 00:00`).getDay(),
    }));
  return monthDays;
};

export const getWeekList = (monthDays: MonthDay[], weekStart: WeekDays): Array<MonthDay[]> => {
  const splitIndexes = monthDays.reduce((acc: number[], v, i) => (v.weekDayInt === weekStart ? [...acc, i] : acc), []);
  const weeks = [...splitIndexes, monthDays.length].map((v, i, arr) => monthDays.slice(i > 0 ? arr[i - 1] : 0, v));
  return weeks;
};

export const getWeekDaysOrder = (weekStartDay: WeekDays): WeekDays[] => {
  const weekDays = Array(7)
    .fill(0)
    .map((v, i) => i);
  return [...weekDays.slice(weekStartDay, weekDays.length), ...weekDays.slice(0, weekStartDay)];
};

export const getNextYearAndMonth = (year: number, month: number): [number, number] => {
  if (month === 12) {
    return [year + 1, 1];
  }
  return [year, month + 1];
};

export const getPrevYearAndMonth = (year: number, month: number): [number, number] => {
  if (month === 1) {
    return [year - 1, 12];
  }
  return [year, month - 1];
};

export const getCalendarWeeks = (weekList: MonthDay[][], weekDays: WeekDays[]) =>
  weekList.map(week => weekDays.map(day => week.find(weekDay => weekDay.weekDayInt === day)));

export const getMonthName = (month: number) =>
  new Date(2020, month - 1, 1).toLocaleDateString('default', { month: 'long' });

export const toDateString = (year: number, month: number, day: number) =>
  new Date(year, month, day).toISOString().split('T')[0];

export const getMonthDaySelectedType = (
  date: CalendarDate,
  from: CalendarDate | undefined,
  to: CalendarDate | undefined,
) => {
  const _date = toDateString(date.year, date.month, date.day);
  const _from = from && toDateString(from.year, from.month, from.day);
  const _to = to && toDateString(to.year, to.month, to.day);

  if (_date === _from) {
    return DayTypes.selectedFirst;
  }

  if (_date === _to) {
    return DayTypes.selectedLast;
  }

  if (!!_from && !!_to && _date > _from && _date < _to) {
    return DayTypes.selected;
  }

  return undefined;
};
