document.addEventListener('DOMContentLoaded', () => {
  // 1. Definimos la estructura HTML directamente para que funcione en cualquier página
  const chatbotHTML = `
    <div id="chatbot-widget" class="chatbot-widget">
      <div class="chatbot-header">
        <span>Ztec IA Asistente</span>
        <button id="close-chat" class="close-chat">&times;</button>
      </div>
      <div class="chatbot-messages" id="chatbot-messages">
        <div class="message bot-message">¡Hola! Soy el asistente virtual de Ztec. ¿En qué te puedo ayudar hoy?</div>
      </div>
      <div class="chatbot-input-area">
        <input type="text" id="chatbot-input" placeholder="Escribe tu mensaje..." autocomplete="off" />
        <button id="send-chat" class="send-chat" title="Enviar">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
    </div>

    <div id="chat-btn-container" class="chat-btn-container">
      <div class="chat-tooltip">Hola soy tu asistente</div>
      <button id="open-chat-btn" class="open-chat-btn" title="Chatear con Inteligencia Artificial">
        <svg class="robot-icon" viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <circle cx="12" cy="2" r="1" fill="#0ad1e5" stroke="none" class="robot-antenna"></circle>
          <rect x="4" y="6" width="16" height="11" rx="3" fill="rgba(255,255,255,0.1)"></rect>
          <circle cx="12" cy="11.5" r="3.5"></circle>
          <circle class="robot-lens" cx="12" cy="11.5" r="1.5" fill="#0ad1e5" stroke="none"></circle>
          <path d="M8 17v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1"></path>
          <line x1="9" y1="23" x2="15" y2="23"></line>
        </svg>
      </button>
    </div>
  `;

  // 2. Inyectamos el HTML al final de la página actual
  document.body.insertAdjacentHTML('beforeend', chatbotHTML);

  // 3. Activamos la lógica
  initChatbotLogic();
});

function initChatbotLogic() {
  const openChatBtn = document.getElementById('open-chat-btn');
  const chatBtnContainer = document.getElementById('chat-btn-container');
  const chatbotWidget = document.getElementById('chatbot-widget');
  const closeChatBtn = document.getElementById('close-chat');
  const sendChatBtn = document.getElementById('send-chat');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotMessages = document.getElementById('chatbot-messages');

  // Abrir y Cerrar Chat
  if (openChatBtn && chatBtnContainer) {
    openChatBtn.addEventListener('click', () => { 
      chatbotWidget.style.display = 'flex'; 
      chatBtnContainer.style.display = 'none'; 
      chatbotInput.focus(); 
    });
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
}