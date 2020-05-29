import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled, { withTheme, css } from "styled-components";
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

const FlexTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Row = styled.div(
  ({ theme: { colors }, even }) => css`
    display: flex;
    justify-content: space-between;
    background-color: ${even ? colors.grey : colors.lightGrey};
    padding: 5px 10px;
  `
);

const TableCell = styled.span`
  font-size: 1.025rem;
`;

const TBody = styled.div(
  ({ desc }) => css`
    display: flex;
    flex-direction: ${desc ? "column-reverse" : "column"};
  `
);

const TableStats = ({ data, theme }) => {
  const [desc, setDesc] = useState(false);

  const Table = () => (
    <FlexTable>
      <Head>
        <TableCell>TABLE NAME</TableCell>
        <TableCell onClick={() => setDesc(!desc)}>
          CALL COUNT
          {desc ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </TableCell>
      </Head>
      <TBody desc={desc}>
        {data.map((item, index) => (
          <Row even={index % 2 === 0} key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.call_count}</TableCell>
          </Row>
        ))}
      </TBody>
    </FlexTable>
  );

  if (isMobile) {
    return <Table />;
  }

  // TODO: get max width of word and calculate YAxis width
  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart data={data} layout="vertical" barCategoryGap={3}>
        <CartesianGrid horizontal={false} stroke="#ebf3f0" width={10} />
        <XAxis type="number" />
        <YAxis
          type="category"
          stroke="#000"
          dataKey="name"
          width={230}
          interval={0}
        />
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
