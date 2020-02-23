import React, { useState } from 'react';
import { DayTypes } from './components/Day/dayConfig';
import ReactCalendar from './components/ReactCalendar';
import { WeekDays } from './components/ReactCalendar/types';
import MonthDay from './components/Day/Day';
import { useSelectDateRange } from './hooks';
import { getMonthDaySelectedType } from './components/ReactCalendar/utils';

const dayData: {
  [key: string]: {
    status: DayTypes;
    price: string;
  };
} = {
  '2020-02-04': {
    status: DayTypes.confirmed,
    price: '€1068.99',
  },
  '2020-02-05': {
    status: DayTypes.almostFull,
    price: '€699',
  },
  '2020-02-06': {
    status: DayTypes.available,
    price: '€699',
  },
};

const App = () => {
  const { onDateClick, from, to } = useSelectDateRange();
  console.log(from, to);
  return (
    <div>
      <ReactCalendar
        year={2020}
        month={2}
        weekStart={WeekDays.sunday}
        day={monthDay => {
          if (!monthDay) {
            return <div style={{ visibility: 'hidden', flex: '1' }} />;
          }
          const date = dayData[monthDay.date];
          const selected = getMonthDaySelectedType(
            { year: monthDay.year, month: monthDay.month, day: monthDay.day },
            from,
            to,
          );
          return (
            <MonthDay
              day={monthDay.day}
              price={date?.price}
              type={selected || date?.status}
              onClick={() => onDateClick(monthDay.year, monthDay.month, monthDay.day)}
            />
          );
        }}
      />
    </div>
  );
};

export default App;
