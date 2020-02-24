import {
  WeekDays,
  CalendarReducer,
  CalendarReducerActions,
  DateRangeReducerActionsTypes,
  DateRangeReducer,
  DateRangeActions,
} from './types';
import {
  getNextYearAndMonth,
  getMonthDays,
  getWeekList,
  getCalendarWeeks,
  getWeekDaysOrder,
  getPrevYearAndMonth,
} from './utils';

export const getCalendarReducerState = (year: number, month: number, weekStart: WeekDays) => {
  const monthDays = getMonthDays(year, month);
  const weekList = getWeekList(monthDays, weekStart);
  const weekDays = getWeekDaysOrder(weekStart);
  const calendarWeeks = getCalendarWeeks(weekList, weekDays);
  return {
    currentYear: year,
    currentMonth: month,
    weekStart,
    monthDays,
    weekList,
    weekDays,
    calendarWeeks,
  };
};

export const calendarReducer = (state: CalendarReducer, type: string) => {
  switch (type) {
    case CalendarReducerActions.nextMonth: {
      const [nextYear, nextMonth] = getNextYearAndMonth(state.currentYear, state.currentMonth);
      return getCalendarReducerState(nextYear, nextMonth, state.weekStart);
    }
    case CalendarReducerActions.prevMonth: {
      const [prevYear, prevMonth] = getPrevYearAndMonth(state.currentYear, state.currentMonth);
      return getCalendarReducerState(prevYear, prevMonth, state.weekStart);
    }
    default:
      return state;
  }
};

export const dateRangeInitialState = {
  from: undefined,
  to: undefined,
};

export const dateRangeReducer = (state = dateRangeInitialState as DateRangeReducer, action: DateRangeActions) => {
  switch (action.type) {
    case DateRangeReducerActionsTypes.setFrom: {
      return { ...state, from: action.payload };
    }
    case DateRangeReducerActionsTypes.setTo: {
      return { ...state, to: action.payload };
    }
    case DateRangeReducerActionsTypes.reset: {
      return dateRangeInitialState;
    }
    default:
      return state;
  }
};
