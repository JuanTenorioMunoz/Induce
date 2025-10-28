const ChatOption = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 text-xs rounded-full border border-[var(--color-violet_blue_light)] text-[var(--color-violet_blue_light)] hover:bg-[var(--color-primary)] hover:text-white transition-all"
    >
      {label}
    </button>
  );
};

export default ChatOption;
