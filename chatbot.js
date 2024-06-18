var questions = [{
    "id": 1,
    "question_content": "where is CSE Department?"
}];


function openChatPage() {
    // window.open('chat.html'); // Open chat.html in a new tab/window
    window.location.href = 'chat.html';
}

function closeChat() {
    window.location.href = 'index.html';
}

function sendMessage() {
    var userInput = document.getElementById('message-input').value;
    var chatContainer = document.getElementById('chat-messages');

    // Clear input
    document.getElementById('message-input').value = '';

    if (userInput.length > 0) {
        // Append user message
        var userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = userInput;
        chatContainer.appendChild(userMessage);

        // Check for department and respond accordingly
        var department = userInput.trim();
        var helpMessage = '';

        switch (department) {
            case 'How many faculty members are there in the CSE department?':
                helpMessage = '10';
                break;
            case 'How many faculty members are there in the EEE department??':
                helpMessage = '15';
                break;
            default:
                helpMessage = 'Sorry, I cannot assist with that department.';
        }

        // Append help message
        var helpResponse = document.createElement('div');
        helpResponse.className = 'message help-message';
        helpResponse.textContent = helpMessage;
        chatContainer.appendChild(helpResponse);

        // Scroll to bottom of chat
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}
