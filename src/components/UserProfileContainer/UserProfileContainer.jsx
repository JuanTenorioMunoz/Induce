const UserProfileContainer = ({ image, name, label }) => {
  return (
    <div className="inline-flex w-64 space-x-3 h-12 items-center ">
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 object-cover"
        />
      </div>
      <div className="flex flex-col justify-center space-y-1">
        <p className="font-bold text-sm truncate">{name}</p>
        <p className="text-xs font-light leading-none truncate">{label}</p>
      </div>
    </div>
  );
};

export default UserProfileContainer;