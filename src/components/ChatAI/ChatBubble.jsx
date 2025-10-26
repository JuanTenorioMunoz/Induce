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
            className="p-3 rounded-2xl text-sm leading-relaxed max-w-[80%] bg-[var(--color-neutral)] text-[var(--color-text)] mb-2"
          >
            <ReactMarkdown>{section}</ReactMarkdown>
          </div>
        ))
      ) : (
        <div className="p-3 rounded-2xl text-sm leading-relaxed max-w-[80%] bg-[var(--color-secondary)] text-[var(--color-text)]">
          {msg.text}
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
