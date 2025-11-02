
import sendIcon from "../../assets/send.svg"; 

const ChatSendButton = ({ disabled, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-[40px] h-[40px] bg-[var(--color-primary)] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Send message"
    >
      <img
        src={sendIcon}
        alt="Send"
        className="w-[18px] h-[18px] invert brightness-0"
      />
    </button>
  );
};

export default ChatSendButton;
