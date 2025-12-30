import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const AttendanceHeatmap = ({ data }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
      <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Daily Attendance
      </h3>

      <CalendarHeatmap
        startDate={new Date("2025-01-01")}
        endDate={new Date()}
        values={data}
        classForValue={(value) => {
          if (!value) return "color-empty";
          if (value.count === 0) return "color-scale-1";
          return "color-scale-4";
        }}
        tooltipDataAttrs={(value) => {
          if (!value) return null;
          return {
            "data-tip": `${value.date}: ${
              value.count ? "Present" : "Absent"
            }`,
          };
        }}
      />
    </div>
  );
};

export default AttendanceHeatmap;
