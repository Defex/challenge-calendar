import React from 'react';
import { DayContainer, Triangle, Price, Day } from './Day.styles';
import { DayBoxColors, TriangleColors, DayColors, PriceColors } from '../../../config';
import { DayTypes } from '../../../types';

const isSelected = (type: DayTypes) =>
  [DayTypes.selected, DayTypes.selectedFirst, DayTypes.selectedLast].includes(type);

const MonthDay = ({
  onClick,
  day,
  price,
  type = DayTypes.default,
}: {
  onClick: Function;
  day: number;
  price?: string;
  type?: DayTypes;
}) => {
  const selected = isSelected(type);
  return (
    <DayContainer
      onClick={() => onClick()}
      color={DayBoxColors[type]}
      hoverColor={(!selected && DayBoxColors[DayTypes.hover]) || undefined}
    >
      {type !== DayTypes.default && <Triangle color={TriangleColors[type]} bottom={type === DayTypes.selectedLast} />}
      <Day color={DayColors[type]}>{day}</Day>
      {price && <Price color={PriceColors[type]}>{price}</Price>}
    </DayContainer>
  );
};

export default MonthDay;
