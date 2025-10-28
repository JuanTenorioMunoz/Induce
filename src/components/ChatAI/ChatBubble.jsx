import ReactMarkdown from "react-markdown";
import ChatBot from "../../assets/ChatBot.svg";
import UserPic from "../../assets/UserPic.svg";

const ChatBubble = ({ msg }) => {
  const isUser = msg.from === "user";

  return (
    <div
      className={`flex items-start gap-2 mb-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <img
          src={ChatBot}
          alt="Bot"
        />
      )}

      <div
        className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[80%] ${
          isUser
            ? "bg-[var(--color-violet_blue_lighter)] text-[var(--color-texto_principal)]"
            : "bg-[var(--color-white)] text-[var(--color-texto_principal)]"
        }`}
      >
        {isUser ? msg.text : <ReactMarkdown>{msg.text}</ReactMarkdown>}
      </div>

      {isUser && (
        <img
          src={UserPic}
          alt="User"
        />
      )}
    </div>
  );
};

export default ChatBubble;
