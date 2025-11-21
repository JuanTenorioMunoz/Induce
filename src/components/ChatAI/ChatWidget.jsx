import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import ChatBubble from "./ChatBubble";
import ChatOption from "./ChatOption";
import iconChat from "../../assets/iconChat.svg";
import send from "../../assets/send.svg";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "¡Hola! Soy DUCI, el asistente virtual de Induce. ¿En qué puedo ayudarte hoy?",
      options: [
        "Ver vacantes recomendadas",
        "Información de mi perfil profesional",
        "Ver oportunidades en modalidad remota",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null);

  const ChatWidgetConfig = {
    webhook: {
      url: "http://localhost:3005/webhook/f4c08642-2017-4d9e-b8b5-5939faf9183c/chat",
      route: "general",
    },
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const getChatId = () => {
    let chatId = sessionStorage.getItem("chatId");
    if (!chatId) {
      chatId = "chat_" + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem("chatId", chatId);
    }
    return chatId;
  };

  const sendMessage = async (msgText) => {
    if (!msgText.trim()) return;
    const userMessage = { from: "user", text: msgText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const chatId = getChatId();
      const res = await fetch(ChatWidgetConfig.webhook.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatId,
          id: 84,
          message: msgText,
          route: ChatWidgetConfig.webhook.route,
        }),
      });

      const data = await res.json();
      const botText = data.output || "No entendí eso, ¿puedes repetirlo?";
      setMessages((prev) => [...prev, { from: "bot", text: botText }]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Error de conexión. Intenta de nuevo más tarde.",
        },
      ]);
    }
  };

  const handleOptionClick = (option) => {
    sendMessage(option);
  };

  const lastMsg = messages[messages.length - 1];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-primary text-[var(--color-text)]">
      {!isOpen && (
        <img
          src={iconChat}
          alt="Chat icon"
          onClick={() => setIsOpen(true)}
        />
      )}

      {isOpen && (
        <div className="flex flex-col w-[360px] h-[520px] rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.08)] overflow-hidden border border-[var(--color-neutral)] bg-[var(--color-fullwhite)]">
          <div className="flex items-center justify-between p-3 bg-[var(--color-violet_blue)] text-[var(--color-fondo_blanco)] font-outfit text-lg">
            Asistente Virtual
            <button
              onClick={() => setIsOpen(false)}
              className="text-[var(--color-text)] text-sm px-2 py-1 rounded hover:bg-[var(--color-neutral)]"
            >
              ×
            </button>
          </div>

          <div
            ref={chatBodyRef}
            className="flex-1 px-4 py-4 overflow-y-auto flex flex-col gap-3 scroll-smooth"
          >
            {messages.map((msg, i) => (
              <ChatBubble key={i} msg={msg} />
            ))}

            {lastMsg.options && (
              <div className="flex flex-wrap gap-2 mt-2 items-start">
                {lastMsg.options.map((opt, i) => (
                  <ChatOption
                    key={i}
                    label={opt}
                    onClick={() => handleOptionClick(opt)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-[var(--color-neutral)] p-3 flex gap-2 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 border border-[var(--color-neutral)] rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-text)] placeholder-[var(--color-ligth-text)]"
            />
            <button
              onClick={() => sendMessage(input)}
              className="bg-[var(--color-primary)] text-white p-2 rounded-full hover:bg-[var(--color-secondary)] hover:text-[var(--color-text)] transition-all"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
