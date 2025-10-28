import React from "react";

const ChatTextInput = ({ value, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="relative self-stretch w-full h-[66.22px]"
    >
      <div className="absolute inset-0 bg-gray-50 rounded-2xl border-[1.11px] border-solid border-[#0000001a]">
        <label htmlFor="chat-input" className="sr-only">
          Escribe tus preguntas aquí
        </label>

        <input
          id="chat-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Escribe tus preguntas aquí..."
          className="absolute top-[10px] left-[13px] w-[560px] h-10 bg-transparent border-none outline-none text-[var(--color-text)] text-sm "
          aria-label="Chat input"
        />
      </div>
    </form>
  );
};

export default ChatTextInput;
