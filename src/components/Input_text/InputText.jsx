
const InputText = ({ label, IconLeft, IconRight, Placeholder, onChange, value, type = "text", name, autoComplete, required = false }) => {
    return(
        <div className="flex flex-col gap-1 w-[70%]">
        <label className="bg-(--color-text-titulos-y-texto-destacado) text-xs">{label}</label>

        <div className="flex items-center bg-gray-50 border border-blue-200 rounded-xl px-3 py-2 shadow-sm focus-within:border-blue-400 transition">
         <i className={`bi bi-${IconLeft} text-md text-(--color-texto-secundario)`} />

        <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        placeholder={Placeholder}
        className="flex-1 bg-transparent text-xs px-2 outline-none text-(--color-texto-secundario)"
        {...(typeof onChange === "function"
            ? { value: value ?? "", onChange }
            : { defaultValue: value ?? "" }
        )}
        />

        <i className={`bi bi-${IconRight} text-(--color-texto-secundario)`} />
        </div>
        </div>
    )};

export default InputText