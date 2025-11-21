
const CvProgress = ({ progress = 75, onComplete = () => {} }) => {
  return (
    <div className="cv-progress">
      <p className="cv-label">CV Completo al {progress}%</p>
      <div className="cv-bar">
        <div className="cv-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <button className="cv-button" onClick={onComplete}>
        Completar mi CV con IA
      </button>
    </div>
  );
};

export default CvProgress;