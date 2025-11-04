
const SkillList = ({ skills = [] }) => {
  return (
    <div className="skill-list">
      <h4 className="skill-title">Mis habilidades principales</h4>
      <div className="skill-tags">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <span className="skill-tag" key={index}>
              {skill}
            </span>
          ))
        ) : (
          <p>[No hay habilidades registradas]</p>
        )}
      </div>
    </div>
  );
};

export default SkillList;