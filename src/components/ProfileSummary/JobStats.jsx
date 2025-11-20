
const JobStats = ({ sent = 0, viewed = 0, alerts = 0 }) => {
  return (
    <div className="job-stats">
      <h4 className="job-title">Vacantes destacadas</h4>
      <ul className="job-list">
        <li>
          <span>Aplicaciones enviadas</span>
          <strong>{sent}</strong>
        </li>
        <li>
          <span>Perfiles vistos</span>
          <strong>{viewed}</strong>
        </li>
        <li>
          <span>Alertas de empleo</span>
          <strong>{alerts}</strong>
        </li>
      </ul>
    </div>
  );
};

export default JobStats;