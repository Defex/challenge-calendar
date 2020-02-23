import styled, { css } from 'styled-components';

export const Day = styled.div`
  text-align: center;
  font: Normal 24px/36px Sofia Pro;
  letter-spacing: 0;
  opacity: 1;
  font-weight: 500;
  color: ${props => props.color};
`;

export const Triangle = styled.div<{ bottom?: boolean }>`
  position: absolute;
  width: 0;
  height: 0;
  ${props =>
    props.bottom
      ? css`
          border-top: 16px solid transparent;
          border-right: 16px solid ${props.color};
          right: 0;
          bottom: 0;
        `
      : css`
          left: 0;
          top: 0;
          border-bottom: 16px solid transparent;
          border-left: 16px solid ${props.color};
        `}
`;

export const Price = styled.div`
  text-align: center;
  font: Normal 12px/16px Sofia Pro;
  letter-spacing: 0;
  color: ${props => props.color};
  opacity: 1;
`;

interface IDayContainer {
  hoverColor?: string;
  selected?: boolean;
}

export const DayContainer = styled.div<IDayContainer>`
  height: 80px;
  width: 100%;
  background: ${props => props.color} 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  place-content: center;
  align-items: center;
  color: #252d3c;
  position: relative;
  flex-direction: column;
  ${props =>
      props.selected &&
      css`
        border: 1px solid #d9e8ff;
      `}
    :hover {
    cursor: pointer;
    ${props =>
      props.hoverColor &&
      css`
        background: ${props.hoverColor} 0% 0% no-repeat padding-box;
      `}
  }
`;
