import React, { useState } from 'react';
import { DayTypes } from './components/Day/dayConfig';
import ReactCalendar from './components/ReactCalendar';
import { WeekDays } from './components/ReactCalendar/types';
import MonthDay from './components/Day/Day';
import { useSelectDateRange, Months } from './hooks';
import { getMonthDaySelectedType } from './components/ReactCalendar/utils';
import Calendar from './components/ReactCalendar2/Calendar';
import styled from 'styled-components';

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

const Center = styled.div`
  display: flex;
  width: 100%;
  place-content: center;
`;

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
      <Center>
        <Calendar year={2020} month={Months.March} weekStart={WeekDays.sunday} />
      </Center>
    </div>
  );
};

export default App;
