import { useReducer, useCallback } from 'react';
import { dateRangeInitialState, dateRangeReducer, getState, calendarReducer } from './reducers';
import { DateRangeReducerActionsTypes, WeekDays, CalendarReducerActions } from './types';
import { toDateString } from './utils';

export const useSelectDateRange = () => {
  const [{ from, to }, dispatch] = useReducer(dateRangeReducer, dateRangeInitialState);
  const onDateClick = useCallback(
    (year: number, month: number, day: number) => {
      if (!from && !to) {
        return dispatch({ type: DateRangeReducerActionsTypes.setFrom, payload: { year, month, day } });
      }
      if (
        !!from &&
        !to &&
        toDateString &&
        toDateString(from.year, from.month, from.day) < toDateString(year, month, day)
      ) {
        return dispatch({ type: DateRangeReducerActionsTypes.setTo, payload: { year, month, day } });
      }
      return dispatch({ type: DateRangeReducerActionsTypes.reset });
    },
    [dispatch, from, to],
  );
  return {
    onDateClick,
    from,
    to,
  };
};

export const useGetCalendarWeeks = (year: number, month: number, weekStart: WeekDays) => {
  const [reducer, dispatch] = useReducer(calendarReducer, getState(year, month, weekStart));

  const nextMonth = () => dispatch(CalendarReducerActions.nextMonth);

  const prevMonth = () => dispatch(CalendarReducerActions.prevMonth);

  return {
    reducer,
    nextMonth,
    prevMonth,
  };
};
