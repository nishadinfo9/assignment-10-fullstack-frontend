import React from "react";

const Collapse = ({ question, answer }) => {
  return (
    <div
      tabIndex={0}
      className="collapse md:w-2xl w-sm collapse-plus bg-base-100 border-base-300 border"
    >
      <div className="collapse-title text-lg font-semibold">{question}</div>
      <div className="collapse-content text-md">{answer}</div>
    </div>
  );
};

export default Collapse;
