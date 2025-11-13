<!-- Chat Widget -->
<style>
  /* Floating chat button */
  #chat-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 26px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    z-index: 9999;
  }

  /* Chat window */
  #chat-window {
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 320px;
    max-height: 450px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    display: none;
    flex-direction: column;
    overflow: hidden;
    z-index: 9999;
  }

  #chat-header {
    background: #4f46e5;
    color: white;
    padding: 12px;
    font-size: 16px;
  }

  #chat-messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    font-size: 14px;
  }

  #chat-input-container {
    display: flex;
    border-top: 1px solid #ddd;
  }

  #chat-input {
    flex: 1;
    border: none;
    padding: 10px;
    font-size: 14px;
    outline: none;
  }

  #send-btn {
    background: #4f46e5;
    color: white;
    border: none;
    padding: 10px 16px;
    cursor: pointer;
  }
</style>

<div id="chat-window">
  <div id="chat-header">AI Chat</div>
  <div id="chat-messages"></div>
  <div id="chat-input-container">
    <input id="chat-input" type="text" placeholder="Type a message..." />
    <button id="send-btn">Send</button>
  </div>
</div>

<button id="chat-button">💬</button>

<script>
  const chatButton = document.getElementById('chat-button');
  const chatWindow = document.getElementById('chat-window');
  const sendBtn = document.getElementById('send-btn');
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');

  chatButton.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
  });

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    appendMessage('You', text);
    input.value = '';
    // Placeholder for LLM reply
    setTimeout(() => appendMessage('Bot', 'This is a mock reply!'), 600);
  }

  function appendMessage(sender, text) {
    const div = document.createElement('div');
    div.innerHTML = `<b>${sender}:</b> ${text}`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }
</script>
