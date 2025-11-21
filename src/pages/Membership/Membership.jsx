import Sidebar from "../../components/Sidebar/Sidebar";
import NavBar from "../../components/Navbar/Navbar";

const Membership = () => {
  const userMock = {
    name: "Ana María Muñoz",
    role: "Diseñadora UX/UI",
    avatar: "https://i.imgur.com/2yaf2wb.jpeg",
  };

  return (
    <div id="root" className="flex min-h-screen bg-[#F9F9F9]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <NavBar title="Membresía" user={userMock} />

        <main className="px-10 py-8">

          <p className="text-blue-600 mb-6">
            Configuraciones / Suscripción y pagos / Planes
          </p>

          <h1 className="text-4xl font-bold mb-16 text-center">
            Nuestra Gama de Opciones a Nivel de Servicio
          </h1>

          <div className="flex justify-center gap-10">

            {/* VISITANTE */}
            <div className="w-[380px] bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-xl mb-4">Visitante</h2>

              <div className="text-4xl font-bold mb-6">
                $0 <span className="text-base font-normal">/ mes</span>
              </div>

              <hr className="mb-6"/>

              <p className="mb-6 text-gray-600">
                Acceso a funciones básicas sin ninguna tarifa de suscripción.
              </p>

              <ul className="space-y-4 mb-10">
                <li>✔ Creación de CV con inteligencia artificial.</li>
                <li>✔ Creación y seguimiento de metas.</li>
                <li>✔ Explorar empresas y comunidades.</li>
                <li>✔ Simulación de entrevistas con IA.</li>
              </ul>

              <button className="w-full py-4 bg-[var(--color-violet_blue)] text-white rounded-full font-semibold">
                Comenzar
              </button>
            </div>

            {/* MIEMBRO */}
            <div className="w-[380px] bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-xl mb-4">Miembro</h2>

              <div className="text-4xl font-bold mb-6">
                $200 <span className="text-base font-normal">/ 6 meses</span>
              </div>

              <hr className="mb-6"/>

              <p className="mb-6 text-gray-600">
                Si no consigues empleo en ese periodo, solo pagas el 70% del precio completo del plan.
              </p>

              <ul className="space-y-4 mb-10">
                <li>✔ Postulaciones a vacantes de trabajo.</li>
                <li>✔ Match con IA para vacantes recomendadas.</li>
                <li>✔ Acceso a formaciones dentro de vacantes.</li>
                <li>✔ Informes de desempeño.</li>
              </ul>

              <button className="w-full py-4 bg-[var(--color-violet_blue)] text-white rounded-full font-semibold">
                Comenzar
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Membership;