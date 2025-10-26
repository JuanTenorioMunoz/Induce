const ChatOption = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 text-xs rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all"
    >
      {label}
    </button>
  );
};

export default ChatOption;
