
const CvProgress = ({ progress = 50, onComplete = () => {} }) => {
    return(
    <div>
        <p>CV completo al {progress}%</p>
        <div>
        [Barra de progreso: {progress}%]
        </div>
        <button onClick={onComplete}>Completar mi CV con IA</button>
    </div>
    )
}
export default CvProgress