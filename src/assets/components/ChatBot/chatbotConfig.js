import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";

const chatbotConfig = {
  botName: "BikeBot",
  initialMessages: [
    createChatBotMessage(
      "Olá, eu sou o mascote da Vireon! Como posso te ajudar hoje?"
    ),
  ],
  customComponents: {
    botAvatar: BotAvatar,
  },
};

export default chatbotConfig;
