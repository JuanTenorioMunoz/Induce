
import SendIcon from "../../assets/send.svg"; 

const ChatSendButton = ({ disabled, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Send message"
    >
      <img
        src={SendIcon}
        alt="Send"
      />
    </button>
  );
};

export default ChatSendButton;
