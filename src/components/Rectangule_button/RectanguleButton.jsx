const RectanguleButton = ({icon, text}) => {
    return(
        <button className="flex flex-row items-center justify-center gap-2 w-76 py-1.5 border-2 rounded-xl">
        <i className={`bi bi-${icon} box-border`} />
        <p className="font-medium text-(--color-texto-secundario)">{text}</p>
        </button>
    )
}

export default RectanguleButton