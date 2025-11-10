import InputText from "../../components/Input_text/InputText"
import Navbar from "../../components/Navbar/Navbar"
import RectanguleButton from "../../components/Rectangule_button/RectanguleButton"
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
        </div>
    )
}
export default Register