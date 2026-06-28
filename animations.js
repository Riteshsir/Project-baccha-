/* ==========================================
   Project Baccha ❤️
   File : animations.js
   Version : 1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    createSparkles();
    createPetals();
    animateEnvelope();

});

/* =========================
   Floating Sparkles
========================= */

function createSparkles() {

    const container = document.getElementById("sparkles");

    for (let i = 0; i < 35; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left = Math.random() * 100 + "%";

        sparkle.style.top = Math.random() * 100 + "%";

        sparkle.style.animationDelay = Math.random() * 6 + "s";

        sparkle.style.animationDuration = (4 + Math.random() * 4) + "s";

        container.appendChild(sparkle);

    }

}

/* =========================
   Falling Petals
========================= */

function createPetals() {

    const container = document.getElementById("petals");

    setInterval(() => {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.style.left = Math.random() * window.innerWidth + "px";

        petal.style.animationDuration = (6 + Math.random() * 5) + "s";

        petal.style.opacity = Math.random();

        petal.style.transform =
            "rotate(" + Math.random() * 360 + "deg)";

        container.appendChild(petal);

        setTimeout(() => {

            petal.remove();

        },11000);

    },350);

}

/* =========================
   Envelope Floating
========================= */

function animateEnvelope(){

    gsap.to(".envelope",{

        y:-15,

        duration:2,

        repeat:-1,

        yoyo:true,

        ease:"power1.inOut"

    });

}
