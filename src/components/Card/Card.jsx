import { Link } from "react-router-dom";
import React from "react";

const Card = ({ habit }) => {
  return (
    <div className="bg-base-100 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={
            habit.image ||
            "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={habit.title}
          className="w-full  h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title */}
        <Link to={`/habits/${habit._id}`}>
          <h2 className="text-lg text-white font-bold hover:text-primary transition">
            {habit.title}
          </h2>
        </Link>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-2">
          {habit.description}
        </p>

        {/* Category + Streak */}
        <div className="flex justify-between items-center">
          <span className="badge badge-outline badge-primary px-3 py-1 text-xs">
            {habit.category}
          </span>

          <span className="badge badge-success px-3 py-1 text-xs">
            {habit.stack}-day 🔥
          </span>
        </div>

        {/* Last Done */}
        <p className="text-xs text-gray-400 mt-1">
          Last Done:{" "}
          {habit.completionHistory.length > 0
            ? habit.completionHistory.slice(-1)[0]
            : "Not yet"}
        </p>

        {/* Button */}
        <Link
          to={`/habit-details/${habit._id}`}
          className="btn btn-success w-full text-white btn-sm mt-2"
        >
          Get Mark
        </Link>
      </div>
    </div>
  );
};

export default Card;
