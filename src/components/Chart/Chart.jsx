import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Label } from 'recharts';
import classes from './Chart.module.scss';

const Chart = ({ percent }) => {
  let max = 100;

  const data01 = [
    {
      name: 'blue',
      value: percent,
      fill: '#3479ff',
    },
    {
      name: 'grey',
      value: max - percent,
      fill: '#ecf4ff',
    },
  ];

  return (
    <div className={classes['chart']}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            outerRadius={48}
            innerRadius={38}
            startAngle={-140}
            endAngle={-400}
            stroke="none"
          >
            <Label
              value={`${data01[0].value.toFixed(1)}%`}
              position="center"
              fill="var(--theme-color-text)"
              fontWeight={500}
              dy={0}
              style={{ fontSize: 16 }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
