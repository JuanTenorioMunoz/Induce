const ModalFooter = ({ step = 1, total = 4, onPrev = () => {}, onNext = () => {}, onCancel = () => {} }) => {
  const isFirst = step === 1;
  const isLast = step === total;

  return (
    <div className="flex items-center gap-4">
      {!isFirst && (
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 rounded-lg border border-[var(--color-violet_blue_400)] text-[var(--color-violet_blue_400)] hover:bg-[var(--color-violet_blue_100)] transition"
        >
          Atrás
        </button>
      )}

      <button
        type="button"
        onClick={onCancel}
        className="px-4 py-2 rounded-lg border border-[var(--color-texto-deshabilitado)] text-[var(--color-texto-deshabilitado)] hover:bg-[var(--color-violet_blue_100)] transition"
      >
        Cancelar
      </button>

      <button
        type="button"
        onClick={onNext}
        className="px-6 py-2 rounded-lg bg-[var(--color-buttons-primary-active)] text-white font-semibold hover:brightness-95 transition"
      >
        {isLast ? "Enviar" : "Siguiente"}
      </button>
    </div>
  );
};

export default ModalFooter;