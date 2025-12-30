const input = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

function appendOutgoingMessage(text) {
  if (!text.trim()) return;

  const chatBody = document.querySelector(".chat-body");
  const row = document.createElement("div");
  row.className = "message-row self";

  const bubble = document.createElement("div");
  bubble.className = "message-bubble outgoing";
  bubble.textContent = text;

  const meta = document.createElement("div");
  meta.className = "message-meta";
  const time = document.createElement("span");
  const now = new Date();
  time.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const read = document.createElement("span");
  read.className = "read-indicator";
  read.textContent = "✓";
  meta.appendChild(time);
  meta.appendChild(read);

  bubble.appendChild(meta);
  row.appendChild(bubble);
  chatBody.appendChild(row);
  chatBody.scrollTop = chatBody.scrollHeight;
}

sendBtn?.addEventListener("click", () => {
  appendOutgoingMessage(input.value);
  input.value = "";
});

input?.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    appendOutgoingMessage(input.value);
    input.value = "";
  }
});


