const weddingDate = new Date('May 1, 2027 10:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff < 0) return;

  document.getElementById('days').textContent =
    Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById('hours').textContent =
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById('minutes').textContent =
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById('seconds').textContent =
    Math.floor((diff % (1000 * 60)) / 1000);
}

updateCountdown();
setInterval(updateCountdown, 1000); // update every second