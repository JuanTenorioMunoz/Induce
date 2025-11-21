const AvatarCard = ({image, name, rol, lugar}) => {
    return(
        <div className="avatar-card-container flex flex-row space-x-4 items-center h-30 w-full">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-full"
        />
        <div className="avatar-card-text flex flex-col justify-center h-full w-[80%]">
            <p className="text-xl font-bold h-8">{name}</p>
            <p className="text-lg font-semibold h-8">{rol}</p>
            <p className="text-xs font-light h-8">{lugar}</p>
        </div>
            <div className="avatar-button h-[80%] flex flex-col justify-start">
            <button className="h-8 rounded-lg w-24 bg-(--color-chartreuse)">Editar perfil</button>
            </div>
        </div>
    )
}
export default AvatarCard