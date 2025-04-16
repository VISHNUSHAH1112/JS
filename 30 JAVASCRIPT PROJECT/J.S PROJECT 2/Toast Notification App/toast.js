const toastbox = document.getElementById("toastbox");

function start(type, message) {
  const toastDiv = document.createElement("div");

  toastDiv.classList.add("toast", type, "show");
  toastDiv.textContent = message;
  toastbox.appendChild(toastDiv);

  setTimeout(() => {
    toastDiv.remove();
  }, 3000);
}

document.getElementById("button-success").addEventListener("click", () => {
  start("success", "✅ Success");
});
document.getElementById("button-error").addEventListener("click", () => {
  start("error", "❌ Error");
});
document.getElementById("button-warning").addEventListener("click", () => {
  start("warning", "⚠️ Warning");
});
