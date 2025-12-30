const StatCard = ({ title, value, subtitle }) => {
  return (
<div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm rounded-xl p-6">

      <p className="text-gray-500 dark:text-gray-400 text-sm">
{title}</p>
      <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
{value}</p>
      {subtitle && (
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      )}
    </div>
  );
};

export default StatCard;
