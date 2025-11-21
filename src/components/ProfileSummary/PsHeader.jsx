
const PsHeader = ({ name, role, photoUrl }) => {
  return (
    <div className="ps-header">
      <div className="ps-photo">
        <img src={photoUrl} alt={name} />
      </div>
      <h3 className="ps-name">{name}</h3>
      <p className="ps-role">{role}</p>
    </div>
  );
};

export default PsHeader;