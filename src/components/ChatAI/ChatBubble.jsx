import ReactMarkdown from "react-markdown";

const ChatBubble = ({ msg, onOptionClick }) => {
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

      {msg.options && (
        <div className="flex flex-wrap gap-2 mt-2">
          {msg.options.map((opt, j) => (
            <button
              key={j}
              onClick={() => onOptionClick(opt)}
              className="px-3 py-1 text-xs rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
