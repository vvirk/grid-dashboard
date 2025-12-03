import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const lineData = [
  { date: '7 Jul', mentions: 5200 },
  { date: '9 Jul', mentions: 3200 },
  { date: '11 Jul', mentions: 3800 },
  { date: '13 Jul', mentions: 7400 },
  { date: '15 Jul', mentions: 12000 },
  { date: '18 Jul', mentions: 300 },
  { date: '21 Jul', mentions: 400 },
  { date: '25 Jul', mentions: 500 },
];

export function LineWidget() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={lineData}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Line
          type="monotone"
          dataKey="mentions"
          stroke="#111827"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}