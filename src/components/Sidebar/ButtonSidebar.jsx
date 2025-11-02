import { Link } from "react-router-dom";
const ButtonSidebar = ({icon, name, to}) => {
    return(
        <Link to={to || "#"} className="sidebar-button">
            <i className={`bi ${icon} sidebar-icon`}></i>
            <span>{name}</span>
        </Link>
    )
}
export default ButtonSidebar