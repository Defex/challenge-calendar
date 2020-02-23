import React from "react";

const WeekRow = ({
  children,
  style = {}
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div style={{ display: "flex", justifyContent: "space-between", ...style }}>
    {children}
  </div>
);

export default WeekRow;
