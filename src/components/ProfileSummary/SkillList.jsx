
const SkillList = ({ skills = [] }) => {
    return(
    <div>
        <h4>Mis habilidades principales</h4>
        {skills.length > 0 ? (
        <ul>
        {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
        ))}
        </ul>
        ) : (
        <p>[No hay habilidades registradas]</p>
        )}
    </div>
    )
}
export default SkillList