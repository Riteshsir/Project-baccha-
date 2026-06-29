// =====================================
// Project Baccha ❤️
// animations.js V1.2.1
// =====================================

const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const seal = document.getElementById("seal");
const openButton = document.getElementById("openLetter");

let opened = false;

// ----------------------------
// Initial State
// ----------------------------

gsap.set(letter, {
    y: 10,
    scale: 1
});

gsap.set(flap, {
    rotationX: 0,
    transformOrigin: "top center"
});

gsap.set(seal, {
    scale: 1
});

// ----------------------------
// Open Envelope
// ----------------------------

function openEnvelope() {

    if (opened) return;

    opened = true;

    const tl = gsap.timeline();

    // Envelope Bounce

    tl.to(envelope, {
        y: -8,
        duration: 0.25,
        ease: "power1.out"
    });

    tl.to(envelope, {
        y: 0,
        duration: 0.25,
        ease: "power1.in"
    });

    // Wax Seal Pops

    tl.to(seal, {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.45,
        ease: "back.in(2)"
    });

    // Open Flap

    tl.to(flap, {
        rotationX: -180,
        duration: 0.9,
        ease: "power2.inOut"
    }, "-=0.15");

    // Pull Letter Out

    tl.to(letter, {
        y: -145,
        duration: 1.4,
        ease: "power3.out"
    });

    // Small Floating Effect

    tl.to(letter, {
        y: -155,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Change Button

    gsap.to(openButton, {
        opacity: 0,
        duration: 0.25,
        delay: 2.2,
        onComplete: () => {

            openButton.innerHTML = "Read My Letter ❤️";

            gsap.to(openButton, {
                opacity: 1,
                duration: 0.4
            });

        }
    });

}

// ----------------------------
// Events
// ----------------------------

openButton.addEventListener("click", openEnvelope);

envelope.addEventListener("click", openEnvelope);
