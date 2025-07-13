import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import chatbotConfig from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const MeuChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado do chatbot
  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Botão flutuante com a imagem do avatar */}
      <button
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#FFD400",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 10000,
          padding: 0,
        }}
      >
        <img
          src="/BicicletaReact/img/MascoteVireon2.png"
          alt="ChatBot"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </button>

      {/* Caixa do chatbot */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "350px",
            zIndex: 9999,
            boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <Chatbot
            config={chatbotConfig}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </>
  );
};

export default MeuChatBot;
