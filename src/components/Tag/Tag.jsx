import React from "react";

const Tag = ({ name }) => {
  return (
    <span className="bg-[var(--color-violet_blue_100)] text-[var(--color-violet_blue_500)] font-[Mulish] font-semibold text-sm px-3 py-1 rounded-md">
      {name}
    </span>
  );
};

export default Tag;
