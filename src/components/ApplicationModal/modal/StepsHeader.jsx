const StepsHeader = ({ step = 1 }) => {
  const steps = [
    { id: 1, small: "Paso 1", big: "Información Personal" },
    { id: 2, small: "Paso 2", big: "Currículum" },
    { id: 3, small: "Paso 3", big: "Información adicional" },
    { id: 4, small: "Paso 4", big: "Finalizar" },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[56rem] mx-auto px-12 py-6">
        <div className="flex items-start gap-[2.75rem] flex-nowrap">
          {steps.map((s) => {
            const isActive = s.id === step;
            const isDone = s.id < step;
            return (
              <div key={s.id} className="flex flex-col items-start min-w-[12rem]">
                <div className="flex items-center gap-4">
                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{
                      width: "1.675rem",
                      height: "1.675rem",
                      background: isDone
                        ? "var(--color-chartreuse)"
                        : isActive
                        ? "var(--color-violet_blue_300)"
                        : "var(--color-violet_blue_200)",
                      border: `1px solid ${
                        isDone
                          ? "var(--color-chartreuse)"
                          : "var(--color-violet_blue_300)"
                      }`,
                    }}
                  />

                  {s.id !== 4 && (
                    <div
                      style={{
                        height: "2px",
                        width: "6.5rem",
                        background: isDone
                          ? "var(--color-chartreuse)"
                          : "var(--color-violet_blue_200)",
                        borderRadius: "2px",
                      }}
                      aria-hidden
                    />
                  )}
                </div>

                <div className="mt-3">
                  <div className="text-[0.6875rem] text-[var(--color-texto-secundario)]">
                    {s.small}
                  </div>
                  <div className="text-[0.875rem] font-semibold text-[var(--color-texto-principal)]">
                    {s.big}
                  </div>

                  <div className="mt-2">
                    <span
                      className="inline-block px-2 py-[0.125rem] text-[0.4375rem] font-medium rounded-[8px]"
                      style={{
                        background: isDone
                          ? "var(--color-chartreuse)"
                          : isActive
                          ? "var(--color-violet_blue_300)"
                          : "var(--color-violet_blue_100)",
                        color: isDone
                          ? "black"
                          : isActive
                          ? "var(--color-violet-blue)"
                          : "var(--color-violet_blue_400)",
                      }}
                    >
                      {isDone ? "Completado" : isActive ? "En progreso" : "Pendiente"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepsHeader;