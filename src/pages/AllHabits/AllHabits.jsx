import React, { useContext, useEffect, useState } from "react";
import HabitCard from "../../components/HabitsCard/HabitsCard";
import { getHabits, markHabitsComplete } from "../../api/api";
import { AuthContext } from "../../context/AuthContext";

const AllHabits = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const getAllHabits = async () => {
      const data = await getHabits();
      setHabits(data); //add api
      setLoading(false);
    };
    getAllHabits();
  }, []);

  //stack

  const handleMarkComplete = async (id) => {
    const res = await markHabitsComplete(id, user.accessToken); //add api
    console.log(res);

    try {
      setHabits((prev) =>
        prev.filter((prevHabit) => prevHabit._id === id)
          ? {
              ...habits,
              stack: prevHabit.stack + 1,
              completionHistory: [
                ...(prevHabit.completionHistory,
                new Date().toISOString().split("T")[0]),
              ],
            }
          : habits
      );
    } catch (error) {
      console.log(error);
    }
  };

  completionDate(); //send id

  if (loading) return <p>loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {habits.map((habit) => (
        <HabitCard
          key={habit._id}
          habit={habit}
          markComplete={handleMarkComplete}
        />
      ))}
    </div>
  );
};

export default AllHabits;
