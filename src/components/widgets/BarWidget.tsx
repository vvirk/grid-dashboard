import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const barData = [
  {
    name: 'Mentions',
    neutral: 52000,
    negative: 20000,
    positive: 70000,
  },
];

export function BarWidget() {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={barData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          barSize={35}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar
            dataKey="negative"
            name="Negative"
            fill="#ef4444"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="neutral"
            name="Neutral"
            fill="#3b82f6"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="positive"
            name="Positive"
            fill="#22c55e"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
  );
}