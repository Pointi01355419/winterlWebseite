const snowContainer = document.body;
const toggleSnowButton = document.getElementById('toggle-snow');
const toggleMusicButton = document.getElementById('toggle-music');
const music = document.getElementById('christmas-music');

let snowing = true; // Variable für Schnee aktiv/inaktiv
let snowInterval; // Variable für den Schneefall-Interval
let musicPlaying = false; // Variable für Musik aktiv/inaktiv

// Funktion, um Schneeflocken zu generieren
function createSnowflake() {
    const snowflake = document.createElement('div'); // Schneeflocken-Element erstellen
    snowflake.classList.add('snowflake'); // Klasse hinzufügen
    snowflake.textContent = '❄️'; // Schneeflocken-Symbol
    snowflake.style.left = Math.random() * 100 + 'vw'; // Zufällige horizontale Position
    snowflake.style.animationDuration = Math.random() * 5 + 2 + 's'; // Zufällige Animationsdauer
    snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'rem'; // Unterschiedliche Größen für Schneeflocken
    snowContainer.appendChild(snowflake); // Schneeflocke ins DOM einfügen

    setTimeout(() => {
        snowflake.remove(); // Schneeflocke nach 5 Sekunden entfernen
    }, 5000);
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

// Musik starten bei erster Interaktion
function enableMusicOnInteraction() {
    music.play().catch((error) => {
        console.log('Musik konnte nicht automatisch gestartet werden. Warten auf Interaktion.');
    });
    document.removeEventListener('click', enableMusicOnInteraction); // Event entfernen
}

// Benutzerinteraktion, um Musik zu starten
document.addEventListener('click', enableMusicOnInteraction);

// Schneefall automatisch starten
startSnow();
