import React from "react";
import clsx from "clsx";

const StreakHeatmap = ({ completionHistory, onToggleDate }) => {
  const today = new Date();
  const days = 30; // show last 30 days

  const dates = [...Array(days)]
    .map((_, i) => {
      const d = new Date();
      d.setDate(today.getDate() - i);
      return d.toISOString().split("T")[0];
    })
    .reverse();

  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(14px,1fr))] gap-1 
                w-full rounded-xl bg-base-200"
    >
      {dates.map((date, idx) => {
        const done = completionHistory?.includes(date);

        return (
          <div
            key={idx}
            onClick={() => onToggleDate && onToggleDate(date)}
            className={clsx(
              "h-4 w-4 rounded-3xl transition-all duration-200",
              done
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-300 hover:bg-gray-400",
              "cursor-pointer"
            )}
            title={date}
          ></div>
        );
      })}
    </div>
  );
};

export default StreakHeatmap;
