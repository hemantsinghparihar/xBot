import React from "react";
import { useForm } from "react-hook-form";

const ChatInput = ({ onSendMessage }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleSend = (data) => {
    if (data.message.trim()) {
      onSendMessage(data.message);
      reset(); // Clear the form after sending
    }
  };

  return (
    <div className="chat-input ">
      <form onSubmit={handleSubmit(handleSend)} className="form">
        <input
          type="text"
          {...register("message", { required: true })}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatInput;
