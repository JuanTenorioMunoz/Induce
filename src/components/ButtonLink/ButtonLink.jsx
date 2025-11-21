import { useNavigate } from "react-router-dom"

const ButtonLink = ({direction, text, button}) => {
    const navigate = useNavigate()
    return(
        <div className="flex flex-row w-64 text-md justify-center gap-2">
        <p className="text-(--color-elementos-claros)">{text}</p>
        <button 
        onClick={() => navigate(direction)}
        className="font-bold underline text-(--color-elementos-claros) cursor-pointer">
        {button}
        </button>
        </div>
    )
}

export default ButtonLink