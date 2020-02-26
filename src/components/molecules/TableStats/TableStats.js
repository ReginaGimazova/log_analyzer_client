import React from "react";
import {BarChart, Bar, XAxis, ResponsiveContainer, LabelList, Tooltip, CartesianGrid, Cell, YAxis} from 'recharts';

const TableStats = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
      >
        <CartesianGrid
          horizontal={false}
          stroke="#ebf3f0"
          width={10}
        />
        <XAxis type='number' />
        <YAxis type='category' tick={false} dataKey='name' />
        <Tooltip />
        <Bar
          maxBarSize={30}
          dataKey='call_count'
          fill='#92ac6d'
        >
          <LabelList position="right" dataKey='name'/>
          {
            data.map((table, index) => (
              <Cell key={index} fill={table.call_count > 20 ? '#a56a6b' : '#92ac6d'} />
            ))
          }
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
};

export default TableStats;
