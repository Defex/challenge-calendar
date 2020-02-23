import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  background-color: #d9e8ff;
  height: 75px;
  padding-top: 15px;
`;

export const HeaderDate = styled.div`
  text-align: center;
  font: Bold 24px/29px Sofia Pro;
  letter-spacing: -0.29px;
  color: #252d3c;
  margin-left: 28px;
  margin-bottom: 28px;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-content: flex-start;
  margin-right: 28px;
`;

export const HeaderButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  height: 24px;
`;

export const HeaderDays = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font: Bold 12px/16px Sofia Pro;
  letter-spacing: 0.96px;
  color: #999fa5;
  text-transform: uppercase;
  padding-bottom: 4px;
`;

export const HeaderDay = styled.div`
  flex: 1;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWeek = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font: Regular 24px/36px Sofia Pro;
  letter-spacing: 0;
  color: #252d3c;
`;

interface IDayContainer {
  hoverColor?: string;
  selected?: boolean;
}

export const ContentDay = styled.div<IDayContainer>`
  height: 80px;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
`;
