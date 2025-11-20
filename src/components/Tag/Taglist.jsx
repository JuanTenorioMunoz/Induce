import React from "react";
import Tag from "./Tag";

const TagList = ({ tags = [] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Tag key={index} name={tag} />
      ))}
    </div>
  );
};

export default TagList;
