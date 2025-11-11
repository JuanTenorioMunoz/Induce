import logoInduce from "../../assets/Logo_induce.png";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
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
        <ButtonPrimary
        text="Registrarse"
        ></ButtonPrimary>

        </div>
        </header>
)}

export default Navbar