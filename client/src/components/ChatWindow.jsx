import React from "react";

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message-container ${
            msg.sender === "user" ? "user-message" : "bot-message"
          }`}
        >
          <div className={`message-bubble ${msg.sender === "user" ? "right" : "left"}`}>
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
