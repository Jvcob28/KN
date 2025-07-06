// Таймер обратного отсчета
function updateTimer() {
    const weddingDate = new Date("2025-07-05T16:00:00").getTime();
    const now = new Date().getTime();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
}

// Обновляем таймер каждую минуту
setInterval(updateTimer, 60000);
updateTimer();

// Кнопка карты
document.getElementById("map-btn").addEventListener("click", function() {
    if(confirm("Открыть карту ресторана в Google Maps?")) {
        window.open("https://goo.gl/maps/example", "_blank");
    }
});

// Кнопка подтверждения
document.getElementById("rsvp-btn").addEventListener("click", function() {
    const name = prompt("Введите ваше имя:");
    if(name) {
        const guests = prompt("Сколько человек с вами придет?");
        if(guests) {
            alert(`Спасибо, ${name}! Мы ждем вас ${guests > 1 ? `и ваших ${guests} гостей` : ''} на нашей свадьбе!`);
            
            // Здесь можно добавить отправку данных на сервер
            // fetch('/api/rsvp', { method: 'POST', body: JSON.stringify({name, guests}) })
        }
    }
});

// Параллакс-эффект для фото
window.addEventListener("scroll", function() {
    const scrollPosition = window.pageYOffset;
    const photo = document.querySelector(".couple-photo");
    photo.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});