// =====================================
// Project Baccha ❤️
// script.js V2.0
// =====================================

// ----------------------------
// Elements
// ----------------------------

const loadingScreen = document.getElementById("loadingScreen");
const home = document.getElementById("home");
const welcomeScreen = document.getElementById("welcomeScreen");

const progress = document.querySelector(".progress");
const loadingText = document.getElementById("loadingText");

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

const openButton = document.getElementById("openLetter");
const beginJourney = document.getElementById("beginJourney");

// ----------------------------
// Loading Screen
// ----------------------------

let percent = 0;
let messageIndex = 0;

const loadingInterval = setInterval(() => {

    percent++;

    progress.style.width = percent + "%";

    if (percent % 20 === 0 &&
        messageIndex < projectData.loadingMessages.length - 1) {

        messageIndex++;

        loadingText.textContent =
            projectData.loadingMessages[messageIndex];

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

// ----------------------------
// Music
// ----------------------------

music.volume = projectData.music.volume;

let musicPlaying = false;

musicToggle.addEventListener("click", () => {

    if (!musicPlaying) {

        music.play();

        musicToggle.textContent = "🔊";

        musicPlaying = true;

    } else {

        music.pause();

        musicToggle.textContent = "🎵";

        musicPlaying = false;

    }

});

// ----------------------------
// Sparkles
// ----------------------------

const sparkleContainer = document.getElementById("sparkles");

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =
        Math.random() * window.innerWidth + "px";

    sparkle.style.top =
        Math.random() * window.innerHeight + "px";

    sparkle.style.animationDuration =
        (2 + Math.random() * 3) + "s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 5000);

}

setInterval(createSparkle, 300);

// ----------------------------
// Petals
// ----------------------------

const petalContainer = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    petal.style.opacity =
        0.4 + Math.random() * 0.6;

    petalContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);

}

setInterval(createPetal, 450);

// ----------------------------
// Read Letter
// ----------------------------

openButton.addEventListener("click", () => {

    if (openButton.textContent === projectData.buttons.readLetter) {

        gsap.to(home, {

            opacity: 0,

            duration: 1,

            onComplete: () => {

                home.style.display = "none";

                welcomeScreen.style.display = "flex";

                gsap.to(welcomeScreen, {

                    opacity: 1,

                    duration: 1

                });

            }

        });

    }

});

// ----------------------------
// Begin Journey
// ----------------------------

beginJourney.addEventListener("click", () => {

    alert("🎉 Memory Gallery will be added in Version 2.1 ❤️");

});

// ----------------------------
// Background Animation
// ----------------------------

gsap.to("#background", {

    backgroundPosition: "200% 200%",

    duration: 30,

    repeat: -1,

    yoyo: true,

    ease: "none"

});

// =====================================
// End of script.js V2.0
// =====================================
