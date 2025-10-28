import ReactMarkdown from "react-markdown";

const ChatBubble = ({ msg }) => {
  return (
    <div
      className={`flex flex-col ${
        msg.from === "user" ? "items-end" : "items-start"
      }`}
    >
      {msg.from === "bot" ? (
        msg.text.split(/\n(?=\*\*)/).map((section, i) => (
          <div
            key={i}
            className="p-3 rounded-2xl text-sm leading-relaxed max-w-[80%] bg-[var(--color-secondary)] text-[var(--color-texto_principal)] mb-2"
          >
            <ReactMarkdown>{section}</ReactMarkdown>
          </div>
        ))
      ) : (
        <div className="p-3 rounded-2xl text-sm leading-relaxed max-w-[80%] bg-[var(--color-violet_blue_lighter)] text-[var(--color-texto_principal)]">
          {msg.text}
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
