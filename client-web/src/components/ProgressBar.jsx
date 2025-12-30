const ProgressBar = ({ value }) => {
  const isLow = value < 75;

  return (
    <div className="w-full h-2 rounded bg-gray-200 overflow-hidden">
      <div
        className={`h-full transition-all ${
          isLow ? "bg-red-500" : "bg-green-500"
        }`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
