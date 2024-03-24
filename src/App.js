import HyTechAi from './components/HyTechAI';
import './App.css';

function App() {
  return (
    <>
      <HyTechAi 
	  apiKey="you apikey"
	  aiModel="gpt-3.5-turbo"
	  aiPrompt="You are Hytech-AI developed by Hy-Tech Group"
	  aiName="Hytech-AI"
	  aiMessage="Hello, I'm Hytech-AI, Ask me anything!"
	  senderName="You"
	  typingLoad="Hytech-AI is typing..."
	  buttonText="Ask"
	/>
    </>
  );
}

export default App;
