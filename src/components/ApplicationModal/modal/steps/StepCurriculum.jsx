import { useState } from "react";

const StepCurriculum = () => {
  const [selectedFile, setSelectedFile] = useState("Hoja de vida.pdf");

  return (
    <div className="pt-4 pb-12">
      {/* Título */}
      <h2 className="text-[1.625rem] font-semibold text-[var(--color-texto-principal)] mb-8">
        Curriculum
      </h2>

      {/* Selector existente */}
      <div className="space-y-2">
        <label className="font-medium text-[var(--color-texto-principal)] text-sm">
          Seleccionar hoja de vida
        </label>

        <div className="relative">
          {/* ícono izquierda */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-violet_blue_400)]">
            📄
          </span>
          <input
            type="text"
            value={selectedFile}
            readOnly
            className="w-full pl-10 pr-4 py-3 rounded-xl border
                       border-[var(--color-violet_blue_200)]
                       text-[var(--color-texto-principal)]
                       text-sm placeholder:text-[var(--color-texto-secundario)]
                       outline-none"
          />
        </div>

        <span className="text-[0.625rem] text-[var(--color-texto-secundario)]">
          Debe ser un archivo válido
        </span>
      </div>

      {/* Divider */}
      <div className="text-center py-6 text-sm text-[var(--color-texto-secundario)]">
        O cargar nueva hoja de vida
      </div>

      {/* Dropzone */}
      <div
        className="border-2 border-dashed rounded-2xl px-8 py-16
                   border-[var(--color-violet_blue_200)]
                   text-center"
      >
        {/* ícono */}
        <div className="text-[var(--color-violet_blue_400)] text-4xl">
          ☁️
        </div>

        {/* título */}
        <p className="mt-4 font-semibold text-lg text-[var(--color-texto-principal)]">
          Elige un archivo o arrástralo aquí
        </p>

        {/* subtítulo */}
        <p className="text-sm text-[var(--color-texto-secundario)] mt-2">
          Formatos PDF, DOC, DOCX hasta 5 MB
        </p>

        {/* botón */}
        <button
          className="mt-8 px-8 py-2 border rounded-lg
                     border-[var(--color-violet_blue_300)]
                     text-[var(--color-violet_blue_400)] text-sm
                     font-medium hover:bg-[var(--color-violet_blue_100)]
                     transition"
        >
          Cargar Archivo
        </button>
      </div>
    </div>
  );
};

export default StepCurriculum;
