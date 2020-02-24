import React from 'react';
import { useSelectDateRange, useGetCalendarWeeks } from '../../hooks';
import { ReactComponent as ChevronRightSvg } from '../../assets/chevron_right.svg';
import { ReactComponent as ChevronLeftSvg } from '../../assets/chevron_left.svg';
import { ReactComponent as CalendarSvg } from '../../assets/calendar.svg';
import { ReactComponent as InfoSvg } from '../../assets/info.svg';

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
  FooterCalendar,
  IconCalendar,
  DateStatuses,
  DateStatus,
  TriangleSmall,
  IconInfo,
} from './Calendar.styles';
import MonthDay from './Day/Day';
import { getMonthName, getMonthDaySelectedType } from '../../utils';
import { weekDayNames } from '../../config';
import { DayData } from '../../types';

const Calendar = ({
  year,
  month,
  weekStart,
  dayData,
}: {
  year: number;
  month: number;
  weekStart: number;
  dayData: DayData;
}) => {
  const { onDateClick, from, to } = useSelectDateRange();
  const { nextMonth, prevMonth, reducer } = useGetCalendarWeeks(year, month, weekStart);
  const { weekDays, currentYear, currentMonth, calendarWeeks } = reducer;
  return (
    <Container>
      <Header>
        <HeaderDate>{`${getMonthName(currentMonth)} ${currentYear}`}</HeaderDate>
        <HeaderNav>
          <HeaderButton onClick={() => prevMonth()}>
            <ChevronLeftSvg />
          </HeaderButton>
          <HeaderButton onClick={() => nextMonth()}>
            <ChevronRightSvg />
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
      <Footer>
        <FooterCalendar>
          <IconCalendar>
            <CalendarSvg />
          </IconCalendar>
          <DateStatuses>
            <DateStatus color={'#252D3C'}>
              <TriangleSmall color={'#D9E8FF'} />
              Available
            </DateStatus>
            <DateStatus color={'#0062FF'}>
              <TriangleSmall color={'#0062FF'} />
              Confirmed
            </DateStatus>
            <DateStatus color={'#F80B0B'}>
              <TriangleSmall color={'#F80B0B'} />
              Almost Full
            </DateStatus>
            <IconInfo>
              <InfoSvg />
            </IconInfo>
          </DateStatuses>
        </FooterCalendar>
      </Footer>
    </Container>
  );
};

export default Calendar;
