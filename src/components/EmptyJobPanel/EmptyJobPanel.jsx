import briefcase from "../../assets/briefcase.svg";
const EmptyJobPanel = () => {
  return (
    <div className="
      w-full
      h-screen
      flex flex-col
      items-center justify-center
      text-center
      bg-[#FAFAFA]
      px-6
    ">
      <div className="
        w-32 h-32
        rounded-full
        
        flex items-center justify-center
        mb-6
      ">
        <img src={briefcase} alt="Seleccionar vacante" className="w-30%" />
      </div>

      <h2 className="font-outfit text-2xl text-[var(--color-violet_blue)] font-semibold mb-2">
        Selecciona una vacante
      </h2>

      <p className="text-sm text-[var(--color-texto_secundario)] max-w-sm">
        Haz clic en una de las recomendaciones de la izquierda para ver los detalles completos aquí.
      </p>
    </div>
  );
};

export default EmptyJobPanel;