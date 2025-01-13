import React, { useState } from "react";
import ChatInput from "../components/ChatInput";
import ChatWindow from "../components/ChatWindow";

const Home = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "I received: " + text }]);
    }, 1000);
  };

  return (
    <div className="app">
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default Home
