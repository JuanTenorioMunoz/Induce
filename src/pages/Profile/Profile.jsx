import SearchBar from "../../components/SearchBar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserProfileContainer from "../../components/UserProfileContainer/UserProfileContainer";

const Profile = () => {
  return (
    <div className="profile-page-container flex flex-row h-screen w-full">
      <Sidebar />
      <div className="profile-container flex flex-col h-screen w-[80%] p-4 gap-4 bg-[var(--color-alice_blue)] border-2 border-[var(--color-violet-blue-200)]">
        <div className="flex flex-row items-center justify-between w-full bg-[var(--color-violet_blue_200)] p-4 rounded-xl border-2 border-[var(--color-violet-blue-200)]">
          <SearchBar />
          <UserProfileContainer 
            image="https://i.pinimg.com/1200x/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.jpg" 
            name="Ana María Muñoz" 
            label="Diseñadora UX/UI"
          />
        </div>
        <div className="flex flex-row w-full h-full gap-4 border-2 border-[var(--color-violet-blue-200)]">
          <div className="w-[80%] bg-[var(--color-violet_blue_400)] rounded-xl p-4">
            <p className="text-white font-semibold">Contenido principal</p>
          </div>
          <div className="w-[20%] bg-[var(--color-violet_blue_500)] rounded-xl p-4 border-2 border-[var(--color-violet-blue-200)]">
            <p className="text-white font-semibold">Panel lateral</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;