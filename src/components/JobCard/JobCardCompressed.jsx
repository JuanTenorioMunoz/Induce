import React from "react";
import verified from "../../assets/verified.svg";
import saveIcon from "../../assets/save.svg";

export const JobCardCompressed = ({
  title,
  company,
  timeAgo,
}) => {
  return (
    <article
      className="
        flex items-center justify-between
        w-full max-w-[675px] bg-white 
        p-3 rounded-lg border border-[var(--color-border)] 
        shadow-sm font-primary
      "
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[var(--color-violet_blue)] text-white font-semibold">
          G
        </div>

        <div className="flex flex-col">
          <h2 className="text-sm font-medium text-[var(--color-texto-titulos_y_texto_destacado)]">
            {title}
          </h2>
          <span className="text-xs text-[var(--color-texto_secundario)]">
            {company}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="text-xs px-3 py-1 border border-[var(--color-border)] rounded-md hover:bg-gray-50 transition"
        >
          Ver más
        </button>
        <span className="text-xs text-[var(--color-texto_secundario)]">
          {timeAgo}
        </span>
      </div>
    </article>
  );
};

export default JobCardCompressed;
