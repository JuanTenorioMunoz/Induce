

const Configuracion = () => {
const userMock = {
name: "Ana María Muñoz",
role: "Diseñadora UX/UI",
avatar: "https://i.imgur.com/2yaf2wb.jpeg",
};


return (
<div className="flex min-h-screen bg-[#F9F9F9]">
<Sidebar />


    <div className="flex flex-col flex-1 min-h-screen">
    <Navbar title="Configuración" user={userMock} />


        <div className="flex-1 px-8 py-6">
            <p className="text-[var(--color-texto_secundario)] mb-8">
                Administra tus preferencias y ajusta tu experiencia en la plataforma.
            </p>


            <h2 className="font-outfit text-lg font-bold mb-6">
                Configuraciones
            </h2>


        <div className="grid grid-cols-2 gap-6 max-w-6xl">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
        <SettingsCard title="Visualización" items={["Modo oscuro"]} />


        <SettingsCard
        title="Opciones de sincronización"
        items={["Sincronizar con calendario Google"]}
        />


        <SettingsCard
        title="Notificaciones"
        items={[
        "Notificaciones push",
        "Notificaciones por correo electrónico",
        ]}
        />


        <SettingsCard
        title="Gestión de la cuenta"
        items={[
        "Pausar cuenta",
        "Eliminar cuenta",
        ]}
        />
        </div>


        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
        <SettingsCard
        title="Preferencias generales"
        items={["Idioma", "Idioma del contenido", "Efecto de sonido"]}
        arrow
        />


        <SettingsCard
        title="Suscripciones y pagos"
        items={["Planes", "Historial de compras"]}
        arrow
        />


        <SettingsCard
        title="Seguridad"
        items={[
        "Cambiar contraseña",
        "Llaves de acceso",
        "Dónde tienes activa tu sesión",
        "Autenticación doble",
        ]}
        arrow
        />
        </div>
    </div>
</div>
</div>


<ChatWidget />
</div>
);
};


export default Configuracion