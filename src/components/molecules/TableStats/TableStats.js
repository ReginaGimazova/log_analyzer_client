import React from "react";
import {BarChart, Bar, XAxis, YAxis, ResponsiveContainer} from 'recharts';

const TableStats = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5, right: 10, left: 10, bottom: 5,
        }}
        barCategoryGap={10}
      >
        <XAxis dataKey="name" interval={0} />
        <YAxis />
        <Bar dataKey="call_count" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );

};

export default TableStats;
