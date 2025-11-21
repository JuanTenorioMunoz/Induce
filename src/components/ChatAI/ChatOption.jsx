const ChatOption = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 bg-[var(--color-violet_blue_100)] text-[var(--color-violet_blue_500)] font-[Mulish] font-semibold text-sm rounded-md hover:text-black transition-all"
    >
      {label}
    </button>
  );
};

export default ChatOption;
