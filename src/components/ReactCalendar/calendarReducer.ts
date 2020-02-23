import { WeekDays, CalendarReducer, CalendarReducerActions } from "./types";
import {
  getNextYearAndMonth,
  getMonthDays,
  getWeekList,
  getCalendarWeeks,
  getWeekDaysOrder,
  getPrevYearAndMonth
} from "./utils";

export const getState = (year: number, month: number, weekStart: WeekDays) => {
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
    calendarWeeks
  };
};

const reducer = (state: CalendarReducer, type: string) => {
  switch (type) {
    case CalendarReducerActions.nextMonth: {
      const [nextYear, nextMonth] = getNextYearAndMonth(
        state.currentYear,
        state.currentMonth
      );
      return getState(nextYear, nextMonth, state.weekStart);
    }
    case CalendarReducerActions.prevMonth: {
      const [prevYear, prevMonth] = getPrevYearAndMonth(
        state.currentYear,
        state.currentMonth
      );
      return getState(prevYear, prevMonth, state.weekStart);
    }
    default:
      return state;
  }
};

export default reducer;
