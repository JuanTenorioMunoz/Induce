
const StepAdditionalInfo = ({ onNext }) => {
  return (
    <div className="w-full max-w-[48rem] mx-auto font-primary text-[var(--color-texto-principal)]">
      {/* título */}
      <h2 className="text-[1.25rem] font-semibold mb-8">
        Información adicional
      </h2>

      {/* Campo 1 */}
      <div className="mb-8">
        <label
          htmlFor="goodCandidate"
          className="block text-[0.875rem] font-medium text-[var(--color-texto-principal)] mb-2"
        >
          ¿Por qué crees que eres un buen candidato para este puesto?
        </label>
        <textarea
          id="goodCandidate"
          name="goodCandidate"
          rows="5"
          placeholder="Escribe tu respuesta aquí..."
          className="w-full rounded-[0.75rem] border border-[var(--color-violet_blue_200)] bg-[var(--color-white)]
                     text-[0.875rem] p-4 outline-none focus:border-[var(--color-violet-blue)] 
                     resize-none"
        />
      </div>

      {/* Campo 2 */}
      <div className="mb-8">
        <label
          htmlFor="motivation"
          className="block text-[0.875rem] font-medium text-[var(--color-texto-principal)] mb-2"
        >
          ¿Qué te motiva a trabajar con nosotros?
        </label>
        <textarea
          id="motivation"
          name="motivation"
          rows="5"
          placeholder="Escribe tu respuesta aquí..."
          className="w-full rounded-[0.75rem] border border-[var(--color-violet_blue_200)] bg-[var(--color-white)]
                     text-[0.875rem] p-4 outline-none focus:border-[var(--color-violet-blue)] 
                     resize-none"
        />
      </div>

      {/* Texto informativo */}
      <p className="text-[0.8125rem] text-[var(--color-texto-secundario)]">
        Enviar esta solicitud no afectará a tu perfil de INDUCE.
      </p>
    </div>
  );
};

export default StepAdditionalInfo;