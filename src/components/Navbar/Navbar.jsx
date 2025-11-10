import logoInduce from "../../assets/Logo_induce.png";

const Navbar = () => {
    return (
        <header className="w-full h-16 flex items-center justify-between px-12 bg-(--color-alice-blue)">

        <div className="flex items-center space-x-2">
            <div className="h-10 w-auto">
            <img src={logoInduce} alt="Logo Induce" className="h-full w-auto" />
            </div>
        </div>

        <div className="flex flex-row gap-5">
        <nav className="hidden md:flex items-center space-x-10 text-lg">
            <a href="#" className="text-(--color-elementos-claros) font-medium transition-colors">Home</a>
            <a href="#" className="text-(--color-elementos-claros) font-medium transition-colors">Vacantes</a>
            <a href="#" className="text-(--color-elementos-claros) font-medium transition-colors">Sobre Nosotros</a>
        </nav>

        <button className="ml-6 px-6 py-2 rounded-lg bg-(--color-buttons-primary-green-default) 
        hover:bg-(--color-buttons-primary-green-hover) transition-colors text-(--color-elementos-claros) font-medium">
        Registrarse
        </button>
        </div>
        </header>
)}

export default Navbar