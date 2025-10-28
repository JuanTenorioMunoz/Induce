import React from "react";
import { Send } from "lucide-react";

const ChatSendButton = ({ disabled, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="absolute top-[16px] right-[16px] w-[32.4px] h-[32.4px] bg-[var(--color-primary)] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Send message"
    >
      <Send size={16} className="text-white" />
    </button>
  );
};

export default ChatSendButton;
