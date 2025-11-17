import React from "react";
import clsx from "clsx";

const StreakHeatmap = ({ completionHistory }) => {
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
    <div className="grid grid-cols-15 gap-1 p-3 rounded-xl bg-base-200">
      {dates.map((date, idx) => {
        const done = completionHistory.includes(date);

        return (
          <div
            key={idx}
            className={clsx(
              "w-4 h-4 rounded-sm transition-all duration-200",
              done
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-300 hover:bg-gray-400"
            )}
            title={date}
          ></div>
        );
      })}
    </div>
  );
};

export default StreakHeatmap;
