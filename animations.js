// =====================================
// Project Baccha ❤️
// animations.js V3.0
// =====================================

// ==========================
// Elements
// ==========================

const envelope =
document.getElementById("envelope");

const flap =
document.getElementById("flap");

const letter =
document.getElementById("letter");

const seal =
document.getElementById("seal");

// Don't declare openButton here.
// It is already declared in script.js.

// ==========================
// State
// ==========================

let envelopeOpened = false;

// ==========================
// Initial Animation
// ==========================

gsap.set(

    letter,

    {

        y:20,

        scale:1,

        rotation:0

    }

);

gsap.set(

    flap,

    {

        rotationX:0,

        transformOrigin:"top center"

    }

);

gsap.set(

    seal,

    {

        scale:1,

        opacity:1

    }

);

// Floating Envelope

gsap.to(

    envelope,

    {

        y:-10,

        duration:2.2,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    }

);

// ==========================
// Open Envelope
// ==========================

function openEnvelope(){

    if(envelopeOpened) return;

    envelopeOpened = true;

    const tl = gsap.timeline();

    // Small Bounce

    tl.to(

        envelope,

        {

            scale:1.03,

            duration:.20,

            ease:"power2.out"

        }

    );

    tl.to(

        envelope,

        {

            scale:1,

            duration:.20

        }

    );

    // Break Wax Seal

    tl.to(

        seal,

        {

            scale:0,

            rotation:180,

            opacity:0,

            duration:.45,

            ease:"back.in(2)"

        }

    );

    // Open Flap

    tl.to(

        flap,

        {

            rotationX:-180,

            duration:.9,

            ease:"power2.inOut"

        },

        "-=.15"

    );

    // Pull Letter Out

    tl.to(

        letter,

        {

            y:-210,

            duration:1.3,

            ease:"power3.out"

        }

    );

    // Floating Letter

    tl.to(

        letter,

        {

            y:-195,

            duration:1.6,

            repeat:-1,

            yoyo:true,

            ease:"sine.inOut"

        }

    );

    // Change Button

    gsap.to(

        openButton,

        {

            opacity:0,

            delay:2.1,

            duration:.3,

            onComplete:()=>{

                openButton.textContent=

                projectData.buttons.readLetter;

                gsap.to(

                    openButton,

                    {

                        opacity:1,

                        duration:.4

                    }

                );

            }

        }

    );

}


// ==========================
// Events
// ==========================

// First click opens the envelope.

openButton.addEventListener(

    "click",

    ()=>{

        if(!envelopeOpened){

            openEnvelope();

            return;

        }

        // Second click shows Welcome Screen

        if(

            openButton.textContent===

            projectData.buttons.readLetter

        ){

            showWelcomeScreen();

        }

    }

);

// Clicking the envelope also opens it

envelope.addEventListener(

    "click",

    ()=>{

        if(!envelopeOpened){

            openEnvelope();

        }

    }

);

// ==========================
// Extra Animation
// ==========================

// Gentle floating letter after opening

gsap.to(

    letter,

    {

        rotation:1.5,

        duration:2,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    }

);

// ==========================
// Window Resize Fix
// ==========================

window.addEventListener(

    "resize",

    ()=>{

        gsap.set(

            envelope,

            {

                clearProps:"transform"

            }

        );

    }

);

// =====================================
// End of animations.js V3.0
// =====================================
