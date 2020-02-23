export enum WeekDays {
  sunday = 0,
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6
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
  nextMonth = "nextMonth",
  prevMonth = "prevMonth"
}
