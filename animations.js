// =====================================
// Project Baccha ❤️
// animations.js V1.1
// =====================================

const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const seal = document.getElementById("seal");
const openButton = document.getElementById("openLetter");

let opened = false;

// Initial Position
gsap.set(letter, {
    y: 35
});

gsap.set(flap, {
    rotationX: 0,
    transformOrigin: "top center"
});

// Open Envelope
function openEnvelope(){

    if(opened) return;

    opened = true;

    const tl = gsap.timeline();

    // Pop Seal

    tl.to(seal,{
        scale:0,
        duration:0.35,
        ease:"back.in(2)"
    });

    // Open Flap

    tl.to(flap,{
        rotationX:-180,
        duration:0.8,
        ease:"power2.inOut"
    },"-=0.1");

    // Pull Letter Out

    tl.to(letter,{
        y:-95,
        duration:1.2,
        ease:"power3.out"
    });

    // Change Button

    tl.to(openButton,{
        opacity:0,
        duration:0.25,
        onComplete:()=>{

            openButton.innerHTML="Read My Letter ❤️";

            gsap.to(openButton,{
                opacity:1,
                duration:0.3
            });

        }
    });

}

openButton.addEventListener("click",openEnvelope);
envelope.addEventListener("click",openEnvelope);
