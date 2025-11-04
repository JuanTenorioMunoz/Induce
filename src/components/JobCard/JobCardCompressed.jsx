import React from "react";
import verified from "../../assets/verified.svg";
import saveIcon from "../../assets/save.svg";

export const JobCardCompressed = ({ title, company, timeAgo }) => {
  return (
    <article
      className="
        flex items-center justify-between
        w-full max-w-[675px] p-4 
        bg-[var(--color-alice_blue)] rounded-lg font-primary
        shadow-[var(--shadow-sm)]
      "
    >
      {/* Left section: logo + job info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-11 h-11 bg-[var(--color-violet_blue)] text-[var(--color-white)] rounded">
          G
        </div>

        <div className="flex flex-col">
          <h2 className="text-base font-medium text-[var(--color-texto-titulos_y_texto_destacado)]">
            {title}
          </h2>
          <div className="flex items-center gap-1">
            <span className="text-sm text-[var(--color-texto_secundario)]">
              {company}
            </span>
            <img src={verified} alt="Verificado" className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Right section: actions + time */}
      <div className="flex items-center gap-3">
        <button
          aria-label="Guardar trabajo"
          className="w-8 h-8 rounded-md flex items-center justify-center border border-transparent hover:bg-gray-100 transition"
        >
          <img src={saveIcon} alt="Guardar" className="w-4 h-4" />
        </button>

        <button
          className="text-sm px-4 py-1.5 rounded-md border border-transparent hover:bg-gray-100 transition"
        >
          Ver más
        </button>

        <span className="text-sm text-[var(--color-texto_secundario)]">
          {timeAgo}
        </span>
      </div>
    </article>
  );
};

export default JobCardCompressed;
