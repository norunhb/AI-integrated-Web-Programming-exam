
 import openAI from openAI
 
 const apiKey = '1234'

const openai = new openAI({apiKey})

const message = [
    {
        role:"system",
        content: [
             { type: 'text', text: 'You are a helpfull assistant'}
                
            ]

    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    message:messages
})

console.log(response)

const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

function addMessage(content, sender) {
    const messageElement = document.createElement('div');
    messageElement.textContent = content;
    messageElement.classList.add('message', sender);
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;}

function sendMessage() {
    const message = messageInput.calue.trim();
    if (message) {
        addMessage(message, 'user');
        messageInput.value ='';

        setTimeout(() => {
            const botReply = 'Bot svarer:"${message}"';
            addMessage (botReply, 'bot');
            
        }) ;
    };
    
}sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    };
  });