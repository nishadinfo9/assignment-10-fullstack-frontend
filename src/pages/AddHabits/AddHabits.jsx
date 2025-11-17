import React, { useContext } from "react";
import Button from "../../utils/Button";
import Select from "../../utils/Select";
import Input from "../../utils/Input";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { createHabits, updateHabits } from "../../api/api";

const AddHabits = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const habitHandler = async (data) => {
    if (!data) return;
    if (!id) {
      const newHabits = {
        title: data.title,
        description: data.description,
        author_name: user.displayName,
        auth_email: user.email,
        category: data.category,
        // more
      };

      await createHabits(newHabits, user.accessToken);
      reset();
    } else {
      const updateNewHabits = {
        title: data.title,
        description: data.description,
        category: data.category,
      };
      await updateHabits(id, updateNewHabits, user.accessToken);
      reset();
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f172a] text-gray-200">
      <div className="w-full max-w-md bg-[#1e293b] rounded-2xl shadow-lg p-8 border border-[#334155]">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-100">
          {isEdit ? "Update Habit" : "Add New Habit"}
        </h2>

        <form onSubmit={handleSubmit(habitHandler)} className="space-y-5">
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
          {isEdit && (
            <>
              <Input
                placeholder="Enter habit title"
                type="text"
                label={"Title"}
                {...register("title", { required: true })}
              />

              <Select
                label={"category"}
                options={["Morning", "Work", "Fitness", "Evening", "Study"]}
                {...register("category", { required: true })}
              />
            </>
          )}
          <Button type="submit" className="btn-success">
            {isEdit ? "Update Habit" : "Add Habit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddHabits;
