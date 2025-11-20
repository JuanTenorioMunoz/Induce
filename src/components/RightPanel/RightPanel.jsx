import React from "react";

const RightPanel = ({ children }) => {
  return (
    <aside
      className="
        flex flex-col items-end 
        w-full max-w-[340px] 
        gap-6 
        ml-auto mt-8
      "
    >
      {children}
    </aside>
  );
};

export default RightPanel;
