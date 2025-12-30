import { useAuth } from "../hooks/useAuth";
import PageContainer from "../components/PageContainer";
import StatCard from "../components/StatCard";
import ProgressBar from "../components/ProgressBar";
import AttendanceChart from "../components/AttendanceChart";
import AttendanceTrendChart from "../components/AttendanceTrendChart";
import AttendanceHeatmap from "../components/AttendanceHeatmap";


const Dashboard = () => {
  const { user } = useAuth();
  if (!user) return null;

  const attendanceTrend = [
  { week: "W1", percentage: 78 },
  { week: "W2", percentage: 82 },
  { week: "W3", percentage: 75 },
  { week: "W4", percentage: 88 },
  { week: "W5", percentage: 90 },
];

const heatmapData = [
  { date: "2025-01-02", count: 1 },
  { date: "2025-01-03", count: 1 },
  { date: "2025-01-04", count: 0 },
  { date: "2025-01-05", count: 1 },
];


  const semester = user.attendanceHistory?.[0];
  const subjects = semester?.subjectAttendances || [];

  const totalClasses = subjects.reduce((a, b) => a + b.totalClasses, 0);
  const attendedClasses = subjects.reduce((a, b) => a + b.attendedClasses, 0);

  const overall =
    totalClasses === 0
      ? 0
      : ((attendedClasses / totalClasses) * 100).toFixed(1);

  return (
    <PageContainer title="Dashboard">
      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Overall Attendance"
          value={`${overall}%`}
          subtitle={`${attendedClasses}/${totalClasses} classes`}
        />
        <StatCard title="Semester" value={semester?.semester} />
        <StatCard title="Subjects" value={subjects.length} />
      </div>
      <AttendanceTrendChart trend={attendanceTrend} />

      <div className="mt-8">
  <AttendanceHeatmap data={heatmapData} />
</div>
  
      {/* SUBJECT BREAKDOWN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {subjects.map((sub, idx) => {
    const percent = (
      (sub.attendedClasses / sub.totalClasses) *
      100
    ).toFixed(1);

    return (
      <div
        key={idx}
        className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-sm"
      >
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {sub.subjectName}
        </h3>

        <div className="mb-3">
          <div className="w-full h-2 rounded bg-gray-200 dark:bg-slate-700 overflow-hidden">
            <div
              className={`h-full ${
                percent < 75 ? "bg-red-500" : "bg-green-500"
              }`}
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>{percent}%</span>
          <span>
            {sub.attendedClasses}/{sub.totalClasses}
          </span>
        </div>

        {percent < 75 && (
          <p className="text-red-500 text-xs mt-2">
            ⚠ Attendance below 75%
          </p>
        )}
      </div>
    );
  })}
</div>


    </PageContainer>
  );
};

export default Dashboard;
