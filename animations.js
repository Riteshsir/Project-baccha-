// =====================================
// Project Baccha ❤️
// animations.js V2.0
// =====================================

// ----------------------------
// Elements
// ----------------------------

const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const seal = document.getElementById("seal");
const openButton = document.getElementById("openLetter");

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

    // Small bounce

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

    // Wax seal

    tl.to(seal, {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.45,
        ease: "back.in(2)"
    });

    // Open flap

    tl.to(flap, {
        rotationX: -180,
        duration: 0.8,
        ease: "power2.inOut"
    }, "-=0.15");

    // Pull letter out

    tl.to(letter, {
        y: -170,
        duration: 1.2,
        ease: "power3.out"
    });

    // Floating letter

    tl.to(letter, {
        y: -155,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Change button text

    gsap.to(openButton, {

        opacity: 0,

        duration: 0.25,

        delay: 2,

        onComplete: () => {

            openButton.innerHTML = projectData.buttons.readLetter;

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

// =====================================
// End of animations.js V2.0
// =====================================
