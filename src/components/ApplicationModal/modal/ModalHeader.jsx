const ModalHeader = ({ title = "", onClose = () => {} }) => {
  return (
    <header className="relative h-[5.125rem] flex items-center">
      <h2
        className="pl-[0.875rem] text-[1.75rem] font-outfit font-semibold text-[var(--color-texto-titulos-y-texto-destacado)] leading-[1.95rem] max-w-[44.75rem]"
        style={{ margin: 0 }}
      >
        {title}
      </h2>

      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute right-4 top-4 w-9 h-9 rounded-lg flex items-center justify-center hover:bg-[var(--color-violet_blue_100)] transition"
        type="button"
      >
        {/* X icon (simple) */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 6L18 18M6 18L18 6" stroke="#181878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </header>
  );
};

export default ModalHeader;