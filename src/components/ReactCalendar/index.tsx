import React from "react";
import { WeekDays, MonthDay } from "./types";
import WeekRow from "./WeekRow";
import CalendarHeader from "./CalendarHeader";
import { useGetCalendarWeeks } from "./hooks";
import WeekDay from "./WeekDay";

const ReactCalendar = ({
  year,
  month,
  weekStart,
  day,
  dayComponent,
  weekComponent
}: {
  year: number;
  month: number;
  weekStart: WeekDays;
  day: (monthDay: MonthDay | undefined) => {};
  dayComponent?: React.FC;
  weekComponent?: React.FC;
}) => {
  const { nextMonth, prevMonth, calendarReducer } = useGetCalendarWeeks(
    year,
    month,
    weekStart
  );
  const {
    weekDays,
    currentYear,
    currentMonth,
    calendarWeeks
  } = calendarReducer;
  const Day = dayComponent || WeekDay;
  const Week = weekComponent || WeekRow;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 600 }}>
        <CalendarHeader
          weekDays={weekDays}
          year={currentYear}
          month={currentMonth}
          onNextMonthClick={nextMonth}
          onPrevMonthClick={prevMonth}
        />
        <div>
          {calendarWeeks.map((calendarWeek, i) => (
            <Week key={i}>
              {calendarWeek.map((weekDay, j) => (
                <Day key={j}>{day(weekDay)}</Day>
              ))}
            </Week>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactCalendar;
