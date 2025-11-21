import { useState, useEffect } from "react";
import ChatAI from './../../components/ChatAI/ChatAI';
import Sidebar from '../../components/Sidebar/Sidebar';
import { getUserProfileInfo } from "../../utils/supabaseUtils";

const Curriculum = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userProfile = await getUserProfileInfo();
      if (userProfile) {
        setUserId(userProfile.id || userProfile.auth_id);
      }
    };
    fetchUser();
  }, []);

  if (!userId) return <div>Cargando usuario...</div>;

  return (
    <>
      <div className='flex flex-row gap-3'>
        <Sidebar></Sidebar>
        
        <ChatAI></ChatAI>
      </div>
    </>
  );
};

export default Curriculum;
