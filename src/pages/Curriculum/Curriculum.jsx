import ChatAI from './../../components/ChatAI/ChatAI';
import Sidebar from '../../components/Sidebar/Sidebar';

const Curriculum = () => {
  
  return (
    <>
      <div className='flex flex-row'>
        <Sidebar></Sidebar>
        
        <ChatAI></ChatAI>
      </div>
    </>
  );
};

export default Curriculum;
