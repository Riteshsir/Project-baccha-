// =====================================
// Project Baccha ❤️
// script.js V1.1
// =====================================

const loadingScreen = document.getElementById("loadingScreen");
const home = document.getElementById("home");
const progress = document.querySelector(".progress");
const loadingText = document.getElementById("loadingText");

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

const messages = [
    "💌 Collecting our memories...",
    "🌸 Decorating with love...",
    "✨ Adding a little magic...",
    "❤️ Almost ready...",
    "🎁 Just one more second..."
];

let percent = 0;
let messageIndex = 0;

// ------------------------
// Loading Animation
// ------------------------

const loadingInterval = setInterval(() => {

    percent++;

    progress.style.width = percent + "%";

    if (percent % 20 === 0 && messageIndex < messages.length - 1) {
        messageIndex++;
        loadingText.innerHTML = messages[messageIndex];
    }

    if (percent >= 100) {

        clearInterval(loadingInterval);

        gsap.to(loadingScreen, {
            opacity: 0,
            duration: 1,
            onComplete: () => {

                loadingScreen.style.display = "none";

                home.style.display = "flex";

                gsap.to(home, {
                    opacity: 1,
                    duration: 1
                });

            }
        });

    }

}, 35);

// ------------------------
// Music
// ------------------------

let playing = false;

musicToggle.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicToggle.innerHTML = "🔊";

        playing = true;

    } else {

        music.pause();

        musicToggle.innerHTML = "🎵";

        playing = false;

    }

});

// ------------------------
// Sparkles
// ------------------------

const sparkleContainer = document.getElementById("sparkles");

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";

    sparkle.style.animationDuration =
        (2 + Math.random() * 3) + "s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 5000);

}

setInterval(createSparkle, 300);

// ------------------------
// Petals
// ------------------------

const petalContainer = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    petal.style.opacity =
        0.5 + Math.random() * 0.5;

    petalContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);

}

setInterval(createPetal, 450);

// ------------------------
// Floating Background
// ------------------------

gsap.to("#background", {

    backgroundPosition: "200% 200%",

    duration: 30,

    repeat: -1,

    yoyo: true,

    ease: "none"

});
