import React, { useState } from "react";
import saveIcon from "../../assets/save.svg";
import verified from "../../assets/verified.svg";
import TagList from "../Tag/Taglist";
import ApplicationModal from "../ApplicationModal/ApplicationModal";

const JobDetailPanel = ({ job, onClose }) => {
  const [showBanner, setShowBanner] = useState(true);

  // ← ESTADO PARA EL MODAL (AÑADIDO)
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  if (!job) return null;

  return (
    <div
      className="
        w-full
        min-w-[300px]
        h-screen
        bg-[var(--color-alice_blue)]
        font-primary
        flex flex-col
        pt-8
        pr-[2vw]
        pl-[1vw]
      "
    >

      {/* ← MODAL DE POSTULACIÓN */}
      <ApplicationModal 
        isOpen={isApplicationOpen} 
        onClose={() => setIsApplicationOpen(false)} 
      />

      {/* HEADER */}
      <div className="flex items-start justify-between mb-6 w-full">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-[var(--color-violet_blue)] flex items-center justify-center text-white font-semibold">
            {job.company?.charAt(0) || "?"}
          </div>

          <div>
            <h2 className="font-outfit text-[1rem] text-[var(--color-texto-titulos_y_texto_destacado)] leading-tight">
              {job.title}
            </h2>
            <p className="text-xs text-[var(--color-texto_secundario)]">
              {job.location} · {job.modalidad}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-[var(--color-violet_blue_200)]"
        >
          ✕
        </button>
      </div>

      {/* AI BANNER */}
      {showBanner && (
        <div className="w-full bg-[var(--color-white)] rounded-lg p-3 mb-4 shadow-[var(--shadow-sm)]">
          <div className="flex items-start gap-2">
            <img src={verified} className="w-4 mt-0.5" />
            <p className="text-xs text-[var(--color-texto_principal)] leading-snug">
              Te destacamos los detalles de la vacante que coinciden con tu
              perfil.{" "}
              <button className="underline text-[var(--color-violet_blue)]">
                Actualizar perfil
              </button>
            </p>
          </div>

          <button
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-gray-200 mt-2 ml-auto text-xs"
            onClick={() => setShowBanner(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* SCROLL AREA */}
      <div
        className="overflow-y-auto pr-2 pb-10 space-y-6"
        style={{ height: "calc(100vh - 240px)" }}
      >

        {/* SKILLS */}
        {job.skills && job.skills.length > 0 && (
          <TagList tags={job.skills} />
        )}

        {/* Botones finales */}
        <div className="flex mt-4">

          {/* ← CAMBIADO PARA ABRIR EL MODAL */}
          <button
            onClick={() => setIsApplicationOpen(true)}
            className="w-100 py-0 mr-5 px-0 bg-[var(--color-chartreuse)] rounded-lg font-semibold text-sm text-[var(--color-violet_blue)] hover:brightness-95"
          >
            Postularme
          </button>

          <button
            onClick={() => alert("Guardado")}
            className="mt-0 w-full py-1 rounded-lg text-sm font-semibold border border-[var(--color-texto_secundario)] hover:bg-gray-100"
          >
            Guardar
          </button>
        </div>

        {/* Fecha límite */}
        <div>
          <h3 className="font-semibold text-[0.9rem] mb-1">Fecha límite</h3>
          <p className="text-xs text-[var(--color-texto_secundario)]">
            {job.end_date?.slice(0, 10) || "Cierre próximamente"}
          </p>
        </div>

        {/* Ubicación y modalidad */}
        <div>
          <h3 className="font-semibold text-[0.9rem] mb-1">Ubicación</h3>
          <ul className="text-xs text-[var(--color-texto_principal)] space-y-1">
            <li>Ubicación: {job.location}</li>
            <li>Modalidad: {job.modalidad}</li>
            <li>Contrato: {job.contract_type}</li>
          </ul>
        </div>

        {/* Descripción */}
        <div>
          <h3 className="font-semibold text-[0.9rem] mb-1">
            Acerca de la vacante
          </h3>
          <p className="text-xs leading-relaxed text-[var(--color-texto_principal)]">
            {job.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPanel;