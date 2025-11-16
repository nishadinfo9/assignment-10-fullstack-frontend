import React from "react";

const Button = ({
  type = "button",
  children,
  onClick,
  color = "btn-primary",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 text-black btn rounded-sm font-medium border transition-all duration-200${color}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
