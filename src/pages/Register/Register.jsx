import ButtonLink from "../../components/ButtonLink/ButtonLink"
import InputText from "../../components/Input_text/InputText"
import Navbar from "../../components/Navbar/Navbar"
import RectanguleButton from "../../components/Rectangule_button/RectanguleButton"
import Heading from "../../components/Titule/Titule"
import RegisterImage from "../../assets/Register-image1.png"

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { signUpUser } from "../../utils/supabaseUtils"

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [docId, setDocId] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleRegister = async () => {
        setError("")
        if (!email || !password) {
            setError("Correo y contraseña son obligatorios")
            return
        }
        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden")
            return
        }
        setLoading(true)
        try {
            await signUpUser(email, password)
            navigate('/Formulary')
        } catch (e) {
            setError(e.message || 'Error al registrarse')
        } finally {
            setLoading(false)
        }
    }
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
            <form className="w-full flex flex-col justify-center items-center gap-5" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
            <InputText
            IconLeft="person"
            IconRight="question-circle"
            label="Nombre de usuario"
            Placeholder="Escribe un nombre de usuario"
            value={username}
            name="username"
            autoComplete="username"
            onChange={(e) => setUsername(e.target.value)}
            ></InputText>
            <InputText
            IconLeft="envelope"
            IconRight="question-circle"
            label="Correo electrónico"
            Placeholder="Escribe tu correo electrónico"
            type="email"
            value={email}
            name="email"
            autoComplete="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            ></InputText>
            <InputText
            IconLeft="card-text"
            IconRight="question-circle"
            label="Documento de identidad"
            Placeholder="Escribe el número de tu cédula"
            value={docId}
            name="docId"
            autoComplete="off"
            onChange={(e) => setDocId(e.target.value)}
            ></InputText>
            <InputText
            IconLeft="lock"
            IconRight="question-circle"
            label="Contraseña"
            Placeholder="Escribe tu constraseña"
            type="password"
            value={password}
            name="password"
            autoComplete="new-password"
            required
            onChange={(e) => setPassword(e.target.value)}
            ></InputText>
            <InputText
            IconLeft="lock"
            IconRight="question-circle"
            label="Confirma tu contraseña"
            Placeholder="Escribe tu nueva contraseña"
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            autoComplete="new-password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            ></InputText>
            {error && <p className="text-red-600 text-xs">{error}</p>}
            <button 
            type="submit"
            className="text-md cursor-pointer bg-(--color-violet-blue) text-(--color-fondos-oscuros) w-[40%] box-border px-2 py-1 rounded-md"
            disabled={loading}
            >{loading ? 'Registrando...' : 'Registrate'}</button>
            </form>
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
            direction="/sign_in"
            text="¿Ya tienes cuenta?"
            button="Inicia sesión"
            ></ButtonLink>
            </div>
        </div>
        </div>
    )
}
export default Register