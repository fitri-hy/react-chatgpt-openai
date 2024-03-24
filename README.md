# ReactJS Chatbot OpenAI

This simple ReactJS project that I created is an AI Chatbot that uses apiKey from OpenAI.
<img src="./Screenshot.png"/>
## Installation
```sh
git clone https://github.com/fitri-hy/react-chatgpt-openai.git
cd react-chatgpt-openai
npm install

//add what is needed
npm i react-markdown
```

## Components Only

Go to the `src` folder and copy the `components` folder and its contents to your react project.

**Impport components**

```sh
import HyTechAi from './components/HyTechAI';
```
**Call Component**

```sh
<HyTechAi apiKey="your apiKey" />
```
**Code Example (App.js)**
```
import HyTechAi from './components/HyTechAI';
import './App.css';

function App() {
  return (
    <>
      <HyTechAi apiKey="your apiKey" />
    </>
  );
}

export default App;
```
## Customization

| Atribute | Description |
|:---------|:-----------|
|apiKey=""|You can get apiKey on the official openAI website: <a href="https://openai.com/">GET API KEY</a>|
|aiModel=""|Required to use GPT-3 or GPT-4 models: <a href="https://platform.openai.com/docs/models/overview">View Models</a>|
|aiPrompt=""|You can give commands to your bot|
|aiName=""|Change your bot name|
|aiMessage=""|Greet the user before asking a question|
|senderName=""|Change user name|
|typingLoad=""|Changing text Bot is typing...|
|buttonText=""|Change the submit button text|

## Example Full Customization

```sh
<HyTechAi 
    apiKey="your apiKey"
    aiModel="gpt-3.5-turbo"
    aiPrompt="Kamu adalah Hytech-AI yang dikembangkan oleh Hy-Tech Group"
    aiName="Hytech-AI"
    aiMessage="Hello, I'm Hytech-AI, Ask me anything!"
    senderName="You"
    typingLoad="Hytech-AI is typing..."
    buttonText="Ask"
/>
```
## Change Appearance
You can change/customize the appearance in the `style.css` file


I didn't encrypt this repository for you to develop in it. If there are problems, please tell me the problem and I will fix it immediately, don't forget to give a star.

Hope it is useful,
Warm greetings from me.

Official Site: <a href="https://hy-tech.my.id/">VISIT</a>

