const SettingsCard = ({ title, items, arrow = false }) => {
return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-outfit text-base font-bold mb-3">{title}</h3>


        <ul className="flex flex-col gap-3">
        {items.map((item, index) => (
        <li
        key={index}
        className="flex items-center justify-between text-sm text-[var(--color-texto_principal)] border-b last:border-none pb-2"
        >
        <span>{item}</span>
        {arrow && <span className="text-lg">›</span>}
        </li>
        ))}
        </ul>
    </div>
);
};


export default Configuracion;