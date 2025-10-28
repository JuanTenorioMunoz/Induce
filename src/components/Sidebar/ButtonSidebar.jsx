
const ButtonSidebar = ({icon, name, state}) => {
    return(
        <button
        className="bg-transparent hover:bg-[var(--color-violet_blue)] {`icon-${icon}`}"
        >{icon}{name}</button>
    )
}
export default ButtonSidebar