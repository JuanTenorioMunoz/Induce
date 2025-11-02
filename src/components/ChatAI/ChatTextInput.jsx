import React from "react";

const ChatTextInput = ({ value, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex-1"
    >
      <label htmlFor="chat-input" className="sr-only">
        Escribe tus preguntas aquí
      </label>
      <input
        id="chat-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribe tus preguntas aquí..."
        className="w-full h-[48px] px-4 rounded-2xl border border-[#0000001a] bg-gray-50 text-[var(--color-text)] text-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
      />
    </form>
  );
};

export default ChatTextInput;
