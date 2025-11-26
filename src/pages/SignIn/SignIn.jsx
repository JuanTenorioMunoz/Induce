import ButtonLink from "../../components/ButtonLink/ButtonLink"
import InputText from "../../components/Input_text/InputText"
import Navbar from "../../components/Navbar/NavBar"
import RectanguleButton from "../../components/Rectangule_button/RectanguleButton"
import Heading from "../../components/Titule/Titule"
import RegisterImage from "../../assets/Register-image1.png"

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { loginUser } from "../../utils/supabaseUtils"

const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleLogin = async () => {
      setError("")
      if (!email || !password) {
        setError("Correo y contraseña son obligatorios")
        return
      }
      setLoading(true)
      try {
        await loginUser(email, password)
        navigate('/Formulary')
      } catch (e) {
        setError(e.message || 'Error al iniciar sesión')
      } finally {
        setLoading(false)
      }
    }

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></InputText>
            <InputText
            IconLeft="lock"
            IconRight="question-circle"
            label="Contraseña"
            Placeholder="Escribe tu constraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></InputText>
            <div className="flex flex-row justify-between items-center w-8/12 my-2">
            <a href="#" className="underline text-xs text-(--color-elementos-claros)">¿Olvidaste tu contraseña?</a>
            <button 
            onClick={handleLogin}
            className="text-md cursor-pointer bg-(--color-violet-blue) text-(--color-fondos-oscuros) w-[40%] box-border px-2 py-1 rounded-md"
            disabled={loading}
            >{loading ? 'Ingresando...' : 'Iniciar sesión'}</button>
            </div>
            {error && <p className="text-red-600 text-xs">{error}</p>}
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