const snowContainer = document.body;
const toggleSnowButton = document.getElementById('toggle-snow');
const toggleMusicButton = document.getElementById('toggle-music');
const music = document.getElementById('christmas-music');

let snowing = true; // Variable für Schnee aktiv/inaktiv
let snowInterval; // Variable für den Schneefall-Interval
let musicPlaying = true; // Variable für Musik aktiv/inaktiv

// Funktion, um Schneeflocken zu generieren
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.innerHTML = '❄️';
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000); // Schneeflocken nach 5 Sekunden entfernen
}

// Funktion, um den Schneefall zu starten
function startSnow() {
    snowInterval = setInterval(() => {
        if (snowing) {
            createSnowflake();
        }
    }, 200); // Alle 200ms eine Schneeflocke
}

// Funktion, um den Schneefall zu stoppen
function stopSnow() {
    clearInterval(snowInterval);
}

// Event-Listener für den Schneefall-Button
toggleSnowButton.addEventListener('click', () => {
    snowing = !snowing; // Zustand umkehren
    if (snowing) {
        startSnow();
        toggleSnowButton.textContent = 'Schnee Anhalten';
    } else {
        stopSnow();
        toggleSnowButton.textContent = 'Schnee Starten';
    }
});

// Event-Listener für den Musik-Button
toggleMusicButton.addEventListener('click', () => {
    if (musicPlaying) {
        music.pause(); // Musik pausieren
        toggleMusicButton.textContent = 'Musik Starten'; // Buttontext ändern
    } else {
        music.play(); // Musik abspielen
        toggleMusicButton.textContent = 'Musik Anhalten'; // Buttontext ändern
    }
    musicPlaying = !musicPlaying; // Status umkehren
});

// Musik automatisch abspielen beim Laden der Seite
window.addEventListener('load', () => {
    music.play().catch((error) => {
        console.error('Automatische Musik konnte nicht gestartet werden:', error);
    });
});

// Schneefall automatisch starten
startSnow();
