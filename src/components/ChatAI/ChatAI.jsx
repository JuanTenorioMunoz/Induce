import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react"; 

const ChatAI = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "¡Hola! Soy DUCI, el asistente virtual de Induce. ¿En qué puedo ayudarte hoy?",
      options: [
        "¿Cómo empezar?",
        "¿Dónde veo las vacantes?",
        "Contactar asesor",
        "¿Cómo postularme a una vacante?",
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
        { from: "bot", text: "⚠️ Error de conexión. Intenta de nuevo más tarde." },
      ]);
    }
  };

  const handleOptionClick = (option) => {
    sendMessage(option);
  };

  return (
    <div className="fixed bottom-5 right-5 font-primary text-gray-900">
      <div className="flex flex-col w-[420px] h-[550px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-[#6B4EFF] text-white px-5 py-4 flex items-center gap-2">
          <span className="text-base font-semibold">DUCI - Asistente Virtual</span>
        </div>

        <div
          ref={chatBodyRef}
          className="flex-1 px-4 py-4 overflow-y-auto flex flex-col gap-3 scroll-smooth"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                msg.from === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[80%] ${
                  msg.from === "user"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-[#F4F1FF] text-gray-900"
                }`}
              >
                {msg.text}
              </div>

              {msg.options && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {msg.options.map((opt, j) => (
                    <button
                      key={j}
                      onClick={() => handleOptionClick(opt)}
                      className="px-3 py-1 text-xs rounded-full border border-[#6B4EFF] text-[#6B4EFF] hover:bg-[#6B4EFF] hover:text-white transition-all"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 p-3 flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Escribe tu mensaje..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6B4EFF]"
          />
          <button
            onClick={() => sendMessage(input)}
            className="bg-[#6B4EFF] text-white p-2 rounded-full hover:bg-[#583BDB] transition-all"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAI;
