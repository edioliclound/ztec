document.addEventListener('DOMContentLoaded', () => {
  const openChatBtn = document.getElementById('open-chat-btn');
  const chatBtnContainer = document.getElementById('chat-btn-container');
  const chatbotWidget = document.getElementById('chatbot-widget');
  const closeChatBtn = document.getElementById('close-chat');
  const sendChatBtn = document.getElementById('send-chat');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotMessages = document.getElementById('chatbot-messages');

  // Abrir y Cerrar Chat
  if (openChatBtn && chatBtnContainer) {
    openChatBtn.addEventListener('click', () => { chatbotWidget.style.display = 'flex'; chatBtnContainer.style.display = 'none'; chatbotInput.focus(); });
  }
  if (closeChatBtn) {
    closeChatBtn.addEventListener('click', () => { chatbotWidget.style.display = 'none'; chatBtnContainer.style.display = 'flex'; });
  }

  // Mostrar mensaje en la pantalla
  function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    // Reemplazar saltos de línea con <br> para que el bot pueda enviar listas
    msgDiv.innerHTML = text.replace(/\n/g, '<br>');
    chatbotMessages.appendChild(msgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Función principal para enviar al Backend
  async function sendMessage() {
    const text = chatbotInput.value.trim();
    if (!text) return;
    appendMessage(text, 'user');
    chatbotInput.value = '';
    
    const typingId = 'typing-' + Date.now();
    chatbotMessages.insertAdjacentHTML('beforeend', `<div class="typing-indicator" id="${typingId}" style="display:block;">Ztec IA está escribiendo...</div>`);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    try {
      // Llama al servidor local de Flask
      const response = await fetch('http://127.0.0.1:5000/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text }) });
      const data = await response.json();
      document.getElementById(typingId).remove();
      appendMessage(data.response || 'Lo siento, no tengo respuesta en este momento.', 'bot');
    } catch (error) {
      document.getElementById(typingId).remove();
      appendMessage('⚠️ No pude conectar. ¿Aseguraste que el archivo app.py está ejecutándose en la consola?', 'bot');
    }
  }

  if (sendChatBtn) sendChatBtn.addEventListener('click', sendMessage);
  if (chatbotInput) chatbotInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
});