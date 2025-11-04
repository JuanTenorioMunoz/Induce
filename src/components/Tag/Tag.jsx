import React from "react";

const Tag = ({ name }) => {
  return (
    <span className="bg-lime-300 text-violet-900 font-[Mulish] font-semibold text-sm px-3 py-1 rounded-md shadow-sm">
      {name}
    </span>
  );
};

export default Tag;
