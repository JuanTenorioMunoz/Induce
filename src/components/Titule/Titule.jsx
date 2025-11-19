

const Heading = ({titule, subtitule}) => {
    return(
        <div className="flex flex-col gap-3"> 
            <p 
            className="text-center items-center text-3xl font-bold text-(--color-elementos-claros)"
            >{titule}</p>
            <p
            className="text-center"
            >{subtitule}</p>
        </div>
    )
}

export default Heading