import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavBar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { getUserProfileInfo } from "../../utils/supabaseUtils";

const Configuracion = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
  const fetchUser = async () => {
    try {
      const data = await getUserProfileInfo(); 
      console.log("Fetched user profile:", data); 
      setUser(data);
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };
  fetchUser();
}, []);
  return (
    <div id="root" className="flex min-h-screen bg-[#F9F9F9]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <NavBar title="Configuración" user={user} />

        <main className="px-10 py-8">
          <h1 className="font-outfit text-3xl font-bold text-[var(--color-violet_blue)]">
            Configuración
          </h1>
          <p className="mt-2 mb-10 text-gray-600">
            Administra tus preferencias y ajusta tu experiencia en la plataforma.
          </p>

          <h2 className="text-xl font-bold mb-6">Configuraciones</h2>

          <div className="grid grid-cols-2 gap-8">
            {/* COLUMNA IZQUIERDA */}
            <div className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-2">Visualización</h3>
                <p>Modo oscuro</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-2">Opciones de sincronización</h3>
                <p>Sincronizar con calendario Google</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-4">Notificaciones</h3>
                <p className="border-b pb-2 mb-2">Notificaciones push</p>
                <p>Notificaciones por correo electrónico</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-4">Gestión de la cuenta</h3>

                <button className="w-full text-left border-b pb-2 mb-2 flex justify-between">
                  Pausar cuenta
                  <span>→</span>
                </button>

                <button className="w-full text-left flex justify-between">
                  Eliminar cuenta
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-4">Preferencias generales</h3>

                {["Idioma", "Idioma del contenido", "Efecto de sonido"].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left border-b pb-2 mb-2 flex justify-between"
                  >
                    {item}
                    <span>→</span>
                  </button>
                ))}
              </div>

              {/* CLICK A MEMBRESIA */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-4">Suscripciones y pagos</h3>

                <button
                  onClick={() => navigate("/configuracion/membership")}
                  className="w-full text-left border-b pb-2 mb-2 flex justify-between"
                >
                  Planes
                  <span>→</span>
                </button>

                <button className="w-full text-left flex justify-between">
                  Historial de compras
                  <span>→</span>
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-4">Seguridad</h3>

                {[
                  "Cambiar contraseña",
                  "Llaves de acceso",
                  "Dónde tienes activa tu sesión",
                  "Autenticación doble",
                ].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left border-b pb-2 mb-2 flex justify-between last:border-0"
                  >
                    {item}
                    <span>→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Configuracion;
