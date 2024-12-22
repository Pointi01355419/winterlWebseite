const snowContainer = document.body;
const toggleSnowButton = document.getElementById('toggle-snow');
const toggleMusicButton = document.getElementById('toggle-music');
const music = document.getElementById('christmas-music');

let snowing = true;
let musicPlaying = true;

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
    }, 5000);
}

// Schneeflocken-Animation starten
const snowInterval = setInterval(() => {
    if (snowing) createSnowflake();
}, 200);

// Musik starten
music.play();

// Knopf zum Ein-/Ausschalten des Schneefalls
toggleSnowButton.addEventListener('click', () => {
    snowing = !snowing;
    toggleSnowButton.textContent = snowing ? 'Schnee Anhalten' : 'Schnee Starten';
});

// Knopf zum Ein-/Ausschalten der Musik
toggleMusicButton.addEventListener('click', () => {
    if (musicPlaying) {
        music.pause();
    } else {
        music.play();
    }
    musicPlaying = !musicPlaying;
    toggleMusicButton.textContent = musicPlaying ? 'Musik Anhalten' : 'Musik Starten';
});
