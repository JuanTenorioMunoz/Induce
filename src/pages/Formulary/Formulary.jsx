import Heading from "../../components/Titule/Titule";
import InputText from "../../components/Input_text/InputText";
import logoInduce from "../../assets/Logo_induce.png";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Input_file_image from "../../assets/Input_file_image.png"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateCurrentUserProfile } from "../../utils/supabaseUtils";

const Formulary = () => {
  const stepsData = [
    {
      step: "1 de 4",
      title:
        "¡Bienvenido/a a Induce! Nos alegra que formes parte de nuestra comunidad.",
      subtitule:
        "Explora oportunidades únicas, conecta con empresas y potencian tu desarrollo profesional",
      description:
        "Te haremos unas preguntas para personalizar las oportunidades y sugerencias",
      fields: [
        {
          name: "Nombre",
          label: "Nombre",
          placeholder: "Escribe solo tu nombre",
        },
        {
          name: "Apellidos",
          label: "Apellidos",
          placeholder: "Escribe tus apellidos",
        },
      ],
    },
    {
      step: "2 de 4",
      title: "Haz que tu talento encuentre oportunidades a tu medida.",
      subtitule:
        "Induce facilita el acceso a empleos en tu ciudad o región que se adaptan a tu perfil y preferencias.",
      description:
        "Te haremos unas preguntas para personalizar las oportunidades y sugerencias",
      fields: [
        { name: "País", label: "País", placeholder: "Colombia" },
        {
          name: "Departamento",
          label: "Departamento",
          placeholder: "Valle del Cauca",
        },
        { name: "Ciudad", label: "Ciudad", placeholder: "Cali" },
      ],
    },
    {
      step: "3 de 4",
      title: "Personaliza tu búsqueda de empleo con información relevante.",
      subtitule:
        "Al compartir tu experiencia conectamos tu  perfil con ofertas ajustadas a tu trayectoria y aspiraciones.",
      description:
        "Te haremos unas preguntas para personalizar las oportunidades y sugerencias",
      fields: [
        {
          name: "Profesión",
          label: "Profesión",
          placeholder: "Diseñadora UX/UI",
        },
        {
          name: "Cargo más reciente",
          label: "Cargo más reciente",
          placeholder: "Analista de experiencia de usuario",
        },
        {
          name: "Nivel de experiencia",
          label: "Nivel de experiencia",
          placeholder: "Intermedio",
        },
      ],
    },
    {
      step: "4 de 4",
      title:
        "Una imagen tuya ayuda a crear una conexión más humana con quienes buscan talento",
      subtitule: "",
      description: "",
      fields: [
        {
          name: "Imagen",
          label: "Elige un archivo o arrastralo aquí",
          type: "file",
          required: false,
          supportText: "Formatos soportados: JPG, PNG, WEBP (máx 1MB)",
        },
      ],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const step = stepsData[currentStep];
  const [touched, setTouched] = useState({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const canContinue = stepsData[currentStep].fields.every((field) => {
    const val = formData[field.name];
    const required = field.required !== false;
    if (!required) return true;
    if (field.type === "file") return !!val;
    return typeof val === "string" && val.trim().length > 0;
  });

  const handleNext = async () => {
    if (!canContinue) {
      const newTouched = {};
      step.fields.forEach((f) => {
        newTouched[f.name] = true;
      });
      setTouched(newTouched);
      return;
    }
    setTouched({});
    if (currentStep === stepsData.length - 1) {
      try {
        setSaving(true);
        setError("");
        const bg = {
          pais: formData["País"] || null,
          departamento: formData["Departamento"] || null,
          profesion: formData["Profesión"] || null,
          cargo_reciente: formData["Cargo más reciente"] || null,
          nivel_experiencia: formData["Nivel de experiencia"] || null,
        };
        const updates = {
          name: formData["Nombre"] || null,
          surname: formData["Apellidos"] || null,
          city: formData["Ciudad"] || null,
          background: bg,
          
          
        };
        await updateCurrentUserProfile(updates);
        navigate("/profile");
      } catch (e) {
        setError(e.message || "No se pudo guardar");
      } finally {
        setSaving(false);
      }
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="bg-(--color-background-white) flex flex-col h-screen w-full">
      <header className="w-full h-16 shadow-sm flex items-center justify-between px-6 bg-(--color-alice-blue)">
        <div className="h-8 w-auto">
          <img src={logoInduce} alt="Logo Induce" className="h-full w-auto" />
        </div>
      </header>

      <div className="flex flex-col justify-center items-center h-screen gap-10">
        <div className="flex flex-col p-5 items-center gap-5 min-h-[50vh] w-screen max-w-[800px]">
          <Heading titule={step.title} subtitule={step.subtitule}></Heading>
          <div className="flex flex-col p-5 items-center gap-5 bg-(--color-alice-blue) min-h-[50vh] w-[90vw] max-w-[600px] shadow-sm">
            <div className="w-full flex flex-row text-xs justify-end">
              <p>{step.step}</p>
            </div>

            <p>{step.description}</p>

            {step.fields.map((field) => {
              const value = formData[field.name] || "";
              const isFile = field.type === "file";
              const required = field.required !== false;
              const showError =
                required &&
                touched[field.name] &&
                ((isFile && !value) || (!isFile && value.trim().length === 0));

              return (
                <div
                  key={field.name}
                  className="w-full flex flex-col items-center"
                >
                  {isFile ? (
                    <>
                      <label className="w-full cursor-pointer">
                        <div className="border border-gray-300 gap-3 rounded-lg p-4 bg-white flex flex-col items-center">
                          <img 
                          className="w-48 h-48"
                          src={Input_file_image}></img>
                          <span className="text-base font-semibold text-gray-700 leading-normal min-h-5 block">
                            Haz clic o arrastra tu imagen aquí
                          </span>

                          <span className="text-xs text-gray-500 mt-1">
                            {field.supportText ||
                              "Formatos soportados: JPG, PNG, WEBP (máx. 1MB)"}
                          </span>
                        </div>

                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleChange(
                              field.name,
                              e.target.files?.[0] || null
                            )
                          }
                        />
                      </label>

                      {showError && (
                        <span className="text-red-500 text-xs mt-1">
                          Este campo es obligatorio
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      <InputText
                        label={field.label}
                        Placeholder={field.placeholder}
                        value={value}
                        onChange={(e) =>
                          handleChange(field.name, e.target.value)
                        }
                      />

                      {showError && (
                        <span className="text-red-500 text-xs mt-1">
                          Este campo es obligatorio
                        </span>
                      )}
                    </>
                  )}
                </div>
              );
            })}

            <ButtonPrimary
              text={
                saving
                  ? "Guardando..."
                  : currentStep === stepsData.length - 1
                  ? "Finalizar"
                  : "Continuar"
              }
              disabled={saving}
              onClick={handleNext}
            />
            {error && <span className="text-red-500 text-xs mt-2">{error}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulary;
