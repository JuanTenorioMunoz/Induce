import React from "react";

const statusColors = {
  Aceptada: "bg-green-100 text-green-700",
  "En revisión": "bg-yellow-100 text-yellow-700",
  Finalizada: "bg-gray-200 text-gray-700",
  Rechazada: "bg-red-100 text-red-700",
  Guardada: "bg-purple-100 text-purple-700",
};

const VacanciesList = ({ jobs = [] }) => {
  return (
    <div className="w-full mt-6 flex flex-col">

      {/* BÚSQUEDA + FILTRO */}
      <div className="flex items-center justify-between mb-8">
        <div className="relative w-full max-w-[520px]">
          <input
            type="text"
            placeholder="Buscar aquí..."
            className="
              w-full py-3 px-12 rounded-xl
              border border-[var(--color-violet_blue)]
              outline-none
            "
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>

        <select
          className="
            ml-6 px-5 py-3 rounded-xl
            border border-[var(--color-violet_blue)]
            outline-none
          "
        >
          <option>Todos</option>
          <option>Aceptada</option>
          <option>En revisión</option>
          <option>Finalizada</option>
          <option>Rechazada</option>
          <option>Guardada</option>
        </select>
      </div>

      {/* CABECERA */}
      <div className="grid grid-cols-5 font-semibold text-gray-900 mb-6 px-2">
        <p>Vacante</p>
        <p>Empresa</p>
        <p>Fecha</p>
        <p>Ubicación</p>
        <p className="text-right">Estado</p>
      </div>

      {/* CONTENEDOR SCROLL */}
      <div
        className="
          flex flex-col gap-6
          max-h-[calc(100vh-320px)]
          overflow-y-auto
          pr-2
        "
      >
        {jobs.map((job, index) => {
          const start =
            job.startDate ||
            job.start_date ||
            "15 de Ene, 2025";

          const end =
            job.endDate ||
            job.end_date ||
            "28 de Feb, 2025";

          const location =
            job.location ||
            job.ubication ||
            "Remoto";

          const status =
            job.status || "En revisión";

          const badgeClass =
            statusColors[status] || "bg-gray-200 text-gray-700";

          return (
            <div
              key={index}
              className="grid grid-cols-5 items-center text-gray-700 px-2"
            >
              {/* Vacante */}
              <p className="text-base">
                {job.title}
              </p>

              {/* Empresa */}
              <p className="text-gray-500">
                {job.company}
              </p>

              {/* Fechas */}
              <div className="text-sm text-gray-500">
                <p>Inicio: {start}</p>
                <p>Cierre: {end}</p>
              </div>

              {/* Ubicación */}
              <p className="text-gray-500">
                {location}
              </p>

              {/* Estado */}
              <div className="flex items-center justify-end gap-3">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-medium ${badgeClass}`}
                >
                  {status}
                </span>

                <button
                  aria-label="menu"
                  className="text-gray-400 hover:text-gray-800"
                >
                  ⋮
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VacanciesList;
