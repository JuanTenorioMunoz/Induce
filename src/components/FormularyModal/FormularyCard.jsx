import InputText from "../Input_text/InputText"
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary"

const FormularyModal = () => {
    return(
        <div className="flex flex-col p-5 items-center gap-5 bg-(--color-alice-blue) h-[50vh] w-[90w] shadow-sm">
            <div className="w-full flex flex-row text-xs justify-end">
            <p>1 de 4</p>
            </div>
            <p>Te haremos unas preguntas para personalizar las oportunidades y sugerencias que recibirás en Induce.</p>
            <InputText
            label="Nombre"
            Placeholder="Escribe solo tu nombre"
            />
            <InputText
            label="Apellidos"
            Placeholder="Escribe tus apellidos"
            />
            <ButtonPrimary
            text="Continuar"
            />
        </div>
    )
}

export default FormularyModal