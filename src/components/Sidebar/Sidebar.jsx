import ButtonSidebar from "./ButtonSidebar";

const Sidebar = () => {
    return(
        <div className="flex flex-col">
            <ButtonSidebar icon="bi-house-fill" name="Inicio"></ButtonSidebar>
            <ButtonSidebar icon="bi-person-fill" name="Mi perfil"></ButtonSidebar>
            <ButtonSidebar icon="bi-briefcase-fill" name="Mis vacantes"></ButtonSidebar>
            <ButtonSidebar icon="bi-file-earmark-text-fill" name="Mi currículum"></ButtonSidebar>
            <ButtonSidebar icon="bi-gear-fill" name="Configuración"></ButtonSidebar>
            <ButtonSidebar icon="bi-box-arrow-right" name="Cerrar Sesión"></ButtonSidebar>
        </div>
    )
}
export default Sidebar