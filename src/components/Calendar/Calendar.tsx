import React from 'react';
import { useSelectDateRange, useGetCalendarWeeks } from '../../hooks';
import { ReactComponent as ChevronRight } from '../../assets/chevron_right.svg';
import { ReactComponent as ChevronLeft } from '../../assets/chevron_left.svg';

import {
  Container,
  Header,
  Content,
  ContentWeek,
  Footer,
  HeaderDate,
  HeaderNav,
  HeaderDays,
  HeaderDay,
  HeaderButton,
  ContentDay,
} from './Calendar.styles';
import MonthDay from './Day/Day';
import { DayTypes } from '../../types';
import { getMonthName, getMonthDaySelectedType } from '../../utils';
import { weekDayNames } from '../../config';

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

const Calendar = ({ year, month, weekStart }: { year: number; month: number; weekStart: number }) => {
  const { onDateClick, from, to } = useSelectDateRange();
  const { nextMonth, prevMonth, reducer } = useGetCalendarWeeks(year, month, weekStart);
  const { weekDays, currentYear, currentMonth, calendarWeeks } = reducer;
  return (
    <Container>
      <Header>
        <HeaderDate>{`${getMonthName(currentMonth)} ${currentYear}`}</HeaderDate>
        <HeaderNav>
          <HeaderButton onClick={() => prevMonth()}>
            <ChevronLeft />
          </HeaderButton>
          <HeaderButton onClick={() => nextMonth()}>
            <ChevronRight />
          </HeaderButton>
        </HeaderNav>
        <HeaderDays>
          {weekDays.map(day => (
            <HeaderDay key={day}>{weekDayNames[day]}</HeaderDay>
          ))}
        </HeaderDays>
      </Header>
      <Content>
        {calendarWeeks.map((week, i) => (
          <ContentWeek key={i}>
            {week.map((monthDay, j) => {
              if (!monthDay) {
                return <ContentDay key={j} />;
              }
              const date = dayData[monthDay.date];
              const selected = getMonthDaySelectedType(
                { year: monthDay.year, month: monthDay.month, day: monthDay.day },
                from,
                to,
              );
              return (
                <ContentDay key={j}>
                  <MonthDay
                    day={monthDay.day}
                    price={date?.price}
                    type={selected || date?.status}
                    onClick={() => onDateClick(monthDay.year, monthDay.month, monthDay.day)}
                  />
                </ContentDay>
              );
            })}
          </ContentWeek>
        ))}
      </Content>
      <Footer>Footer</Footer>
    </Container>
  );
};

export default Calendar;
