
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
            
        },1000) 
    }
    
}sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });