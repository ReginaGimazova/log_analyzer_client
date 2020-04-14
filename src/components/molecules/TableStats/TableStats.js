import React from "react";
import { withTheme } from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
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
        <YAxis type="category" tick={false} dataKey="name" width={5} />
        <Tooltip cursor={{ fill: theme.colors.lightGrey }} />
        <Bar maxBarSize={30} dataKey="call_count">
          {data.map((table, index) => (
            <Cell key={index} fill={theme.colors.darkGrey} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default withTheme(TableStats);
