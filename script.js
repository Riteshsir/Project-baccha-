// =====================================
// Project Baccha ❤️
// script.js V3.0
// =====================================

// ==========================
// Elements
// ==========================

const loadingScreen =
document.getElementById("loadingScreen");

const home =
document.getElementById("home");

const welcomeScreen =
document.getElementById("welcomeScreen");

const progress =
document.querySelector(".progress");

const loadingText =
document.getElementById("loadingText");

const music =
document.getElementById("bgMusic");

const musicToggle =
document.getElementById("musicToggle");

const beginJourney =
document.getElementById("beginJourney");

// ==========================
// Apply Data
// ==========================

document.title =
projectData.website.title;

loadingText.textContent =
projectData.loading.messages[0];

beginJourney.textContent =
projectData.buttons.beginJourney;

// ==========================
// Loading Screen
// ==========================

let loadingPercent = 0;

let messageIndex = 0;

const loadingAnimation = setInterval(() => {

    loadingPercent++;

    progress.style.width =
    loadingPercent + "%";

    if(

        loadingPercent % 20 === 0 &&

        messageIndex <
        projectData.loading.messages.length - 1

    ){

        messageIndex++;

        loadingText.textContent =
        projectData.loading.messages[messageIndex];

    }

    if(loadingPercent >= 100){

        clearInterval(loadingAnimation);

        gsap.to(

            loadingScreen,

            {

                opacity:0,

                duration:1,

                onComplete:()=>{

                    loadingScreen.style.display="none";

                    home.style.display="flex";

                    gsap.to(

                        home,

                        {

                            opacity:1,

                            duration:1

                        }

                    );

                }

            }

        );

    }

},35);

// ==========================
// Background Music
// ==========================

music.volume =
projectData.music.volume;

music.loop =
projectData.music.loop;

// ==========================
// Auto Play Music
// ==========================

function startMusic(){

    if(!projectData.music.autoplay) return;

    music.play()

    .then(()=>{

        musicToggle.textContent="🔊";

    })

    .catch(()=>{

        musicToggle.textContent="🎵";

    });

}

// Mobile browsers require a user interaction

document.addEventListener(

    "click",

    startMusic,

    {

        once:true

    }

);

// ==========================
// Music Button
// ==========================

let musicPlaying=false;

musicToggle.addEventListener(

    "click",

    ()=>{

        if(music.paused){

            music.play();

            musicToggle.textContent="🔊";

            musicPlaying=true;

        }

        else{

            music.pause();

            musicToggle.textContent="🎵";

            musicPlaying=false;

        }

    }

);

// ==========================
// Sparkles
// ==========================

const sparkleContainer=

document.getElementById("sparkles");

function createSparkle(){

    const sparkle=

    document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=

    Math.random()*window.innerWidth+"px";

    sparkle.style.top=

    Math.random()*window.innerHeight+"px";

    sparkle.style.animationDuration=

    (2+Math.random()*3)+"s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },5000);

}

setInterval(

    createSparkle,

    300

);

// ==========================
// Falling Petals
// ==========================

const petalContainer=

document.getElementById("petals");

function createPetal(){

    const petal=

    document.createElement("div");

    petal.className="petal";

    petal.style.left=

    Math.random()*window.innerWidth+"px";

    petal.style.animationDuration=

    (5+Math.random()*4)+"s";

    petal.style.opacity=

    .4+Math.random()*.6;

    petalContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(

    createPetal,

    450

);

// ==========================
// Background Animation
// ==========================

gsap.to(

    "#background",

    {

        backgroundPosition:

        "200% 200%",

        duration:30,

        repeat:-1,

        yoyo:true,

        ease:"none"

    }

);
// ==========================
// Welcome Screen
// ==========================

function showWelcomeScreen(){

    gsap.to(

        home,

        {

            opacity:0,

            duration:1,

            onComplete:()=>{

                home.style.display="none";

                welcomeScreen.style.display="flex";

                gsap.to(

                    welcomeScreen,

                    {

                        opacity:1,

                        duration:1

                    }

                );

            }

        }

    );

}

// ==========================
// Begin Journey
// ==========================

beginJourney.addEventListener(

    "click",

    ()=>{

        gsap.to(

            welcomeScreen,

            {

                opacity:0,

                duration:1,

                onComplete:()=>{

                    welcomeScreen.style.display="none";

                    alert(

                        "🎉 Memory Gallery (Version 3.1) Coming Next ❤️"

                    );

                }

            }

        );

    }

);

// ==========================
// Future Pages
// ==========================

function showPage(pageId){

    document

    .querySelectorAll(".page")

    .forEach(page=>{

        page.style.display="none";

    });

    const page=

    document.getElementById(pageId);

    if(page){

        page.style.display="block";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

}

// ==========================
// Helpers
// ==========================

function fadeIn(element){

    gsap.fromTo(

        element,

        {

            opacity:0,

            y:40

        },

        {

            opacity:1,

            y:0,

            duration:1

        }

    );

}

function fadeOut(element,callback){

    gsap.to(

        element,

        {

            opacity:0,

            duration:0.8,

            onComplete:callback

        }

    );

}

// ==========================
// End
// ==========================

console.log(

    projectData.website.title +

    " Version " +

    projectData.website.version +

    " Loaded Successfully ❤️"

);

// =====================================
// End of script.js V3.0
// =====================================
