import { Link } from "react-router-dom";
import DailyCalendar from "../DailyCalendar/DailyCalendar";
import StreakHeatmap from "../StreakHeatmap/StreakHeatmap";

const HabitCard = ({ habit, markComplete }) => (
  <div className="md:h-[90vh] flex flex-col bg-base-100 rounded-2xl shadow-xl border p-5 ">
    <div className="h-40 w-full overflow-hidden rounded-xl">
      <img
        src="https://www.lifeofpic.com/wp-content/uploads/2023/04/Good-Morning-flower-background-1024x683.jpg.webp"
        alt={habit.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* TOP: Category + Streak */}
    <div className="flex justify-between items-center mt-3">
      <span className="badge badge-outline badge-primary px-3 py-2 text-sm">
        {habit.category}
      </span>

      <span className="badge badge-success px-3 py-2 text-sm">
        {habit.stack}-day streak 🔥
      </span>
    </div>

    <div className="flex-1 overflow-y-auto space-y-3 my-2 pr-1">
      {/* Title */}
      <h2 className="text-lg font-bold">{habit.title}</h2>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {habit.description}
      </p>

      {/* Heatmap */}
      <StreakHeatmap completionHistory={habit.completionHistory} />

      {/* Daily Calendar */}
      <DailyCalendar completionHistory={habit.completionHistory} />
    </div>

    {/* BUTTON FIXED AT BOTTOM */}
    <Link
      to={`/habit-details/${habit._id}`}
      className="btn btn-success w-full text-white mt-2"
    >
      Get Mark
    </Link>
  </div>
);
export default HabitCard;
