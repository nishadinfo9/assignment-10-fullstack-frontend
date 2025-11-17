const DailyCalendar = ({ completionHistory, onToggleDate }) => {
  const today = new Date();
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  const dates = [...Array(daysInMonth)].map((_, i) => {
    const d = new Date(today.getFullYear(), today.getMonth(), i + 1);
    return d;
  });

  return (
    <div className="grid grid-cols-7 gap-2 p-1 bg-base-100 w-full rounded-2xl shadow-md">
      {dates.map((date, idx) => {
        const iso = date.toISOString().split("T")[0];
        const completed = completionHistory?.includes(iso);

        return (
          <div
            key={idx}
            onClick={() => onToggleDate && onToggleDate(iso)}
            className={`
              h-8 w-8 flex text-xs items-center justify-center rounded-full
              ${
                completed
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-500"
              }
              hover:scale-105 transition-all cursor-pointer
            `}
          >
            {date.getDate()}
          </div>
        );
      })}
    </div>
  );
};
export default DailyCalendar;
