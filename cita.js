const noBtn = document.getElementById("no");

const phrases = [
  "No. ashhh",
  "¿Segura? ¡ojito!",
  "¿Muy segura? cansona",
  "Piénsalo bien. jummmmm",
  "No puedes escapar, nao nao",
  "Error 404 jeje",
];

let count = 0;

noBtn.addEventListener("click", () => {
  const container = noBtn.parentElement;

  const maxX = container.clientWidth - noBtn.offsetWidth;

  const maxY = container.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  if (count < phrases.length - 1) {
    count++;
    noBtn.textContent = phrases[count];
  }
});
document.getElementById("yes").addEventListener("click", () => {
  alert("❤️ Cita confirmada ❤️");
});
