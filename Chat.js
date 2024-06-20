
document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === '') {
            return;
        }

        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messageText;

        chatBox.appendChild(messageElement);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simulating a response
        setTimeout(() => {
            const responseElement = document.createElement('div');
            responseElement.className = 'message system-message';
            responseElement.textContent = 'This is an automated response.';
            chatBox.appendChild(responseElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
});
