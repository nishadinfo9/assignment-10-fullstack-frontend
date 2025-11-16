import React from "react";
import Button from "../../utils/Button";
import Select from "../../utils/Select";
import Input from "../../utils/Input";
import { useForm } from "react-hook-form";

const AddHabits = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      //name: user.name
      //email: user.email
    },
  });

  const habitHandler = () => {};

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f172a] text-gray-200">
      <div className="w-full max-w-md bg-[#1e293b] rounded-2xl shadow-lg p-8 border border-[#334155]">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-100">
          Add New Habit
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
            label={"categories"}
            options={["Morning", "Work", "Fitness", "Evening", "Study"]}
            {...register("categories", { required: true })}
          />
          <Button type="submit" className="btn-success">
            Add Habit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddHabits;
