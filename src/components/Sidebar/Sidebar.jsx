import ButtonSidebar from "./ButtonSidebar";
import logoInduce from "../../assets/Logo_induce.png";

const Sidebar = () => {
    return(
        <div className="sidebar-container">
            {/* Logo centrado al principio */}
            <div className="sidebar-logo-container">
                <img src={logoInduce} alt="Logo Induce" className="sidebar-logo" />
            </div>
            
            {/* Contenedor de botones con espacio flexible */}
            <div className="sidebar-buttons-container">
                <ButtonSidebar icon="house-fill" name="Inicio" to="/"></ButtonSidebar>
                <ButtonSidebar icon="person-fill" name="Mi perfil" to="/profile"></ButtonSidebar>
                <ButtonSidebar icon="briefcase-fill" name="Mis vacantes" to="/vacantes"></ButtonSidebar>
                <ButtonSidebar icon="file-earmark-text-fill" name="Mi currículum" to="/cv"></ButtonSidebar>
                <ButtonSidebar icon="gear-fill" name="Configuración" to="/#"></ButtonSidebar>
            </div>
            
            {/* Botón de cerrar sesión al final */}
            <div className="sidebar-footer">
                <ButtonSidebar icon="box-arrow-right" name="Cerrar Sesión"></ButtonSidebar>
            </div>
        </div>
    )
}
export default Sidebar