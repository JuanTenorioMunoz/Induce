
const InputText = ({label, IconLeft, IconRight, Placeholder}) => {
    return(
        <div className="flex flex-col space-y-1 w-76 text-md">
        <label className="bg-(--color-text-titulos-y-texto-destacado) font-medium">{label}</label>

        <div className="flex items-center bg-gray-50 border border-blue-200 rounded-xl px-3 py-2 shadow-sm focus-within:border-blue-400 transition">
         <i className={`bi bi-${IconLeft}`} />

        <input
        type="text"
        placeholder={Placeholder}
        className="flex-1 bg-transparent text-lg px-4 outline-none text-(--color-texto-secundario)"
        />

        <i className={`bi bi-${IconRight}`} />
        </div>
        </div>
    )};

export default InputText