import React from "react";

const HabitsFilter = ({ onClick }) => {
  const item = [
    { id: 1, name: "Morning" },
    { id: 2, name: "Work" },
    { id: 3, name: "Fitness" },
    { id: 4, name: "Evening" },
    { id: 5, name: "Study" },
  ];

  return (
    <div className="flex items-center justify-center gap-10 mt-10">
      {item.map((filterItem) => (
        <button
          className="btn btn-primary"
          key={filterItem.id}
          onClick={(e) => onClick(e.target.innerText)}
        >
          {filterItem.name}
        </button>
      ))}
    </div>
  );
};

export default HabitsFilter;
