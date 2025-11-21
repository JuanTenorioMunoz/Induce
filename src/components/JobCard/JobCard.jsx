import React from "react";
import verified from "../../assets/verified.svg";
import saveIcon from "../../assets/save.svg";
import TagList from "../Tag/Taglist";

const JobCard = ({
  onClick = () => {},
  recommended,
  match,
  title,
  company,
  level,
  salary,
  description,
  tags,
  timeAgo,
}) => {
  // Format salary with commas and $
  const formattedSalary =
    salary && !isNaN(salary)
      ? `$${Number(salary).toLocaleString()}`
      : salary;

  // Get first letter from title
  const initial = title ? title.charAt(0).toUpperCase() : "G";

  return (
    <article
      onClick={(e) => {
        // evitar que clics en botones internos propaguen (ej. guardar)
        const target = e.target;
        if (target.closest("button")) return;
        onClick();
      }}
      className="cursor-pointer flex flex-col w-full max-w-[100%] p-4 
        bg-[var(--color-alice_blue)] rounded-lg font-primary
        shadow-[var(--shadow-sm)] hover:shadow-md transition"
    >
      <header className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {recommended && (
            <div className="flex items-center gap-1">
              <img src={verified} alt="Recomendado por IA" className="w-4 h-4" />
              <span className="text-sm text-[var(--color-success)]">
                Recomendado por IA
              </span>
            </div>
          )}
        </div>
      </header>

      <section className="flex items-start gap-3 mb-3">
        <div className="flex items-center justify-center w-10 h-10 bg-[var(--color-violet_blue)] text-[var(--color-white)] rounded">
          {company ? company.charAt(0) : "G"}
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start">
            {title && (
              <h2 className="font-outfit text-[var(--color-texto-titulos_y_texto_destacado)] text-base">
                {title}
              </h2>
            )}
            <button
              aria-label="Guardar trabajo"
              className="w-8 h-8 rounded-md flex items-center justify-center border border-transparent hover:bg-gray-100 transition"
            >
              <img src={saveIcon} alt="Guardar" className="w-4 h-4" />
            </button>
          </div>

          {company && (
            <div className="flex items-center gap-1 text-sm text-[var(--color-texto_secundario)]">
              <span>{company}</span>
              <img src={verified} alt="Verificado" className="w-4 h-4" />
            </div>
          )}

          {(level || salary) && (
            <div className="text-sm text-[var(--color-texto_secundario)]">
              {level} {level && salary && "·"} {formattedSalary}
            </div>
          )}
        </div>
      </section>

      {description && (
        <p className="text-sm text-[var(--color-texto_principal)] mb-3">
          {description}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="mb-3">
          <TagList tags={tags} />
        
        </div>
      )}

      {timeAgo && (
        <footer className="text-xs text-[var(--color-texto_secundario)] text-right">
          <time dateTime="2024-01-01T10:00:00">{timeAgo}</time>
        </footer>
      )}
    </article>
  );
};

export default JobCard;
