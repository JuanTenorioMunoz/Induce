const RectanguleButton = ({icon, text}) => {
    return(
        <button>
        <i className={`bi bi-${icon} text-2xl`} />
        <p>{text}</p>
        </button>
    )
}

export default RectanguleButton