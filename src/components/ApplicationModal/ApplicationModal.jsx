import { useEffect, useState } from "react";
import ModalHeader from "./modal/ModalHeader";
import StepsHeader from "./modal/StepsHeader";
import StepPersonalInfo from "./modal/steps/StepPersonalInfo";
import ModalFooter from "./modal/ModalFooter";
import StepCurriculum from "./modal/steps/StepCurriculum";
import StepAdditionalInfo from "./modal/steps/StepAdditionalInfo";
import StepFinalize from "./modal/steps/StepFinalize";

/**
 * ApplicationModal
 * Props:
 *  - isOpen (bool)
 *  - onClose (fn)
 */
const ApplicationModal = ({ isOpen = false, onClose = () => {} }) => {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const TOTAL = 4;

  // Bloquea el scroll del body al abrir el modal
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const next = () => {
    if (step === TOTAL) {
      // Muestra el popup final al completar el proceso
      setShowSuccess(true);
    } else {
      setStep((s) => Math.min(s + 1, TOTAL));
    }
  };

  const prev = () => setStep((s) => Math.max(s - 1, 1));

  // Cierra el popup, resetea el paso y cierra el modal completo
  const closeSuccessPopup = () => {
    setShowSuccess(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" aria-modal="true" role="dialog">
      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal principal */}
      <div
        className="relative w-full max-w-[56rem] bg-[var(--color-background-white)]
                   rounded-[1rem] shadow-[var(--shadow-sm)] max-h-[90vh]
                   flex flex-col overflow-hidden z-[110]"
      >
        {/* Header */}
        <ModalHeader title="Postulación vacante en TechVision Solutions" onClose={onClose} />

        {/* Steps */}
        <div className="bg-[var(--color-background-alice-blue)]">
          <StepsHeader step={step} />
        </div>

        {/* Contenido scrollable */}
        <main className="p-10 pt-0 bg-[var(--color-fondo-blanco)] overflow-y-auto flex-1 min-h-0">
          {step === 1 && <StepPersonalInfo onNext={next} />}
          {step === 2 && <StepCurriculum onNext={next} />}
          {step === 3 && <StepAdditionalInfo onNext={next} />}
          {step === 4 && <StepFinalize />}
        </main>

        {/* Footer */}
        <div className="bg-[var(--color-background-white)] border-t border-[var(--color-texto-deshabilitado)] p-6 flex justify-end">
          <ModalFooter step={step} total={TOTAL} onPrev={prev} onNext={next} onCancel={onClose} />
        </div>
      </div>

      {/* ✅ Popup de éxito */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[200]">
          <div
            className="bg-[var(--color-background-white)] rounded-[1.5rem] shadow-lg p-10 w-full max-w-[36rem]
                       text-center flex flex-col items-center justify-center"
          >
            {/* Icono */}
            <div className="bg-[var(--color-buttons-primary-active)] rounded-full p-8 mb-6">
              <span className="text-6xl">🎉</span>
            </div>

            {/* Texto principal */}
            <h2 className="text-2xl font-bold text-[var(--color-texto-principal)] mb-2">
              ¡Tu postulación ha sido exitosa!
            </h2>

            {/* Texto secundario */}
            <p className="text-[var(--color-texto-secundario)] text-base mb-8">
              Pronto recibirás noticias sobre el estado de tu proceso.
            </p>

            {/* Botón */}
            <button
              onClick={closeSuccessPopup}
              className="px-8 py-3 bg-[var(--color-buttons-primary-active)]
                         text-white text-lg font-semibold rounded-lg
                         hover:brightness-95 transition"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationModal;