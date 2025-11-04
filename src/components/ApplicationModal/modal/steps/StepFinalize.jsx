// src/components/modal/steps/StepFinalize.jsx
import { useEffect, useState } from "react";

const StepFinalize = ({ requestFinish = false, onClose = () => {} , initialData = {} }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: initialData.name ?? "Ana Muñoz",
    role: initialData.role ?? "Diseñadora UX/UI",
    location: initialData.location ?? "Cali, Valle del Cauca, Colombia",
    email: initialData.email ?? "ana.muñoz@gmail.com",
    phone: initialData.phone ?? "+57 (301) 2073849",
    file: initialData.file ?? "Hoja de vida.pdf",
    answer1: initialData.answer1 ?? "",
    answer2: initialData.answer2 ?? "",
  });

  useEffect(() => {
    // Si el padre solicita finalizar (pulsó "Finalizar" en footer),
    // mostramos el popup de éxito.
    if (requestFinish) {
      setShowSuccess(true);
    }
  }, [requestFinish]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative flex flex-col gap-6">
      {/* Contenido principal (scrollable desde el main del Modal) */}
      <div className="space-y-6">
        <h2 className="text-[1.4rem] font-semibold text-[var(--color-texto-principal)]">
          Verifica tu información
        </h2>

        {/* Información del candidato (editable) */}
        <div className="flex items-center gap-4">
          <img
            src={initialData.photoUrl ?? "https://randomuser.me/api/portraits/women/68.jpg"}
            alt="Foto de perfil"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="font-semibold text-base w-full bg-transparent border-b border-gray-300 focus:border-[var(--color-violet-blue)] outline-none text-sm"
            />
            <input
              type="text"
              value={form.role}
              onChange={(e) => handleChange("role", e.target.value)}
              className="text-sm text-gray-500 w-full bg-transparent border-b border-gray-200 focus:border-[var(--color-violet-blue)] outline-none mt-1"
            />
            <input
              type="text"
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className="text-sm text-gray-400 w-full bg-transparent border-b border-gray-200 focus:border-[var(--color-violet-blue)] outline-none mt-1"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="block w-full mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-violet_blue_200)] outline-none text-sm"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium mb-2">Número de teléfono</label>
          <input
            type="text"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="block w-full mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-violet_blue_200)] outline-none text-sm"
          />
        </div>

        {/* Currículum */}
        <div>
          <label className="block text-sm font-medium mb-2">Currículum</label>
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3 mt-2">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF"
                className="w-8 h-8"
              />
              <div>
                <div className="text-[var(--color-texto-principal)] font-medium text-sm">
                  {form.file}
                </div>
                <div className="text-xs text-gray-400">94 KB • Completed</div>
              </div>
            </div>
            <button
              type="button"
              className="ml-auto text-gray-400 hover:text-red-500 text-sm"
              aria-label="Eliminar curriculum"
              onClick={() => handleChange("file", "")}
            >
              🗑
            </button>
          </div>
        </div>

        {/* Preguntas (textareas) */}
        <div>
          <label className="block text-sm font-medium mb-2">
            ¿Por qué crees que eres un buen candidato para este puesto? *
          </label>
          <textarea
            rows={5}
            value={form.answer1}
            onChange={(e) => handleChange("answer1", e.target.value)}
            placeholder="Describe tu experiencia relevante, habilidades y logros."
            className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-violet_blue_200)] outline-none resize-none text-sm"
          />
          <p className="text-xs text-gray-400 mt-1">Esta respuesta es obligatoria</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            ¿Qué te motiva a trabajar con nosotros? *
          </label>
          <textarea
            rows={5}
            value={form.answer2}
            onChange={(e) => handleChange("answer2", e.target.value)}
            placeholder="Describe tu experiencia relevante, habilidades y logros."
            className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-violet_blue_200)] outline-none resize-none text-sm"
          />
          <p className="text-xs text-gray-400 mt-1">Esta respuesta es obligatoria</p>
        </div>

        <p className="text-sm text-gray-500">Enviar esta solicitud no afectará a tu perfil de INDUCE.</p>
      </div>

      {/* Popup de éxito (simple, sin animaciones) */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-[var(--color-background-white)] rounded-2xl shadow-xl p-10 w-[28rem] text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[var(--color-chartreuse)] rounded-full p-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4213/4213179.png"
                  alt="Éxito"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-2xl font-semibold">¡Tu postulación ha sido exitosa!</h3>
              <p className="text-gray-400">Pronto recibirás noticias sobre el estado de tu proceso.</p>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2 rounded-lg bg-[var(--color-violet-blue)] text-white hover:brightness-95"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepFinalize;
 