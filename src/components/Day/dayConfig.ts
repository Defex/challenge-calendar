export enum DayTypes {
  default = 'default',
  available = 'available',
  confirmed = 'confirmed',
  almostFull = 'allmostFull',
  soldOut = 'soldOut',
  selectedFirst = 'selectedFirst',
  selected = 'selected',
  selectedLast = 'selectedLast',
  hover = 'hover',
}

export const DayBoxColors = {
  [DayTypes.default]: '#ffffff',
  [DayTypes.available]: '#ffffff',
  [DayTypes.confirmed]: '#ffffff',
  [DayTypes.almostFull]: '#ffffff',
  [DayTypes.soldOut]: '#ffffff',
  [DayTypes.selectedFirst]: '#0062FF',
  [DayTypes.selected]: '#0062FF',
  [DayTypes.selectedLast]: '#0062FF',
  [DayTypes.hover]: '#F5F8FC',
};

export const TriangleColors = {
  [DayTypes.default]: '#ffffff',
  [DayTypes.available]: '#D9E8FF',
  [DayTypes.confirmed]: '#5395FF',
  [DayTypes.almostFull]: '#F80B0B',
  [DayTypes.soldOut]: 'soldOut',
  [DayTypes.selectedFirst]: '#ffffff',
  [DayTypes.selected]: '#0062FF',
  [DayTypes.selectedLast]: '#ffffff',
  [DayTypes.hover]: '#0062FF',
};

export const DayColors = {
  [DayTypes.default]: '#252D3C',
  [DayTypes.available]: '#252D3C',
  [DayTypes.confirmed]: '#252D3C',
  [DayTypes.almostFull]: '#F80B0B',
  [DayTypes.soldOut]: '#B8BEC4',
  [DayTypes.selectedFirst]: '#D9E8FF',
  [DayTypes.selected]: '#D9E8FF',
  [DayTypes.selectedLast]: '#D9E8FF',
  [DayTypes.hover]: '#0062FF',
};

export const PriceColors = {
  [DayTypes.default]: 'default',
  [DayTypes.available]: '#B8BEC4',
  [DayTypes.confirmed]: '#B8BEC4',
  [DayTypes.almostFull]: '#F80B0B',
  [DayTypes.soldOut]: '#B8BEC4',
  [DayTypes.selectedFirst]: '#FFFFFF',
  [DayTypes.selected]: '#FFFFFF',
  [DayTypes.selectedLast]: '#FFFFFF',
  [DayTypes.hover]: '#0062FF',
};
