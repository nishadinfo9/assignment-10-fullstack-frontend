import React, { useContext, useEffect } from "react";
import Button from "../../utils/Button";
import Select from "../../utils/Select";
import Input from "../../utils/Input";
import { useForm } from "react-hook-form";
import { data, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { createHabits, getHabitsById, updateHabits } from "../../api/api";

const AddHabits = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      email: user?.email || "",
    },
  });

  //add default value
  useEffect(() => {
    if (!id) return;

    const loadHabit = async () => {
      const habit = await getHabitsById(id, user.accessToken);
      setValue("name", habit.author_name);
      setValue("email", habit.author_email);
      setValue("title", habit.title);
      setValue("description", habit.description);
      setValue("category", habit.category);
    };

    loadHabit();
  }, [id, setValue, user?.accessToken]);

  const habitHandler = async (data) => {
    if (!data) return;
    if (!id) {
      const newHabits = {
        projectId: user?.uid,
        title: data?.title,
        description: data?.description,
        author_name: user?.displayName,
        author_email: user?.email,
        category: data?.category,
        image: data?.image || "",
        stack: 0,
        createdAt: new Date(),
      };

      await createHabits(newHabits, user.accessToken);
      reset();
    } else {
      const updateNewHabits = {
        projectId: user?.uid,
        title: data.title,
        description: data.description,
        category: data.category,
        author_email: data.email,
      };
      await updateHabits(id, updateNewHabits, user?.accessToken);
      reset();
    }
    navigate("/all-habits");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f172a] text-gray-200">
      <div className="md:w-full w-sm max-w-md bg-[#1e293b] rounded-2xl shadow-lg p-8 border border-[#334155]">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-100">
          {isEdit ? "Update Habit" : "Add New Habit"}
        </h2>

        <form onSubmit={handleSubmit(habitHandler)} className="space-y-5">
          {isEdit && (
            <>
              <Input
                placeholder="Enter habit Name"
                type="name"
                label={"Name"}
                {...register("name", { required: true })}
                readOnly
              />
              <Input
                placeholder="Enter habit Email"
                type="email"
                label={"Email"}
                {...register("email", { required: true })}
                readOnly
              />
            </>
          )}
          <Input
            placeholder="Enter habit title"
            type="text"
            label={"Title"}
            {...register("title", { required: true })}
          />
          <Input
            label={"Description"}
            placeholder="Describe your habit..."
            {...register("description", {
              required: true,
            })}
          />
          <Select
            label={"category"}
            options={["Morning", "Work", "Fitness", "Evening", "Study"]}
            {...register("category", { required: true })}
          />

          {/* update fields  */}

          <Button type="submit" className="btn-success w-full">
            {isEdit ? "Update Habit" : "Add Habit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddHabits;
