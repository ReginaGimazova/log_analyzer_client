import React from "react";
import { withTheme } from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
  Tooltip,
  CartesianGrid,
  Cell,
  YAxis
} from "recharts";

const TableStats = ({ data, theme }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical">
        <CartesianGrid horizontal={false} stroke="#ebf3f0" width={10} />
        <XAxis type="number" />
        <YAxis type="category" tick={false} dataKey="name" />
        <Tooltip cursor={{ fill: theme.colors.lightGrey }} />
        <Bar maxBarSize={30} dataKey="call_count">
          <LabelList position="right" dataKey="name" />
          {data.map((table, index) => (
            <Cell
              key={index}
              fill={
                table.call_count > 20
                  ? theme.colors.lightRed
                  : theme.colors.green
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default withTheme(TableStats);
