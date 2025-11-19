import Sidebar from "../../components/Sidebar/Sidebar";
import UserProfileContainer from "../../components/UserProfileContainer/UserProfileContainer";
import AvatarCard from "../../components/AvatarCard/AvatarCard";

const Profile = () => {
  return (
    <div className="flex flex-row h-screen w-full bg-(--color---color-fondo-blanco)">
      <Sidebar />

      <div className="flex flex-col h-screen w-[80%] p-4 gap-4">

        <div className="flex flex-row items-center justify-between w-full py-4">
          <p className="font-bold text-2xl text-(--color-violet-blue)">
            Mi perfil
          </p>
          <UserProfileContainer 
            image="https://i.pinimg.com/1200x/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.jpg" 
            name="Ana María Muñoz" 
            label="Diseñadora UX/UI"
          />
        </div>

        <div className="w-full h-[25%] rounded-2xl px-4 bg-(--color-alice-blue) shadow-sm">
          <AvatarCard
            image="https://i.pinimg.com/1200x/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.jpg"
            name="Ana María Muñoz"
            rol="Diseñador UX/UI"
            lugar="Cali, Colombia"
          />
        </div>






      </div>
    </div>
  );
};

export default Profile;

