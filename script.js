function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatArea = document.querySelector(".chat-area");

  // User message
  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "user-message");
  userMessage.textContent = `User: ${userInput.value}`;
  chatArea.appendChild(userMessage);

  // Scroll to the bottom of the chat area
  chatArea.scrollTop = chatArea.scrollHeight;

  // Simulate bot reply
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    botMessage.textContent = "Bot: Thank you for your message!";
    chatArea.appendChild(botMessage);

    // Scroll to the bottom of the chat area
    chatArea.scrollTop = chatArea.scrollHeight;
  }, 1000);

  // Clear user input
  userInput.value = "";
}
