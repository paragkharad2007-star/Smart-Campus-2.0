import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "8 AM", energy: 25 },
  { time: "10 AM", energy: 42 },
  { time: "12 PM", energy: 67 },
  { time: "2 PM", energy: 81 },
  { time: "4 PM", energy: 73 },
  { time: "6 PM", energy: 52 },
];

export default function EnergyChart() {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 overflow-hidden">

      <h3 className="text-xl font-bold text-cyan-400 mb-5">
        ⚡ Energy Usage
      </h3>

      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data}>

          <XAxis dataKey="time" stroke="#94A3B8" />

          <YAxis stroke="#94A3B8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="energy"
            stroke="#22d3ee"
            strokeWidth={4}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}