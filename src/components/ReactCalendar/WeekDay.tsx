import React from 'react';

const WeekDay = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div
    style={{
      flex: '1',
      display: 'flex',
      placeContent: 'center',
      alignItems: 'center',
      ...style,
    }}
  >
    {children}
  </div>
);

export default WeekDay;
