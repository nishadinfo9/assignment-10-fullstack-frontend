import React from "react";

const Card = ({}) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-xl p-5 flex flex-col justify-between hover:bg-gray-700 transition-colors duration-300">
      <div>
        <Link to={`/habits/${habit._id}`}>
          <h2 className="text-xl font-semibold text-white">{habit.title}</h2>
        </Link>
        <p className="text-gray-300 mt-1">{habit.description}</p>
        <div className="mt-3">
          {habit.categories.map((cat, index) => (
            <span
              key={index}
              className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded-full mr-2"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <span className="text-gray-400 text-xs">
          Last Done:{" "}
          {/* {habit.completionHistory.length > 0
            ? habit.completionHistory.slice(-1)[0]
            : "Not yet"} */}
        </span>

        <button
          //onClick={() => handleMarkComplete(habit._id)}
          className="cursor-pointer bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded transition-colors"
        >
          Mark Complete
        </button>
      </div>
    </div>
  );
};

export default Card;
