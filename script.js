function toggleChat() {
  const chat = document.getElementById("ai-chat");
  chat.classList.toggle("active");
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (!msg) return;

  const chat = document.getElementById("chatBox");
  chat.innerHTML += `<div class="msg user">${msg}</div>`;
  chat.scrollTop = chat.scrollHeight;

  // Tu możesz podpiąć API OpenAI jeśli chcesz
  setTimeout(() => {
    chat.innerHTML += `<div class="msg ai">Dziękujemy za wiadomość 💬</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 800);

  input.value = "";
}

function copyEmail() {
  navigator.clipboard.writeText("kontakt@velurea.pl").then(() => {
    alert("Skopiowano e-mail!");
  });
}
