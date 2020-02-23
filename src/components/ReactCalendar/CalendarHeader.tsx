import React from 'react';
import { WeekDays } from './types';
import { WeekDayNames, getMonthName } from './utils';
import styled from 'styled-components';
import { ReactComponent as ChevronRight } from '../../assets/chevron_right.svg';
import { ReactComponent as ChevronLeft } from '../../assets/chevron_left.svg';

const Wrapper = styled.div`
  width: 600px;
  height: 100px;
  background: #d9e8ff 0% 0% no-repeat padding-box;
  border-radius: 4px 4px 0px 0px;
`;

const MonthAndYear = styled.div`
  text-align: center;
  font: Bold 24px/29px Sofia Pro;
  letter-spacing: -0.29px;
  color: #252d3c;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Buttons = styled.div`
  display: 'flex';
`;

const NavButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 75px;
  height: 75px;
`;

const DayView = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  font: Bold 12px/16px Sofia Pro;
  letter-spacing: 0.96px;
  color: #999fa5;
  text-transform: uppercase;
  opacity: 1;
`;

const WeekView = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalendarHeader = ({
  weekDays,
  year,
  month,
  onPrevMonthClick,
  onNextMonthClick,
}: {
  weekDays: WeekDays[];
  year: number;
  month: number;
  onNextMonthClick: Function;
  onPrevMonthClick: Function;
}) => {
  return (
    <Wrapper>
      <Top>
        <MonthAndYear>{`${getMonthName(month)} ${year}`}</MonthAndYear>
        <Buttons>
          <NavButton onClick={() => onPrevMonthClick()}>
            <ChevronLeft style={{ width: '100%', height: '100%' }} />
          </NavButton>
          <NavButton onClick={() => onNextMonthClick()}>
            <ChevronRight style={{ width: '100%', height: '100%' }} />
          </NavButton>
        </Buttons>
      </Top>
      <WeekView>
        <DayView style={{ display: 'flex' }}>
          <div style={{ flex: 1, alignSelf: 'flex-start', paddingLeft: 10 }}>{`sun`}</div>
        </DayView>
        <DayView>{`mon`}</DayView>
        <DayView>{`tue`}</DayView>
        <DayView>{`wed`}</DayView>
        <DayView>{`thu`}</DayView>
        <DayView>{`fri`}</DayView>
        <DayView>{`sat`}</DayView>
      </WeekView>
    </Wrapper>
  );
};

export default CalendarHeader;
