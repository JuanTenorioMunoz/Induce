import ButtonLink from "../../components/ButtonLink/ButtonLink"
import InputText from "../../components/Input_text/InputText"
import Navbar from "../../components/Navbar/Navbar"
import RectanguleButton from "../../components/Rectangule_button/RectanguleButton"
import Heading from "../../components/Titule/Titule"
import RegisterImage from "../../assets/Register-image1.png"

import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const navigate = useNavigate()
    return(
            <div className="bg-(--color-background-alice-blue) flex flex-col w-full h-screen">
            <Navbar></Navbar>
            <div className="flex w-full h-screen">
            <div className="w-1/2 flex flex-col justify-end items-center">
            <img src={RegisterImage}
            className="w-2/3"
            ></img>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center gap-12 box-content">
            <Heading
            titule="Iniciar sesión"
            ></Heading>
            <div className="w-full flex flex-col justify-center items-center gap-4">
            <InputText
            IconLeft="envelope"
            IconRight="question-circle"
            label="Correo electrónico"
            Placeholder="Escribe tu correo electrónico"
            ></InputText>
            <InputText
            IconLeft="lock"
            IconRight="question-circle"
            label="Contraseña"
            Placeholder="Escribe tu constraseña"
            ></InputText>
            <div className="flex flex-row justify-between items-center w-8/12 my-2">
            <a href="#" className="underline text-xs text-(--color-elementos-claros)">¿Olvidaste tu contraseña?</a>
            <button 
            onClick={() => navigate('/Formulary')}
            className="text-md cursor-pointer bg-(--color-violet-blue) text-(--color-fondos-oscuros) w-[40%] box-border px-2 py-1 rounded-md"
            >Iniciar sesión</button>
            </div>
            <div className="flex items-center justify-center w-[60%]">
            <div className="h-px w-full bg-(--color-violet-blue)"></div>
            <span className="px-4 text-(--color-violet-blue)">o</span>
            <div className="h-px w-full bg-(--color-violet-blue)"></div>
            </div>
            <RectanguleButton
            icon="google"
            text="Iniciar sesión con Google"
            ></RectanguleButton>
            <RectanguleButton
            icon="microsoft"
            text="Iniciar sesión con Microsoft"
            ></RectanguleButton>
            <ButtonLink
            direction="/register"
            text="¿No tienes cuenta?"
            button="Registrate"
            ></ButtonLink>
            </div>
            </div>
        </div>
        </div>
    )
}
export default SignIn