import React from "react";
import { Link } from "react-router-dom";

const HabitsTable = ({ habits, deleteHandler }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>User</th>
            <th>Habit</th>
            <th>Category</th>
            <th>Streak</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        {habits &&
          habits.map((habit) => (
            <tbody key={habit._id}>
              <tr className="hover ">
                {/* Checkbox */}
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>

                {/* USER INFO */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={habit?.image || "/images/profile.jpg"}
                          alt={habit.author_name}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="font-bold">{habit.author_name}</div>
                      <div className="text-sm opacity-50">
                        {habit.author_email}
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <span className="font-medium text-xs">{habit.title}</span>
                </td>

                <td>
                  <span className="badge badge-primary">{habit.category}</span>
                </td>

                <td>
                  <span className="badge badge-success">
                    {habit.stack}-day 🔥
                  </span>
                </td>

                <td>
                  <Link
                    to={`/edit-habits/${habit._id}`}
                    className="btn btn-success btn-xs"
                  >
                    Edit
                  </Link>
                </td>

                <td>
                  <button
                    onClick={() => deleteHandler(habit._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default HabitsTable;
