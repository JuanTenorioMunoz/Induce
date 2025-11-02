import SearchBar from "../../components/SearchBar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";


const Profile = () => {
    return(
        <div className="profile-page-container flex flex-row h-screen w-full">
        <Sidebar />
        <div className="profile-container flex flex-col h-screen w-full">
        <SearchBar />
        </div>
        </div>
    )
}

export default Profile;