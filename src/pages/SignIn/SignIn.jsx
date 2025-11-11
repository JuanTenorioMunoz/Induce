
const SignIn = () => {
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
            titule="Iniciar sesión"
            ></Heading>
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
            <button 
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
            direction="#"
            text="¿No tienes cuenta?"
            button="Registrate"
            ></ButtonLink>
            </div>
        </div>
        </div>
    )
}
export default SignIn