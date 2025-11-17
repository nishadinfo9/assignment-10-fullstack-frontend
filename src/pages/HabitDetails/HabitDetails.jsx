import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { getHabitsById, markHabitsComplete } from "../../api/api";
import Button from "../../utils/Button";
import StreakHeatmap from "../../components/StreakHeatmap/StreakHeatmap";
import DailyCalendar from "../../components/DailyCalendar/DailyCalendar";
import Loader from "../../utils/Loader";

const HabitDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHabit = async () => {
      const data = await getHabitsById(id, user.accessToken);
      setHabit(data);
      setLoading(false);
    };
    loadHabit();
  }, [id, user?.accessToken]);

  const handleMarkComplete = async () => {
    if (!habit) return;
    const updatedHabit = await markHabitsComplete(id, user.accessToken);
    setHabit(updatedHabit);
  };

  if (loading) return <Loader />;
  if (!habit)
    return <p className="text-center mt-10 text-red-500">Habit not found</p>;

  return (
    <div className="min-h-screen p-5 bg-gray-900 text-gray-100 flex flex-col items-center gap-5">
      <div className="w-full max-w-xl bg-gray-800 shadow-lg rounded-2xl p-5 flex flex-col gap-4">
        {habit.image && (
          <div className="h-40 w-full rounded-xl overflow-hidden">
            <img
              src={habit.image}
              alt={habit.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="badge badge-outline badge-primary px-3 py-1">
            {habit.category}
          </span>
          <span className="badge badge-success px-3 py-1">
            {habit.stack}-day streak 🔥
          </span>
        </div>

        <h2 className="text-xl font-bold">{habit.title}</h2>
        <p className="text-gray-300">{habit.description}</p>

        <StreakHeatmap completionHistory={habit.completionHistory} />
        <DailyCalendar completionHistory={habit.completionHistory} />

        <Button
          onClick={handleMarkComplete}
          className="btn-success w-full mt-2"
        >
          Mark Complete
        </Button>
      </div>
    </div>
  );
};

export default HabitDetails;
