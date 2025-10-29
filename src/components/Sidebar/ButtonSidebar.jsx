const ButtonSidebar = ({icon, name, state}) => {
    return(
        <button className="sidebar-button">
            <i className={`bi ${icon} sidebar-icon`}></i>
            <span>{name}</span>
        </button>
    )
}
export default ButtonSidebar