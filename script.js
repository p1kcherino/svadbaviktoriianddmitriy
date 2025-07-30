// Устанавливаем дату события
const weddingDate = new Date("2025-09-02T00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days.toString();
  document.getElementById("hours").textContent = hours.toString();
  document.getElementById("minutes").textContent = minutes.toString();
  document.getElementById("seconds").textContent = seconds.toString();
}

// Обновляем таймер каждую секунду
updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
