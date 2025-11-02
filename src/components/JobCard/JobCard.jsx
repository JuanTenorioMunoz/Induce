import React, { useState } from "react";
import ChatOption from "../ChatAI/ChatOption";

export const JobCard = () => {
  const [recommended] = useState(true);
  const [match] = useState("92%");
  const [title] = useState("Diseñador de Interfaces (UI Designer)");
  const [company] = useState("Digital Studio");
  const [level] = useState("Senior");
  const [salary] = useState("Est. $8,500");
  const [description] = useState(
    "Buscamos un(a) Gerente de operaciones con visión estratégica y capacidad de liderazgo para coordinar procesos, equipos y recursos dentro de la orga..."
  );
  const [tags] = useState([
    "Contrato Indefinido",
    "Híbrido",
    "Bogotá",
    "Diseño UI",
    "Prototipo",
  ]);
  const [timeAgo] = useState("Hace 2 horas");

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
        <div className="text-sm font-medium text-[var(--color-success)]">
          {match} Match
        </div>
      </header>

      <section className="flex items-start gap-3 mb-3">
        <div className="flex items-center justify-center w-10 h-10 bg-[var(--color-violet_blue)] text-[var(--color-white)] rounded">
          G
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start">
            <h2 className="font-outfit text-[var(--color-texto-titulos_y_texto_destacado)] text-base">
              {title}
            </h2>
            <button
              aria-label="Guardar trabajo"
              className="w-8 h-8 border rounded-md border-[var(--color-violet_blue_light)] flex items-center justify-center"
            >
              <div className="w-4 h-4 bg-gray-300" />
            </button>
          </div>

          <div className="flex items-center gap-1 text-sm text-[var(--color-texto_secundario)]">
            <span>{company}</span>
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
          </div>

          <div className="text-sm text-[var(--color-texto_secundario)]">
            {level} · {salary}
          </div>
        </div>
      </section>

      <p className="text-sm text-[var(--color-texto_principal)] mb-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <ChatOption
            key={index}
            label={tag}
            onClick={() => console.log(`Clicked tag: ${tag}`)}
          />
        ))}
      </div>

      <footer className="text-xs text-[var(--color-texto_secundario)] text-right">
        <time dateTime="2024-01-01T10:00:00">{timeAgo}</time>
      </footer>
    </article>
  );
};

export default JobCard;