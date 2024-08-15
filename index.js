// script.js

// Fecha de destino para el contador regresivo
const targetDate = new Date("December 21, 2024 16:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Cálculo de días, horas, minutos y segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Mostrar los resultados en los elementos correspondientes
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Si el contador ha llegado a cero
    if (difference < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "<h2>¡El tiempo ha terminado!</h2>";
    }
}
function redirectToMaps(){
    var latitude = 14.703807542803924;
    var longitude = -91.99745658015914;
    var mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.location.href = mapsUrl;
}

function redirectToLink() {
    var url = "https://onelifesocial.page.link/ZYJg";
    window.location.href = url;
}

// Actualizar el contador cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);
