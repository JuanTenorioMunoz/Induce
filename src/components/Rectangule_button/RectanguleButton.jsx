const RectanguleButton = ({icon, text}) => {
    return(
        <button className="flex flex-row items-center justify-center gap-2 w-[50%] py-1.5 border border-gray-300 rounded-xl cursor-pointer">
        <i className={`bi bi-${icon} box-border`} />
        <p className="font-semibold text-md text-(--color-texto-secundario)">{text}</p>
        </button>
    )
}

export default RectanguleButton