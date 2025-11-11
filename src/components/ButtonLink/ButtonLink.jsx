const ButtonLink = ({direction, text, button}) => {
    return(
        <div className="flex flex-row w-64 text-md justify-center gap-2">
        <p className="text-(--color-elementos-claros)">{text}</p>
        <a 
        href={direction}
        className="font-medium underline text-(--color-elementos-claros)">
        {button}
        </a>
        </div>
    )
}

export default ButtonLink