import styled from 'styled-components';

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

export const ContentDay = styled.div`
  height: 80px;
  width: 100%;
  background-color: #ffffff;
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const FooterCalendar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 0px 0px 0px 4px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const IconCalendar = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  width: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;

  > svg {
    justify-self: center;
    fill: #5395ff;
  }
`;

export const DateStatuses = styled.div`
  display: flex;
`;

export const DateStatus = styled.div`
  text-align: left;
  font: Normal 12px/16px 'Sofia Pro';
  letter-spacing: 0;
  position: relative;
  margin-top: 16px;
  margin-left: 16px;
  padding-left: 16px;
  color: ${props => props.color};
`;

export const IconInfo = styled.div`
  margin-top: 16px;
  padding-left: 16px;

  > svg {
    fill: #b8bec4;
    width: 16px;
    height: 16px;
  }
`;

export const TriangleSmall = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  left: 0;
  top: 0;
  border-bottom: 10px solid transparent;
  border-left: 10px solid ${props => props.color};
`;
