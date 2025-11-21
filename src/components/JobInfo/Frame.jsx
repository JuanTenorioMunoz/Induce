import React from "react";
import { X } from "lucide-react";
import TagList from "../Tag/Taglist";
import saveIcon from "../../assets/save.svg";

const Frame = ({
  company,
  logoLetter = "G",
  position,
  location,
  timeCreated,
  clicks,
  skills = [],
  onClose = () => {},
  onApply = () => {},
  onSave = () => {},
}) => {
  return (
    <div className="flex flex-col items-end w-full max-w-[340px] gap-6 mt-8 ml-auto mr-8 font-primary">
      <div className="w-full bg-[var(--color-background-white)] rounded-[10px] shadow-[var(--shadow-sm)] p-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded bg-[var(--color-violet_blue)] text-[var(--color-white)] font-semibold">
              {logoLetter}
            </div>
            <div>
              <h3 className="font-outfit text-[var(--color-texto-titulos_y_texto_destacado)] text-lg">
                {position}
              </h3>
              <div className="text-sm text-[var(--color-texto_secundario)]">
                {company} · {location} · {timeCreated}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar panel"
            className="text-[var(--color-texto_secundario)] hover:text-black"
          >
            <X size={18} />
          </button>
        </div>

        {/* IA banner */}
        <div className="mt-4 p-3 rounded-lg bg-[var(--color-alice_blue)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5">
              {/* puedes poner icono verificado */}
            </div>
            <div className="text-sm text-[var(--color-texto_principal)]">
              Te destacamos los detalles de la vacante que coinciden con tu perfil.
              <button className="ml-2 underline text-[var(--color-violet_blue)]">
                Actualizar perfil
              </button>
            </div>
          </div>

          <button
            onClick={() => {}}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200"
          >
            ✕
          </button>
        </div>

        {/* Tags & CTA */}
        <div className="mt-4 flex items-center gap-3 flex-wrap">
          {skills && skills.length > 0 ? (
            <TagList tags={skills} />
          ) : null}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={onApply}
            className="px-4 py-2 rounded-md bg-[var(--color-chartreuse)] text-black font-semibold"
          >
            Postularme a la vacante
          </button>

          <button
            onClick={onSave}
            className="px-3 py-2 rounded-md border border-[var(--color-violet_blue_100)] text-[var(--color-texto_principal)] flex items-center gap-2"
          >
            <img src={saveIcon} className="w-4" alt="Guardar" />
            Guardar
          </button>
        </div>

        {/* Detail scroll area */}
        <div className="mt-6 max-h-[70vh] overflow-y-auto pr-2 space-y-6">
          <div>
            <h4 className="font-semibold text-[var(--color-texto-principal)]">Fecha límite de postulación</h4>
            <p className="text-sm text-[var(--color-texto_secundario)]">
              Cierre de convocatoria: 30 de octubre de 2025
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Ubicación y modalidad</h4>
            <ul className="list-disc list-inside text-sm text-[var(--color-texto_principal)] space-y-1">
              <li>Ubicación: {location || "Bogotá, Colombia"}</li>
              <li>Modalidad: Híbrido (3 días presenciales / 2 remotos)</li>
              <li>Tipo de contrato: Indefinido</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Acerca de la vacante</h4>
            <p className="text-sm text-[var(--color-texto_principal)] leading-relaxed">
              Buscamos un(a) Gerente de operaciones con visión estratégica y capacidad de liderazgo para coordinar procesos, equipos y recursos dentro de la organización.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Requisitos</h4>
            <ul className="list-disc list-inside text-sm text-[var(--color-texto_principal)] space-y-1">
              <li>Título universitario en Administración o afines.</li>
              <li>Experiencia mínima de 5 años en cargos de liderazgo.</li>
              <li>Nivel intermedio o avanzado de inglés.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Lo que harás</h4>
            <ul className="list-disc list-inside text-sm text-[var(--color-texto_principal)] space-y-1">
              <li>Supervisar la ejecución de proyectos y procesos clave del área.</li>
              <li>Analizar indicadores de desempeño y proponer mejoras.</li>
              <li>Coordinar equipos y distribuir responsabilidades de forma eficiente.</li>
            </ul>
          </div>

          <div className="pt-4">
            <button
              onClick={onApply}
              className="w-full px-4 py-3 rounded-md font-semibold text-sm bg-[var(--color-chartreuse)]"
            >
              Postularme a la vacante
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
