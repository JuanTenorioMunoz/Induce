const WelcomeBanner = ({ name = "Ana" }) => {
  return (
    <div className="w-full px-0  max-w-[100%] my-4 shadow-[var(--shadow-sm)] rounded-lg" >
      <div
        className="w-full rounded-xl p-8 shadow-sm"
        style={{ backgroundColor: "var(--color-violet_blue_500)" }}
      >
        <h1 className="text-white font-outfit text-3xl font-semibold mb-2">
          ¡Hola, {name}!
        </h1>

        <p className="text-white font-primary text-base opacity-90">
          Descubre las oportunidades que hemos encontrado para ti.
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;