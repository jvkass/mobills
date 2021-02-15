import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../../components/General/title';

function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('07:00', 1),
  createData('09:00', 2),
  createData('12:00', 4),
  createData('15:00', 10),
  createData('18:00', 3),
  createData('21:00', 1),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Hoje</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Transações
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}