import { useState, useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import ChatOption from "./ChatOption";
import ChatTextInput from "./ChatTextInput";
import ChatSendButton from "./ChatSendButton";

const ChatAI = ({ userId }) => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hola, soy el asistente virtual de Induce. ¿En qué puedo ayudarte hoy?",
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

  const getChatId = () => {
    return `chat_${userId}`;
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
          id: userId, 
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
        { from: "bot", text: "Error de conexión. Intenta de nuevo más tarde." },
      ]);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOptionClick = (option) => sendMessage(option);
  const lastMsg = messages[messages.length - 1];

  return (
    <div className="flex flex-col min-h-screen bg-(--color-fondo-blanco) font-primary text-(--color-text) p-4">
      <p className="font-bold text-2xl text-(--color-violet-blue) my-5">Mi Currículum</p>

      <div className="flex flex-col w-full max-w-[740px] h-[80vh] sm:h-[750px] bg-(--color-fondo_blanco) rounded-[14px] border-t border-[#0000001a] overflow-hidden shadow-md">
        <div
          ref={chatBodyRef}
          className="flex-1 px-4 py-3 overflow-y-auto flex flex-col gap-3 justify-end scroll-smooth"
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

        <section className="flex items-center gap-3 p-3 border-t border-[#0000001a] bg-(--color-fondo_blanco)">
          <div className="flex-1">
            <ChatTextInput
              value={input}
              onChange={setInput}
              onSubmit={() => sendMessage(input)}
            />
          </div>
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
