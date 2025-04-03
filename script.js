const chatBox = document.getElementById("chatBox");
let history = [];

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("user", message);
  input.value = "";

  // Dodaj wiadomość do historii
  history.push({ role: "user", content: message });

  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer SK-TWOJ-KLUCZ-TUTAJ"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: history
    })
  })
    .then(res => res.json())
    .then(data => {
      const reply = data.choices[0].message.content;
      appendMessage("ai", reply);
      history.push({ role: "assistant", content: reply });
    })
    .catch(err => {
      appendMessage("ai", "⚠️ Wystąpił błąd. Spróbuj ponownie.");
    });
}

function appendMessage(role, text) {
  const div = document.createElement("div");
  div.className = "msg " + role;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function copyEmail() {
  navigator.clipboard.writeText("kontakt@velurea.pl").then(() => {
    alert("Skopiowano adres e-mail!");
  });
}
