import ButtonLink from "../../components/ButtonLink/ButtonLink"
import InputText from "../../components/Input_text/InputText"
import Navbar from "../../components/Navbar/Navbar"
import RectanguleButton from "../../components/Rectangule_button/RectanguleButton"
import Titule from "../../components/Titule/Titule"

const Register = () => {
    return(
        <div className="bg-(--color-background-alice-blue">
        <Navbar></Navbar>
        <InputText
        label="Input"
        Placeholder="placeholder"
        IconLeft="person-fill"
        IconRight="bi bi-question-circle"
        ></InputText>
        <RectanguleButton
        icon="google"
        text="Sign in with Google"
        >
        </RectanguleButton>
        <ButtonLink
        direction="#"
        text="¿Ya tienes cuenta?"
        button="Inicia sesión"
        ></ButtonLink>
        <Titule
        titule="Bienvenido/a a Induce!"
        ></Titule>
        </div>
    )
}
export default Register