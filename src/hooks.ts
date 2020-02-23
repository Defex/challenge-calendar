import { useReducer, useCallback } from 'react';
import { toDateString } from './components/ReactCalendar/utils';

export enum Months {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11,
}

export interface CalendarDate {
  year: number;
  month: Months;
  day: number;
}

export interface DateRangeReducer {
  from?: CalendarDate;
  to?: CalendarDate;
}

export enum DateRangeReducerActionsTypes {
  setFrom = 'setFrom',
  setTo = 'setTo',
  reset = 'reset',
}

export type DateRangeActions = { type: DateRangeReducerActionsTypes; payload?: undefined | CalendarDate };

const initialState = {
  from: undefined,
  to: undefined,
};

export const reducer = (state = initialState as DateRangeReducer, action: DateRangeActions) => {
  switch (action.type) {
    case DateRangeReducerActionsTypes.setFrom: {
      return { ...state, from: action.payload };
    }
    case DateRangeReducerActionsTypes.setTo: {
      return { ...state, to: action.payload };
    }
    case DateRangeReducerActionsTypes.reset: {
      return initialState;
    }
    default:
      return state;
  }
};

export const useSelectDateRange = () => {
  const [{ from, to }, dispatch] = useReducer(reducer, initialState);
  const onDateClick = useCallback(
    (year: number, month: Months, day: number) => {
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
