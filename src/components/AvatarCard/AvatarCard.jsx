const AvatarCard = ({image, name, rol, lugar}) => {
    return(
        <div className="avatar-card-container flex flex-row items-center h-48 w-full border-2 border-[var(--color-violet-blue-200)]">
        <img
          src={image}
          alt={name}
          className="w-36 h-36 object-cover rounded-full"
        />
        <div className="avatar-card-text flex flex-col justify-center h-[100%] w-[80%] border-2 border-[var(--color-violet-blue-200)]">
            <p className="text-xl font-bold h-8 border-2 border-[var(--color-violet-blue-200)]">{name}</p>
            <p className="text-lg font-semibold h-8 border-2 border-[var(--color-violet-blue-200)]">{rol}</p>
            <p className="text-xs font-light h-8 border-2 border-[var(--color-violet-blue-200)]">{lugar}</p>
        </div>
            <div className="avatar-button h-[80%] flex flex-col justify-start">
            <button className="w-36 h-8 rounded-lg w-24 bg-[var(--color-chartreuse)]">Editar perfil</button>
            </div>
        </div>
    )
}
export default AvatarCard