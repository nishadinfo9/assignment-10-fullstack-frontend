import React from "react";

const Select = ({ label, error, options = [], ...props }) => {
  return (
    <div>
      {label && (
        <label className="block text-sm mb-2 text-gray-400">{label}</label>
      )}
      <select
        defaultValue={""}
        {...props}
        className="select w-full bg-[#0f172a] border-[#334155] focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
      >
        <option value="" disabled>
          Select {label}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
