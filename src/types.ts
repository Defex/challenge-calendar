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

export enum WeekDays {
  sunday = 0,
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6,
}

export interface MonthDay {
  year: number;
  month: number;
  day: number;
  date: string;
  weekDay: string;
  weekDayInt: WeekDays;
}

export interface CalendarReducer {
  weekStart: WeekDays;
  currentYear: number;
  currentMonth: number;
  monthDays: MonthDay[];
  weekList: MonthDay[][];
  weekDays: WeekDays[];
  calendarWeeks: (MonthDay | undefined)[][];
}

export enum CalendarReducerActions {
  nextMonth = 'nextMonth',
  prevMonth = 'prevMonth',
}

export enum DayTypes {
  default = 'default',
  available = 'available',
  confirmed = 'confirmed',
  almostFull = 'allmostFull',
  soldOut = 'soldOut',
  selectedFirst = 'selectedFirst',
  selected = 'selected',
  selectedLast = 'selectedLast',
  hover = 'hover',
}
