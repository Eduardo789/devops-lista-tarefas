const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const item = document.createElement("li");
  item.innerHTML = `
    <span>${text}</span>
    <button type="button">Concluir</button>
  `;

  item.querySelector("button").addEventListener("click", () => {
    item.remove();
  });

  list.appendChild(item);
  input.value = "";
  input.focus();
});
