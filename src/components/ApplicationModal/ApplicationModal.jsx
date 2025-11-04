import { useEffect, useState } from "react";
import ModalHeader from "./modal/ModalHeader";
import StepsHeader from "./modal/StepHeader";
import StepPersonalInfo from "./modal/steps/StepPersonalInfo";
import ModalFooter from "./modal/ModalFooter";

/**
 * ApplicationModal
 * Props:
 *  - isOpen (bool)
 *  - onClose (fn)
 */
const ApplicationModal = ({ isOpen = false, onClose = () => {} }) => {
  const [step, setStep] = useState(1);
  const TOTAL = 4;

  useEffect(() => {
    // lock scroll while modal open
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const next = () => setStep((s) => Math.min(s + 1, TOTAL));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 "
      aria-modal="true"
      role="dialog"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* panel */}
      <div
        className="relative w-full max-w-[56rem] bg-[var(--color-background-white)] rounded-[1rem] shadow-[var(--shadow-sm)] overflow-hidden"
        style={{ boxSizing: "border-box" }}
      >
        {/* header (title + close) */}
        <div className="relative bg-[var(--color-background-white)]">
          <ModalHeader title="Postulación vacante en TechVision Solutions" onClose={onClose} />
        </div>

        {/* stepper strip */}
        <div className="bg-[var(--color-background-alice-blue)]">
          <StepsHeader step={step} />
        </div>

        {/* content area (padded) */}
        <main className="p-8 bg-[var(--color-fondo-blanco)]">
          {step === 1 && <StepPersonalInfo />}
          {/* placeholders for future steps: */}
          {step === 2 && (
            <div className="text-center py-20 text-[var(--color-texto-secundario)]">Paso 2 — Currículum (pendiente)</div>
          )}
          {step === 3 && (
            <div className="text-center py-20 text-[var(--color-texto-secundario)]">Paso 3 — Información adicional (pendiente)</div>
          )}
          {step === 4 && (
            <div className="text-center py-20 text-[var(--color-texto-secundario)]">Paso 4 — Finalizar (pendiente)</div>
          )}
        </main>

        {/* footer */}
        <div className="bg-[var(--color-background-white)] border-t border-[var(--color-texto-deshabilitado)] p-6 flex justify-end">
          <ModalFooter
            step={step}
            total={TOTAL}
            onPrev={prev}
            onNext={next}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;