import React from 'react';
import styled from 'styled-components';

import Calendar from './components/Calendar/Calendar';
import { WeekDays } from './types';

const Center = styled.div`
  display: flex;
  width: 100%;
  place-content: center;
  background-color: #f5f8fc;
  padding-bottom: 10px;
`;

const App = () => {
  return (
    <Center>
      <Calendar year={2020} month={2} weekStart={WeekDays.sunday} />
    </Center>
  );
};

export default App;
