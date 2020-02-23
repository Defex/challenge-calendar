import { WeekDays, CalendarReducerActions } from './types';
import { useReducer } from 'react';
import reducer, { getState } from './calendarReducer';

export const useGetCalendarWeeks = (year: number, month: number, weekStart: WeekDays) => {
  const [calendarReducer, dispatch] = useReducer(reducer, getState(year, month, weekStart));

  const nextMonth = () => dispatch(CalendarReducerActions.nextMonth);

  const prevMonth = () => dispatch(CalendarReducerActions.prevMonth);

  return {
    calendarReducer,
    nextMonth,
    prevMonth,
  };
};
