
const ButtonPrimary = ({text}) => {
    return(
        <button className="ml-6 px-6 py-2 rounded-lg bg-(--color-buttons-primary-green-default) 
        hover:bg-(--color-buttons-primary-green-hover) transition-colors text-(--color-elementos-claros) font-medium">
        {text}
        </button>
    )
}
export default ButtonPrimary