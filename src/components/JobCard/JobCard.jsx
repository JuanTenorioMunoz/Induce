import React from "react";
import ChatOption from './../ChatAI/ChatOption';

export const JobCard = ({
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
  return (
    <article className="flex flex-col w-full max-w-[675px] p-4 bg-[var(--color-alice_blue)] border border-[var(--color-violet_blue_light)] rounded-lg shadow-sm font-primary">
      <header className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-300 rounded-sm" />
          {recommended && (
            <span className="text-sm text-[var(--color-success)]">
              Recomendado por IA
            </span>
          )}
        </div>
        {match && (
          <div className="text-sm font-medium text-[var(--color-success)]">
            {match} Match
          </div>
        )}
      </header>

      <section className="flex items-start gap-3 mb-3">
        <div className="flex items-center justify-center w-10 h-10 bg-[var(--color-violet_blue)] text-[var(--color-white)] rounded">
          G
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
              className="w-8 h-8 border rounded-md border-[var(--color-violet_blue_light)] flex items-center justify-center"
            >
              <div className="w-4 h-4 bg-gray-300" />
            </button>
          </div>

          {company && (
            <div className="flex items-center gap-1 text-sm text-[var(--color-texto_secundario)]">
              <span>{company}</span>
              <div className="w-4 h-4 bg-gray-300 rounded-full" />
            </div>
          )}

          {(level || salary) && (
            <div className="text-sm text-[var(--color-texto_secundario)]">
              {level} {level && salary && "·"} {salary}
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
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <ChatOption
              key={index}
              label={tag}
              onClick={() => console.log(`Clicked tag: ${tag}`)}
            />
          ))}
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