import Heading from "../../components/Titule/Titule"
import FormularyModal from "../../components/FormularyModal/FormularyCard"
import logoInduce from "../../assets/Logo_induce.png";

const Formulary = () => {
    return(
        <div className="bg-(--color-background-white) flex flex-col h-screen w-full">
            <header
            className="w-full h-16 shadow-sm flex items-center justify-between px-6 bg-(--color-alice-blue)"
            >
            <div className="h-8 w-auto">
            <img src={logoInduce} alt="Logo Induce" className="h-full w-auto" />
            </div>
            </header>
            <div className="flex flex-col justify-center items-center h-screen gap-10">
            <div className="flex flex-col w-1/2 gap-10">
            <Heading
            titule="¡Bienvenido/a a Induce! Nos alegra que formes parte de nuestra comunidad."
            subtitule="Explora oportunidades únicas, conecta con empresas y potencia tu desarrollo profesional."
            ></Heading>
            <FormularyModal>   
            </FormularyModal>
            </div>
            </div>
        </div>
    )
}

export default Formulary