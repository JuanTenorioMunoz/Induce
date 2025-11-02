import { useState, useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import ChatOption from "./ChatOption";
import ChatTextInput from "./ChatTextInput";
import ChatSendButton from "./ChatSendButton";

const ChatAI = () => {
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
          id: 123,
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
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[var(--color-fondo_blanco)] font-primary text-[var(--color-text)]">
      <div className="mb-4 text-[var(--color-violet_blue)] font-outfit text-lg">
        Creador de CV con IA
      </div>

      <div className="flex flex-col w-[743px] h-[800px] bg-[var(--color-fondo_blanco)] rounded-[14px] border-t-[1.11px] border-[#0000001a] overflow-hidden shadow-sm">
        <div
          ref={chatBodyRef}
          className="flex-1 px-4 py-4 overflow-y-auto flex flex-col gap-3 justify-end scroll-smooth"
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

        <section className="flex items-center gap-2 p-4 border-t border-[#0000001a]">
          <ChatTextInput
            value={input}
            onChange={setInput}
            onSubmit={() => sendMessage(input)}
                />
          <ChatSendButton
            disabled={!input.trim()}
            onClick={() => sendMessage(input)}
          />
</section>

      </div>
    </div>
  );
};

export default ChatAI;
