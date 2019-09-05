import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  LabelList,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const data = [
  {
    name: "SCORE",
    pass: 2,
    fail: 3,
    queue: 7
  }
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, value, playerCount } = props;

  return (
    <g>
      <text
        x={x + width / 2}
        y={y + 40}
        fill="rgba(131,146,167,1)"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {`${value} of ${playerCount}`}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  render() {
    const { classes, score, playerCount } = this.props;
    return (
      <div className={classes.barScore}>
        <div className={classes.barScoreContainer}>
          <ResponsiveContainer >
            <BarChart
              width={100}
              height={80}
              data={score}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
              barSize={20}
            >
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" hide />
              <Tooltip cursor={false} active={false} isAnimationActive={false} />
              <Bar dataKey="pass" stackId="1" fill="#68CC4C" radius={[9, 9, 9, 9]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} stroke="#ffffff" strokeWidth={5} />
                ))}
                <LabelList
                  dataKey="pass"
                  position="bottom"
                  playerCount={playerCount}
                  content={renderCustomizedLabel}
                />
              </Bar>
              <Bar dataKey="queue" stackId="1" fill="#F5C14A" radius={[9, 9, 9, 9]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} stroke="#ffffff" strokeWidth={5} />
                ))}
                <LabelList
                  dataKey="queue"
                  position="bottom"
                  playerCount={playerCount}
                  content={renderCustomizedLabel}
                />
              </Bar>
              <Bar dataKey="fail" stackId="1" fill="#D76E6A" radius={[9, 9, 9, 9]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} stroke="#ffffff" strokeWidth={5} />
                ))}
                <LabelList
                  dataKey="fail"
                  position="bottom"
                  playerCount={playerCount}
                  content={renderCustomizedLabel}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
