const FeatureCard = ({titule, text}) => {
    return(
        <div className="flex flex-col shadow-sm border-(--color-violet-blue-200) rounded-2xl p-3">
            <p className="font-bold">{titule}</p>
            <p className="text-sm">{text}</p>
        </div>
    )
}

export default FeatureCard