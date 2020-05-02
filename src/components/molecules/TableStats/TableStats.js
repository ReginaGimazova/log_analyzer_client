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
    <ResponsiveContainer width="100%" height="90%">
      <BarChart data={data} layout="vertical" barCategoryGap={3}>
        <CartesianGrid horizontal={false} stroke="#ebf3f0" width={10} />
        <XAxis type="number" />
        <YAxis type="category" stroke="#000" dataKey="name" width={150} />
        <Tooltip cursor={{ fill: theme.colors.lightGrey }} />
        <Bar dataKey="call_count">
          {data.map((table, index) => (
            <Cell
              key={index}
              fill={index % 2 === 0 ? theme.colors.darkGrey : theme.colors.grey}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default withTheme(TableStats);
