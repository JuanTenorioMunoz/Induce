import ButtonLink from "../../components/ButtonLink/ButtonLink"
import InputText from "../../components/Input_text/InputText"
import Navbar from "../../components/Navbar/Navbar"
import RectanguleButton from "../../components/Rectangule_button/RectanguleButton"
import Heading from "../../components/Titule/Titule"
import RegisterImage from "../../assets/Register-image1.png"

import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    return(
        <div className="bg-(--color-background-alice-blue) flex flex-col w-full min-h-screen overflow-y-auto">
            <Navbar></Navbar>
        <div className="flex w-full min-h-screen">
            <div className="w-1/2 flex flex-col justify-end items-center">
            <img src={RegisterImage}
            className="w-2/3"
            ></img>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center gap-5 my-10 box-content">
            <Heading
            titule="Registrate"
            ></Heading>
            <InputText
            IconLeft="person"
            IconRight="question-circle"
            label="Nombre de usuario"
            Placeholder="Escribe un nombre de usuario"
            ></InputText>
            <InputText
            IconLeft="envelope"
            IconRight="question-circle"
            label="Correo electrónico"
            Placeholder="Escribe tu correo electrónico"
            ></InputText>
            <InputText
            IconLeft="card-text"
            IconRight="question-circle"
            label="Documento de identidad"
            Placeholder="Escribe el número de tu cédula"
            ></InputText>
            <InputText
            IconLeft="lock"
            IconRight="question-circle"
            label="Contraseña"
            Placeholder="Escribe tu constraseña"
            ></InputText>
            <InputText
            IconLeft="lock"
            IconRight="question-circle"
            label="Confirma tu contraseña"
            Placeholder="Escribe tu nueva contraseña"
            ></InputText>
            <button 
            onClick={() => navigate('/Sign_in')}
            className="text-md cursor-pointer bg-(--color-violet-blue) text-(--color-fondos-oscuros) w-[40%] box-border px-2 py-1 rounded-md"
            >Registrate</button>
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
            direction="/Sign_in"
            text="¿Ya tienes cuenta?"
            button="Inicia sesión"
            ></ButtonLink>
            </div>
        </div>
        </div>
    )
}
export default Register