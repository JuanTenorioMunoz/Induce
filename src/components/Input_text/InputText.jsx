
const InputText = ({label, IconLeft, IconRight, placeholder}) => {
    return(
        <div className="w-full flex flex-col space-y-1">
<label className="text-gray-800 font-medium">{label}</label>


<div className="flex items-center bg-gray-50 border border-blue-200 rounded-xl px-3 py-2 shadow-sm focus-within:border-blue-400 transition">
 <i className={`bi bi-${IconLeft}`} />


<input
type="text"
placeholder={placeholder}
className="flex-1 bg-transparent outline-none text-gray-700"
/>


<i className={`bi bi-${IconRight}`} />
</div>
</div>
    )
}

export default InputText