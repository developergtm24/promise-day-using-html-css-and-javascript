const openingScreen = document.getElementById('openingScreen');
const mainContent = document.getElementById('mainContent');
const crushNameInput = document.getElementById('crushName');
const startButton = document.getElementById('startButton');
const displayName = document.getElementById('displayName');
const message = document.getElementById('message');
const promiseButton = document.getElementById('promiseButton');
const loveEffect = document.querySelector('.love-effect');
const crushImage = document.getElementById('crushImage');

const messages = [
    "I promise to always make you smile. 😊",
    "I promise to stand by you, no matter what. 💪",
    "I promise to love you more every day. 💕",
    "I promise to be your biggest supporter. 🌟",
    "I promise to cherish every moment with you. ⏳",
];

// Function to show random message
function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
}

// Function to create love effect (emojis)
function createLoveEffect() {
    const emojis = ["💖", "😍", "💌", "🥰", "💕", "💘", "💓", "💞"];
    for (let i = 0; i < 50; i++) { // Increase number of emojis
        const span = document.createElement('span');
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDuration = Math.random() * 3 + 2 + 's';
        loveEffect.appendChild(span);
    }
}

// Function to shake the button
function shakeButton() {
    startButton.classList.add('shake');
    setTimeout(() => {
        startButton.classList.remove('shake');
    }, 500);
}

// Start button click event
startButton.addEventListener('click', () => {
    const name = crushNameInput.value.trim();
    if (name) {
        displayName.textContent = name;
        openingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        showRandomMessage();
        // Set crush image dynamically (you can replace the URL with the actual image)
        crushImage.querySelector('img').src = `https://via.placeholder.com/200?text=${name}`;
    } else {
        shakeButton();
        alert("Please enter your crush's name!");
    }
});

// Promise button click event
promiseButton.addEventListener('click', () => {
    showRandomMessage();
    const heart = document.getElementById('heart');
    heart.style.boxShadow = '0 0 20px 10px #ff4d4d';
    setTimeout(() => {
        heart.style.boxShadow = 'none';
    }, 1000);
});

// Create love effect on page load
createLoveEffect();