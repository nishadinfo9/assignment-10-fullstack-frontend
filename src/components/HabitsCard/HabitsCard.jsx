import DailyCalendar from "../DailyCalendar/DailyCalendar";
import StreakHeatmap from "../StreakHeatmap/StreakHeatmap";

const HabitCard = ({ habit, markComplete }) => (
  <div className="p-5 rounded-2xl bg-base-100 shadow-xl space-y-3">
    <h2 className="text-xl font-bold">{habit.title}</h2>
    <p className="text-gray-500">{habit.description}</p>

    <div className="badge badge-success p-3">{habit.stack}-day streak 🔥</div>

    <StreakHeatmap completionHistory={habit.completionHistory} />

    <DailyCalendar completionHistory={habit.completionHistory} />

    <button
      onClick={() => markComplete(habit._id)}
      className="btn btn-success w-full text-white"
    >
      Mark Complete
    </button>
  </div>
);
export default HabitCard;
