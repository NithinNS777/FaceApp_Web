import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = ({ subjects }) => {
  const data = subjects.map((s) => ({
    name: s.subjectName,
    percentage: Math.round((s.attendedClasses / s.totalClasses) * 100),
  }));

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700">
      <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Attendance Overview
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barCategoryGap="35%">
          <XAxis
            dataKey="name"
            tick={{ fill: "#94a3b8", fontSize: 12 }}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              color: "#e5e7eb",
            }}
          />
          <Bar
            dataKey="percentage"
            fill="#6366f1"
            barSize={36}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
