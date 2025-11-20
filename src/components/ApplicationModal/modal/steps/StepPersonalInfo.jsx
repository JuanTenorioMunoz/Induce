import UserMiniCard from "../UserMiniCard";

/**
 * StepPersonalInfo: UI faithful to Figma for step 1
 * static inputs (no validation). Sizes approximated with rems & Tailwind.
 */
const StepPersonalInfo = () => {
  return (
    <section className="w-full">
      <div className="max-w-[40.25rem]">
        <h3 className="text-[1.4375rem] font-outfit font-semibold text-[var(--color-texto-titulos-y-texto-destacado)] mb-6">
          Información personal
        </h3>

        {/* user card */}
        <UserMiniCard
          name="Ana María Muñoz"
          role="Diseñadora UX/UI"
          location="Cali, Valle del Cauca, Colombia"
          avatar="https://placehold.co/80x80"
        />

        {/* Email */}
        <div className="mt-8">
          <label className="block text-[0.875rem] font-medium text-[var(--color-texto-principal)] mb-2">Email</label>

          <div
            className="flex items-center justify-between rounded-[8px] bg-white shadow-[0_1px_2px_rgba(10,12,18,0.05)] p-3"
            style={{
              outline: "1px solid var(--color-violet_blue_400)",
              outlineOffset: "-1px"
            }}
          >
            <div className="flex items-center gap-3">
              {/* mail icon box */}
              <div className="w-[1.25rem] h-[1.25rem] flex items-center justify-center">
                <svg width="18" height="14" viewBox="0 0 20 14" fill="none">
                  <rect x="1.67" y="3.33" width="16.67" height="7.33" stroke="#757981" strokeWidth="1.67" rx="1" />
                </svg>
              </div>

              <input
                className="flex-1 text-[1rem] placeholder:text-[var(--color-texto-secundario)] focus:outline-none bg-transparent"
                defaultValue="ana.muñoz@gmail.com"
                aria-label="email"
              />
            </div>

            <div className="w-4 h-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1.33" y="1.33" width="13.33" height="13.33" stroke="#848AE2" strokeWidth="1.33" rx="2" />
              </svg>
            </div>
          </div>

          <p className="text-[0.6875rem] text-[var(--color-texto-secundario)] mt-2">
            Debe ser un correo válido (ej. name@example.com)
          </p>
        </div>

        {/* Phone */}
        <div className="mt-8">
          <label className="block text-[0.875rem] font-medium text-[var(--color-texto-principal)] mb-2">Numero de telefono</label>

          <div
            className="rounded-[8px] bg-white shadow-[0_1px_2px_rgba(10,12,18,0.05)] p-0"
            style={{
              outline: "1px solid var(--color-violet_blue_400)",
              outlineOffset: "-1px"
            }}
          >
            <div className="flex items-center">
              <div className="flex items-center gap-3 px-3 py-2 border-r border-transparent">
                <button className="flex items-center gap-2 text-[1rem]">
                  <span className="text-[var(--color-texto-principal)]">COL</span>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <rect x="1.67" y="1.67" width="16.67" height="8.67" stroke="#757981" strokeWidth="1.67" rx="1" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 px-3 py-2">
                <input
                  className="w-full text-[1rem] placeholder:text-[var(--color-texto-secundario)] focus:outline-none bg-transparent"
                  defaultValue="+57 (301) 207 3849"
                  aria-label="telefono"
                />
              </div>

              <div className="px-3">
                <div style={{ width: 16, height: 16 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1.33" y="1.33" width="13.33" height="13.33" stroke="#848AE2" strokeWidth="1.33" rx="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[0.6875rem] text-[var(--color-texto-secundario)] mt-2">Debe ser un numero de telefono valido</p>
        </div>

        <p className="text-[0.875rem] text-[var(--color-texto-secundario)] mt-6">
          Enviar esta solicitud no afectará a tu perfil de INDUCE.
        </p>
      </div>
    </section>
  );
};

export default StepPersonalInfo;