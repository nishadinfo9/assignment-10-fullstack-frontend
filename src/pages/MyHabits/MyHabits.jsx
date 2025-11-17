import React, { useContext, useEffect, useState } from "react";
import HabitsTable from "../../components/HabitsTable/HabitsTable";
import { AuthContext } from "../../context/AuthContext";
import { deleteHabits, getMyHabits } from "../../api/api";

const MyHabits = () => {
  const [habits, setHabits] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getMyHabits(user.email, user.accessToken).then((data) => setHabits(data));
  }, [user.accessToken]);

  const editHandler = async (id) => {};

  const deleteHandler = async (id) => {
    if (!id) return;
    await deleteHabits(id, user.accessToken);
    setHabits((prev) => prev.filter((val) => val._id !== id));
  };

  return (
    <div>
      <HabitsTable
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        habits={habits}
      />
    </div>
  );
};

export default MyHabits;
