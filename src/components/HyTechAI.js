import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import './style.css';

function HyTechAi({
		apiKey = "Your apiKey",
		aiModel = "gpt-3.5-turbo",
		aiPrompt = "You are Hytech-AI developed by Hy-Tech Group",
		aiName = "Hytech-AI",
		aiMessage = "Hello, I'm Hytech-AI, Ask me anything!",
		senderName = "You",
		typingLoad = "Hytech-AI is typing...",
		buttonText = "Ask"
	}) {
	const API_KEY = apiKey;
	const [messages, setMessages] = useState([
		{
		message: aiMessage,
		sentTime: "just now",
		sender: aiName,
		},
	]);
	const listRef = useRef(null);
	useEffect(() => {
		listRef.current?.lastElementChild?.scrollIntoView()
	}, [messages]);
	const [isTyping, setIsTyping] = useState(false);
	useEffect(() => {
		async function fetchData() {
		  try {
			const response = await processMessageToHytechAI(messages);
			const content = response.choices[0]?.message?.content;
			if (content) {
			  const chatAIResponse = {
				message: content,
				sender: aiName,
			  };
			  setMessages([...messages, chatAIResponse]);
			}
		  } catch (error) {
			console.error("Error processing message:", error);
		  } finally {
			setIsTyping(false);
		  }
		}
		if (isTyping) {
		  fetchData();
		}
	}, [isTyping, messages]);
	const handleSendMessage = (message) => {
		const newMessage = {
		message,
		direction: 'outgoing',
		sender: senderName,
		};
		setMessages([...messages, newMessage]);
		setIsTyping(true);
	};
  async function processMessageToHytechAI(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
		const role = messageObject.sender === "HytechAI" ? "assistant" : "user";
		return { role, content: messageObject.message };
    });
    const apiRequestBody = {
      "model": aiModel,
      "messages": [
        { role: "system", content: aiPrompt },
        ...apiMessages,
      ],
    };
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });
    return response.json();
  }
  return (
    <>
      <div className="base-container">
        {messages.map((message, index) => (
          <div ref={listRef} key={index} className={`message-container ${message.sender}`}>
			<div className={message.sender === senderName ? "user" : "HytechAI"}>
			  <p className={message.sender === senderName ? "sender-HytechAI" : "sender-user"}>{message.sender}</p>
			  <div className={message.sender === senderName ? "message-box-user" : "message-box-HytechAI"}>
				<ReactMarkdown>{message.message}</ReactMarkdown>
			  </div>
			</div>
		  </div>
        ))}
        {isTyping && <div className="typing-message">{typingLoad}</div>}
        <form className="message-form" onSubmit={(e) => {
          e.preventDefault();
          const message = e.target.elements.message.value;
          e.target.elements.message.value = "";
          handleSendMessage(message);
        }}>
		  <div className="hytech-ai-main">
          <textarea className="text-input" name="message"></textarea>
          <button className="send-button" type="submit">{buttonText}</button>
		  </div>
        </form>
      </div>
    </>
  );
}
export default HyTechAi;