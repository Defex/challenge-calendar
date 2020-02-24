import React from 'react';
import styled from 'styled-components';

import Calendar from './components/Calendar/Calendar';
import { WeekDays, DayTypes, DayData } from './types';

const Center = styled.div`
  display: flex;
  width: 100%;
  place-content: center;
  background-color: #f5f8fc;
  padding-bottom: 10px;
`;

const dayData: DayData = {
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
  return (
    <Center>
      <Calendar year={2020} month={2} weekStart={WeekDays.sunday} dayData={dayData} />
    </Center>
  );
};

export default App;
