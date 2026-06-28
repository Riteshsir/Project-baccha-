/* ==========================================
   Project Baccha ❤️
   File : script.js
   Version : 1.0
========================================== */

const progress = document.querySelector(".progress");
const loadingText = document.getElementById("loadingText");
const loadingScreen = document.getElementById("loadingScreen");
const home = document.getElementById("home");

const messages = [
    "💌 Collecting our memories...",
    "📸 Looking for our photos...",
    "🍜 Remembering our first Maggi...",
    "🛕 Visiting Akshardham...",
    "❤️ Almost Ready..."
];

let percent = 0;
let msg = 0;

const loader = setInterval(() => {

    percent++;

    progress.style.width = percent + "%";

    loadingText.innerHTML = messages[msg] + "<br><br>" + percent + "%";

    if (percent % 20 === 0 && msg < messages.length - 1) {
        msg++;
    }

    if (percent >= 100) {

        clearInterval(loader);

        gsap.to("#loadingScreen", {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                loadingScreen.style.display = "none";
                home.style.display = "flex";

                gsap.to("#home", {
                    opacity: 1,
                    duration: 1
                });
            }
        });

    }

}, 40);
