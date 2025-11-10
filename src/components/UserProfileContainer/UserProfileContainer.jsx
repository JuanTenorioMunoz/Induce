const UserProfileContainer = ({ image, name, label }) => {
  return (
    <div className="inline-flex w-64 space-x-3 h-12 items-center">
      <i className="bi bi-bell text-lg text-(--color-violet-blue)"></i>
      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 object-cover"
        />
      </div>
      <div className="flex flex-col justify-center space-y-1">
        <p className="font-bold font-primary text-sm truncate">{name}</p>
        <p className="text-xs font-primary font-light leading-none truncate">{label}</p>
      </div>
      <i class="bi bi-caret-down text-lg text-(--color-violet-blue)"></i>
    </div>
  );
};

export default UserProfileContainer;