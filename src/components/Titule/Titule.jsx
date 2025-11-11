const Heading = ({titule, subtitule}) => {
    return(
        <div>
            <p 
            className="text-4xl font-bold text-(--color-elementos-claros)"
            >{titule}</p>
            <p>{subtitule}</p>
        </div>
    )
}

export default Heading