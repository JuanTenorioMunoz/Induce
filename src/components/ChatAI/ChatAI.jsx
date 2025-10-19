
import { useState, useEffect, useRef } from "react";

const ChatAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null);

  const ChatWidgetConfig = {
    webhook: {
      url: "http://localhost:3005/webhook/f4c08642-2017-4d9e-b8b5-5939faf9183c/chat",
      route: "general",
    },
    style: {
      primaryColor: "#854fff",
      secondaryColor: "#6b3fd4",
      position: "right",
      backgroundColor: "#ffffff",
      fontColor: "#333333",
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

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const chatId = getChatId();

      const res = await fetch(ChatWidgetConfig.webhook.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatId,
          message: input,
          route: ChatWidgetConfig.webhook.route,
        }),
      });

      const data = await res.json();
      const botText = data.output || "Sorry, I couldn't understand that.";
      setMessages((prev) => [...prev, { from: "bot", text: botText }]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Network error. Please try again later." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 font-[Geist Sans]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#854fff] text-white w-[50px] h-[50px] rounded-full text-2xl flex items-center justify-center shadow-lg hover:bg-[#6b3fd4] transition-all duration-200"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="flex flex-col w-[350px] h-[500px] bg-white rounded-xl shadow-xl overflow-hidden z-50 animate-fadeIn">
          <div className="bg-[#854fff] text-white px-5 py-4 flex justify-between items-center text-lg font-semibold">
            <span>Chat</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-xl"
            >
              ✖
            </button>
          </div>

          <div
            ref={chatBodyRef}
            className="flex-1 px-5 py-4 overflow-y-auto space-y-3"
          >
            {messages.map((msg, i) => (
              <p
                key={i}
                className={`p-3 rounded-lg text-sm max-w-[80%] break-words ${
                  msg.from === "user"
                    ? "bg-gray-100 text-gray-800 self-end ml-auto"
                    : "bg-[#854fff] text-white self-start"
                }`}
              >
                {msg.text}
              </p>
            ))}
          </div>

          <div className="border-t border-gray-200 p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message here..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#854fff]"
            />
            <button
              onClick={sendMessage}
              className="bg-[#854fff] text-white px-4 py-2 rounded-lg hover:bg-[#6b3fd4] transition-all duration-200"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAI;
