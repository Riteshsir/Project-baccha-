// =====================================
// Project Baccha ❤️
// animations.js V2.0.1
// =====================================

// ----------------------------
// Elements
// ----------------------------

const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const seal = document.getElementById("seal");
 
// IMPORTANT:
// We use a different variable name than script.js
const envelopeButton = document.getElementById("openLetter");

let envelopeOpened = false;

// ----------------------------
// Initial State
// ----------------------------

gsap.set(letter, {
    y: 20
});

gsap.set(flap, {
    rotationX: 0,
    transformOrigin: "top center"
});

gsap.set(seal, {
    scale: 1,
    opacity: 1
});

// ----------------------------
// Open Envelope
// ----------------------------

function openEnvelope() {

    if (envelopeOpened) return;

    envelopeOpened = true;

    const tl = gsap.timeline();

    // Envelope Bounce

    tl.to(envelope, {
        y: -8,
        duration: 0.25,
        ease: "power2.out"
    });

    tl.to(envelope, {
        y: 0,
        duration: 0.25,
        ease: "power2.in"
    });

    // Remove Wax Seal

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
        duration: 0.8,
        ease: "power2.inOut"
    }, "-=0.15");

    // Pull Letter Out

    tl.to(letter, {
        y: -170,
        duration: 1.2,
        ease: "power3.out"
    });

    // Floating Letter

    tl.to(letter, {
        y: -155,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Change Button Text

    gsap.to(envelopeButton, {

        opacity: 0,

        duration: 0.25,

        delay: 2,

        onComplete: () => {

            if (
                typeof projectData !== "undefined" &&
                projectData.buttons &&
                projectData.buttons.readLetter
            ) {
                envelopeButton.textContent =
                    projectData.buttons.readLetter;
            } else {
                envelopeButton.textContent =
                    "Read My Letter ❤️";
            }

            gsap.to(envelopeButton, {

                opacity: 1,

                duration: 0.4

            });

        }

    });

}

// ----------------------------
// Events
// ----------------------------

envelopeButton.addEventListener("click", openEnvelope);

envelope.addEventListener("click", openEnvelope);

// =====================================
// End of animations.js V2.0.1
// =====================================
