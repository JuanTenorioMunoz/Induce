const Heading = ({titule, subtitule}) => {
    return(
        <div>
            <p 
            className="text-5xl font-semibold text-(--color-elementos-claros)"
            >{titule}</p>
            <p>{subtitule}</p>
        </div>
    )
}

export default Heading