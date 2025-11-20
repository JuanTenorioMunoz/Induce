const UserMiniCard = ({ avatar, name, role, location }) => {
  return (
    <div className="flex items-center gap-6">
      <img src={avatar} alt={name} className="w-20 h-20 rounded-full object-cover" />
      <div className="flex flex-col">
        <div className="text-[1.4375rem] font-outfit font-semibold text-[var(--color-texto-titulos-y-texto-destacado)]">
          {name}
        </div>
        <div className="text-[0.875rem] text-[var(--color-texto-secundario)]">{role}</div>
        <div className="text-[0.875rem] text-[var(--color-texto-secundario)]">{location}</div>
      </div>
    </div>
  );
};

export default UserMiniCard;