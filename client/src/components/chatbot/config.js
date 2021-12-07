// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Santa";

const config = {
  initialMessages: [
    createChatBotMessage(`Ho ho Ho Merry Christmas`),
    createChatBotMessage(
      "What is your name?",
      {
        widget: "airportSelector",
        delay: 500,
      }
    ),
  ],
  botName: "Santa",
}

export default config;