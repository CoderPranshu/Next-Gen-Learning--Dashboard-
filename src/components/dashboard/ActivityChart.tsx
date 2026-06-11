"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 6 },
  { day: "Fri", hours: 4 },
  { day: "Sat", hours: 5 },
  { day: "Sun", hours: 3 },
];

export default function ActivityChart() {
  return (
    <div
      className="w-full"
      style={{ height: 300 }}
    >
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart data={data}>
          <CartesianGrid
            stroke="#27272a"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="day"
            stroke="#71717a"
          />

          <YAxis
            stroke="#71717a"
          />

          <Tooltip
            cursor={false}
            contentStyle={{
            backgroundColor: "#18181b",
            border: "1px solid #27272a",
            borderRadius: "12px",
             color: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
            labelStyle={{
             color: "#a1a1aa",
            }}
            itemStyle={{
                color: "#22d3ee",
            }}
        />

          <Bar
            dataKey="hours"
            fill="#22d3ee"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}