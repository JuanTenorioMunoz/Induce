const JobStats = ({ sent = 0, viewed = 0, alerts = 0 }) => {
    return(
    <div>
        <h4>Actividad laboral</h4>
        <ul>
            <li>Aplicaciones enviadas: {sent}</li>
            <li>Perfiles vistos: {viewed}</li>
            <li>Alertas de empleo: {alerts}</li>
        </ul>
    </div>
    )
}
export default JobStats