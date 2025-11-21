
const NavBar = ({ title, user }) => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center gap-6">
          <p className="font-bold text-2xl text-(--color-violet-blue)">
            {title}
          </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          aria-label="Notificaciones"
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-(--color-violet-blue-100)"
        >
          {/* <IoNotificationsOutline className="text-[var(--color-violet_blue)]" /> */}
        </button>

        <div className="flex items-center gap-3">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-(--color-chartreuse)"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-(--color-violet-blue) flex items-center justify-center text-white">
              {user?.name?.charAt(0)}
            </div>
          )}

          <div className="text-right">
            <div className="text-sm font-medium text-(--color-texto-principal)">
              {user?.name}
            </div>
            <div className="text-xs text-(--color-texto-secundario)">
              {user?.role}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
