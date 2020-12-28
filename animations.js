var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('nav-links');
var links = document.getElementById('nav-links').getElementsByTagName("li");

gsap.registerPlugin(ScrollTrigger);

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
});

// landing page animations
var landing = gsap.timeline({scrollTrigger: {
    trigger: ".landing",
    toggleActions: "play pause restart reset" 
    }
});

landing.from(".landing .intro img", {
    x: -400,
    opacity: 0,
    duration: 1
})
.from(".landing .intro .name", {
    x: 400,
    opacity: 0,
    duration: 1
})
.from(".landing .intro .greeting", {
    scale: 0,
    repeat: 2,
    opacity: 0,
    yoyo: true,
    ease: "power2"
})
.from(".landing .landing-pictures .pic1", {
    y: -500,
    opacity: 0,
    duration: 1,
    ease: "back"
}, "-=1")
.from(".landing .landing-pictures .pic2", {
    y: 500,
    opacity: 0,
    duration: 1,
    ease: "back"
}, "-=0.5")
.from(".landing .landing-pictures .pic3", {
    y: -500,
    opacity: 0,
    duration: 1,
    ease: "back"
}, "-=0.5");


// announcments page animations
var announcements = gsap.timeline({scrollTrigger: {
    trigger: ".gray-container",
    toggleActions: "play pause restart reset" 
    }
});

announcements.from(".gray-container .container p", {
    scale: 0,
    duration: 1,
    ease: "back"
});


// donation page animations
var donations = gsap.timeline({scrollTrigger: {
    trigger: ".blue-container",
    toggleActions: "play pause restart reset" 
    }
});

donations.from(".blue-container .container h1", {
    x: -400,
    opacity: 0,
    duration: 1.2,
    ease: "ease-in"
})
.from(".blue-container .container a", {
    x: 400,
    opacity: 0,
    duration: 1.2,
    ease: "ease-in"
}, "-=1");



// contact page animations
var contact = gsap.timeline({scrollTrigger: {
    trigger: ".contact",
    toggleActions: "play pause restart reset" 
    }
});

contact.from(".contact .container .sub li:nth-child(1)", {
    scale: 0,
    duration: 1,
    ease: "back"
})
.from(".contact .container .sub li:nth-child(2)", {
    scale: 0,
    duration: 1,
    ease: "back"
})
.from(".contact .container .email", {
    scale: 0,
    duration: 1,
    ease: "back"
})
