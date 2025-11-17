import React, { useContext, useEffect, useState } from "react";
import HabitCard from "../../components/HabitsCard/HabitsCard";
import { getHabits, markHabitsComplete } from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../../utils/Loader";
import SearchInput from "../../components/Search/SearchInput";
import HabitsFilter from "../../components/Search/HabitsFilter";

const AllHabits = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState([]);
  const [originalValue, setOriginalValue] = useState([]);

  useEffect(() => {
    const getAllHabits = async () => {
      const data = await getHabits();
      setHabits(data);
      setOriginalValue(data);
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
    prev.map((habit) => {
      if (habit._id === id) {
        const today = new Date().toISOString().split("T")[0];

        return {
          ...habit,
          stack: habit.stack + 1,
          completionHistory: [
            ...habit.completionHistory,
            today,
          ],
        };
      }
      return habit;
    })
  );

  
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <Loader />;

  //search
  const habitsSearchFiltering = (data) => {
    if (!data) return setHabits(originalValue);
    const searchData = originalValue.filter((prev) =>
      prev.title.toLowerCase()?.includes(data.toLowerCase())
    );
    setHabits(searchData);
  };

  //button
  const HabitsFilterHandler = (data) => {
    if (!data) return setHabits(originalValue);
    const filterHabits = originalValue.filter((prev) => prev.category === data);
    setHabits(filterHabits);
  };

  return (
    <div>
      <SearchInput onChange={habitsSearchFiltering} />
      <HabitsFilter onClick={HabitsFilterHandler} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-10 p-6">
        {habits.map((habit) => (
          <HabitCard
            key={habit._id}
            habit={habit}
            markComplete={handleMarkComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default AllHabits;
