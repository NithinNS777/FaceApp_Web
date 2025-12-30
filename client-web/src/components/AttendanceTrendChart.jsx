import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AttendanceTrendChart = ({ trend }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
      <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Attendance Trend
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={trend}>
          <XAxis dataKey="week" stroke="#94a3b8" />
          <YAxis domain={[0, 100]} stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              color: "#e5e7eb",
            }}
          />
          <Line
            type="monotone"
            dataKey="percentage"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceTrendChart;
