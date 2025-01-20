const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

 const chatbot = document.getElementById("chatbot");
    const chatbotBody = document.getElementById("chatbot-body");

    function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    // Toggle visibility
    if (chatbot.style.display === 'block') {
      chatbot.style.display = 'none';
    } else {
      chatbot.style.display = 'block';
    }
  }
function sendMessage() {
  const inputField = document.getElementById("chatbot-input");
  const chatbotBody = document.getElementById("chatbot-body");
  const userMessage = inputField.value.trim();

  if (!userMessage) return; // Prevent empty messages from being sent

  // Display user message
  const userMessageElement = document.createElement("p");
  userMessageElement.className = "chatbot-message user-message";
  userMessageElement.textContent = userMessage;
  chatbotBody.appendChild(userMessageElement);

  // Generate chatbot response after a slight delay for realism
  setTimeout(() => {
    const chatbotResponse = generateResponse(userMessage);
    const botMessageElement = document.createElement("p");
    botMessageElement.className = "chatbot-message bot-message";
    botMessageElement.textContent = chatbotResponse;
    chatbotBody.appendChild(botMessageElement);

    // Scroll to the bottom of the chat body to show the latest message
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }, 500);

  // Clear input field for new messages
  inputField.value = "";
}


    

  function generateResponse(message) {
  if (message.toLowerCase().includes("loans")) {
    return "Here is the link to our loans page: https://example.com/loans";
  } else if (message.toLowerCase().includes("credit card")) {
    return "Learn more about our credit cards here: https://example.com/credit-cards";
  } else {
    return "I'm sorry, I couldn't understand your query. Please try again.";
  }
}


  function handleInput(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}