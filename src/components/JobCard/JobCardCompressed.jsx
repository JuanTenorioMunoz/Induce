import React from "react";
import verified from "../../assets/verified.svg";
import saveIcon from "../../assets/save.svg";

export const JobCardCompressed = ({ 
  title, 
  company, 
  timeAgo,
  onClick = () => {}
}) => {

  // Inicial dinámica
  const initial = company 
    ? company.charAt(0).toUpperCase() 
    : title 
      ? title.charAt(0).toUpperCase()
      : "G";

  return (
    <article
      onClick={(e) => {
        if (e.target.closest("button")) return; 
        onClick();
      }}
      className="
        flex items-center justify-between
        w-full max-w-[100%] p-4 
        bg-[var(--color-alice_blue)] rounded-lg font-primary
        shadow-[var(--shadow-sm)]
        cursor-pointer
      "
    >
      {/* Left section: icon + job info */}
      <div className="flex items-center gap-4">

        {/* Cuadrado con inicial */}
        <div
          className="
            flex items-center justify-center 
            w-10 h-10 rounded
            text-white text-sm font-semibold
          "
          style={{ backgroundColor: "var(--color-violet-blue)" }}
        >
          {initial}
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

      {/* Right section */}
      <div className="flex items-center gap-3">
        {/* Guardar */}
        <button
          aria-label="Guardar trabajo"
          className="
            w-8 h-8 rounded-md flex items-center justify-center
            hover:bg-gray-100 transition
          "
        >
          <img src={saveIcon} alt="Guardar" className="w-4 h-4" />
        </button>

        {/* Ver más */}
        <button
          className="
            text-sm px-4 py-1.5 rounded-md 
            border border-[var(--color-violet-blue)]
            text-[var(--color-violet-blue)]
            hover:bg-gray-100 transition
          "
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