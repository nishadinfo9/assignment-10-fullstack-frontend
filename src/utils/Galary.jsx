import React from "react";

const Galary = ({ src = "" }) => {
  return (
    <div className="hover-3d ">
      {/* content */}
      <figure className="md:w-80 w-sm rounded-2xl">
        {src && <img src={src} alt="Tailwind CSS 3D hover" />}
      </figure>
      {/* 8 empty divs needed for the 3D effect */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Galary;
